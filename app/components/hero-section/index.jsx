import Image from "next/image";
import Heading from "../common/heading";
import ContactForm from "../common/form";
import Button from "../common/button";

const HeroSection = () => {
  return (
    <>
      <section className="relative pt-[200px] pb-20 max-sm:pb-10 m-0 max-lg:pt-[170px] max-sm:pt-[120px] overflow-hidden">
        <div className="absolute top-0 left-0 w-[30%] max-md:w-[50%] max-sm:w-[60%]">
          <Image
            src="/images/topleftdesign.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-[20%] right-0 w-[200px] z-20 max-lg:w-[100px] max-lg:top-[20%] max-sm:w-[140px] max-sm:top-[48%] max-sm:-right-[18%]">
          <Image
            src="/images/paperplane.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[55%] h-[85%] max-lg:h-[55%] max-sm:w-full max-sm:h-auto">
          <Image
            className="w-full h-full"
            src="/images/22.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-[10%] right-0 w-[80px] max-sm:w-[35px] max-sm:top-[10%]">
          <Image
            src="/images/dottedline.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-[5%] left-0 w-[120px] max-lg:top-[30%] max-lg:w-[100px] max-sm:w-[50px] max-sm:top-[41%]">
          <Image
            src="/images/booksandstars.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute top-[22%] left-0 w-1/2 max-sm:w-full">
          <Image
            className="opacity-20"
            src="/images/backgroundmap.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
          />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 max-lg:grid-cols-1">
            <div className="relative z-10 col-span-1">
              <Heading
                className="text-[70px] max-2xl:text-[70px] max-xl:text-[50px] max-sm:text-[46px] max-lg:text-center leading-[1]"
                text="Publish A Children’s Book Readers Will Love"
              />
              <div className="text-white text-[22px] max-2xl:text-[18px] max-sm:text-[12px] pr-10 py-4 max-lg:text-center max-lg:pr-0">
                Have a beautiful story waiting to be told?
                <br />
                At Hollywood Books Publisher, we turn your ideas into magical
                children’s books. From writing and illustration to full
                publishing — we make it effortless.
              </div>
              <div className="text-white text-[38px] max-sm:text-[25px] font-childhood max-lg:text-center">
                What You’ll Get:
              </div>
              <div>
                <ul className="text-white text-md list-disc ml-[20px] text-[22px] max-2xl:text-[18px] max-sm:text-[12px] max-lg:flex justify-center flex-wrap gap-8 max-sm:gap-4 max-sm:mr-[20px]">
                  <li>24/7 Support</li>
                  <li>Immediate Publishing</li>
                  <li>Free Book Audit</li>
                  <li>Free Expert Consultation</li>
                  <li>Exclusive Discounts</li>
                </ul>
              </div>
              <div className="flex gap-2 pt-6 flex-wrap max-lg:justify-center max-sm:flex-col max-sm:items-center">
                <Button
                  text="Publish My Children’s Book"
                  className="text-white bg-secondary font-inter max-sm:w-[60%] max-sm:justify-center"
                />
                <Button
                  text="Talk To The Expert"
                  className="text-white bg-primary font-inter max-sm:w-[60%] max-sm:justify-center"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-end pt-6 max-lg:justify-center">
                <ContactForm title="CLAIM 30% OFF TODAY!" icon={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
