'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AuthorTrustUs = () => {
  const authorDetails = [
    {
      name: "Editing & Proofreading",
      desc: "Our expert editors polish your manuscript to ensure it’s engaging, flawless, and ready for young readers.",
    },
    {
      name: "Exclusive Discounts",
      desc: "Enjoy exclusive discounts on beautifully designed book covers—affordable, detailed, and made with care.",
    },
    {
      name: "Book Designing",
      desc: "Vibrant, kid-friendly designs make your book come alive and spark young imaginations.",
    },
    {
      name: "No Fake Promises",
      desc: "Professional design, reliable delivery, and results that let your book stand out. ",
    },
    {
      name: "Publishing on Any Platform",
      desc: "Whether print or digital, we publish your book on Amazon, Kindle, and top bookstores.",
    },
    {
      name: "No Hidden Charges",
      desc: "Upfront quotes and clear costs mean complete transparency for your book project.",
    },
    {
      name: "Variety of Printing Formats",
      desc: "Showcase your story in hardcover, paperback, or eBook with our expert guidance.",
    },
    {
      name: "100% Ownership",
      desc: "Maintain full rights and creative freedom over your children’s book and cover.",
    },
  ];

  return (
    <div className="relative py-10">
      <div className="absolute z-10 top-[5%] left-0 w-[220px] max-md:w-[100px] max-sm:w-[50px]">
        <Image
          className="w-full h-full"
          src="/images/authortopbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute z-10 bottom-[5%] left-0 w-[280px] max-md:w-[130px]">
        <Image
          className="w-full h-full"
          src="/images/authorbottombook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 left-0 w-[180px] h-[100%] max-md:w-[90px] max-sm:w-[50px]">
        <Image
          className="w-full h-full"
          src="/images/leftcover.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 right-0 w-[180px] h-[100%] max-md:w-[90px] max-sm:w-[50px]">
        <Image
          className="w-full h-full"
          src="/images/rightcover.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[300px] max-md:w-[170px] max-sm:w-[100px]">
        <Image
          src="/images/girlreadingbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container relative z-10 max-sm:!p-0">
        <div className="font-childhood text-white text-[60px] max-xl:text-[50px] max-sm:text-[35px] max-lg:leading-[1] max-lg:pb-4 text-center max-sm:px-6">
          Why Authors Trust Us for Children’s Book Publishing
        </div>
        <div className="text-white text-[16px] max-sm:text-[12px] text-center px-[100px] max-md:px-0 max-md:pb-4 max-sm:px-6">
          At Hollywood Books Publisher, we craft children’s books that truly
          stand out—with engaging storytelling, vibrant illustrations, and
          seamless publishing support. From editing to design, we handle
          everything to bring your vision to life effortlessly.
        </div>
        <div className="grid grid-cols-12 gap-2 pt-10 max-md:hidden">
          {authorDetails.map((item, index) => (
            <div
              className="col-span-3 max-xl:col-span-4 max-lg:col-span-6 shadow-xl/20 bg-white rounded-2xl p-8 border-2 border-[#F2B385]"
              key={index}
            >
              <div className="w-[60px] mx-auto mb-4">
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
        <div className="hidden max-md:block">
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
            {authorDetails.map((item, index) => (
              <SwiperSlide key={index} className="">
                <div
                  className="shadow-xl/20 bg-white rounded-2xl p-8 max-md:p-6 border-2 border-[#F2B385]"
                  key={index}
                >
                  <div className="w-[60px] mx-auto mb-4">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AuthorTrustUs;
