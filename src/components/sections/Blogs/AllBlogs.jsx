"use client";
import { Button } from "@/components/Buttons";
import Image from "next/image";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import { useRouter } from "next/navigation";

export function AllBlogs() {
  const {
    theme: { button },
    data: { BlogsContent },
  } = useContext(DesignContext);
  const route = useRouter();

  return (
    <div className="flex-1">
      <div className="text-center md:text-left">
        <h2 className="inline h-line text-xs mx-auto md:text-sm mb-1 before:bg-red before:w-[30px] before:h-[2px] pl-[36px] text-red">
          READ BLOGS
        </h2>
      </div>
      <h1 className="text-[28px] md:text-5xl text-center md:text-left mb-9">
        All Blogs
      </h1>
      <div className="flex flex-col w-full gap-y-6 mb-7">
        {BlogsContent.map((item) => {
          return (
            <div
              key={item.id}
              className="flex max-w-[440px] md:max-w-none flex-col md:flex-row rounded-xl shadow-[1px_2px_15px_0px] shadow-gray "
            >
              <div className="bg-black rounded-t-xl md:rounded-l-xl md:rounded-r-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full md:w-[40vw] lg:w-[28vw] md:max-w-[467px] object-cover object-center rounded-t-xl md:rounded-l-xl md:rounded-r-none"
                  width={467}
                  height={332}
                />
              </div>
              <div className="px-3 py-5  md:py-7 md:px-8">
                <h4 className="font-rob700 text-[16px] md:text-[20px] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm md:text-gret mb-11">
                  {item.excerption}
                </p>
                <Button
                  className={`${button.red} py-3 px-5 text-[10px] tracking-wider rounded-md mb-2`}
                  onClick={() => route.push(`/read-blog/${item.slug}`)}
                >
                  READ MORE
                </Button>
                <div className="flex gap-2 items-center text-xs md:text-sm">
                  <p className="">{item.date}</p>
                  <ul className="list-disc pl-8">
                    <li>{item.readTime}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Button
        className={`${button.red} block py-3 px-8 lg:px-12 text-[10px] rounded-md ring-1 ring-red bg-transparent text-red mb-2 mx-auto`}
      >
        Load More
      </Button> */}
    </div>
  );
}
