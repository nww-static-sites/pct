"use client";
import React, { useMemo } from "react";
import HeroSection from "../HeroSection";
import { HeroContentBox } from "@/components/containers";
import ContactUs from "../ContactUs";
import { GuideForm } from "@/components/forms";
import { FullWidthContent } from "@/components/Sections";
import { Button } from "@/components/Buttons";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import { notFound, useRouter } from "next/navigation";
import Input from "@/components/Input";
import { BlogSection } from "./blogSection";
import RecentBlogs from "./RecentBlogs";
import { newsLetterGuide } from "@/lib/forms/downloadGuideSchema";
import { Form } from "@/components/forms/Form";

export default function ReadBlog({ slug }) {
  const {
    theme: { button },
    data: { BlogsContent },
    form,
  } = useContext(DesignContext);
  const route = useRouter();

  const eachBlog = useMemo(() => {
    const getBlog = () => BlogsContent.filter((item) => item.slug === slug);
    const data = getBlog();
    if (data.length === 0) {
      notFound();
    }
    return data[0];
  }, [BlogsContent, slug]);

  const recentBlogs = useMemo(() => {
    const getBlog = () => BlogsContent.filter((item) => item.slug !== slug);
    const data = getBlog();
    if (data.length === 0) {
      notFound();
    }
    return data;
  }, [BlogsContent, slug]);

  const getFormValues = (form) => ({
    email: form.email.value,
  });
  return (
    <React.Fragment>
      <HeroSection
        bgImage="/images/blogs-bg.jpg"
        className={"min-h-0"}
        col={"flex-col"}
      >
        <HeroContentBox
          customH1={
            <h1 className="text-3xl md:text-5xl mb-3">
              {
                "Conformal Coating for Extreme Environments: Challenges and Solutions"
              }
            </h1>
          }
          title={""}
          detail={
            "Extreme environments pose unique challenges to electronic components. In this blog post, we delve into the world of conformal coating in extreme conditions, exploring the challenges faced, the significance of effective coating, and the role Parylene plays in providing robust solutions."
          }
          buttonText={"Get In Touch"}
          buttonLink=""
        />
        <GuideForm
          title={"Download Our Guide"}
          detail={
            "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
          }
        />
      </HeroSection>

      <section className="py-20 bg-secondary">
        <FullWidthContent className="flex flex-col items-center md:items-start lg:flex-row gap-x-10">
          <BlogSection blog={eachBlog} />
          <div className="pt-12 px-3 w-full md:w-[442px] mx-auto sticky top-[36px]">
            <div className="text-center text-secondary bg-black rounded-2xl px-4 py-9 max-w-[442px] md:w-[424px] mx-auto shadow-[0px_4px_29px_0px] shadow-gret28 ">
              <h2 className="font-rob700 text-2xl md:text-3xl mb-3 mx-2">
                Stay <span className="text-red">Connected</span> With Us
              </h2>
              <p className="mb-9 text-xs">
                Join our community and receive exclusive updates, latest news,
                and exciting content straight to your inbox
              </p>
              <Form
                formSchema={newsLetterGuide}
                getFormValues={getFormValues}
                url="/api/downloadGuide"
                subject={"Stay Connected with Us"}
                subjectForAdmin="New Subscriber"
              >
                <div className="rounded-[20px] w-auto gap-y-2 bg-transparent md:max-w-[351px] mx-auto md:bg-secondary flex flex-wrap md:flex-nowrap items-center justify-between mb-4">
                  <input
                    className="ring-0 w-full md:w-auto px-4 rounded-md md:rounded-[20px] text-secondary md:text-primary h-[36px] md:h-[42px] border-none bg-secondary md:bg-transparent  placeholder:text-gret"
                    type="email"
                    id={"email"}
                    name={"email"}
                    required
                    placeholder="demomail@gmail.com"
                  />
                  <Button
                    disabled={form.disabled}
                    className={`w-full md:w-[118px] h-[36px] md:h-[42px] text-xs bg-red ${button.icon} rounded-md md:rounded-[20px]`}
                  >
                    Subscribe
                  </Button>
                </div>
                {form?.message && (
                  <p className="text-secondary w-full text-center mt-2">
                    {form.message}
                  </p>
                )}
              </Form>
            </div>
          </div>
        </FullWidthContent>
        <RecentBlogs recentBlogs={recentBlogs} />
      </section>

      <ContactUs />
    </React.Fragment>
  );
}
