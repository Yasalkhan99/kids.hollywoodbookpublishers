import Image from "next/image";
import Heading from "../common/heading";
import ContactForm from "../common/form";
import Button from "../common/button";

const HeroSection = () => {
    return (
        <>
            <section className="relative pt-[200px] pb-20 m-0">
                <div className="absolute top-0 left-0 w-[30%]">
                    <Image src="/images/topleftdesign.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-[15%] right-0 w-[300px] z-20">
                    <Image src="/images/paperplane.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute bottom-0 right-0 w-[55%] h-[90%]">
                    <Image className="w-full h-full" src="/images/22.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-[10%] right-0 w-[80px]">
                    <Image src="/images/dottedline.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-[5%] left-0 w-[150px]">
                    <Image src="/images/booksandstars.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-[22%] left-0 w-1/2">
                    <Image className="opacity-20" src="/images/backgroundmap.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="relative z-10 col-span-1">
                            <Heading className="text-[80px] max-2xl:text-[80px] leading-[1]" text="Publish A Children’s Book Readers Will Love" />
                            <div className="text-white text-[24px] pr-10 py-4">
                                Have a beautiful story waiting to be told?<br />At Hollywood Books Publisher, we turn your ideas into magical children’s books. From writing and illustration to full publishing — we make it effortless.
                            </div>
                            <div className="text-white text-[38px] font-childhood">
                                What You’ll Get:
                            </div>
                            <div>
                                <ul className="text-white text-md list-disc ml-[20px] text-[24px]">
                                    <li>24/7 Support</li>
                                    <li>Immediate Publishing</li>
                                    <li>Free Book Audit</li>
                                    <li>Free Expert Consultation</li>
                                    <li>Exclusive Discounts</li>
                                </ul>
                            </div>
                            <div className="flex gap-2 pt-10">
                                <Button text="Publish My Children’s Book" className="text-white bg-secondary font-inter" />
                                <Button text="Talk To The Expert" className="text-white bg-primary font-inter" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex justify-end">
                                <ContactForm title="Claim 30% Off Today!"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;