"use client";
import React from "react";
import Image from "next/image";
import { DesignContext } from "@/context/design";
import { useContext } from "react";
import { FullWidthContent } from "@/components/Sections";

export default function WhyJoinTeam() {
  const {
    data: { whyJoinTeams },
  } = useContext(DesignContext);
  return (
    <section className="py-10 bg-secondary">
      <FullWidthContent>
        <h2 className="text-sm font-rob700 text-center tracking-widest text-red mb-1">
          WHY JOIN TEAM
        </h2>
        <h1 className="text-3xl md:text-6xl text-center mb-9">
          Benefits Of Working With Us
        </h1>
        <div className="flex flex-col md:flex-row max-w-[325px] md:max-w-none mx-auto flex-wrap justify-center gap-6">
          {whyJoinTeams.map((item) => {
            return (
              <div
                key={item.id}
                className="flex-1 md:flex-none grid place-content-center md:min-w-[220px] md:w-[324px] lg:w-[20vw] md:max-w-[324px] bg-white ring-[#f4f4f4] ring-1 rounded-[4px] px-5 py-8 space-y-3 text-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="mx-auto"
                  width={40}
                  height={40}
                />
                <h4 className="text-[16px] md:text-lg">{item.title}</h4>
                <p className="text-sm md:text-[16px]">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </FullWidthContent>
    </section>
  );
}
