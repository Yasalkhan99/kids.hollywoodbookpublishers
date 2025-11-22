import Image from "next/image";
import Heading from "../common/heading";
import Button from "../common/button";
import ContactForm from "../common/form";

const BookYourself = () => {
    return (
        <>  
            <section className="relative pt-20 pb-20 m-0">
                <div className="absolute top-0 right-0 w-[30%] transform scale-x-[-1]">
                    <Image src="/images/topleftdesign.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-[15%] bottom-0 w-[300px] z-20 transform scale-x-[-1]">
                    <Image src="/images/paperplane.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute bottom-0 left-0 w-[55%] h-[90%] transform scale-x-[-1]">
                    <Image className="w-full h-full" src="/images/22.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-[5%] left-0 w-[80px] transform scale-x-[-1]">
                    <Image src="/images/dottedline.png" alt="Hero Section Background" width={1000} height={1000} />
                </div>
                <div className="absolute top-[5%] right-0 w-[150px] transform scale-x-[-1]">
                    <Image src="/images/booksandstars.png" alt="Hero Section Background" width={1000} height={1000} />
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
                                <ContactForm title="Send Us Your Details" />
                            </div>
                        </div>
                        <div className="relative z-10 col-span-1">
                            <Heading className="text-[60px] max-2xl:text-[60px] leading-[1]" text="Steps to Get Started with Our Children's Book Publishing" />
                            <div className="text-white text-[24px] pr-10 py-4">
                                <ul className="text-white text-md list-none ml-0 text-[16px] space-y-4">
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 bg-[#38216E] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </span>
                                        <span>Send Us Your Completed Manuscript And Share Any Ideas For Illustrations Or Layout. We'll Review Your Story And Plan The Next Steps, Including Editing And Design.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 bg-[#38216E] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </span>
                                        <span>Our Professional Editors Refine Your Manuscript To Ensure It's Error-Free, Engaging, And Easy For Young Readers To Enjoy.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 bg-[#38216E] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </span>
                                        <span>Once Polished, We Create Vibrant Illustrations, Layouts, And A Captivating Cover That Perfectly Match Your Story And Appeal To Kids.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 bg-[#38216E] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </span>
                                        <span>We Format Your Book For Hardcover, Paperback, And EBook Editions, Ensuring It Looks Perfect On Every Platform And Device.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-8 h-8 bg-[#38216E] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </span>
                                        <span>We Publish Your Book On Top Platforms Like Amazon And Barnes & Noble, Handling All Distribution So Your Story Reaches Readers Everywhere.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BookYourself;