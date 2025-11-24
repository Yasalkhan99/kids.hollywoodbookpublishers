"use client";

import Image from "next/image";
import Button from "../button";
import { useState, useEffect, useRef } from "react";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = ({ title, icon, enableAnimation = false }) => {
  //   const [country, setCountry] = useState("US");
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  //   const countryCode = country ? "+" + getCountryCallingCode(country) : "";

  //   console.log("🚀 ~ ContactForm ~ countryCode:", countryCode);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = {
      name: nameRef.current?.value || '',
      email: emailRef.current?.value || '',
      phone: value || '',
      message: messageRef.current?.value || '',
    };

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
        setValue('');
        
        // Redirect to thank you page after 1 second
        setTimeout(() => {
          window.location.href = 'https://publishing.hollywoodbookspublisher.com/thank-you';
        }, 1000);
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Only add animation logic if enableAnimation is true
  useEffect(() => {
    if (!enableAnimation) return;

    const triggerAnimation = () => {
      if (formRef.current && !hasAnimated) {
        const rect = formRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        
        if (isInView) {
          setIsVisible(true);
          setHasAnimated(true);
          
          // Stop animation after it completes
          setTimeout(() => {
            setIsVisible(false);
          }, 600);
        }
      }
    };

    // Check if hash matches and form is in view
    const checkHashAndAnimate = () => {
      if (window.location.hash === "#contact-form") {
        // Wait for scroll to complete
        setTimeout(triggerAnimation, 400);
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", checkHashAndAnimate);
    
    // Check on mount if hash is already set
    if (window.location.hash === "#contact-form") {
      checkHashAndAnimate();
    }

    return () => {
      window.removeEventListener("hashchange", checkHashAndAnimate);
    };
  }, [enableAnimation, hasAnimated]);

  return (
    <div className="relative w-full max-w-lg">
      {/* Rocket image - positioned outside white container */}
      {icon && (
        <div className="absolute z-20 -bottom-[10%] -left-[18%] w-[160px] max-sm:w-[100px] max-sm:-left-[10%] max-sm:-bottom-[2%]">
          <Image
            src="/images/new.png"
            alt="Form Background"
            width={1000}
            height={1000}
          />
        </div>
      )}
      {/* White form container */}
      <div
        ref={formRef}
        className={`relative bg-white rounded-3xl p-6 shadow-2xl border-2 border-[#38216E] overflow-visible ${
          enableAnimation && isVisible ? "animate-[popup_0.6s_ease-out]" : ""
        }`}
      >
        {/* Form content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="font-childhood text-5xl text-gray-900 mb-2 max-2xl:text-[38px] max-sm:text-[28px]">
            {title}
            {/* CLAIM <span className='font-medium text-[48px]'>{subtitle}</span> OFF TODAY! */}
          </div>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm mb-6">
            Sign Up Right Now For Availing Limited-Time Discount.
          </p>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              ✗ Failed to send message. Please try again or contact us directly.
            </div>
          )}

          {/* Form fields */}
          <form onSubmit={onFormSubmit} className="space-y-4">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="ml-2 text-[#38216E] font-semibold relative z-10 inline-block text-sm font-medium text-gray-700 bg-white p-1"
              >
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                placeholder="Type here"
                required
                className="-mt-[16px] bg-[#F3F6FF] text-[#38216E] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="ml-2 text-[#38216E] font-semibold relative z-10 inline-block text-sm font-medium text-gray-700 bg-white p-1"
              >
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                placeholder="Type here"
                required
                className="-mt-[16px] bg-[#F3F6FF] text-[#38216E] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Phone field with flag */}
            <div className="w-full">
              <label className="ml-2 text-[#38216E] font-semibold relative z-10 inline-block text-sm font-medium text-gray-700 bg-white p-1">
                Phone
              </label>

              <div className="bg-[#F5F7FF] rounded-xl px-4 py-3 -mt-[14px]">
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={value}
                  onChange={setValue}
                  className="w-full text-sm text-[#38216E]"
                  //   onCountryChange={setCountry}
                />
              </div>
            </div>

            {/* Message field */}
            <div>
              <label
                htmlFor="message"
                className="ml-2 text-[#38216E] font-semibold relative z-10 inline-block text-sm font-medium text-gray-700 bg-white p-1"
              >
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                rows="3"
                placeholder="Type here"
                required
                className="-mt-[16px] bg-[#F3F6FF] text-[#38216E] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <Button
                text={isSubmitting ? "Sending..." : "Talk To An Expert"}
                className="w-full hover:bg-primary/90 font-bold py-2 text-lg shadow-lg justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
