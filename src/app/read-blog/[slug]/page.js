import ReadBlog from "@/components/sections/ReadBlog";
export const metadata = {
  title: "Read Blog",
  // description: "About PCT Conformal Coating",
}
export default function ReadBlogPage({ params: { slug } }) {
  return <ReadBlog slug={slug} />;
}
