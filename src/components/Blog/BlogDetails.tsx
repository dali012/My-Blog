import React from "react";
import Link from "next/link";

import { slug as gSlug } from "github-slugger";
import { Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

import ViewCounter from "./ViewCounter";

interface Props {
  blog: Blog;
}

const BlogDetails: React.FC<Props> = ({ blog }: Props) => {
  const publishedAt = blog?.publishedAt ? blog.publishedAt : "";
  return (
    <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(publishedAt), "LLLL, d, yyyy")}
      </time>
      <span className="m-3">
        <ViewCounter
          slug={blog._raw.flattenedPath}
          noCount={false}
          showCount={true}
        />
      </span>
      <div className="m-3">{blog?.readingTime.text}</div>
      <Link href={`/categories/${gSlug(blog?.tags[0])}`} className="m-3">
        #{blog?.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
