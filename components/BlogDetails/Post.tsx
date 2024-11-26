import { NextPrevPost } from "./NextPrevPost";
import { Written } from "./Written";
import { Details } from "./Details";
import type { BlogDetails, NextBlog, PrevBlog, Writer } from "@/types";

export const Post = ({
  details,
  prevBlog,
  nextBlog,
  written,
}: {
  details: BlogDetails;
  prevBlog: PrevBlog;
  nextBlog: NextBlog;
  written: Writer;
}) => {
  return (
    <div className="relative">
      <Details details={details} />
      <NextPrevPost prevBlog={prevBlog} nextBlog={nextBlog} />
      <Written written={written} />
    </div>
  );
};
