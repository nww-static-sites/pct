"use client";

import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import HeroSection from "@/components/sections/HeroSection";
import { DesignContext } from "@/context/design";
import { useContext, useMemo } from "react";
import { notFound } from "next/navigation";
import IndustryExamples from "./Example";
import AboutEachIndustry from "./AboutEachIndustry";
import AboutEachIndustry2 from "./AboutEachIndustry2";
import IndustryBenefits from "./IndustryBenefits";

export default function Industry({ slug }) {
  const {
    data: { industriesServed },
  } = useContext(DesignContext);

  const industry = useMemo(() => {
    const getIndustry = () =>
      industriesServed.filter((item) => item.slug === slug);
    const data = getIndustry();
    if (data.length === 0) {
      notFound();
    }
    return data[0];
  }, [industriesServed, slug]);

  const {
    page: { hero, reliability, reliability2, benefits, examples },
  } = industry;

  return (
    <div>
      <HeroSection videoSrc={hero.bgImage} className={"py-5 md:py-10"}>
        <HeroContentBox
          title={hero.title}
          customDetail={
            <p className="font-pop500 text-[13px] md:text-[22px] mb-5 md:mb-10">{hero.detail}</p>
          }
          themeColor={hero?.themeColor}
        />

        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
          themeColor={hero?.themeColor}
          formTheme={hero?.formTheme}
        />
      </HeroSection>
      <AboutEachIndustry
        title={reliability.title}
        subTitle={reliability.subTitle}
        detail={reliability.detail}
        buttonText={reliability.buttonText}
        image={reliability.image}
        slug={slug}
        gapX={"gap-x-9"}
      />
      {reliability2?.title && (
        <AboutEachIndustry2
          title={reliability2.title}
          detail={reliability2.detail}
          buttonText={reliability2.buttonText}
          image={reliability2.image}
          slug={slug}
          title2={reliability2.title2}
        />
      )}
      <IndustryBenefits
        benefits={benefits.benefits}
        title={benefits.title}
        subTitle={benefits.subTitle}
        detail={benefits.detail}
      />

      {examples?.examples && (
        <IndustryExamples
          examples={examples.examples}
          title={examples.title}
          subTitle={examples.subTitle}
          detail={examples.detail}
        />
      )}
    </div>
  );
}
