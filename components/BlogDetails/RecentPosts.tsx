import type { RelatedBlog } from "@/types";
import { RecentPostCard } from "./RecentPostCard";

export const RecentPosts = ({ related }: { related: RelatedBlog[] }) => {
  return (
    <div className="border border-[#ececec] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] rounded-[8px] py-[28px] lg:px-[25px] px-[30px] bg-white mb-[30px]">
      <h4 className="text-[19px] font-medium mb-[20px] font-heading text-[#082A5E] leading-[1.2] after:block after:w-[28px] after:h-[4px] after:rounded-[50px] after:bg-[#1363DF] after:mt-[10px]">
        Related Posts
      </h4>
      <ul className="block w-full">
        {related && related.map((relat) => <RecentPostCard relat={relat} />)}
      </ul>
    </div>
  );
};
