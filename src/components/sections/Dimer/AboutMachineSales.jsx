"use client";
import { AnimateButton } from "@/components/Buttons";
import { FullWidthContent } from "@/components/Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function AboutMachineSales() {
  const {
    theme: { button },
  } = useContext(DesignContext);
  return (
    <section className="pt-8 lg:pt-14 bg-white">
      <FullWidthContent className="">
        <div className="flex flex-col items-center justify-center md:flex-row gap-y-12 lg:flex lg:gap-x-16">
          <div className="flex-1 mt-auto mb-auto text-center lg:text-left py-0 lg:py-16 ">
            <h2 className="inline h-line text-xs md:text-sm mb-1 before:bg-red before:w-[30px] before:h-[2px] pl-[36px] text-red">
              MACHINE SALES
            </h2>
            <h1 className="mb-5 text-[28px] md:text-5xl">
              Deposition Machines
            </h1>
            <p className="mb-7 md:mb-8 text-[13px] md:text-[15px] max-w-[707px]">
              Static deposition machines offer the possibility of in house
              coating for any business. Fully compatible with our dimer as well!
            </p>
            <Link href={"#contact"}>
              <AnimateButton
                className={`${button.red} shadow-[0_1px_8px_0px_rgba(0,0,0,0.0)] shadow-red32 hover:shadow-none before:bg-primary hover:bg-primary`}
              >
                Contact Us Now
              </AnimateButton>
            </Link>
          </div>
          <Image
            className="w-full h-auto mb-5 max-w-[483px] mx-auto lg:mb-0 lg:w-[40vw] lg:max-w-[583px] object-contain"
            src="/images/deposition-machine.png"
            alt="Deposition Machines"
            width={583}
            height={493}
          />
        </div>
      </FullWidthContent>
    </section>
  );
}
