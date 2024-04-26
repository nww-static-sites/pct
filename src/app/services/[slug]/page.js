import ContactUs from "@/components/sections/ContactUs";
import Service from "@/components/sections/Service";
import { Fragment } from "react";

export async function generateMetadata({params}){
  const slug = params.slug
  return {
    title: slug.toUpperCase(),
  }
}

export default function ServicePage({ params: { slug } }) {
  return (
    <Fragment>
      <Service slug={slug} />
      <ContactUs />
    </Fragment>
  );
}
