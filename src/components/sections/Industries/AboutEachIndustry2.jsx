"use client";
import { useContext, useState } from "react";

import { FullWidthContent } from "../../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton, Button } from "../../Buttons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AboutEachIndustry2 = ({
  title,
  detail,
  buttonText,
  details,
  image,
  slug,
}) => {
  const {
    theme: { button },
  } = useContext(DesignContext);
  const elastomersDetails = [
    {
      buttonText: "Parylene’s Dry-Film Lubricity",
      detail:
        "The inherent and excellent dry lubricity characteristics with a coefficient of friction measurements approaching that of PTFE to a range of applications make Parylene a valuable asset as a dry-film lubricant, particularly as a coating for surgical instruments. The barrier performance and chemical inertness of parylene are particularly useful for biomedical objects or single-use medical instrumentation items with rubber seals, plungers or diaphragms. Such substrates may come in temporary or prolonged contact with human tissues, and could otherwise be compromised.",
    },
    {
      buttonText: "Parylene’s Barrier and Elasticity",
      detail:
        "Parylene coating is also used for silicone rubber keypads, preventing printed legends, resisting surface wear, and resolving tackiness issues while protecting the keyboard against dirt, dust and oils. The applied film has high dielectric strength, and does not compromise the electrical insulating properties of underlying rubber components. Parylene provides a pinhole-free barrier to protect against moisture, corrosive body fluids, common gasses, fungus and temperature. Increased coating thicknesses further improve chemical and solvent resistance without adding weight or materially affecting the substrate’s elasticity.",
    },
  ];
  const [manualDetail, setManualDetail] = useState(elastomersDetails[0].detail);
  const [active, setActive] = useState(elastomersDetails[0].buttonText);
  const handleDetailToggle = (item) => {
    setManualDetail(item.detail);
    setActive(item.buttonText);
  };

  return (
    <section className="py-8 lg:py-12 bg-secondary">
      <FullWidthContent>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-x-4">
          <div className="flex-1 mt-auto mb-auto text-center lg:text-left">
            <h1 className="mb-5 text-[28px] md:text-5xl">{title}</h1>
            {/* If section have multiple details */}
            {slug === "elastomers" && (
              <>
                <div className="flex flex-wrap justify-center item-center lg:justify-start item gap-3 mb-5">
                  {elastomersDetails.map((item) => {
                    return (
                      <Button
                        key={item.buttonText}
                        onClick={() => handleDetailToggle(item)}
                        className={cn(
                          "w-full max-w-[280px] px-4 py-3 bg-white ring-1 ring-black font-pop400 text-xs lg:text-sm",
                          active === item.buttonText && "bg-primary text-white"
                        )}
                      >
                        {item.buttonText}
                      </Button>
                    );
                  })}
                </div>
                <p className="mb-7 md:mb-8 text-[13px] md:text-[15px]">
                  {manualDetail}
                </p>
              </>
            )}
            {/* If section have multiple details */}
            {detail && (
              <p className="mb-7 md:mb-8 text-[13px] md:text-[15px] whitespace-pre-line">
                {detail}
              </p>
            )}
            <Link href="#contact">
              <AnimateButton
                className={`${button.red} shadow-[0_1px_8px_0px_rgba(0,0,0,0.0)] shadow-red32 hover:shadow-none before:bg-primary hover:bg-primary`}
              >
                {buttonText}
              </AnimateButton>
            </Link>
          </div>
          <Image
            className="w-full h-auto mb-5 max-w-[674px] mx-auto lg:max-h-none lg:mb-0 lg:w-[46vw] lg:max-w-[674px] object-contain"
            src={image}
            alt={title}
            width={665}
            height={701}
          />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default AboutEachIndustry2;
