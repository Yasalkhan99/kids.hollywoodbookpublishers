# Email Configuration Setup

This project uses Nodemailer to send emails from the contact form. Follow these steps to configure it:

## 1. Create Environment Variables File

Create a `.env.local` file in the root directory of your project with the following variables:

```env
# SMTP Configuration for Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=Kids Hollywood Books Publisher <your-email@gmail.com>

# Optional: Recipient email (where contact form submissions are sent)
# If not set, defaults to SMTP_USER, or leads@hollywoodbookspublisher.com if SMTP_USER is also not set
TO_EMAIL=recipient@example.com
```

**Note:** 
- Port 465 uses SSL (secure: true)
- `SMTP_FROM` is the display name and email that appears as the sender
- `TO_EMAIL` is where contact form submissions will be sent (optional)
- If `TO_EMAIL` is not set, it will use `SMTP_USER`
- If neither is set, it defaults to `leads@hollywoodbookspublisher.com`

## 2. Gmail Setup (If using Gmail)

If you're using Gmail, you need to:

1. Enable 2-Step Verification on your Google Account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Nodemailer" as the name
   - Copy the generated 16-character password
   - Use this password as `SMTP_PASS` (not your regular Gmail password)

## 3. Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM=Your Name <your-email@outlook.com>
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=465
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=Your Name <your-email@yahoo.com>
```

### Custom SMTP Server
Use your email provider's SMTP settings. Common ports:
- 465 (SSL - secure: true)
- 587 (TLS/STARTTLS - secure: false)
- 25 (Not recommended, often blocked)

## 4. Environment Variables Explained

- `SMTP_HOST`: Your email provider's SMTP server (e.g., smtp.gmail.com)
- `SMTP_PORT`: Port number (465 for SSL, 587 for TLS)
- `SMTP_USER`: Your email address (used for authentication)
- `SMTP_PASSWORD`: Your email password or app password
- `SMTP_FROM`: Display name and email for sent emails (format: "Name <email@example.com>")
- `TO_EMAIL`: (Optional) Email address where contact form submissions are sent. If not set, defaults to `SMTP_USER`, or `leads@hollywoodbookspublisher.com` if `SMTP_USER` is also not configured

## 5. Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- Use App Passwords instead of your main email password
- Keep your credentials secure

## 6. Testing

After setting up, test the contact form by submitting a message. Check your `TO_EMAIL` inbox for the submission.

## Troubleshooting

- **"Invalid login"**: Check your SMTP credentials and ensure you're using an App Password for Gmail
- **"Connection timeout"**: Verify SMTP_HOST and SMTP_PORT are correct
- **"Authentication failed"**: Make sure 2-Step Verification is enabled and you're using an App Password
- **"Port 465 requires secure connection"**: The code automatically sets `secure: true` for port 465
- **"SMTP_FROM format"**: Use format: `"Display Name <email@example.com>"` or just `email@example.com`

