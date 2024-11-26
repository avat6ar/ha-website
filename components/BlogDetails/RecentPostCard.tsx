import { RelatedBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { RxCalendar } from "react-icons/rx";

export const RecentPostCard = ({ relat }: { relat: RelatedBlog }) => {
  return (
    <li className="flex items-center justify-start gap-[14px] mb-[20px] last:mb-0">
      <div className="block">
        <Link href={`/blog/${relat.link}`}>
          <Image
            src={relat.cover}
            width={770}
            height={374}
            quality={100}
            alt="img"
            className="w-[90px] h-[90px] object-cover rounded-[4px]"
          />
        </Link>
      </div>
      <div className="block">
        <h4 className="font-heading font-medium text-[16px] mb-[5px] leading-[1.35] text-[#082A5E]">
          <Link href={`/blog/${relat.link}`}>{relat.title}</Link>
        </h4>
        <span className="text-[16px] text-[#1363DF] leading-[1] flex gap-[10px]">
          <RxCalendar />
          {relat.date}
        </span>
      </div>
    </li>
  );
};
