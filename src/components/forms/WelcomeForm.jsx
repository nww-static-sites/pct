"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext} from "react";
import { DesignContext } from "@/context/design";
import { downloadGuideSchema } from "@/lib/forms/downloadGuideSchema";
import Input from "../Input";
import { Form } from "./Form";

const WelcomeDownloadGuidForm = ({ title, detail, className, onClose }) => {
  const {
    theme: { button },
    form,
  } = useContext(DesignContext);

  const getFormValues = (form) => ({
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value.trim(),
  });

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
      <Form
        formSchema={downloadGuideSchema}
        getFormValues={getFormValues}
        url="/api/downloadGuide"
        subject={title}
        subjectForAdmin="Download Guide"
        onClose={onClose}
      >
        <div className="mb-4">
          <Input
            type="text"
            id="firstName"
            label="First Name"
            name="firstName"
            className="text-primary rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
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
            className="text-primary rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Your last name"
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
            className="text-primary rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Your email address"
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
            className="text-primary rounded-lg w-full px-5 py-3 border border-gray bg-white200 text-sm placeholder:text-gret"
            placeholder="Your phone number"
            required
            labelColor="text-primary"
          />
        </div>
        <div className="mb-3">
          {form?.message && (
            <small className="text-primary w-full text-center">
              {form.message}
            </small>
          )}
        </div>

        <AnimateButton
          disabled={form.disabled}
          className={`${button.red} w-full before:bg-primary hover:bg-primary`}
        >
          Download Guide
        </AnimateButton>
      </Form>
    </div>
  );
};

export default WelcomeDownloadGuidForm;
