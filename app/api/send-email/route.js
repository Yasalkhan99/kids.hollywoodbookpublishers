import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP configuration missing:', {
        hasHost: !!process.env.SMTP_HOST,
        hasUser: !!process.env.SMTP_USER,
        hasPassword: !!process.env.SMTP_PASSWORD,
      });
      return NextResponse.json(
        { error: 'Email server configuration is missing. Please check your environment variables.' },
        { status: 500 }
      );
    }

    // Determine recipient email - always default to leads@hollywoodbookspublisher.com if not configured
    // Check if TO_EMAIL exists and is not empty, otherwise use default
    const recipientEmail = (process.env.TO_EMAIL && process.env.TO_EMAIL.trim() !== '') 
      ? process.env.TO_EMAIL.trim() 
      : 'leads@hollywoodbookspublisher.com';
    
    console.log('Email Configuration:', {
      recipient: recipientEmail,
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      smtpHost: process.env.SMTP_HOST,
      smtpPort: process.env.SMTP_PORT || '465',
    });

    // Create transporter using environment variables
    const port = parseInt(process.env.SMTP_PORT || '465');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: port === 465, // true for 465 (SSL), false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Add connection timeout
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP server connection verified');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'Failed to connect to email server. Please check your SMTP configuration.',
          details: verifyError.message 
        },
        { status: 500 }
      );
    }

    // Email content
    // For Gmail, the "from" field should match the authenticated user
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
    
    const mailOptions = {
      from: fromEmail,
      to: recipientEmail, // Always sends to leads@hollywoodbookspublisher.com (or TO_EMAIL if set)
      replyTo: email, // User's email for reply
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #38216e;">New Contact Form Submission</h2>
          <div style="background-color: #f3f6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Kids Hollywood Books Publisher contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send email
    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId,
        recipient: recipientEmail
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message,
        code: error.code || 'UNKNOWN_ERROR'
      },
      { status: 500 }
    );
  }
}

