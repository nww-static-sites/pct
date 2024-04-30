import ContactUs from "@/components/sections/ContactUs";
import Industry from "@/components/sections/Industries";
import { Fragment } from "react";
import { Metadata, ResolvingMetadata } from 'next'


export async function generateMetadata({params}){
  const slug = params.slug
  return {
    title: slug.toUpperCase(),
  }
}

export default function IndustriesServed({ params: { slug } }) {
  return (
    <Fragment>
      <Industry slug={slug} />
      <ContactUs />
    </Fragment>
  );
}
