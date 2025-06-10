"use client";

import { FullWidthContent } from "@/components/Sections";
import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import AboutEachService from "@/components/sections/Service/AboutEachService";
import FetureEachService from "@/components/sections/Service/FeatureEachService";
import HeroSection from "@/components/sections/HeroSection";
import { DesignContext } from "@/context/design";
import { useContext, useMemo } from "react";
import { notFound } from "next/navigation";

export default function Service({ slug }) {
  const {
    data: { ourServices },
  } = useContext(DesignContext);

  const service = useMemo(() => {
    const getService = () => ourServices.filter((item) => item.slug === slug);
    const data = getService();
    if (data.length === 0) {
      notFound();
    }
    return data[0];
  }, [ourServices, slug]);

  const {page:{hero, coating, features}} = service

  if (service.page) {
    return (
      <div>
        
        <AboutEachService
          title={coating.title}
          subTitle={coating.subTitle}
          detail={coating.detail}
          subTitle2={coating.title2}
          detail2={coating.detail2}
          buttonText={coating.buttonLabel}
          image={coating.image}
        />
        <FetureEachService
          subTitle={features.subTitle}
          title={features.title}
          features={features.properties}
          image={features.image}
        />
        <HeroSection bgImage={hero.bgImage} className={"py-5 md:py-10"}>
          <HeroContentBox
            title={hero.title}
            detail={hero.detail}
          />

          <GuideForm
            title={"Download Our Guide"}
            detail={
              "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
            }
          />
        </HeroSection>
      </div>
    );
  }
  
}
