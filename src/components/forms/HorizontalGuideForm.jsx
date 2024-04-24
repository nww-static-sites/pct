"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import Input from "../Input";

const HorizontalGuideForm = ({ className }) => {
  const { theme:{button} } = useContext(DesignContext);
  return (
    <div className="w-full">
      <form className="flex flex-col lg:flex-row gap-4 items-center">
        <Input type="text" id="name" placeholder="Name" />
        <Input type="email" id="email" placeholder="Email*" />
        <Input type="text" id="phoneNumber" placeholder="Phone Number" />

        <AnimateButton
          className={`${button.icon} ${button.black} w-full lg:ml-3 p-4 before:bg-gret hover:bg-gret`}
        >
          Download
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M9.5 12.75V2.25"
              className="stroke-white transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8.25L9.5 12.75L14 8.25"
              className="stroke-white transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.75 15.75H4.25"
              className="stroke-white transition-all duration-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AnimateButton>
      </form>
    </div>
  );
};

export default HorizontalGuideForm;
