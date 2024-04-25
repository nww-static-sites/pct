import ContactUs from "@/components/sections/ContactUs";
import Service from "@/components/sections/Service";
import { Fragment } from "react";

export const metadata = {
  title: "Services",
  // description: "Services",
};

export default function ServicePage({ params: { slug } }) {
  return (
    <Fragment>
      <Service slug={slug} />
      <ContactUs />
    </Fragment>
  );
}
