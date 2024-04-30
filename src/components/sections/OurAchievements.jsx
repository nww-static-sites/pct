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

  const PhoneImage = motion(Image);

  return (
    <section className="bg-white pt-[72px] bg-[url('/images/bg_our_achievements.jpg')] bg-no-repeat bg-cover">
      <FullWidthContent className="text-center mb-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-xs md:text-sm mb-1 text-red font-rob500 tracking-widest">
            OUR COMPANY STATS
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
                <h1 className="font-playFair700 text-6xl">
                  {item.value}
                  {item?.unit ? (
                    <span className="text-2xl md:text-3xl">{item.unit}</span>
                  ) : (
                    ""
                  )}
                </h1>
                <h2 className="text-[16px] lg:text-[20px] max-w-[201px]">
                  {item.shortDetail}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </FullWidthContent>
      <div className="min-h-[220px] md:min-h-[200px] bg-red80 bg-clip-path-2 text-secondary">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <FullWidthContent className="flex flex-col md:flex-row pt-16 pb-6 md:pt-24 md:pb-6 gap-y-4 gap-x-44 mt-auto mb-auto">
            <div className="flex-1 max-w-[554px] mx-auto space-y-2 text-center md:text-left">
              <h4 className="text-2xl lg:text-4xl">Request a Proposal</h4>
              <p className="text-xs lg:text-[16px]">
                Ready to fortify your electronic components with our
                cutting-edge conformal coating solutions? Call us now or email
                us.
              </p>
            </div>
            <div className="flex-1 max-w-[554px] mx-auto flex items-center justify-center gap-x-2">
              <svg
                width="83"
                height="83"
                viewBox="0 0 83 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="83" height="83" rx="41.5" fill="#DC1D28" />
                <motion.g
                  clip-path="url(#clip0_3010_1650)"
                  transition={{
                    repeatDelay: 1.5,
                    repeatType: "reverse",
                    repeat: Infinity,
                  }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.3 }}
                  exit={{ scale: 1 }}
                >
                  <path
                    d="M42.1612 29.1201C42.1612 28.809 42.2701 28.5445 42.4878 28.3268C42.7056 28.109 42.9701 28.0001 43.2812 28.0001C45.3967 28.0001 47.3412 28.529 49.1145 29.5868C50.8878 30.6445 52.3034 32.0601 53.3612 33.8334C54.4189 35.6068 54.9478 37.5512 54.9478 39.6668C54.9478 39.9779 54.8389 40.2579 54.6212 40.5068C54.4034 40.7557 54.1234 40.8645 53.7812 40.8334C53.4389 40.8023 53.1589 40.6779 52.9412 40.4601C52.7234 40.2423 52.6145 39.9779 52.6145 39.6668C52.6145 37.9868 52.1945 36.4312 51.3545 35.0001C50.5145 33.569 49.3789 32.4334 47.9478 31.5934C46.5167 30.7534 44.9612 30.3334 43.2812 30.3334C42.9701 30.3334 42.7056 30.2245 42.4878 30.0068C42.2701 29.789 42.1612 29.5245 42.1612 29.2134V29.1201ZM43.2812 35.0001C44.5878 35.0001 45.6923 35.4512 46.5945 36.3534C47.4967 37.2557 47.9478 38.3601 47.9478 39.6668C47.9478 39.9779 48.0567 40.2579 48.2745 40.5068C48.4923 40.7557 48.7723 40.8645 49.1145 40.8334C49.4567 40.8023 49.7367 40.6779 49.9545 40.4601C50.1723 40.2423 50.2812 39.9779 50.2812 39.6668C50.2812 38.4223 49.9701 37.2557 49.3478 36.1668C48.7256 35.0779 47.8701 34.2223 46.7812 33.6001C45.6923 32.9779 44.5256 32.6668 43.2812 32.6668C42.9701 32.6668 42.7056 32.7757 42.4878 32.9934C42.2701 33.2112 42.1612 33.4912 42.1612 33.8334C42.1612 34.1757 42.2701 34.4557 42.4878 34.6734C42.7056 34.8912 42.9701 35.0001 43.2812 35.0001ZM53.9212 47.5068C54.6056 48.2534 54.9478 49.1245 54.9478 50.1201C54.9478 51.1156 54.6056 51.9556 53.9212 52.6401L52.8012 53.8534C50.9967 55.5956 48.6634 56.249 45.8012 55.8134C43.2501 55.4401 40.5745 54.2579 37.7745 52.2668C35.0367 50.3379 32.7034 48.0045 30.7745 45.2668C28.7212 42.4668 27.5078 39.7912 27.1345 37.2401C26.699 34.3779 27.3212 32.0134 29.0012 30.1468L30.4012 29.0268C31.0856 28.3423 31.9256 28.0001 32.9212 28.0001C33.9167 28.0001 34.7567 28.3423 35.4412 29.0268L37.5878 31.9201C38.2723 32.6045 38.6145 33.429 38.6145 34.3934C38.6145 35.3579 38.2723 36.1823 37.5878 36.8668L36.2812 38.6401C37.0278 40.4445 38.1012 42.0468 39.5012 43.4468C40.9012 44.8468 42.5034 45.9201 44.3078 46.6668L46.0812 45.3601C46.7656 44.6757 47.5901 44.3334 48.5545 44.3334C49.5189 44.3334 50.3434 44.6757 51.0278 45.3601L53.9212 47.5068ZM52.2412 49.1868C51.3078 48.5023 50.3745 47.7868 49.4412 47.0401C49.1923 46.7912 48.8967 46.6668 48.5545 46.6668C48.2123 46.6668 47.9167 46.7912 47.6678 47.0401L45.2412 48.9068C44.9301 49.2179 44.5567 49.2801 44.1212 49.0934C41.7567 48.2223 39.6723 46.8845 37.8678 45.0801C36.0634 43.2757 34.7256 41.1912 33.8545 38.8268C33.6678 38.3912 33.7301 38.0179 34.0412 37.7068L35.9078 35.2801C36.1567 35.0312 36.2812 34.7357 36.2812 34.3934C36.2812 34.0512 36.1567 33.7557 35.9078 33.5068L33.7612 30.7068C33.5123 30.4579 33.2167 30.3334 32.8745 30.3334C32.5323 30.3334 32.2367 30.4579 31.9878 30.7068L30.5878 31.9201C29.3434 33.4134 29.0012 35.3423 29.5612 37.7068C30.059 39.8223 31.2101 42.0312 33.0145 44.3334C34.6945 46.5734 36.7012 48.5334 39.0345 50.2134C41.3678 51.8934 43.5923 52.9512 45.7078 53.3868C48.0101 53.8845 49.8145 53.5112 51.1212 52.2668L52.1478 51.0534C52.4589 50.8045 52.6145 50.509 52.6145 50.1668C52.6145 49.8245 52.4901 49.4979 52.2412 49.1868Z"
                    fill="#F9F9F9"
                  />
                </motion.g>
                <defs>
                  <clipPath id="clip0_3010_1650">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="matrix(1 0 0 -1 27 56)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="">
                <h1 className="font-playFair700 text-[20px] lg:text-4xl mb-3">
                  <Link href="tel:8142544376">CALL NOW: (814) 254 - 4376</Link>
                </h1>
                <p className="text-sm lg:text-[16px]">
                  Or{" "}
                  <a
                    href="mailto:info@paracoattechnology.ca"
                    className="underline"
                  >
                    Email Us.
                  </a>
                </p>
              </div>
            </div>
          </FullWidthContent>
        </motion.div>
      </div>
    </section>
  );
};

export default OurAchievements;
