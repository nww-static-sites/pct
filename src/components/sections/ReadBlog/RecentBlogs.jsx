import { FullWidthContent } from "@/components/Sections";
import Image from "next/image";
import Link from "next/link";

export default function RecentBlogs({ recentBlogs }) {
  return (
    <FullWidthContent className={"pt-12 pb-8"}>
      <h1 className="text-xl md:text-2xl mb-2">Recent Blogs</h1>
      <div className="flex flex-col justify-center md:justify-start md:flex-row md:flex-wrap  gap-6 md:gap-8 max-w-[420px] md:max-w-none mx-auto">
        {recentBlogs.length ? (
          recentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white w-full md:max-w-[326px] mx-auto md:mx-0 rounded-[18px] p-5 shadow-primary05 shadow-[0px_4px_6px_0px]"
            >
              <Link href={blog.slug}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full mb-5 rounded-xl h-[167px]"
                  width={288}
                  height={167}
                />
              </Link>
              <p className="text-xs mb-3">{blog.readTime}</p>
              <h5 className="text-lg mb-2">{blog.title}</h5>
              <p className="text-sm mb-5">{blog.excerption}</p>
              <p className="text-red text-sm">
                <span>{blog.author}</span> | <span>{blog.date}</span>
              </p>
            </div>
          ))
        ) : (
          <h1 className="text-center">No Blog Found</h1>
        )}
      </div>
    </FullWidthContent>
  );
}
