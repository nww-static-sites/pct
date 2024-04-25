import OpenPosition from "@/components/sections/OpenPosition.jsx";
export const metadata = {
  title: "Career Position",
  // description: "About PCT Conformal Coating",
}
export default function CareerDetails({params: {slug}}) {
  return <OpenPosition slug={slug} />;
}
