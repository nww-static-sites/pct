"use client";

import "@splidejs/react-splide/css";
import { FullWidthContent } from "@/components/Sections";
import Image from "next/image";
import { DesignContext } from "@/context/design";
import { useContext } from "react";
const IndustryExamples = ({ title, subTitle, detail, examples }) => {
  return (
    <section className="bg-secondary pt-12 lg:pt-20">
      <FullWidthContent>
        <div className="flex w-full flex-col gap-y-4 text-center justify-center items-center lg:text-left lg:flex-row lg:gap-x-4 lg:justify-between lg:items-center">
          <div className="w-full mx-auto md:w-[80%] lg:w-[320px] md:space-y-5 lg:ml-0">
            <h2 className="text-sm text-red tracking-widest mb-1">
              {subTitle}
            </h2>
            <h1 className="text-3xl md:text-5xl mb-2">{title}</h1>
            <p className="font-pop400 text-[13px] md:text-[15px]">{detail}</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 p-2">
            {examples.length &&
              examples.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 justify-center lg:justify-start items-center ring-1 px-1 lg:pt-10 ring-gret28 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px]"
                  >
                    <Image
                      src={item.image}
                      className="w-[100px] h-[82px]"
                      alt=""
                      width={100}
                      height={82}
                      unoptimized
                    />
                    <p className="text-center text-sm">{item.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default IndustryExamples;
