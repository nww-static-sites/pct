import React from "react";
import HeroSection from "../HeroSection";
import { HeroContentBox } from "@/components/containers";
import Image from "next/image";
import ContactUs from "../ContactUs";
import OpenPositions from "./OpenPosition";
import WhyJoinTeam from "./WhyJoinTeam";
import Link from "next/link";

export default function Career() {
  return (
    <React.Fragment>
      <HeroSection
        bgImage="/images/blogs-bg.jpg"
        className={"min-h-0"}
        col={"flex-col"}
      >
        <HeroContentBox
          title={"Career Opportunities"}
          detail={
            "Join our team and embark on a rewarding career where innovation meets impact. We foster a dynamic and collaborative work environment, empowering individuals to unleash their potential and drive meaningful change. With"
          }
          buttonText={"Download Employee Application"}
          buttonLink="/docs/Employee Application.pdf"
          buttonTarget={"_blank"}
          customGuide={
            <p className="font-pop400 text-xs md:text-sm mb-10">
              {"Downloadable employee application - Please email pdf to "}
              <Link href="mailto:dpribish@pctcc.com" className="underline">
                dpribish@pctcc.com
              </Link>
              {"and"}
              <Link href="mailto:jruiz@pctcc.com" className="underline">
                jruiz@pctcc.com
              </Link>
            </p>
          }
        />
        <div className="lg:col-span-2 text-secondary mx-auto max-w-[467px] md:max-w-none">
          <Image
            src={"/images/careers.png"}
            alt=""
            className="mt-auto -mb-10 w-full h-auto max-w-[467px] md:max-w-[567px]"
            width={567}
            height={442}
          />
        </div>
      </HeroSection>
      <OpenPositions />
      <WhyJoinTeam />

      <ContactUs />
    </React.Fragment>
  );
}
