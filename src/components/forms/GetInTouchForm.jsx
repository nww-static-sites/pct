"use client";
import { AnimateButton } from "../Buttons";
import { cn } from "@/lib/utils";
import { useContext, useState, useRef } from "react";
import { contactSchema } from "@/lib/forms/downloadGuideSchema";
import { DesignContext } from "@/context/design";

const GetInTouchForm = ({ title, detail, className }) => {
  const [quoteFile, setQuoteFile] = useState(null);
  const [form, updateForm] = useState({ disabled: false, message: "" });

  const uploadFile = useRef("");

  const {
    theme: { button },
  } = useContext(DesignContext);

  const getFormValues = (form) => ({
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value.trim(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormValues(e.target);
    try {
      updateForm({
        message: "",
        disabled: true,
      });

      contactSchema.parse(formData);
      let attachmentLink = null;

      // Upload File

      if (uploadFile.current?.files[0]?.type) {
        const formDataImage = new FormData();
        const date = new Date().getDate() + 1
        const dateAdd = new Date().setDate(date)
        const afterDate = new Date(dateAdd).toISOString()

        formDataImage.append("file", uploadFile.current.files[0], uploadFile.current.files[0].fileName);
        formDataImage.append("expires", afterDate);
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
            message: "Did not fetch the details 1",
            disabled: false,
          });
        }
      }

      // For Admin
      const toAdminEmail = process.env.NEXT_PUBLIC_TO_ADMIN_EMAIL;

      const formAdmin = {
        email: toAdminEmail,
        title: `New Submission of Contact Form`,
        text: `The details of Form Submission: \n ${JSON.stringify(formData)} 
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
        title: "We recieved your submission",
        text: `Thank you for your submission.`,
        html: `<strong> Thank you for your submission </strong>`,
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
      console.log(e);
      const error = JSON?.parse(e);
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
        "text-primary mx-auto max-w-[496px] md:max-w-none text-center md:text-left",
        className && className
      )}
    >
      <h2 className="text-red text-xs md:text-sm">GET IN TOUCH</h2>
      <h1 className="text-3xl lg:text-4xl mb-1">{title}</h1>
      <p className="font-pop400 text-black-content text-xs lg:text-sm mb-3 w-[80%] mx-auto md:w-full">
        {detail}
      </p>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-4">
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
              : "Upload Supported File (Max 15MB)"}
          </small>
        </div>

        <AnimateButton
          disabled={form.disabled}
          className={`${button.red} w-full before:bg-primary hover:bg-primary hover:before:scale-[120]`}
        >
          {form.disabled ? "Sending..." : "Send"}
        </AnimateButton>
        {form?.message && (
          <p className="text-primary w-full text-center my-2">{form.message}</p>
        )}
      </form>
      {/* </form> */}
    </div>
  );
};

export default GetInTouchForm;
