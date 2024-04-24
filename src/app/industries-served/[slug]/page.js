import ContactUs from "@/components/sections/ContactUs";
import Industry from "@/components/sections/Industries";
import { Fragment } from "react";

export const metadata = {
  title: "Industries Served",
  // description: "Industies Served",
};

export default function IndustriesServed({ params: { slug } }) {
  return (
    <Fragment>
      <Industry slug={slug} />
      <ContactUs />
    </Fragment>
  );
}
