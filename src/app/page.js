import { HeroContentBox } from "@/components/containers";
import { GuideForm } from "@/components/forms";
import HeroSection from "@/components/sections/HeroSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import AboutPCT from "@/components/sections/AboutPCT";
import OurAchievements from "@/components/sections/OurAchievements";
import OurCertifications from "@/components/sections/OurCertifications";
import ContactUs from "@/components/sections/ContactUs";
import HomeModal from "@/components/Modals/WelcomeModal/HomeModal";
import { WelcomeFormModal } from "@/components/WelcomeFormModal";

export const metadata = {
  title: "PCT Conformal Coating",
  // description: "PCT Conformal Coating",
};

export default function Home() {
  return (
    <main className="min-h-screen">
     
      <WhatWeOffer />
      <AboutPCT />
      <OurAchievements />
      <OurCertifications />
     <HeroSection videoSrc={"/videos/hero-video-home.mp4"}>
        <HeroContentBox
          customH1={
            <h1 className="text-3xl md:text-6xl mb-3">
              Unveiling Excellence in{" "}
              <span className="text-red">Conformal Coating</span> Solutions
              <span className="text-red">.</span>
            </h1>
          }
          customDetail={
            <p className="font-pop400 text-xs md:text-sm mb-10 max-w-[800px] tracking-wide">
              {"At PCT Conformal Coating, we bring precision and innovation to the forefront, ensuring your electronic components are shielded with the highest standard of protection. Our exclusive focus lies in the specialization of "}
              <span className="font-pop500 text-sm md:text-[16px]">Parylene Coating.</span>
            </p>
          }
        />

        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <ContactUs />
      <WelcomeFormModal />
    </main>
  );
}
