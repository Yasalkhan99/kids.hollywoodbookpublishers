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
      <div className="absolute top-0 right-0 w-[30%]">
        <Image
          className="w-full"
          src="/images/design.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex">
        <div className="w-[2800px] min-w-[300px]">
          <Image
            className="w-full"
            src="/images/childreadingbook.png"
            alt="Publish Service Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 pl-[40px] pt-12 pr-[150px]">
          <div className="font-childhood text-white text-[65px] leading-[1] pr-16">
            Publish the Children’s Book You’ve Always Imagined
          </div>
          <div className="text-white py-4 pr-[100px]">
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
          <div className="text-white">Get started today & enjoy:</div>
          <div className="pt-4 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {services.map((item) => (
              <div key={item} className="flex items-start">
                <span className="mr-2 text-white text-[16px]">•</span>
                <span className="text-white text-[16px]">{item}</span>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <Button
              text="Let Us Publish My Children’s Book"
              className="text-white bg-secondary font-inter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicService;
