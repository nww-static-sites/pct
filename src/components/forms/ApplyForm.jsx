"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import React, { useContext, useState, useRef } from "react";
import { DesignContext } from "@/context/design";
import Modal from "../Modals/ApplyModals/ApplyModal";
import Input from "../Input";

const ApplyForm = ({ formTitle, detail, className }) => {
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
        "text-primary w-[80vw] max-h-[90vh] px-1 md:w-[516px] mx-auto text-center md:text-left overflow-y-auto",
        className && className
      )}
    >
      <h1 className="font-rob500 text-red mb-5 text-xl md:text-2xl text-center">
        {formTitle}
      </h1>

      <form>
        <div className="grid gap-3 md:gap-6 mb-6 grid-cols-2">
          <Input
            type="text"
            id="firstName"
            name="firstName"
            label="First Name"
            required
            className="w-full text-primary px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="First Name"
            labelColor="text-primary"
            boxClassName={"col-span-2 md:col-span-1"}
          />

          <Input
            type="text"
            id="lastName"
            name="lastName"
            label="Last Name"
            required
            className="w-full text-primary px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Last Name"
            labelColor="text-primary"
            boxClassName={"col-span-2 md:col-span-1"}
          />

          <Input
            type="text"
            id="email"
            name="email"
            label="Email Address"
            required
            className="w-full text-primary px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Email Address"
            labelColor="text-primary"
            boxClassName={"col-span-2 md:col-span-1"}
          />

          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            required
            className="w-full text-primary px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Phone Number"
            labelColor="text-primary"
            boxClassName={"col-span-2 md:col-span-1"}
          />

          <Input
            type="url"
            id="link"
            name="link"
            label="Link to CV/LinkedIn"
            required
            className="w-full text-primary px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Link here"
            labelColor="text-primary"
            boxClassName={"col-span-2"}
          />

          <div className="mb-4 col-span-2">
            <Input
              ref={uploadFile}
              type="file"
              id="uploadFile"
              name="uploadFile"
              required
              labelColor="text-primary"
              label="Resume Upload"
              className="w-0 h-0 hidden"
              onChange={handleFileChnage}
            />
            <button
              className="w-full ring-1 ring-red rounded-sm text-red flex justify-center items-center gap-4 mb-2 py-3 px-5"
              onClick={handleOpenFile}
            >
              Upload Resume
            </button>
            <small className="font-rob400 text-xs md:text-sm text-gret">
              {quoteFile?.name && (
                <span className="cursor-pointer" onClick={handleRemove}>
                  x{" "}
                </span>
              )}
              {quoteFile?.name
                ? quoteFile.name
                : "Upload supported file (Max 15MB)"}
            </small>
          </div>
        </div>

        <AnimateButton
          className={`${button.red} w-full before:bg-primary hover:bg-primary`}
        >
          Apply
        </AnimateButton>
      </form>
    </div>
  );
};

export default ApplyForm;
