"use client";

import Image from "next/image";
import TestimonialCard from "../testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Emily K",
      desc: "I stumbled upon Hollywood Books Publisher when I was at a crossroads with my writing project. Their ghostwriting services are the real deal. They took my concept and turned it into a page-turner, But what really sets them apart is their attention to detail. They don't just write; they collaborate with you and value your feedback. Trust me, they're the dream team for aspiring authors.",
      image: "/images/userimage.png",
    },
    {
      name: "Alex Y",
      desc: "I've been dreaming of writing a book for years, but I didn't have the time or expertise. That's where Hollywood Books Publisher came to the rescue. Their ghostwriters are pure magic! They took my vague ideas and transformed them into a captivating story. And the book cover? It's like a work of art. They genuinely want you to succeed and work tirelessly to make your vision a reality.",
      image: "/images/user1.png",
    },
    {
      name: "David S",
      desc: "Hollywood Books Publisher is the real deal for anyone who wants to see their creative vision come to life. Their ghostwriting services are outstanding, and they make the entire process feel effortless. They also designed a stunning book cover that perfectly captures the essence of my story. The best part? They're not just in it for the money; they genuinely care about your satisfaction. Highly recommended!",
      image: "/images/user2.png",
    },
    {
      name: "Sarah W",
      desc: "I was honestly blown away by Hollywood Books Publisher! I had this idea for a book, but I didn't know how to bring it to life. Their ghostwriting team turned it into a gripping story that I'm so proud of. They even designed a killer book cover that catches the eye. What's more, they listened to my input and made sure I was thrilled with the final result. If you want your creative vision to shine, this is the place!",
      image: "/images/user3.png",
    },
    {
      name: "Emily K",
      desc: "I stumbled upon Hollywood Books Publisher when I was at a crossroads with my writing project. Their ghostwriting services are the real deal. They took my concept and turned it into a page-turner, But what really sets them apart is their attention to detail. They don't just write; they collaborate with you and value your feedback. Trust me, they're the dream team for aspiring authors.",
      image: "/images/user2.png",
    },
    {
      name: "Alex Y",
      desc: "I've been dreaming of writing a book for years, but I didn't have the time or expertise. That's where Hollywood Books Publisher came to the rescue. Their ghostwriters are pure magic! They took my vague ideas and transformed them into a captivating story. And the book cover? It's like a work of art. They genuinely want you to succeed and work tirelessly to make your vision a reality.",
      image: "/images/user1.png",
    },
    {
      name: "David S",
      desc: "Hollywood Books Publisher is the real deal for anyone who wants to see their creative vision come to life. Their ghostwriting services are outstanding, and they make the entire process feel effortless. They also designed a stunning book cover that perfectly captures the essence of my story. The best part? They're not just in it for the money; they genuinely care about your satisfaction. Highly recommended!",
      image: "/images/userimage.png",
    },
  ];

  // duplicate testimonials to have enough slides for the carousel
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative pt-10 pb-20 bg-[#F3F3F3]">
      <div className="absolute top-0 left-0 w-[10%]">
        <Image
          src="/images/publishtop.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] w-[15%]">
        <Image
          src="/images/successpaper.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 left-[5%] w-[12%]">
        <Image
          src="/images/publishbookface.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 right-0 w-[12%]">
        <Image
          src="/images/publishright.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[12%]">
        <Image
          src="/images/publisherbottombookface.png"
          alt="Publish Your Children’s Book"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container">
        <div className="pb-6 font-childhood text-black text-[60px] text-center">
          Success Stories from Our Authors
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        speed={2500}
        grabCursor={true}
        // navigation
        // pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              name={testimonial.name}
              desc={testimonial.desc}
              image={testimonial.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStories;
