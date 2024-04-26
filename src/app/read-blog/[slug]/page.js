import ReadBlog from "@/components/sections/ReadBlog";
export async function generateMetadata({params}){
  const slug = params.slug
  return {
    title: slug.toUpperCase(),
  }
}
export default function ReadBlogPage({ params: { slug } }) {
  return <ReadBlog slug={slug} />;
}
