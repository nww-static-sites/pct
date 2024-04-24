"use client";

import { cn } from "@/lib/utils";
import { AnimateButton } from "../Buttons";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import Link from "next/link";

const HeroContentBox = ({
  customH1,
  title,
  detail,
  className,
  buttonText,
  buttonLink,
  guide,
  buttonTarget
}) => {
  const {
    theme: { button },
  } = useContext(DesignContext);
  return (
    <div
      className={cn(
        "lg:col-span-3 text-secondary max-w-[740px] lg:max-w-[804px]",
        className && className
      )}
    >
      {customH1 ? (
        customH1
      ) : (
        <h1 className="text-3xl md:text-6xl mb-3">{title}</h1>
      )}

      <p className="font-pop400 text-xs md:text-sm mb-10">{detail}</p>
      <Link href={buttonLink ? buttonLink : "#contact"} target={buttonTarget ? buttonTarget : "_self"}>
        <AnimateButton
          className={`${button.red} before:bg-secondary hover:bg-secondary hover:text-primary mb-1`}
        >
          {buttonText ? buttonText : "Get in Touch"}
        </AnimateButton>
      </Link>
      {guide && <p className="font-pop400 text-xs md:text-sm mb-10">{guide}</p>}
    </div>
  );
};

export default HeroContentBox;
