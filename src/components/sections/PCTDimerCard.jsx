import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PCTDimerCard({ src, title, detail, className }) {
  return (
    <div className={cn(
        "space-y-4 max-w-[300px]",
        className && className
    )}>
      <div className="w-[81px] h-[81px] mx-auto grid place-content-center bg-red rounded-2xl shadow-[7px_7px_0px_0px] shadow-darkRed">
        <Image src={src} alt="" width={52} height={52} />
      </div>
      <h5 className=" text-[17px] md:text-[20] mb-1">{title}</h5>
      <p className="text-[13px] font-pop400 lg:text-[15px]">{detail}</p>
    </div>
  );
}
