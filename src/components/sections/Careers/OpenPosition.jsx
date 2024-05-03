"use client";
import { Button } from "@/components/Buttons";
import { FullWidthContent } from "@/components/Sections";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function OpenPositions() {
  const {
    theme: { button },
    data: { careers },
  } = useContext(DesignContext);
  const route = useRouter();
  return (
    <section className="pt-20 pb-10 bg-secondary bg-[url('/images/lines.svg')] bg-halfHeight lg:bg-minusTop180">
      <FullWidthContent className={"max-w-[1920px]"}>
        <h2 className="text-xs md:text-sm text-red text-center mb-1 font-rob700 widest">
          JOBS
        </h2>
        <h1 className="text-[28px] md:text-5xl text-center mb-9">
          Open Positions
        </h1>
        <div className="rounded-2xl bg-white shadow-[0px_8px_20px_0px] shadow-primary05">
          {careers.length ? (
            careers.map((career, index) => {
              return (
                <div
                  key={career.id}
                  className={cn(
                    "px-4 py-9 flex justify-between items-start gap-x-4 border-gret28 border-b-[1px]",
                    index === careers.length - 1 && "border-b-0"
                  )}
                >
                  <div className="flex-1 w-full">
                    <h4 className="text-[16px] md:text-[20px] mb-1">
                      {career.title}
                    </h4>
                    <p className="text-gret text-xs">{career.jobType}</p>
                  </div>
                  <Button
                    onClick={() => route.push(`/open-position/${career.slug}`)}
                    className={`${button.red} overflow-hidden w-[162px] h-[46px] md:w-[220px] md:h-[52px] font-rob500 text-[16px] rounded-2xl flex items-center justify-between`}
                  >
                    <span className="flex-1 text-left pl-4">View Opening</span>
                    <span className="w-[40px] h-full grid place-content-center bg-primary10">
                      <svg
                        width="5"
                        height="8"
                        viewBox="0 0 5 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.3173 3.67378C4.47124 3.8622 4.46035 4.14034 4.28462 4.31606L1.08436 7.51633C0.897022 7.70366 0.59329 7.70366 0.405954 7.51633C0.218617 7.32899 0.218617 7.02526 0.405954 6.83792L3.26937 3.97451L0.401489 1.10663C0.214152 0.919291 0.214152 0.615558 0.401489 0.428222C0.588825 0.240886 0.892557 0.240886 1.07989 0.428222L4.26863 3.61696C4.28657 3.6349 4.3028 3.65391 4.3173 3.67378Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Button>
                </div>
              );
            })
          ) : (
            <h1>No Jobs Found</h1>
          )}
        </div>
      </FullWidthContent>
    </section>
  );
}
