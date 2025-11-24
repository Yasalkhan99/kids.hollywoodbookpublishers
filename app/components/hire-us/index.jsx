"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../common/button";

gsap.registerPlugin(ScrollTrigger);

const HireUs = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstRef.current,
        start: "top center+=100",
        end: "bottom center",
        once: true,
      },
    });

    // 1️⃣ First image flips left + fade out
    tl.to(firstRef.current, {
      opacity: 0,
      rotateY: -90,
      scale: 0.85,
      filter: "blur(3px)",
      ease: "power2.out",
    });

    // 2️⃣ Second image flips left + fade in
    tl.fromTo(
      secondRef.current,
      { opacity: 0, rotateY: -90, scale: 0.85, filter: "blur(3px)" },
      {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        filter: "blur(0px)",
        ease: "power2.out",
      },
      "<" // starts immediately after previous
    );

    // 3️⃣ Text fades in AFTER second image
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, ease: "power2.out", duration: 0.8 },
      ">0.3" // start 0.3s after second image animation
    );
  }, []);

  return (
    <div className="cloud-section relative py-10 bg-white h-[720px] max-xl:h-[580px] max-lg:h-[500px] max-md:h-[430px] max-sm:min-h-[400px]">
      <div className="absolute top-[5%] left-0 w-[150px] max-lg:w-[100px] max-sm:w-[50px]">
        <Image
          src="/images/animationleftbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-[10%] max-sm:top-0 right-0 w-[150px] max-lg:w-[100px] max-sm:w-[50px]">
        <Image
          src="/images/animationrightbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container relative w-full h-full">
        <div className="absolute top-0 left-0 w-full max-xl:w-[80%] max-lg:w-[90%] max-md:w-[100%] max-xl:left-[50%] max-xl:-translate-x-1/2">
          <Image
            ref={firstRef}
            className="cloud-image mx-auto"
            src="/images/animation1.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-0 left-0 w-full max-xl:w-[80%] max-lg:w-[90%] max-md:w-[100%] max-xl:left-[50%] max-xl:-translate-x-1/2">
          <Image
            ref={secondRef}
            className="cloud-image mx-auto"
            src="/images/animation2.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
          <div
            ref={textRef}
            className="absolute z-20 -mt-[6%] max-lg:-mt-[10%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-childhood w-full text-white text-center text-[54px] max-xl:text-[40px] max-lg:text-[22px] max-sm:text-[16px] leading-[1]"
          >
            Ready to Publish a Children’s Book?
            <br />
            Our Experts Handle Everything
            <div className="text-white text-[16px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[6px] text-center font-inter px-[18%] max-xl:px-[12%] max-md:px-[6%] py-4 max-md:py-2 leading-[1.3]">
              Publishing your children’s book doesn’t have to be overwhelming.
              With Hollywood Books Publisher, over 250 authors have already
              turned their ideas into beautifully crafted stories that young
              readers adore. From editing and illustrations to cover design and
              platform publishing, our experts handle everything—making the
              entire process simple, stress-free, and exciting. Whether you want
              a vibrant printed book or a polished eBook, we shape your vision
              into a story kids will truly love. Partner with us and create a
              book that leaves a lasting impact on little readers everywhere.
            </div>
            <div className="flex gap-2 justify-center pt-4 max-xl:pt-0">
              <Button
                text="Hire Our Expert"
                className="text-[16px] text-white bg-secondary font-inter max-lg:text-[12px] max-sm:!text-[9px]"
              />
              <Button
                text="Claim Free Consultation"
                className="text-[16px] !text-[#38216e] bg-white font-inter max-lg:text-[12px] max-sm:!text-[9px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
