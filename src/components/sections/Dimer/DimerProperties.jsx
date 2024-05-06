import { FullWidthContent } from "../../Sections";
import Image from "next/image";
import PCTDimerCard from "../PCTDimerCard";

const DimerProperties = () => {
  return (
    <section className="bg-secondary pt-9 md:pt-[72px]">
      <FullWidthContent className="text-center mb-6">
        <h2 className="text-xs md:text-sm mb-1 text-red font-rob500 tracking-widest">
          PROPERTIES
        </h2>
        <h1 className="mb-11 text-[28px] md:text-5xl">Why Buy PCT’s dimer</h1>
        <div className=" grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 max-w-[300px] md:max-w-[1180px] justify-between mx-auto gap-[52px]">
          <PCTDimerCard src={"/images/icons/setting.svg"} title={"Compatibility"} detail={"PCT dimer works flawlessly with any parylene deposition equipment."}/>
          <PCTDimerCard className="md:pt-12" src={"/images/icons/purity.svg"} title={"Purity"} detail={"PCT'S dimer is more than 99.9% pure. The purest available on the market."}/>
          <PCTDimerCard src={"/images/icons/competitive.svg"} title={"Competitive Price"} detail={"Great quality product, made affordable for you. "}/>
        </div>
      </FullWidthContent>
      <div className="pt-28 pb-16 bg-clip-path-1 text-secondary bg-[url('/images/bg_our_achievements.jpg')] bg-no-repeat bg-cover bg-bottom">
        <FullWidthContent className=" flex items-center justify-between flex-col md:flex-row gap-x-44 max-w-[1202px]">
          <div className="space-y-2 text-center md:text-left lg:pt-10 pb-6 md:pt-16 md:pb-8 gap-y-4">
            <h4 className="text-2xl lg:text-4xl">Reliability That Lasts.</h4>
            <p className="text-xs lg:text-[16px]">
              Coatings and Dimers produced by PCT are certified biocompatible
              per USP Class VI.
            </p>
          </div>
          <div className="">
            <Image
              src={"/images/usp.png"}
              alt="USP"
              className="mr-0 max-w-[166px] lg:w-[14vw] lg:max-w-[206px]"
              width={206}
              height={177}
            />
          </div>
        </FullWidthContent>
      </div>
    </section>
  );
};

export default DimerProperties;
