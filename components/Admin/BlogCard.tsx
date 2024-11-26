import { BlogsDetails_Category } from "@/types/admin";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogCard = ({ blog }: { blog: BlogsDetails_Category }) => {
  return (
    <div className="col-sapn-1 group">
      <div className="bg-white shadow-[0px_4px_15px] shadow-[rgba(0,0,0,0.03)] border rounded overflow-hidden">
        <div className="block">
          <Link
            href={`/blog/${blog.link}`}
            className="block relative overflow-hidden z-[1] before:absolute before:top-0 before:-left-full before:w-1/2 before:h-full before:[background:_linear-gradient(to_right,_rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_100%)] before:-skew-x-[25deg] group-hover:before:animate-hoverShine"
          >
            <Image
              width={250}
              height={150}
              src={blog.cover}
              alt={blog.category}
              className="w-full"
              quality={100}
            />
          </Link>
        </div>
        <div className="block p-[15px]">
          <h4 className="text-[18px] font-medium leading-[1.25] font-heading text-[#082A5E]">
            <Link
              href={`/blog/${blog.link}`}
              className="inline bg-[linear-gradient(#082A5E,#082A5E),linear-gradient(#082A5E,#082A5E)] bg-[0%_1.8px,0_1.8px] [background-position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-[0.4s] ease-linear hover:bg-[0_1.8px,100%_1.8px] hover:text-inherit"
            >
              {blog.name}
            </Link>
          </h4>
          <ul className="flex items-center flex-wrap gap-[10px] mt-[15px] leading-[1]">
            <li className="flex items-center gap-[4px]">
              <span className="transition-all duration-300 ease-out text-gray-600 font-medium">
                Category:{" "}
                <span className="text-[#1363DF]">{blog.category}</span>
              </span>
            </li>
            <li className="block">
              <span className="text-gray-600 font-medium transition-all duration-300 ease-out">
                Seen:{" "}
                <span className="text-[#1363DF]">
                  {blog.seen.toLocaleString()}
                </span>
              </span>
            </li>
            <li className="block">
              <span className="text-gray-600 font-medium transition-all duration-300 ease-out">
                Writer: <span className="text-[#1363DF]">{blog.writer}</span>
              </span>
            </li>
            <li className="block">
              <span className="text-gray-600 font-medium transition-all duration-300 ease-out">
                Date: <span className="text-[#1363DF]">{blog.created_at}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};