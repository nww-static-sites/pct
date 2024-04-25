"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext, useState, useRef } from "react";
import { contactSchema } from "@/lib/forms/downloadGuideSchema";
import { DesignContext } from "@/context/design";
import { Form } from "./Form";

const GetInTouchForm = ({ title, detail, className }) => {
  const [quoteFile, setQuoteFile] = useState(null);
  const uploadFile = useRef("");
  const {
    theme: { button },
    form,
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

  const getFormValues = (form) => ({
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value.trim(),
  });

  return (
    <div
      className={cn(
        "text-primary mx-auto max-w-[496px] md:max-w-none text-center md:text-left",
        className && className
      )}
    >
      <h2 className="text-red text-xs md:text-sm">GET IN TOUCH</h2>
      <h1 className="text-3xl lg:text-4xl mb-1">{title}</h1>
      <p className="font-pop400 text-black-content text-xs lg:text-sm mb-3 w-[80%] mx-auto md:w-full">
        {detail}
      </p>
      <Form
        formSchema={contactSchema}
        getFormValues={getFormValues}
        url="/api/downloadGuide"
        subject={"Get In Touch Form Submited"}
        subjectForAdmin="Someone request for support"
      >
        <div className="mb-4">
          <input
            type="text"
            id="name"
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Email*"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Subject"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="message"
            name="message"
            required
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Message"
          />
        </div>
        {/* <div className="mb-4">
          <input
            ref={uploadFile}
            type="file"
            id="uploadFile"
            className="w-0 h-0 hidden"
            onChange={handleFileChnage}
          />
          <button
            className="w-full ring-1 ring-red rounded-sm text-red flex justify-center items-center gap-4 mb-2 py-3 px-5"
            onClick={handleOpenFile}
          >
            Upload Quote Files
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666992 1H12.3337"
                stroke="#DC1D28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.501 9.3335L6.50098 4.3335L1.50098 9.3335"
                stroke="#DC1D28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.50098 4.3335V16.0002"
                stroke="#DC1D28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <small className="font-rob400 text-xs md:text-sm text-gret">
            {quoteFile?.name && (
              <span className="cursor-pointer" onClick={handleRemove}>
                X{" "}
              </span>
            )}
            {quoteFile?.name
              ? quoteFile.name
              : "Upload supported file (Max 15MB)"}
          </small>
        </div> */}

        <AnimateButton
          disabled={form.disabled}
          className={`${button.red} w-full before:bg-primary hover:bg-primary`}
        >
          Send
        </AnimateButton>
        {form?.message && (
          <p className="text-primary w-full text-center">{form.message}</p>
        )}
      </Form>
      {/* </form> */}
    </div>
  );
};

export default GetInTouchForm;
