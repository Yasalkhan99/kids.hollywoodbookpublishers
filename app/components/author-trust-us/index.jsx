import Image from "next/image";

const AuthorTrustUs = () => {

    const authorDetails = [
        {
            name: "Editing & Proofreading",
            desc: "Our expert editors polish your manuscript to ensure it’s engaging, flawless, and ready for young readers."
        },
        {
            name: "Exclusive Discounts",
            desc: "Enjoy exclusive discounts on beautifully designed book covers—affordable, detailed, and made with care."
        },
        {
            name: "Book Designing",
            desc: "Vibrant, kid-friendly designs make your book come alive and spark young imaginations."
        },
        {
            name: "No Fake Promises",
            desc: "Professional design, reliable delivery, and results that let your book stand out. "
        },
        {
            name: "Publishing on Any Platform",
            desc: "Whether print or digital, we publish your book on Amazon, Kindle, and top bookstores."
        },
        {
            name: "No Hidden Charges",
            desc: "Upfront quotes and clear costs mean complete transparency for your book project."
        },
        {
            name: "Variety of Printing Formats",
            desc: "Showcase your story in hardcover, paperback, or eBook with our expert guidance."
        },
        {
            name: "100% Ownership",
            desc: "Maintain full rights and creative freedom over your children’s book and cover."
        },
    ]

    return (
        <div className="relative py-10">
            <div className="absolute z-10 top-[5%] left-0 w-[220px]">
                <Image className="w-full h-full" src="/images/authortopbook.png" alt="Hero Section Background" width={1000} height={1000} />
            </div>
            <div className="absolute z-10 bottom-[5%] left-0 w-[280px]">
                <Image className="w-full h-full" src="/images/authorbottombook.png" alt="Hero Section Background" width={1000} height={1000} />
            </div>
            <div className="absolute top-0 left-0 w-[180px] h-[100%]">
                <Image className="w-full h-full" src="/images/leftcover.png" alt="Hero Section Background" width={1000} height={1000} />
            </div>
            <div className="absolute top-0 right-0 w-[180px] h-[100%]">
                <Image className="w-full h-full" src="/images/rightcover.png" alt="Hero Section Background" width={1000} height={1000} />
            </div>
            <div className="absolute bottom-0 right-0 w-[300px]">
                <Image src="/images/girlreadingbook.png" alt="Hero Section Background" width={1000} height={1000} />
            </div>
            <div className="container relative z-10">
                <div className="font-childhood text-white text-[60px] text-center">Why Authors Trust Us for Children’s Book Publishing</div>
                <div className="text-white text-[16px] text-center px-[100px]">At Hollywood Books Publisher, we craft children’s books that truly stand out—with engaging storytelling, vibrant illustrations, and seamless publishing support. From editing to design, we handle everything to bring your vision to life effortlessly.</div>
                <div className="grid grid-cols-12 gap-2 pt-10">
                    {authorDetails.map((item, index) => (
                        <div className="col-span-3 shadow-xl/20 bg-white rounded-2xl p-8 border-2 border-[#F2B385]" key={index}>
                            <div className="w-[60px] mx-auto mb-4">
                                <Image src="/images/book.png" alt="Hero Section Background" width={1000} height={1000} />
                            </div>
                            <div className="pb-2 text-black font-bold text-center">{item.name}</div>
                            <div className="text-black text-center">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AuthorTrustUs;