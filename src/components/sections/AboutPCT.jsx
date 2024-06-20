"use client";
import { useContext } from "react";

import { FullWidthContent } from "../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton } from "../Buttons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AboutPCT = () => {
  const {
    theme: { button },
  } = useContext(DesignContext);
  const route = useRouter();

  return (
    <section className="bg-white pb-12 bg-[url('/images/lines.svg')] bg-cover bg-center bg-no-repeat">
      <FullWidthContent>
        <div className="flex-column lg:flex lg:gap-x-16">
          <motion.div
            initial={{ opacity: 0, scale: 0, originX: 0.2, originY: 0.2 }}
            whileInView={{ opacity: 1, scale: 1, originX: 0.2, originY: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              className="w-full h-auto mb-8 max-h-[420px] md:max-h-[320px] lg:max-h-none lg:mb-0 lg:w-[36vw] lg:max-w-[519px] object-cover"
              src="/images/home-about-img.png"
              alt=""
              width={519}
              height={727}
            />
          </motion.div>
          <div className="flex-1 mt-auto mb-auto text-center lg:text-left overflow-x-hidden">
            <motion.div
              initial={{ x: "40%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="inline h-line text-xs md:text-sm mb-1 before:bg-red before:w-[30px] before:h-[2px] pl-[36px] text-red">
                ABOUT US
              </h2>
              <h1 className="mb-5 text-[28px] md:text-5xl">
                About PCT Para-Coat Technolgies
              </h1>
              <p className="font-pop500 mb-4 md:mb-8 text-[13px] md:text-[16px]">
                {`Para-Coat Technologies, Inc. was established in 2010. We are an `}
                <Link
                  href="https://www.iso.org/standard/62085.html"
                  target="_blank"
                  className="underline"
                  >
                  ISO 9001:2015
                </Link>
                {", "}
                <Link
                  href="https://www.iso.org/standard/59752.html"
                  target="_blank"
                  className="underline"
                  >
                  ISO 13485:2016
                </Link>
                {` and `}
                <Link
                  href="https://www.pmddtc.state.gov/ddtc_public/ddtc_public?id=ddtc_public_portal_itar_landing"
                  target="_blank"
                  className="underline"
                >
                  ITAR-certified
                </Link>
                {`manufacturer service provider specializing in the application of Parylene, Acrylic, Polyurethane, Silicone, and Epoxy conformal coatings.`}
              </p>
              <p className="mb-7 md:mb-8 text-[13px] md:text-[15px]">
                PCT conformal coatings find wide-ranging applications in
                medical, electronic, automotive, military & aerospace
                industries. We also offer Parylene equipment sales and
                consulting. We are committed to providing consistent, quality
                service at a competitive price to ensure that we meet and/or
                exceed our customers’ expectations. On May 1, 2017, Para-Coat
                Technologies, Inc. moved to a 30,000-square-foot ESD-protected
                facility located in downtown Johnstown, Pennsylvania. Our
                responsible personnel adheres to ESD precautions at all times to
                be performed in accordance with IPC-J-STD-001. All assemblies
                are properly handled, thoroughly inspected, and tracked through
                a fully documented production process. A 100% visual inspection
                is performed and coating thickness is measured to ensure and
                maintain the highest quality possible.
              </p>
              <AnimateButton
                className={`${button.red} w-[180px] h-[52px] shadow-[0_1px_8px_0px_rgba(0,0,0,0.0)]  shadow-red32 hover:shadow-none before:bg-primary hover:bg-primary`}
                onClick={() => route.push("/about")}
              >
                Learn More
              </AnimateButton>
            </motion.div>
          </div>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default AboutPCT;
