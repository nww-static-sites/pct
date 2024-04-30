"use client";
import { AnimateButton } from "../Buttons";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import Input from "../Input";
import { downloadHorizontalGuideSchema } from "@/lib/forms/downloadGuideSchema";
import { Form } from "./Form";

const HorizontalGuideForm = ({ className }) => {
  const {
    theme: { button },
    form,
  } = useContext(DesignContext);
  const getFormValues = (form) => ({
    name: form.name.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value.trim(),
  });
  return (
    <div className="w-full">
      <Form
        className="flex flex-col lg:flex-row gap-4 items-start"
        formSchema={downloadHorizontalGuideSchema}
        getFormValues={getFormValues}
        url="/api/downloadGuide"
        subject={"Download Guide Form"}
        subjectForAdmin="Download Guide"
      >
        {/* <form className="flex flex-col lg:flex-row gap-4 items-center"> */}
        <Input
          type="text"
          id="name"
          placeholder="Name"
          className={"bg-transparent"}
        />
        <Input
          type="email"
          id="email"
          required
          placeholder="Email*"
          className={"bg-transparent"}
        />
        <Input
          type="text"
          id="phoneNumber"
          placeholder="Phone Number"
          className={"bg-transparent"}
        />

        <div className="w-full">
          <AnimateButton
            className={`${button.icon} ${button.black} w-full lg:ml-3 p-4 before:bg-gret hover:bg-gret`}
          >
            Download
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
            )}
          </AnimateButton>
          {form?.message && (
            <p className="text-secondary w-full text-center mt-2">
              {form.message}
            </p>
          )}
        </div>
      </Form>

      {/* </form> */}
    </div>
  );
};

export default HorizontalGuideForm;
