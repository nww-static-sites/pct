import React from "react";
import DimerProperties from "./DimerProperties";
import ParyleneDimer from "./ParyleneDimer";
import HeroSection from "../HeroSection";
import { HeroContentBox } from "@/components/containers";
import Image from "next/image";
import AboutMachineSales from "./AboutMachineSales";
import ContactUs from "../ContactUs";

export default function Dimer() {
  return (
    <React.Fragment>
      <HeroSection
        bgImage="/images/dimer-bg.jpg"
        className={"min-h-0"}
        col={"flex-col"}
      >
        <HeroContentBox
          title={"Dimer & Conformal Machine Sales"}
          detail={"Coating Options For All Your Protective Needs."}
          buttonText={"Buy Now"}
          buttonLink=""
          guide={"Contact us directly to complete your purchase."}
        />
        <div className="lg:col-span-2 text-secondary mx-auto max-w-[496px] md:max-w-none">
          <Image
            src={"/images/dimer-type-c.png"}
            alt=""
            className="mt-auto -mb-10"
            width={532}
            height={538}
          />
        </div>
      </HeroSection>
      <DimerProperties />
      <ParyleneDimer />
      <AboutMachineSales />
      <ContactUs />
    </React.Fragment>
  );
}
