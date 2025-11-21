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
                once: true
            }
        });

        // 1️⃣ First image flips left + fade out
        tl.to(firstRef.current, {
            opacity: 0,
            rotateY: -90,
            scale: 0.85,
            filter: "blur(3px)",
            ease: "power2.out"
        });

        // 2️⃣ Second image flips left + fade in
        tl.fromTo(
            secondRef.current,
            { opacity: 0, rotateY: -90, scale: 0.85, filter: "blur(3px)" },
            { opacity: 1, rotateY: 0, scale: 1, filter: "blur(0px)", ease: "power2.out" },
            "<" // starts immediately after previous
        );

        // 3️⃣ Text fades in AFTER second image
        tl.fromTo(
            textRef.current,
            { opacity: 0 },
            { opacity: 1, ease: "power2.out", duration: 0.8 },
            ">0.3" // start 0.3s after second image animation
        );
    }, []);

    return (
        <div className="cloud-section relative py-10 bg-white h-[720px]">
            <div className="absolute top-0 left-0 w-[150px]">
                <Image src="/images/animationleftbook.png" alt="Hero Section Background" width={1000} height={1000} />
            </div>
            <div className="absolute bottom-[5%] right-0 w-[150px]">
                <Image src="/images/animationrightbook.png" alt="Hero Section Background" width={1000} height={1000} />
            </div>
            <div className="container relative">
                <div className="absolute top-0 left-0 w-full">
                    <Image ref={firstRef}
                        className="cloud-image mx-auto" src="/images/animation1.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-0 left-0 w-full">
                    <Image ref={secondRef}
                        className="cloud-image mx-auto" src="/images/animation2.png" alt="Hero Section Background" width={1000} height={1000} />
                    <div ref={textRef} className="absolute z-20 top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        <div className="font-childhood text-white text-[54px] leading-[1]">Ready to Publish a Children's Book?<br />Our Experts Handle Everything</div>
                        <div className="text-white text-[16px] text-center font-inter px-[18%] py-4 leading-[1.3]">
                            Publishing your children’s book doesn’t have to be overwhelming. With Hollywood Books Publisher, over 250 authors have already turned their ideas into beautifully crafted stories that young readers adore.
                            From editing and illustrations to cover design and platform publishing, our experts handle everything—making the entire process simple, stress-free, and exciting. Whether you want a vibrant printed book or a polished eBook, we shape your vision into a story kids will truly love.
                            Partner with us and create a book that leaves a lasting impact on little readers everywhere.
                        </div>
                        <div className="flex gap-2 justify-center pt-4">
                            <Button text="Hire Our Expert" className="text-[16px] text-white bg-secondary font-inter" />
                            <Button text="Claim Free Consultation" className="text-[16px] !text-[#38216e] bg-white font-inter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireUs;