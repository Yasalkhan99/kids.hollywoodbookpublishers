"use client";
import Image from "next/image";
import React, { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      question: "What Is The Timeline For Publishing My Children's Book?",
      answer:
        "The timeline for publishing your children's book typically ranges from 8-12 weeks, depending on the complexity of your project. This includes manuscript editing, illustration design, formatting, and final publishing setup. We'll provide you with a detailed timeline once we review your specific requirements.",
      rotation: "rotate-[2deg]",
      position: "top-left",
    },
    {
      question: "What's Included In Your Publishing Package?",
      answer:
        "Our comprehensive publishing package includes manuscript editing and proofreading, custom illustrations, book cover design, interior formatting for both print and digital formats, ISBN registration, and multi-platform publishing (Amazon, Kindle, and major bookstores). We also provide marketing support and distribution assistance.",
      rotation: "rotate-[-2deg]",
      position: "top-right",
    },
    {
      question: "Do I Retain Full Ownership Of My Book?",
      answer:
        "Absolutely! You maintain 100% ownership and full rights to your children's book. We work for you, not the other way around. You retain all creative control and copyright, and you can publish, distribute, or modify your book as you see fit.",
      rotation: "rotate-[1.5deg]",
      position: "bottom-left",
    },
    {
      question: "What Are Your Pricing Options?",
      answer:
        "Pricing varies based on your specific needs, including the number of pages, illustration complexity, and additional services. We offer transparent, upfront pricing with no hidden fees. Contact us for a free consultation and personalized quote tailored to your project.",
      rotation: "rotate-[-1.5deg]",
      position: "bottom-right",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white relative py-20 overflow-hidden max-sm:pt-6">
      <div className="absolute top-0 left-0 w-[120px] max-sm:w-[40px] max-sm:top-[15%]">
        <Image
          src="/images/learneverythingbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 max-sm:bottom-[10%] right-0 w-[150px] max-sm:w-[60px]">
        <Image
          src="/images/learnbottombook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container z-10 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-8 max-sm:col-span-12 col-start-3">
            <div className="font-childhood text-black text-[60px] text-center leading-[1] mb-4 max-lg:text-[50px] max-sm:text-[28px]">
              Learn Everything About Our Children&apos;s Book Publishing
              Services Here
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section with Diagonal Bars */}
      <div className="relative py-6 max-sm:pt-0">
        {/* Subtitle Text Above Accordion */}
        <div className="container relative z-10 mb-12">
          <div className="text-center">
            <p className="text-black text-[16px] md:text-[18px] font-inter max-sm:text-[12px]">
              Still Curious? Get Answers Here, Or Contact Us For More
              Information.
            </p>
          </div>
        </div>

        {/* Accordion Items Container */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-1 lg:gap-1 max-w-6xl mx-auto">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className={`relative accordians-questions ${
                  item.position.includes("top") ? "" : "md:mt-16 lg:mt-20"
                } ${item.position.includes("left") ? "" : ""}`}
              >
                <div
                  className={`transform transition-transform duration-300 hover:scale-[1.02] origin-center`}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full bg-[#38216e] text-white p-2 rounded-xl flex items-center justify-between hover:bg-[#38216e]/90 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0 max-sm:gap-1">
                      <div>
                        <Image
                          src="/images/accordianbullet.png"
                          width={26}
                          height={16}
                          alt="star"
                        />
                      </div>
                      <span className="text-left font-inter text-[14px] max-sm:text-[10px] font-medium break-words">
                        {item.question}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-[#f7931e] transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`answer-wrapper overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gray-50 px-6 py-4 rounded-b-xl border-t border-gray-200">
                      <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed max-sm:text-[10px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
