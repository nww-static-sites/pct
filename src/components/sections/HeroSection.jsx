import { FullWidthContent } from "../Sections";
import { cn } from "@/lib/utils";

const HeroSection = ({ children, videoSrc, bgImage, className, col }) => {
  const style = bgImage
    ? {
      background: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgrondPosition: "center",
      backgroundSize: "cover",
      backgroundColor: "var(--color-black)",
      }
    : {};

  return (
    <section
      style={style}
      className={cn(
        "min-h-[628px] flex relative py-10 items-center justify-center",
        className && className
      )}
    >
      <FullWidthContent className={"w-full"}>
        <div
          className={cn(
            "flex flex-col-reverse text-xl lg:grid lg:grid-cols-5 gap-x-24 gap-y-6 lg:place-content-center items-center text-center lg:text-left",
            col && col
          )}
        >
          {children}
        </div>
      </FullWidthContent>

      {videoSrc && (
        <div className="w-full h-full absolute top-0 -z-10">
          <video loop muted autoPlay className="w-full h-full object-cover">
            <source src={`${videoSrc}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="bg-primary45 w-full h-full absolute top-0"></div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
