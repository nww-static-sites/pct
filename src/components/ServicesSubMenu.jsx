"use client";

import Image from "next/image";
import { FullWidthContent } from "./Sections";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DesignContext } from "@/context/design";
import { useContext } from "react";
import { cn } from "@/lib/utils";

export const SubMenu = () => {
  const {
    data: { ourServices },
  } = useContext(DesignContext);
  const route = useRouter();
  return (
    <div className="absolute z-10 mt-6 left-0 w-full mx-auto overflow-hidden bg-primary px-6 py-8">
      <FullWidthContent>
        <h2 className="text-secondary text-lg mb-8">OUR SERVICES</h2>
        <div className="flex gap-4 flex-wrap">
          {ourServices.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative w-[30vw] max-w-[440px] flex items-center justify-center ring-1 ring-red gap-x-6 rounded-s p-6 text-sm hover:bg-red cursor-pointer"
                onClick={() => route.push(`/services/${item.slug}`)}
              >
                <div className="flex-auto text-white max-w-[234px]">
                  <h4 className="text-base">{item.title}</h4>
                  <p className="mt-[16px]">{item.shortDetail}</p>
                </div>
                <div>
                  <Image
                    src={item.image}
                    alt=""
                    className="w-[75px] h-[75px] max-w-none"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </FullWidthContent>
    </div>
  );
};

export const MobServicesSubMenu = ({ addClass }) => {
  const {
    data: { ourServices },
  } = useContext(DesignContext);
  return (
    <div className={cn(
      "w-full flex gap-1 flex-col overflow-hidden mt-3",
      addClass && "gap-y-4 mt-0"
    )}>
      {ourServices.map((item) => {
        return (
          <Link
            href={`/services/${item.slug}`}
            className={cn(
              "block text-sm font-rob300 leading-6 text-white",
              addClass && addClass
            )}
            key={item.id}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
