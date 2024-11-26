import { RelatedBlog } from "@/types";
import { RecentPosts } from "./RecentPosts";

export const Aside = ({ related }: { related: RelatedBlog[] }) => {
  return (
    <aside className="w-full">
      <RecentPosts related={related} />
    </aside>
  );
};
