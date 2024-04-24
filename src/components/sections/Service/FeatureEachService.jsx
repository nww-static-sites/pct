"use client";
import { useContext } from "react";

import { FullWidthContent } from "../../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton } from "../../Buttons";

const FetureEachService = ({
  title,
  subTitle,
  features,
  image
}) => {
  const {
    theme: { button },
  } = useContext(DesignContext);

  return (
    <section className="bg-white py-24">
      <FullWidthContent>
        <h1 className="text-red text-[12px] md:text-[16px] text-center mb-1">
          {subTitle}
        </h1>
        <h1 className="text-[28px] md:text-5xl text-center mb-10">{title}</h1>

        <div className="flex flex-col md:flex-row gap-6">
          <ul className="flex flex-col gap-5">
            {features.length &&
              features.map((feature) => {
                return (
                  <li key={feature.id}>
                    <div className="flex gap-1 mb-3">
                      <Image
                        src={"/images/icons/check-circle.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <h5 className="text-[16px] md:text-lg">
                        {feature.title}
                      </h5>
                    </div>
                    <p className="text-[13px] md:text-[15px]">
                      {feature.property}
                    </p>
                  </li>
                );
              })}
          </ul>
          <Image
            src={image}
            className="max-w-[424px] h-full mx-auto"
            alt=""
            width={424}
            height={678}
          />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default FetureEachService;
