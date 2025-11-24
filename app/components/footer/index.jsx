import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#412678] relative py-16">
        <div className="absolute top-0 left-0 w-[38%] h-full opacity-50">
          <Image
            className="w-full h-full"
            src="/images/footerleft.png"
            alt="Footer Logo"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 flex justify-center w-full">
          <Image
            src="/images/footerlogo.png"
            alt="Footer Logo"
            width={260}
            height={260}
          />
        </div>
        <div className="container relative z-10 flex justify-around pt-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-2">
          <div className="flex items-center gap-2 max-sm:flex-wrap max-sm:justify-center">
            <Image
              src="/images/contacticon.png"
              alt="Footer Logo"
              width={26}
              height={26}
            />
            <div className="text-white text-[14px] max-sm:text-[12px]">+(832) 532-6366</div>
          </div>
          <div className="flex items-center gap-2 max-sm:flex-wrap max-sm:justify-center">
            <Image
              src="/images/mailicon.png"
              alt="Footer Logo"
              width={26}
              height={26}
            />
            <div className="text-white text-[14px] max-sm:text-[12px]">
              info@hollywoodbookspublisher.com
            </div>
          </div>
          <div className="flex items-center gap-2 max-sm:flex-wrap max-sm:justify-center">
            <Image
              src="/images/locationlogo.png"
              alt="Footer Logo"
              width={26}
              height={26}
            />
            <div className="text-white text-[14px] max-sm:text-[12px] max-sm:text-center">
              4114 Way Out W Dr, Houston, TX 77092, United States
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-3">
        <div className="container">
          <div className="flex items-center justify-between ">
            <div className="text-white text-[12px] max-sm:text-[10px] max-sm:flex max-sm:flex-col max-sm:items-start">
              <span>Copyright © 2025 </span>
              <span className="font-semibold">Hollywood Books Publisher. </span>
              <span>All rights reserved.</span>
            </div>
            <div className="text-white text-[12px] max-sm:flex max-sm:flex-col max-sm:items-end">
              <span className="text-right">Terms & Conditions</span>
              <span> - </span>
              <span className="text-right">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
