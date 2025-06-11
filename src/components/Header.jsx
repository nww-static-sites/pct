"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "public/pct_logo_148.png";
import { FullWidthContent } from "./Sections";
import { useContext, useEffect, useState } from "react";
import { DesignContext } from "@/context/design";
import { TextWithIcon } from ".";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import {
  headerContactList,
  headerSocialList,
  industriesServed,
  headerNavList,
} from "@/lib/data";
import { AnimateButton } from "./Buttons";
import { MobServicesSubMenu, SubMenu } from "./ServicesSubMenu";
import { IndustriesSubMenu, MobIndustriesSubMenu } from "./IndustiresSubMenu";
import { cn } from "@/lib/utils";

const Header = () => {
  const route = useRouter();
  const {
    theme: { button },
  } = useContext(DesignContext);
  const pathName = usePathname();
  const [change, setChanges] = useState(0);
  const [toggleServices, setToggleServices] = useState(false);
  const [toggleIndustries, setToggleIndustries] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  const linkClassValues = "text-sm text-secondary font-rob400";
  const mobMenuClass =
    "block py-3 text-base font-rob400 leading-6 text-white border-solid border-0 border-b-[1px] border-secondary";

  useEffect(() => {
    setChanges((prev) => prev++);
    setToggleIndustries(false);
    setToggleServices(false);
    setMenuModal(false);
  }, [pathName]);

  const handleServices = (e) => {
    setToggleServices(!toggleServices);
    setToggleIndustries(false);
  };
  const handleIndustriesServed = (e) => {
    setToggleIndustries(!toggleIndustries);
    setToggleServices(false);
  };

  return (
    <header className="bg-primary group sticky top-0 lg:-top-9 z-50">
      <FullWidthContent className="max-w-[1920px]">
        <div className="hidden lg:flex gap-x-6 items-center justify-between py-2">
          <div className="flex gap-x-6 items-center">
            {headerContactList.map((item, index) => {
              return (
                <div key={item.id} className="flex gap-x-6 items-center">
                  <Link href={item.href}>
                    <TextWithIcon leftIcon={item.icon} text={item.value} />
                  </Link>
                  {index === headerContactList.length - 1 ? (
                    ""
                  ) : (
                    <span className="h-full bg-gret w-[1px] text-transparent">
                      {"|"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-x-5 items-center">
            {headerSocialList.map((item) => {
              return (
                <div key={item.id}>
                  <Link href={item.href} target="_blank">
                    <TextWithIcon leftIcon={item.icon} text={item.value}/>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <nav
          className="flex items-center justify-between gap-x-4 py-4 md:py-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Para Coat Technologies</span>
              <Image
                className="h-11 md:h-[74px] w-auto object-contain"
                src={logo}
                alt=""
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
              onClick={() => setMenuModal(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                area-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center lg:gap-x-8">
            {headerNavList.length
              ? headerNavList.map((item) => {
                  const isActive = item.href.includes(pathName);
                  // const isActive = pathName === item.href;
                  // Service Sub Menu
                  if (item.value === "Services") {
                    return (
                      <div key={item.id}>
                        <Link
                          href=""
                          className={cn(
                            linkClassValues,
                            isActive ? "text-red" : "text-secondary"
                          )}
                          onClick={handleServices}
                        >
                          Services
                        </Link>

                        {toggleServices ? <SubMenu /> : null}
                      </div>
                    );
                  }
                  // Industires Served Sub Menu
                  if (item.value === "Industries Served") {
                    return (
                      <div key={item.id}>
                        <Link
                          href=""
                          className={cn(
                            linkClassValues,
                            isActive ? "text-red" : "text-secondary"
                          )}
                          onClick={handleIndustriesServed}
                        >
                          Industries Served
                        </Link>

                        {toggleIndustries ? <IndustriesSubMenu /> : null}
                      </div>
                    );
                  }
                  // Other Links
                  return (
                    <div key={item.id}>
                      <Link
                        href={item.href[0]}
                        className={cn(
                          linkClassValues,
                          isActive ? "text-red" : "text-secondary"
                        )}
                      >
                        {item.value}
                      </Link>
                    </div>
                  );
                })
              : ""}
          </div>

          <div className="hidden lg:flex flex-1 justify-end">
            <AnimateButton
              onClick={() => route.push("#contact", { scroll: true })}
              className={`${button.red} before:bg-secondary hover:bg-secondary hover:text-primary`}
            >
              Contact Us
            </AnimateButton>
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menus open state. --> */}
        {menuModal ? (
          <div
            className="lg:hidden bg-primary/20"
            role="dialog"
            aria-modal="true"
          >
            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
            <div className="fixed inset-0 z-10"></div>
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-5 py-4 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image className="h-11 w-auto sm:hidden" src={logo} alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMenuModal(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="">
                  <div className="">
                    {headerNavList.length
                      ? headerNavList.map((item) => {
                          const isActive = item.href.includes(pathName);
                          // const isActive = pathName === item.href;
                          // Service Sub Menu
                          if (item.value === "Services") {
                            return (
                              <div
                                key={item.id}
                                className="py-3 border-solid border-0 border-b-[1px] border-secondary"
                              >
                                <button
                                  type="button"
                                  className={cn(
                                    "flex w-full items-center justify-between text-base font-rob400 text-white",
                                    isActive ? "text-red" : "text-secondary"
                                  )}
                                  aria-controls="disclosure-1"
                                  aria-expanded={"false"}
                                  onClick={handleServices}
                                >
                                  {item.value}
                                  <svg
                                    className={cn(
                                      "h-5 w-5 flex-none",
                                      toggleIndustries
                                        ? "roate-180"
                                        : "rotate-0"
                                    )}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                                {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                                <div className="mt-0" id="disclosure-1">
                                  {toggleServices && (
                                    <MobServicesSubMenu capitalize={true} />
                                  )}
                                </div>
                              </div>
                            );
                          }
                          // Industires Served Sub Menu
                          if (item.value === "Industries Served") {
                            return (
                              <div
                                key={item.id}
                                className="py-3 border-solid border-0 border-b-[1px] border-secondary"
                              >
                                <button
                                  type="button"
                                  className={cn(
                                    "flex w-full items-center justify-between text-base font-rob400 text-white",
                                    isActive ? "text-red" : "text-secondary"
                                  )}
                                  aria-controls="disclosure-2"
                                  aria-expanded={"false"}
                                  onClick={handleIndustriesServed}
                                >
                                  {item.value}
                                  <svg
                                    className={cn(
                                      "h-5 w-5 flex-none",
                                      toggleIndustries
                                        ? "roate-180"
                                        : "rotate-0"
                                    )}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                                {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                                <div className="mt-0 h-50" id="disclosure-2">
                                  {toggleIndustries && <MobIndustriesSubMenu />}
                                </div>
                              </div>
                            );
                          }
                          // Other Links
                          return (
                            <Link
                              href={item.href[0]}
                              key={item.id}
                              className={cn(
                                mobMenuClass,
                                isActive ? "text-red" : "text-secondary"
                              )}
                            >
                              {item.value}
                            </Link>
                          );
                        })
                      : ""}
                  </div>
                  <div className="py-6 mt-6">
                    <div className="flex flex-1 justify-center">
                      <AnimateButton
                        onClick={() => {
                          setMenuModal(false);
                          route.push("#contact");
                        }}
                        className={`${button.red} w-full before:hover:scale-[100] before:bg-secondary hover:bg-secondary hover:text-primary`}
                      >
                        Contact Us
                      </AnimateButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </FullWidthContent>
    </header>
  );
};

export default Header;
