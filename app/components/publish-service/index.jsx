import React from "react";
import Button from "../common/button";
import Image from "next/image";

const PublicService = () => {
  const services = [
    "Manuscript Audits",
    "Full Book Design With Illustrations",
    "Reading Level Assessment",
    "Book Formatting",
    "Book Award Submissions",
    "Book Review Coordination",
  ];
  return (
    <div className="relative bg-[#412678]">
      <div className="absolute top-0 right-0 w-[38%] opacity-30 max-lg:w-[70%]">
        <Image
          className="w-full"
          src="/images/design.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-[2%] left-0 w-[50%] max-lg:hidden">
        <Image
          className="w-full"
          src="/images/publishbottomborder.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex max-lg:flex-col ">
        <div className="relative z-10 w-[2800px] min-w-[300px] max-lg:hidden">
          <Image
            className="w-full"
            src="/images/childreadingbook.png"
            alt="Publish Service Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 pl-[40px] pt-12 pr-[150px] max-xl:pt-6 max-xl:pr-[100px] max-xl:pl-[10px] max-lg:mx-[50px] max-lg:pl-0 max-lg:pr-0 max-lg:text-center max-md:mx-[10px]">
          <div className="font-childhood text-white text-[65px] max-xl:text-[50px] max-md:text-[35px] leading-[1] pr-16 max-xl:pr-0">
            Publish the Children’s Book You’ve Always Imagined
          </div>
          <div className="text-white py-4 pr-[100px] max-xl:pr-0 max-xl:text-[14px]">
            Give young readers a story they’ll cherish with Hollywood Books
            Publisher’s premium children’s book publishing services. We help
            authors transform their ideas into beautifully crafted books that
            inspire, entertain, and spark imagination. Whether you’ve written a
            playful bedtime tale, an exciting adventure, or a meaningful life
            lesson, our team brings your vision to life with expert care and
            creativity.
            <br /> From vibrant custom illustrations and polished editing to
            professional book design and smooth, multi-platform publishing—we
            handle it all for you. Your book won’t just be ready for young
            readers; it will stand out, shine, and make a lasting impact.
          </div>
          <div className="text-white max-xl:text-[14px]">
            Get started today & enjoy:
          </div>
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 lg:grid-cols-2 max-lg:gap-2">
            {services.map((item) => (
              <div
                key={item}
                className="flex items-start max-lg:justify-center"
              >
                <span className="mr-2 text-white text-[16px]">•</span>
                <span className="text-white text-[16px] max-xl:text-[14px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="pt-10 max-xl:pt-6">
            <Button
              text="Let Us Publish My Children’s Book"
              className="text-white bg-secondary font-inter max-lg:mx-auto"
            />
          </div>
        </div>
        <div className="relative z-10 max-lg:block hidden my-4">
          <Image
            className="w-[60%] mx-auto max-sm:w-[90%]"
            src="/images/mobileimg.png"
            alt="Publish Service Background"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicService;
