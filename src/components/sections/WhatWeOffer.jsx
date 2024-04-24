"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FullWidthContent } from "../Sections";
import Image from "next/image";
import { SlideColorButton } from "../Buttons";
import { DesignContext } from "@/context/design";
import { useContext } from "react";
import { HorizontalGuidForm, HorizontalGuideForm } from "../forms";
import { useRouter } from "next/navigation";

const WhatWeOffer = () => {
  const {
    theme: { button },
    data: {ourServices}
  } = useContext(DesignContext);
  const router = useRouter();

  return (
    <section className="bg-white pt-16 pb-9 lg:pb-0">
      <FullWidthContent>
        <div className="text-center max-w-[1082px] mx-auto">
          <h2 className="text-red text-xs md:text-[16px] mb-1 tracking-widest">
            OUR SERVICES
          </h2>
          <h1 className="text-3xl md:text-5xl mb-2 md:mb-4">What We Offer</h1>
          <p className="text-black-content text-[13px] md:text-sm">
            Explore our comprehensive range of specialized coatings—meticulously
            applied for optimal protection, ensuring your electronic components
            thrive in any environment.
          </p>
        </div>
        <div>
          <Splide
            aria-label="What We Offers"
            tag="div"
            options={{
              type: "loop",
              fixedHeight: "auto",
              focus: "left",
              padding: { left: "0px", right: "120px" },
              gap: 40,
              pagination: false,
              arrows: false,
              perPage: 4,
              breakpoints: {
                768: {
                  gap: 24,
                  perMove: 1,
                  perPage: 3,
                  padding: { left: "0px", right: "80px" },
                },
                640: {
                  gap: 18,
                  perMove: 1,
                  perPage: 1,
                  padding: { left: "0px", right: "0px" },
                },
              },
            }}
          >
            {ourServices.map((item) => {
              return (
                <SplideSlide
                  key={item.id}
                  className="min-w-[280px] bg-transparent py-10 max-w-[280px] md:max-w-none"
                >
                  <div className="bg-white shadow-card h-full-20 relative mt-5 flex flex-col">
                    <div className="relative -translate-y-5 px-5 mb-2">
                      <Image
                        src={item.mainImage}
                        alt=""
                        className="w-full"
                        width={234}
                        height={144}
                      />
                      <Image
                        src={item.image}
                        alt=""
                        className="absolute -bottom-[33px] right-10"
                        width={75}
                        height={75}
                      />
                    </div>
                    <div className="px-5 mb-[20px]">
                      <h5 className="text-lg mb-3">{item.title}</h5>
                      <p className="font-pop400 text-sm text-gret">
                        {item.shortDetail}
                      </p>
                    </div>
                    <SlideColorButton
                      className={`${button.icon} mb-0 mt-auto bg-white before:bg-red text-red hover:text-secondary justify-start`}
                      onClick={(e) => router.push(`/services/${item.slug}`)}
                    >
                      READ MORE{" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 8L22 12L18 16"
                          className="stroke-red group-hover:stroke-secondary transition-all duration-300"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12H22"
                          className="stroke-red group-hover:stroke-secondary transition-all duration-300"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </SlideColorButton>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </FullWidthContent>
      <FullWidthContent className="px-2">
        <div className="bg-red relative py-[72px] px-6 rounded-[20px] text-center">
          <h1 className="text-5xl text-secondary">
            <span className="text-shadow">Download</span> Our Guide
          </h1>
          <p className="text-[16px] font-pop text-secondary mb-12 md:mb-20">
            {
              "Unlock valuable insights and expertise by downloading our guide for free – your gateway to knowledge awaits!"
            }
          </p>
          <HorizontalGuideForm />
          <div className="">
            <Image
              src="/images/shapes.svg"
              className="w-auto h-full absolute top-0 right-0 max-w-[440px] md:max-w-[663px]"
              alt=""
              width={663}
              height={377}
            />
          </div>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default WhatWeOffer;
