"use-client";
import { Button } from "@/components/Buttons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BlogSection = ({ blog }) => {
  const { title, author, date, readTime, tableOfContent } = blog;
  const path = usePathname();
  return (
    <div className="w-full">
      <h1 className="font-rob700 text-4xl mb-2">{title}</h1>
      <p className="font-pop500 text-[15px] mb-7">
        {"By "}
        <span className="text-red">{author}</span> | {date} | {readTime}
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-rob500 mb-3 hide_contents">Table of Content</h2>
        <ul className="list-disc space-y-1 ml-5 hide_contents">
          {tableOfContent.length
            ? tableOfContent.map((content) => {
                return (
                  <li key={content.id}>
                    <Link href={`#${content.title}`}>{content.title}</Link>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
      <div>
        <div>
          {/* For Introduction */}
          {tableOfContent.length ? (
            <div
              id={tableOfContent[0].title}
              key={tableOfContent[0].id}
              className="mb-6"
            >
              <h2 className="text-2xl font-rob500 mb-3">
                {tableOfContent[0].title}
              </h2>
              <p className="text-[13px] md:text-[15px]">
                {tableOfContent[0].detail}
              </p>
              {tableOfContent[0]?.list?.length ? (
                <ul>
                  {tableOfContent[0].list.map((item) => {
                    return (
                      <li key={item.id}>
                        <p className="text-[13px] md:text-[15px]">
                          {item.detail}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
              {tableOfContent[0]?.image ? (
                <Image
                  src={tableOfContent[0].image}
                  alt={tableOfContent[0].image}
                  className="w-auto max-h-[375px] object-cover my-8 "
                  width={782}
                  height={375}
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {/* FUurther Table of COntent Sections */}
          {tableOfContent.length
            ? tableOfContent.slice(1).map((content) => {
                return (
                  <div
                    id={`${content.title}`}
                    key={content.id}
                    className="mb-6"
                  >
                    <h2 className="text-2xl font-rob500 mb-3">
                      {content.title}
                    </h2>
                    <p className="text-[13px] md:text-[15px]">
                      {content.detail}
                    </p>
                    {content?.list?.length ? (
                      <ul className="list-disc ml-5 mt-3">
                        {content.list.map((item) => {
                          return (
                            <li key={item.id}>
                              <p className="text-[13px] md:text-[15px]">
                                {item.detail}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                    {content?.image ? (
                      <Image
                        src={content.image}
                        alt={content.title}
                        className="w-auto max-h-[375px] object-cover my-8 "
                        width={782}
                        height={375}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })
            : ""}
        </div>
        {/* Line */}
        <div className="h-[1px] bg-gret28 w-full mb-6"></div>
        {/* Share Button */}
        <div className="flex justify-between gap-6 items-center flex-wrap">
          <div className="flex gap-3 items-center">
            <p>Share</p>
            <Link
              href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
              target="_blank"
            >
              <Button className="w-9 h-9 grid place-content-center rounded-md ring-red ring-1">
                <Image
                  src={"/images/icons/facebook-red.svg"}
                  className="w-[18px] h-auto"
                  alt="Facebook"
                  width={18}
                  height={20}
                />
              </Button>
            </Link>
            <Link
              href={`https://twitter.com/share?url=${window.location.href}&text=${title}&via=pct`}
            >
              <Button className="w-9 h-9 grid place-content-center rounded-md ring-red ring-1">
                <Image
                  src={"/images/icons/twitter-red.svg"}
                  className="w-[17px] h-auto"
                  alt="Twitter"
                  width={18}
                  height={20}
                />
              </Button>
            </Link>
            {/* <Link href={`$email = 'mailto:?subject=' . $[${title}] . '&body=Check out this site: '. $[${window.location.href}] .'" title="Share by Email';`}>
              <Button className="w-9 h-9 grid place-content-center rounded-md ring-red ring-1">
                <Image
                  src={"/images/icons/mail-red.svg"}
                  className="w-[18px] h-auto"
                  alt="Mail"
                  width={18}
                  height={16}
                />
              </Button>
            </Link> */}
          </div>

          <p className="w-full md:w-auto text-right">02 Views</p>
        </div>
      </div>
    </div>
  );
};
