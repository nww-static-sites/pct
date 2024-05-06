"use client";

import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import AboutEachService from "@/components/sections/Service/AboutEachService";
import HeroSection from "@/components/sections/HeroSection";
import TeamCard from "@/components/TeamCard";
import { FullWidthContent } from "@/components/Sections";
import ContactUs from "@/components/sections/ContactUs";
import { useContext } from "react";
import { DesignContext } from "@/context/design";



export default function About() {
  const {
    data: { MeetTheTeam },
  } = useContext(DesignContext);
  return (
    <div>
      <HeroSection bgImage="/images/about-us-banner.jpg">
        <HeroContentBox
          title={"About Us"}
          detail={
            "Para-Coat Technologies has been dedicated for over 10 years to providing companies with lasting protection from various industries with our certified processes and diverse set of conformal coatings fit to withstand harsh environments. We take diligence and attentiveness with every task to exceed expectations, and to give your company the highest quality service that is needed for your success."
          }
        />

        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <AboutEachService
        title={"Our Story"}
        subTitle={"RELIABILITY THAT LASTS"}
        detail={
          "Para-Coat Technologies, Inc. was established in 2010. We are an ISO 9001:2015, ISO 13485:2016 and ITAR certified manufacturer service provider specializing in the application of Parylene, Acrylic, Polyurethane, Silicone, and Epoxy conformal coatings. PCT conformal coatings find wide-ranging application in medical, electronic, automotive, military & aerospace industries. We also offer Parylene equipment sales and consulting. We are committed to providing consistent, quality service at a competitive price to ensure that we meet and/or exceed our customers’ expectations."
        }
        buttonText={"Contact Us Now"}
        image={"/images/about-us-story.jpg"}
      />
      <FullWidthContent className="pt-12 md:py-20 bg-secondary">
        <h2 className="text-xs text-center md:text-sm mb-1 text-red tracking-widest font-rob700">
          TEAM
        </h2>
        <h1 className="mb-5 md:mb-9 text-[28px] text-center md:text-5xl">
          Meet The Team
        </h1>
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-7">
          {MeetTheTeam.map((item) => {
            return (
              <TeamCard
                key={item.id}
                image={item.image}
                name={item.name}
                position={item.designation}
                social={item.social}
              />
            );
          })}
        </div>
      </FullWidthContent>
      <ContactUs />
    </div>
  );
}
