import Image from "next/image";
import React from "react";
import Button from "../common/button";
const PublishingSolution = () => {
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
    <div className="relative pt-10 pb-[120px]">
      <div className="absolute top-[55%] left-0 w-[350px] transform scale-x-[-1] z-10">
        <Image
          src="/images/paperplane.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-[11%] right-0 w-[220px]">
        <Image
          src="/images/paperplane.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-[10%] right-0 w-[30%] z-10">
        <Image
          src="/images/publisherbook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[350px]">
        <Image
          src="/images/publisherbottombook.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-[13%] left-0 w-full h-[80%]">
        <Image
          className="w-full h-full"
          src="/images/bigdesign.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-[5%] left-0 w-[150px]">
        <Image
          src="/images/booksandstars.png"
          alt="Hero Section Background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="relative z-10 container">
        <div className="font-childhood text-white text-[60px] text-center">
          All-in-One Publishing Solutions for Your Book
        </div>
        <div className="text-white text-[16px] text-center px-[100px]">
          Hollywood Books Publisher provides everything to bring your book to
          life! From expert ghostwriting and professional design to marketing
          support, we guide you every step of the way—making your story shine.
        </div>
        <div className="grid grid-cols-12 gap-2 pt-10">
          {successStories.map((item, index) => (
            <div
              className="col-span-4 shadow-xl/20 bg-white rounded-2xl p-8 border-2 border-[#F2B385]"
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
        <div className="grid grid-cols-12 pt-[150px]">
          <div className="col-span-6">
            <div className="font-childhood text-white text-[60px] leading-[1]">
              Make This Your Year as a Best Children’s Book Author
            </div>
            <div className="text-white pt-2 pr-[100px]">
              Hire our children’s book publishing experts and let us bring your
              story to life, making it shine for young readers everywhere.
            </div>
            <div className="pt-4">
              <Button
                text="Let Us Publish My Children’s Book"
                className="text-white bg-secondary font-inter"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-10">
          <div className="col-span-5 col-start-7">
            <div className="font-childhood text-white text-[60px] text-right leading-[1]">
              Publish Your Book Now & Save 30%!
            </div>
            <div className="text-white pt-2 text-right">
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
    </div>
  );
};

export default PublishingSolution;
