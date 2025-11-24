"use client";

import Image from "next/image";
import Button from "../button";
import { useState } from "react";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = ({ title, icon }) => {
  //   const [country, setCountry] = useState("US");
  const [value, setValue] = useState("");

  //   const countryCode = country ? "+" + getCountryCallingCode(country) : "";

  //   console.log("🚀 ~ ContactForm ~ countryCode:", countryCode);
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

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
      <div className="relative bg-white rounded-3xl p-6 shadow-2xl border-2 border-[#38216E] overflow-visible">
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

          {/* Form fields */}
          <form className="space-y-4">
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="ml-2 text-[#38216E] font-semibold relative z-10 inline-block text-sm font-medium text-gray-700 bg-white p-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type here"
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
                type="email"
                id="email"
                name="email"
                placeholder="Type here"
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
                id="message"
                name="message"
                rows="1"
                placeholder="Type here"
                className="-mt-[16px] bg-[#F3F6FF] text-[#38216E] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <Button
                onClick={onFormSubmit}
                text="Talk To An Expert"
                className="w-full hover:bg-primary/90 font-bold py-2 text-lg shadow-lg justify-center"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
