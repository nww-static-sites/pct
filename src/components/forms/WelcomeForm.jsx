"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext, useState, useRef } from "react";
import { DesignContext } from "@/context/design";
import Input from "../Input";

const WelcomeDownloadGuidForm = ({ title, detail, className }) => {
  const [quoteFile, setQuoteFile] = useState(null);
  const uploadFile = useRef("");
  const {
    theme: { button },
  } = useContext(DesignContext);

  const handleOpenFile = (e) => {
    e.preventDefault();
    uploadFile.current.click();
  };
  const handleFileChnage = (e) => {
    const file = e.target.files[0];
    setQuoteFile(file);
  };
  const handleRemove = (e) => {
    setQuoteFile(null);
  };

  return (
    <div
      className={cn(
        "text-primary mx-auto w-full md:max-w-none text-center md:text-left",
        className && className
      )}
    >
      {/* <h2 className="text-red text-xs md:text-sm">GET IN TOUCH</h2> */}
      <h1 className="text-3xl lg:text-4xl mb-1">
        Download Our
        <span className="text-red"> Guide</span>
      </h1>
      <p className="font-pop400 text-black-content text-xs lg:text-sm mb-3 w-[80%] mx-auto md:w-full">
        {detail}
      </p>
      <form>
        <div className="mb-4">
          <Input
            type="text"
            id="firstName"
            label="First Name"
            name="firstName"
            className="rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Your first name"
            required
            labelColor="text-primary"
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            id="lastName"
            label="Last Name"
            name="lastName"
            className="rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Your first name"
            required
            labelColor="text-primary"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            id="email"
            label="Email Address"
            name="email"
            className="rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Your first name"
            required
            labelColor="text-primary"
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            className="rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Your first name"
            required
            labelColor="text-primary"
          />
        </div>

        <AnimateButton
          className={`${button.red} w-full before:bg-primary hover:bg-primary`}
        >
          Download Guide
        </AnimateButton>
      </form>
    </div>
  );
};

export default WelcomeDownloadGuidForm;
