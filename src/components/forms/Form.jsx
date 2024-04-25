"use client";
import { useContext, useState } from "react";
import { DesignContext } from "@/context/design";
import { cn } from "@/lib/utils";

export const Form = ({
  children,
  formSchema,
  getFormValues,
  url,
  subject,
  subjectForAdmin,
  className,
}) => {
  const { updateForm } = useContext(DesignContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = await getFormValues(e.target);
    try {
      updateForm({
        message: "",
        disabled: true,
      });

      formSchema.parse(formData);

      // For User
      const guideLink =
        "https://d76caabb-7300-415b-997a-2fa56fce6466.usrfiles.com/ugd/d76caa_8255d0f6167b404dae93ef67f4f211c6.pdf";
      const form = {
        email: formData.email.trim(),
        title: subject,
        text: `Thank you for your submission, the link of your guide is: \n ${guideLink}`,
        html: `<strong> Thank you for your submission, the link of your guide is: <br /> ${guideLink} </strong> `,
      };

      // For Admin
      const toAdminEmail = process.env.NEXT_PUBLIC_TO_ADMIN_EMAIL;
      const formAdmin = {
        email: toAdminEmail,
        title: subjectForAdmin,
        text: `The details of Form Submission: \n ${JSON.stringify(formData)}`,
        html: `The details of submission below: <br /><br /> ${Object.keys(
          formData
        )
          .map((key) => {
            return `<span>${key}</span>: <span>${formData[key]}</span><br />`;
          })
          .join("\n")}`,
      };

      const responseAll = await Promise.all([
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }),
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formAdmin),
        }),
      ]);

      if (responseAll[0].ok && responseAll[1].ok) {
        const data = await responseAll[0].json();
        updateForm({
          message: data.message,
          disabled: false,
        });

        e.target.reset();

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
  return (
    <form onSubmit={handleSubmit} className={cn(className && className)}>
      {children}
    </form>
  );
};
