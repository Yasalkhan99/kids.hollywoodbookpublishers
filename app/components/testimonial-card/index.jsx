// import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard({ name, desc, image }) {
  return (
    <div className="w-full rounded-2xl px-4 py-8 testimonail-card min-h-[340px]">
      <div className="p-0 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={image}
              width={50}
              height={50}
              alt="Profile"
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg text-white">{name}</h3>
              <div className="flex text-yellow-400">
                <Image src="/images/rating.png" width={100} height={100} alt="Star" />
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/colons.png"
              width={40}
              height={40}
              alt="Profile"
              className=""
            />
          </div>
        </div>

        <p className="text-sm text-white/90 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
