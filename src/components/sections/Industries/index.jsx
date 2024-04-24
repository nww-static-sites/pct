"use client";

import { FullWidthContent } from "@/components/Sections";
import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import FetureEachService from "@/components/sections/Service/FeatureEachService";
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
      <HeroSection videoSrc={hero.bgImage}>
        <HeroContentBox title={hero.title} detail={hero.detail} />

        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <AboutEachIndustry
        title={reliability.title}
        subTitle={reliability.subTitle}
        detail={reliability.detail}
        buttonText={reliability.buttonText}
        image={reliability.image}
        slug={slug}
      />
      {reliability2?.title && (
        <AboutEachIndustry2
          title={reliability2.title}
          detail={reliability2.detail}
          buttonText={reliability2.buttonText}
          image={reliability2.image}
          slug={slug}
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
