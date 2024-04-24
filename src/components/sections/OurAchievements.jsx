"use client";
import { useContext } from "react";

import { FullWidthContent } from "../Sections";
import { DesignContext } from "@/context/design";
import Image from "next/image";
import { AnimateButton } from "../Buttons";
import { motion } from "framer-motion";
import Link from "next/link";

const OurAchievements = () => {
  const {
    data: { ourAchievements },
  } = useContext(DesignContext);

  return (
    <section className="bg-white pt-[72px] bg-[url('/images/bg_our_achievements.jpg')] bg-no-repeat bg-cover">
      <FullWidthContent className="text-center mb-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-xs md:text-sm mb-1 text-red font-rob500">
            Our Company Stats
          </h2>
          <h1 className="mb-11 text-[28px] md:text-5xl text-secondary">
            Our Achievements
          </h1>
        </motion.div>
        <div className="flex flex-col md:flex-row max-w-[1300px] items-center justify-between mx-auto gap-[52px]">
          {ourAchievements.map((item) => {
            return (
              <motion.div
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                key={item.id}
                className="text-secondary space-y-4"
              >
                <h1 className="font-playFair700 text-6xl">{item.value}</h1>
                <h2 className="text-[16px] lg:text-[20px]">{item.shortDetail}</h2>
              </motion.div>
            );
          })}
        </div>
      </FullWidthContent>
      <div className="min-h-[220px] bg-red80 bg-clip-path-1 text-secondary">
        <motion.div
          initial={{ y: 60, opacity: 0}}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <FullWidthContent className="flex flex-col md:flex-row pt-10 pb-6 md:pt-24 md:pb-6 gap-y-4 gap-x-44 mt-auto mb-auto">
            <div className="flex-1 max-w-[554px] mx-auto space-y-2 text-center md:text-left">
              <h4 className="text-2xl lg:text-4xl">Request a Proposal</h4>
              <p className="text-xs lg:text-[16px]">
                Ready to fortify your electronic components with our
                cutting-edge conformal coating solutions? Call us now or email
                us.
              </p>
            </div>
            <div className="flex-1 max-w-[554px] mx-auto flex items-center justify-center gap-x-2">
              <Image
                src="/images/icons/phone-bg.svg"
                alt=""
                width={83}
                height={83}
                className="w-[65px] h-[65px] md:w-[83px] md:h-[83px]"
              />
              <div className="">
                <h1 className="font-playFair700 text-[20px] lg:text-4xl mb-3">
                  <Link href="tel:8142544376">CALL NOW: (814) 254 - 4376</Link>
                </h1>
                <p className="text-sm lg:text-[16px]">Or <a href="mailto:info@paracoattechnology.ca" className="underline">Email Us.</a></p>
              </div>
            </div>
          </FullWidthContent>
        </motion.div>
      </div>
    </section>
  );
};

export default OurAchievements;
