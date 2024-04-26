import OpenPosition from "@/components/sections/OpenPosition.jsx";

export async function generateMetadata({params}){
  const slug = params.slug
  return {
    title: slug.toUpperCase(),
  }
}

export default function CareerDetails({params: {slug}}) {
  return <OpenPosition slug={slug} />;
}
