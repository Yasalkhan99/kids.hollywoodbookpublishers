import Image from "next/image";
import Heading from "../common/heading";
import Button from "../common/button";
import ContactForm from "../common/form";

const BookYourself = () => {
  const points = [
    {
      content:
        "Send Us Your Completed Manuscript And Share Any Ideas For Illustrations Or Layout. We'll Review Your Story And Plan The Next Steps, Including Editing And Design.",
    },
    {
      content:
        "Our Professional Editors Refine Your Manuscript To Ensure It's Error-Free, Engaging, And Easy For Young Readers To Enjoy.",
    },
    {
      content:
        "Once Polished, We Create Vibrant Illustrations, Layouts, And A Captivating Cover That Perfectly Match Your Story And Appeal To Kids.",
    },
    {
      content:
        "We Format Your Book For Hardcover, Paperback, And EBook Editions, Ensuring It Looks Perfect On Every Platform And Device.",
    },
    {
      content:
        "We Publish Your Book On Top Platforms Like Amazon And Barnes & Noble, Handling All Distribution So Your Story Reaches Readers Everywhere.",
    },
  ];

  return (
    <>
      <section className="relative pt-20 pb-20 m-0">
        <div className="absolute z-20 bottom-[10%] right-0 w-[160px] transform scale-x-[-1]">
          <Image
            src="/images/new.png"
            alt="Form Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-0 right-0 w-[30%] transform scale-x-[-1]">
          <Image
            src="/images/topleftdesign.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-[15%] bottom-0 w-[300px] z-20 transform scale-x-[-1]">
          <Image
            src="/images/paperplane.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[55%] h-[90%] transform scale-x-[-1]">
          <Image
            className="w-full h-full"
            src="/images/22.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-[5%] left-0 w-[80px] transform scale-x-[-1]">
          <Image
            src="/images/dottedline.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-[5%] right-0 w-[150px] transform scale-x-[-1]">
          <Image
            src="/images/booksandstars.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="container">
          <div className="grid grid-cols-12 pb-12">
            <div className="col-span-8 col-start-3">
              <div className="font-childhood text-white text-[60px] text-center leading-[1] mb-4">
                Ready to Publish Your Children’s Book Yourself?
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="flex justify-start">
                <ContactForm title="Send Us Your Details" icon={false} />
              </div>
            </div>
            <div className="relative z-10 col-span-1">
              <Heading
                className="text-[60px] max-2xl:text-[60px] leading-[1]"
                text="Steps to Get Started with Our Children's Book Publishing"
              />
              <div className="text-white text-[24px] pr-10 py-4">
                <ul className="text-white text-md list-none ml-0 text-[16px] space-y-4">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-4 mt-1 flex-shrink-0">
                        <Image
                          src="/images/bulletstar.png"
                          width={26}
                          height={16}
                          alt="star"
                        />
                      </span>
                      <span>{point.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookYourself;
