"use client";
import React from "react";
import HeroSection from "../HeroSection";
import { HeroContentBox } from "@/components/containers";
import ContactUs from "../ContactUs";
import { GuideForm } from "@/components/forms";
import { FullWidthContent } from "@/components/Sections";
import { AllBlogs } from "./AllBlogs";
import { AnimateButton } from "@/components/Buttons";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const {
    theme: { button },
  } = useContext(DesignContext);
  const route = useRouter();
  return (
    <React.Fragment>
      <HeroSection
        bgImage="/images/blogs-bg.jpg"
        className={"min-h-0"}
        col={"flex-col"}
      >
        <HeroContentBox
          title={"Our Blogs"}
          detail={
            "Explore our diverse range of insightful blogs covering industry trends, tips, and expert advice. Stay informed and inspired with our engaging content."
          }
          buttonText={"Get In Touch"}
          buttonLink=""
        />
        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>
      <section className="py-20">
        <FullWidthContent className="flex flex-col items-center md:items-start lg:flex-row gap-x-10">
          <AllBlogs />
          <div className="pt-12 px-3 w-full md:w-[354px] mx-auto">
            <div className="text-center text-secondary bg-black rounded-2xl px-4 py-9 max-w-[424px] lg:max-w-[324px] mx-auto shadow-[0px_4px_29px_0px] shadow-gret28">
              <h2 className="font-rob700 md:text-3xl mb-3 mx-2">
                Schedule a Call With Us
              </h2>
              <p className="mb-9 text-xs">
                Ready to discuss your project or have questions about our
                services? Book a call with us! Our team is here to help and
                provide guidance tailored to your needs.
              </p>
              <AnimateButton
                className={`${button.red} before:bg-secondary hover:bg-secondary hover:text-primary`}
                onClick={() => route.push("#contact")}
              >
                Schedule a Call
              </AnimateButton>
            </div>
          </div>
        </FullWidthContent>
      </section>

      <ContactUs />
    </React.Fragment>
  );
}
