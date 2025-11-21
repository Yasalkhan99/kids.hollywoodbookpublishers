import Image from "next/image";
import React from "react";

const Questions = () => {
  return (
    <div className="bg-white relative py-10">
      {/* <div className="absolute top-0 left-0 w-[120px]">
        <Image src="/images/learneverythingbook.png" alt="Hero Section Background" width={1000} height={1000} />
      </div>
      <div className="absolute top-0 right-0 w-[150px]">
        <Image src="/images/learnbottombook.png" alt="Hero Section Background" width={1000} height={1000} />
      </div> */}
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <div className="font-childhood text-black text-[60px] text-center leading-[1]">
              Learn Everything About Our Children’s Book Publishing Services
              Here
            </div>
            <div className="text-black text-[16px] text-center px-[100px]">
              Still curious? Get answers here, or contact us for more
              information.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
