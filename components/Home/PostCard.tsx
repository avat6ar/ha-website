import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";
import { RxCalendar } from "react-icons/rx";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="col-sapn-1 group">
      <div className="bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.03)] rounded-[10px] overflow-hidden">
        <div className="block">
          <Link
            href={`/blog/${post.link}`}
            className="block relative overflow-hidden z-[1] before:absolute before:top-0 before:-left-full before:w-1/2 before:h-full before:[background:_linear-gradient(to_right,_rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_100%)] before:-skew-x-[25deg] group-hover:before:animate-hoverShine"
          >
            <Image
              width={370}
              height={250}
              src={post.cover}
              alt={post.category}
              className="w-full"
              quality={70}
            />
          </Link>
        </div>
        <div className="block pt-[25px] pb-[40px] px-[35px]">
          <a
            href="#"
            className="inline-block bg-[#E7EFFC] text-[14px] font-medium uppercase text-[#1363DF] leading-[1] pt-[9px] pb-[7px] px-[18px] rounded-[30px] mb-[12px]"
          >
            {post.category}
          </a>
          <h4 className="md:text-[24px] text-[22px] font-medium leading-[1.25] font-heading text-[#082A5E]">
            <Link
              href={`/blog/${post.link}`}
              className="inline bg-[linear-gradient(#082A5E,#082A5E),linear-gradient(#082A5E,#082A5E)] bg-[0%_1.8px,0_1.8px] [background-position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-[0.4s] ease-linear hover:bg-[0_1.8px,100%_1.8px] hover:text-inherit"
            >
              {post.title}
            </Link>
          </h4>
          <ul className="flex items-center flex-wrap gap-[10px_30px] mt-[25px] leading-[1]">
            <li className="flex items-center gap-[4px]">
              <span className="text-[#1363DF] mr-[4px] leading-[0]">
                <HiOutlineUser />
              </span>{" "}
              by{" "}
              <a
                href="#"
                className="text-[#39557E] transition-all duration-300 ease-out hover:text-[#1363DF]"
              >
                Admin
              </a>
            </li>
            <li className="flex items-center gap-[4px]">
              <span className="text-[#1363DF] mr-[4px] leading-[0]">
                <RxCalendar />
              </span>
              {post.created_at}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
