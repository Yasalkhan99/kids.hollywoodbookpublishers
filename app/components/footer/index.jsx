import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div className="bg-[#412678] relative py-16">
                <div className="absolute top-0 left-0 w-[38%] h-full">
                    <Image className="w-full h-full" src="/images/footerleft.png" alt="Footer Logo" width={1000} height={1000} />
                </div>
                <div className="relative z-10 flex justify-center w-full">
                    <Image src="/images/footerlogo.png" alt="Footer Logo" width={260} height={260} />
                </div>
                <div className="container relative z-10 flex justify-around pt-10">
                    <div className="flex items-center gap-2">
                        <Image src="/images/contacticon.png" alt="Footer Logo" width={26} height={26} />
                        <div className="text-white text-[20px]">+(832) 532-6366</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/mailicon.png" alt="Footer Logo" width={26} height={26} />
                        <div className="text-white text-[20px]">(832) 532-6366</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/locationlogo.png" alt="Footer Logo" width={26} height={26} />
                        <div className="text-white text-[20px]">(832) 532-6366</div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-3">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="text-white text-[12px]">© 2025 Hollywood Books Publisher. All rights reserved.</div>
                        <div className="text-white text-[12px]">Terms & Conditions - Privacy Policy</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;