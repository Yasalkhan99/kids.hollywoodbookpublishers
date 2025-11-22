"use client";
import Image from "next/image";
import React, { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // All bars show the same question
  const questionText = "What Is The Timeline For Publishing My Children's Book?";
  
  const accordionItems = [
    {
      answer: "The timeline for publishing your children's book typically ranges from 8-12 weeks, depending on the complexity of your project. This includes manuscript editing, illustration design, formatting, and final publishing setup. We'll provide you with a detailed timeline once we review your specific requirements.",
      rotation: "rotate-[2deg]",
      position: "top-left"
    },
    {
      answer: "Our comprehensive publishing package includes manuscript editing and proofreading, custom illustrations, book cover design, interior formatting for both print and digital formats, ISBN registration, and multi-platform publishing (Amazon, Kindle, and major bookstores). We also provide marketing support and distribution assistance.",
      rotation: "rotate-[-2deg]",
      position: "top-right"
    },
    {
      answer: "Absolutely! You maintain 100% ownership and full rights to your children's book. We work for you, not the other way around. You retain all creative control and copyright, and you can publish, distribute, or modify your book as you see fit.",
      rotation: "rotate-[1.5deg]",
      position: "bottom-left"
    },
    {
      answer: "Pricing varies based on your specific needs, including the number of pages, illustration complexity, and additional services. We offer transparent, upfront pricing with no hidden fees. Contact us for a free consultation and personalized quote tailored to your project.",
      rotation: "rotate-[-1.5deg]",
      position: "bottom-right"
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-[120px]">
        <Image src="/images/learneverythingbook.png" alt="Hero Section Background" width={1000} height={1000} />
      </div>
      <div className="absolute bottom-0 right-0 w-[150px]">
        <Image src="/images/learnbottombook.png" alt="Hero Section Background" width={1000} height={1000} />
      </div>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <div className="font-childhood text-black text-[60px] text-center leading-[1] mb-4">
              Learn Everything About Our Children's Book Publishing Services
              Here
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
              Still Curious? Get Answers Here, Or Contact Us For More Information.
            </p>
          </div>
        </div>

        {/* Accordion Items Container */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {accordionItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative ${item.position.includes('top') ? '' : 'md:mt-16 lg:mt-20'} ${item.position.includes('left') ? '' : ''}`}
              >
                <div className={`${item.rotation} transform transition-transform duration-300 hover:scale-[1.02] origin-center`}>
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full bg-[#38216e] text-white px-6 py-5 rounded-xl flex items-center justify-between hover:bg-[#38216e]/90 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 bg-[#f7931e] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-left font-inter text-[15px] md:text-[16px] font-medium break-words">
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
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
