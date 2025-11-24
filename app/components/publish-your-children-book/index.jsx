import Image from "next/image";
import Button from "../common/button";

const PublishYourChildrenBook = () => {
    return (
        <div className="relative bg-white py-10">
            <div className="absolute top-0 left-0 w-[10%]">
                <Image src="/images/publishtop.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute top-0 left-[8%] w-[12%]">
                <Image src="/images/publishpaperstar.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute bottom-0 left-[5%] w-[12%]">
                <Image src="/images/publishbookface.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute top-0 right-0 w-[12%]">
                <Image src="/images/publishright.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="absolute bottom-0 right-0 w-[12%]">
                <Image src="/images/publisherbottombookface.png" alt="Publish Your Children’s Book" width={1000} height={1000} />
            </div>
            <div className="container">
                <div className="font-childhood text-black text-[60px] text-center max-lg:text-[40px] max-md:leading-[1] max-md:pb-4">Publish Your Children’s Book Quickly and Easily</div>
                <div className="text-black text-[16px] max-md:text-[14px] text-center px-[100px] max-lg:px-0 ">Need your children’s book published fast? Our streamlined self-publishing process gets your story ready for readers quickly—on any platform you choose.</div>
                <div className="flex gap-2 justify-center pt-6">
                    <Button text="Publish My Children’s Book" className="text-white bg-secondary font-inter" />
                    <Button text="Talk To The Expert" className="text-white bg-primary font-inter" />
                </div>
            </div>
        </div>
    )
}

export default PublishYourChildrenBook;