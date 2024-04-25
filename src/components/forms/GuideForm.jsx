"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import { DesignContext } from "@/context/design";
import { downloadGuideSchema } from "@/lib/forms/downloadGuideSchema";
import { Form } from "./Form";

const GuideForm = ({ title, detail, className }) => {
  const {
    theme: { button },
    form,
  } = useContext(DesignContext);

  // const [isDisabled, setIsDisabled] = useState(false);
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     firstName: e.target.firstName.value,
  //     lastName: e.target.lastName.value,
  //     email: e.target.email.value,
  //     phoneNumber: e.target.phoneNumber.value.trim(),
  //   };

  //   try {
  //     setIsDisabled(true);
  //     setMessage("");
  //     downloadGuideSchema.parse(formData);
  //     const response = await fetch("/api/downloadGuide", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     console.log(response.body);
  //     const data = await response.text();
  //     if (data.message) {
  //       setMessage(data.message);
  //       setIsDisabled(false);

  //       e.target.reset();
  //       setTimeout(() => {
  //         setMessage("");
  //       }, 3000);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     const error = JSON.parse(e);
  //     setMessage(error[0].message);
  //     setIsDisabled(false);
  //   }
  // };

  const getFormValues = (form) => ({
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value.trim(),
  });

  return (
    <div
      className={cn(
        "lg:col-span-2 text-secondary mx-auto max-w-[496px] md:max-w-none",
        className && className
      )}
    >
      <h1 className="text-2xl lg:text-4xl mb-1">{title}</h1>
      <p className="font-pop400 text-xs lg:text-sm mb-3">{detail}</p>
      <Form
        formSchema={downloadGuideSchema}
        getFormValues={getFormValues}
        url="/api/downloadGuide"
        subject={title}
        subjectForAdmin="Download Guide"
      >
      {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-4">
          <input
            type="text"
            id="firstName *"
            required
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="First Name *"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="lastName"
            required
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Last Name *"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            required
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Email *"
          />
        </div>
        <div className="mb-6 ">
          <input
            type="text"
            id="phoneNumber"
            required
            className="rounded-[4px] w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-secondary"
            placeholder="Phone Number *"
          />
        </div>
        <div className="mb-3">
          {form?.message && (
            <small className="text-secondary w-full text-center">
              {form.message}
            </small>
          )}
        </div>
        <AnimateButton
          disabled={form.disabled}
          className={`${button.icon} ${button.red} w-full before:bg-secondary hover:bg-secondary hover:text-primary`}
        >
          Download Guide
          {form?.disabled === false && (
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
                className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 8.25L9.5 12.75L14 8.25"
                className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.75 15.75H4.25"
                className="stroke-secondary group-hover:stroke-primary transition-all duration-500"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </AnimateButton>
        {/* </form> */}
      </Form>
      {/* <form onSubmit={handleSubmit}>
        
      </form> */}
    </div>
  );
};

export default GuideForm;
