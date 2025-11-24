"use client";
import Image from "next/image";
import React, { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // All bars show the same question
  const questionText =
    "What Is The Timeline For Publishing My Children's Book?";

  const accordionItems = [
    {
      answer:
        "The timeline for publishing your children's book typically ranges from 8-12 weeks, depending on the complexity of your project. This includes manuscript editing, illustration design, formatting, and final publishing setup. We'll provide you with a detailed timeline once we review your specific requirements.",
      rotation: "rotate-[2deg]",
      position: "top-left",
    },
    {
      answer:
        "Our comprehensive publishing package includes manuscript editing and proofreading, custom illustrations, book cover design, interior formatting for both print and digital formats, ISBN registration, and multi-platform publishing (Amazon, Kindle, and major bookstores). We also provide marketing support and distribution assistance.",
      rotation: "rotate-[-2deg]",
      position: "top-right",
    },
    {
      answer:
        "Absolutely! You maintain 100% ownership and full rights to your children's book. We work for you, not the other way around. You retain all creative control and copyright, and you can publish, distribute, or modify your book as you see fit.",
      rotation: "rotate-[1.5deg]",
      position: "bottom-left",
    },
    {
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
    <div className="bg-white relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-[120px]">
        <Image
          src="/images/learneverythingbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[150px]">
        <Image
          src="/images/learnbottombook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <div className="font-childhood text-black text-[60px] text-center leading-[1] mb-4">
              Learn Everything About Our Children&apos;s Book Publishing
              Services Here
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section with Diagonal Bars */}
      <div className="relative py-6">
        {/* Subtitle Text Above Accordion */}
        <div className="container relative z-10 mb-12">
          <div className="text-center">
            <p className="text-black text-[16px] md:text-[18px] font-inter">
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
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div>
                        <Image
                          src="/images/accordianbullet.png"
                          width={26}
                          height={16}
                          alt="star"
                        />
                      </div>
                      <span className="text-left font-inter text-[14px] md:text-[16px] font-medium break-words">
                        {questionText}
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
                      <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
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
