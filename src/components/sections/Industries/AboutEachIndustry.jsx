"use client";
import { useContext } from "react";

import { FullWidthContent } from "../../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton } from "../../Buttons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AboutEachIndustry = ({
  title,
  subTitle,
  subTitle2,
  detail,
  detail2,
  buttonText,
  image,
  slug,
  gapX
}) => {
  const {
    theme: { button },
  } = useContext(DesignContext);

  return (
    <section className="pt-8 lg:pt-14 bg-secondary">
      <FullWidthContent>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-x-4">
          <Image
            className="w-full lg:mb-5 max-w-[565px] mx-auto lg:mr-0 lg:w-[46vw] lg:max-w-[665px]"
            src={image}
            alt={title}
            width={665}
            height={701}
          />
          <div className="flex-1 mt-auto mb-auto text-center lg:text-left py-8 max-w-[709px]">
            <h2 className="inline h-line text-xs md:text-sm mb-1 before:bg-red before:w-[30px] before:h-[2px] pl-[36px] text-red">
              {subTitle}
            </h2>
            <h1 className="mb-5 text-[28px] md:text-5xl">{title}</h1>
            <p className="mb-7 md:mb-8 text-[13px] md:text-[15px] whitespace-pre-line">
              {detail}
            </p>
            <h2 className="text-[28px] md:text-3xl">{subTitle2}</h2>
            <p className="mb-2 md:mb-5 text-[13px] md:text-[15px]">{detail2}</p>
            {slug === "consumer-electronics" ? (
              <div className="flex gap-x-2 flex-wrap mb-5">
                <Link
                  className="underline text-red text-sm"
                  href="https://www.youtube.com/watch?v=7jdAVf5V9qs&t=7s"
                  target="_blank"
                >
                  Proof 1
                </Link>
                <Link
                  className="underline text-red text-sm"
                  href="https://www.youtube.com/watch?v=pQP29l0arsg"
                  target="_blank"
                >
                  Proof 2
                </Link>
                <Link
                  className="underline text-red text-sm"
                  href="https://www.youtube.com/watch?v=rvDmmnEM8qE"
                  target="_blank"
                >
                  Proof 3
                </Link>
                <Link
                  className="underline text-red text-sm"
                  href="https://www.youtube.com/watch?v=atBgpwXjzJw"
                  target="_blank"
                >
                  Proof 4
                </Link>
              </div>
            ) : (
              ""
            )}
            <Link href="#contact">
              <AnimateButton
                className={`${button.red} px-6 md:px-8 mt-0 shadow-[0_1px_8px_0px_rgba(0,0,0,0.0)] shadow-red32 hover:shadow-none before:bg-primary hover:bg-primary`}
              >
                {buttonText}
              </AnimateButton>
            </Link>
          </div>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default AboutEachIndustry;
