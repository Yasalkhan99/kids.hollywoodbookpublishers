'use client';
import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/button";
import Modal from "../common/modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const PublishingSolution = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const successStories = [
    {
      name: "Ghostwriting Services",
      desc: "Have a story in mind but need help writing it? Our ghostwriters turn your ideas into a polished children’s book—while you remain the author. Get your story written in your voice, just the way you imagined.",
    },
    {
      name: "Book Publishing",
      desc: "With our publishing service, we handle everything—writing, editing, formatting, and publishing. Your book will be ready for the world on any platform you choose.",
    },
    {
      name: "Book Cover Design",
      desc: "Your cover is the first thing readers notice. Our designers create eye-catching, professional covers that match your story and genre—helping your book stand out instantly.",
    },
    {
      name: "Audio Books",
      desc: "Bring your book to life with our audiobook services. We provide high-quality narration and production to turn your story into an engaging audio experience for listeners everywhere.",
    },
    {
      name: "Book Formatting",
      desc: "Professional formatting makes your book easier to read. We format both eBooks and print books to perfection—ready for every platform and device.",
    },
    {
      name: "Book Marketing",
      desc: "Reaching readers is essential. Our marketing services promote your book across key platforms with targeted strategies that boost visibility and sales.",
    },
  ];

  return (
    <div className="relative pt-10 pb-[120px] max-sm:pb-[70px]">
      <div className="absolute top-[55%] max-sm:top-[48%] left-0 w-[350px] transform scale-x-[-1] z-10 max-md:w-[100px]">
        <Image
          src="/images/paperplane.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-[11%] max-sm:top-[19%] right-0 w-[220px] max-md:w-[100px] max-sm:w-[80px]">
        <Image
          src="/images/paperplane.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-[10%] max-sm:bottom-[25%] right-0 w-[30%] max-sm:w-[22%] z-10">
        <Image
          src="/images/publisherbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[350px] max-sm:w-[200px]">
        <Image
          src="/images/publisherbottombook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-[13%] max-sm:top-[30%] left-0 w-full h-[80%] max-sm:h-[40%]">
        <Image
          className="w-full h-full"
          src="/images/bigdesign.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-[5%] max-sm:top-[3%] left-0 w-[150px] max-lg:w-[100px] max-sm:w-[40px]">
        <Image
          src="/images/booksandstars.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="relative z-10 container max-sm:!p-0">
        <div className="font-childhood max-md:px-10  text-white text-[60px] text-center max-lg:text-[50px]  max-md:text-[30px] max-md:leading-[1] max-md:pb-4">
          All-in-One Publishing Solutions for Your Book
        </div>
        <div className="text-white max-md:px-6 text-[16px] text-center px-[100px] max-lg:px-0  max-md:text-[12px]">
          Hollywood Books Publisher provides everything to bring your book to
          life! From expert ghostwriting and professional design to marketing
          support, we guide you every step of the way—making your story shine.
        </div>
        <div className="grid grid-cols-12 gap-2 pt-10 max-md:hidden">
          {successStories.map((item, index) => (
            <div
              className="col-span-4 shadow-xl/20 bg-white rounded-2xl p-8 border-2 border-[#F2B385] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 hover:-translate-y-2 cursor-pointer"
              key={index}
            >
              <div className="w-[60px] mx-auto mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3">
                <Image
                  src="/images/book.png"
                  alt="Hero Section Background"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="pb-2 text-black font-bold text-center">
                {item.name}
              </div>
              <div className="text-black text-center">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="hidden max-md:block max-md:pt-8">
          <Swiper
            // modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={1.3}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {successStories.map((item, index) => (
              <SwiperSlide key={index} className="">
                <div
                  className="max-sm:min-h-[260px] shadow-xl/20 bg-white rounded-2xl p-8 max-sm:py-4 border-2 border-[#F2B385] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 hover:-translate-y-2 cursor-pointer"
                  key={index}
                >
                  <div className="w-[60px] mx-auto mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3">
                    <Image
                      src="/images/book.png"
                      alt="Hero Section Background"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="pb-2 text-black font-bold text-center">
                    {item.name}
                  </div>
                  <div className="text-black text-center max-md:text-[12px]">{item.desc}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="grid grid-cols-12 pt-[150px] max-md:pt-[60px] max-sm:px-4">
          <div className="col-span-6 max-lg:col-span-12">
            <div className="font-childhood text-white text-[60px] leading-[1] max-lg:text-[50px] max-md:text-[35px]">
              Make This Your Year as a Best Children’s Book Author
            </div>
            <div className="text-white pt-2 pr-[100px] max-lg:pr-0 max-lg:text-[14px] max-md:text-[12px]">
              Hire our children’s book publishing experts and let us bring your
              story to life, making it shine for young readers everywhere.
            </div>
            <div className="pt-4">
              <Button
                text="Let Us Publish My Children's Book"
                className="text-white bg-secondary font-inter"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-10 max-sm:px-4">
          <div className="col-span-5 col-start-7 max-lg:col-span-11 max-lg:col-start-2">
            <div className="font-childhood text-white text-[60px] text-right leading-[1] max-lg:text-[50px] max-md:text-[35px]">
              Publish Your Book Now & Save 30%!
            </div>
            <div className="text-white pt-2 text-right max-lg:text-[14px] max-md:text-[12px]">
              Our publishing experts are ready to help you!
            </div>
            <div className="pt-4 flex justify-end">
              <Button
                text="Talk To The Expert"
                className="text-white bg-secondary font-inter"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PublishingSolution;
