import type { NextBlog, PrevBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const NextPrevPost = ({
  prevBlog,
  nextBlog,
}: {
  prevBlog: PrevBlog;
  nextBlog: NextBlog;
}) => {
  return (
    <div className="mb-[50px]">
      <div className="grid justify-between md:grid-cols-2 gap-[20px]">
        <div className="col-span-1">
          <div className="flex items-center md:gap-[25px] gap-[20px]">
            <div className="flex-[0_0_auto]">
              <Link href={`/blog/${prevBlog.link}`}>
                <Image
                  src={prevBlog.cover}
                  width={100}
                  height={100}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
              </Link>
            </div>
            <div className="grow">
              <span className="block font-medium mb-[7px]">Previous Post</span>
              <h5 className="text-[17px] font-heading text-[#082A5E] font-medium leading-[1.35]">
                <Link href={`/blog/${prevBlog.link}`}>{prevBlog.title}</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center md:gap-[25px] gap-[20px] flex-row-reverse text-right">
            <div className="flex-[0_0_auto]">
              <Link href={`/blog/${nextBlog.link}`}>
                <Image
                  src={nextBlog.cover}
                  width={100}
                  height={100}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
              </Link>
            </div>
            <div className="grow">
              <span className="block font-medium mb-[7px]">Previous Post</span>
              <h5 className="text-[17px] font-heading text-[#082A5E] font-medium leading-[1.35]">
                <Link href={`/blog/${nextBlog.link}`}>{nextBlog.title}</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
