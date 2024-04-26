"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import React, { useContext, useState, useRef } from "react";
import { DesignContext } from "@/context/design";
import { applicationSchema } from "@/lib/forms/downloadGuideSchema";
import Input from "../Input";

const ApplyForm = ({ formTitle, detail, className }) => {
  const [quoteFile, setQuoteFile] = useState(null);
  const [form, updateForm] = useState({ disabled: false, message: "" });
  
  const resume = useRef(null)

  const {
    theme: { button },
  } = useContext(DesignContext);

  const getFormValues = (form) => ({
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value.trim(),
    link: form.link.value.trim(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormValues(e.target);
    try {
      updateForm({
        message: "",
        disabled: true,
      });

      applicationSchema.parse(formData);
      let attachmentLink = null;

      // Upload File

      if (resume.current?.files[0]?.type) {
        const formDataImage = new FormData();

        const date = new Date().getDate() + 1
        const dateAdd = new Date().setDate(date)
        const afterDate = new Date(dateAdd).toISOString()

        formDataImage.append("file", resume.current.files[0], resume.current.files[0].fileName);
        formDataImage.append("expires", afterDate); //"2024-04-26T00:00:00Z"
        formDataImage.append("autoDelete", "true");

        const fileIOKey = process.env.NEXT_PUBLIC_TO_FILE_IO_KEY;
        const fileIo = await fetch("https://file.io/", {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${fileIOKey}`,
          },
          body: formDataImage,
          redirect: "follow",
        });

        if (fileIo.status === 200) {
          let data = await fileIo.json();
          attachmentLink = data.link;

          
        } else {
          updateForm({
            message: "Did not fetch the details",
            disabled: false,
          });
        }
      }

      // For Admin
      const toAdminEmail = process.env.NEXT_PUBLIC_TO_ADMIN_EMAIL;

      const formAdmin = {
        email: toAdminEmail,
        title: `New Applicatino for ${formTitle}`,
        text: `The details of Form Application: \n ${JSON.stringify(formData)} 
        \n ${attachmentLink ? `File Attached: ${attachmentLink}` : ""}
        `,
        html: `
          The details of submission below: <br /><br /> ${Object.keys(formData)
            .map((key) => {
              return `<span>${key}</span>: <span>${formData[key]}</span><br />`;
            })
            .join("\n")} 
          ${attachmentLink ? `<br />File Attached: ${attachmentLink}` : ""}
          `,
      };

      // For User
      const userForm = {
        email: formData.email.trim(),
        title: `We recieved your application for ${formTitle}`,
        text: `Thank you for your submission. we received your application we will contact you soon`,
        html: `<strong> Thank you for your submission. we received your application we will contact you soon </strong>`,
      };

      const responseAll = await Promise.all([
        fetch("/api/downloadGuide", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formAdmin),
        }),
        fetch("/api/downloadGuide", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userForm),
        }),
      ]);

      if (responseAll[0].ok && responseAll[1].ok) {
        const data = await responseAll[0].json();
        updateForm({
          message: data.message,
          disabled: false,
        });

        e.target.reset();
        setQuoteFile(null);

        setTimeout(() => {
          updateForm({
            message: "",
            disabled: false,
          });
        }, 3000);
      } else {
        updateForm({
          message: "Did not fetch the details",
          disabled: false,
        });
      }
    } catch (e) {
      const error = JSON.parse(e);
      if (error?.length && error[0]?.message) {
        updateForm({
          message: error[0].message,
          disabled: false,
        });
      } else {
        updateForm({
          message: "Something wrong please check your fields",
          disabled: false,
        });
      }
    }
  };

  const handleOpenFile = (e) => {
    e.preventDefault();
    resume?.current?.click();
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
        {`Apply for ${formTitle}`}
      </h1>

      <form onSubmit={handleSubmit}>
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

          <div className="mb-4 col-span-2 text-left">
            <label className="ml-0 mr-auto" htmlFor="uploadFile">Resume Upload</label>
            <input
              ref={resume}
              type="file"
              id="uploadFile"
              name="uploadFile"
              labelColor="text-primary"
              label="Resume Upload"
              className="w-0 h-0 hidden"
              onChange={handleFileChnage}
            />
            <button
              className="w-full ring-1 mt-1 ring-red rounded-sm text-red flex justify-center items-center gap-4 mb-2 py-3 px-5"
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
          disabled={form.disabled}
        >
          {form.disabled ? "Applying..." : "Apply"}
        </AnimateButton>

        {form?.message && (
          <p className="text-primary w-full text-center my-2">{form.message}</p>
        )}
      </form>
    </div>
  );
};

export default ApplyForm;
