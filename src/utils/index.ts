import GithubSlugger from "github-slugger";

import { Blog, allBlogs } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";
import { slug as gSlug } from "github-slugger";

export type TOC = {
  level: string;
  text: string;
  slug: string | undefined;
};

export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");

export const shortBlogs = (blogs: Blog[]) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),
    );
};

export const parseImageUrl = (imageUrl: string) => {
  return imageUrl?.replace("../public", "");
};

export const getBlogBySlug = (slug: string) => {
  return allBlogs.find((blog) => blog._raw.flattenedPath === slug);
};

export const getBlogsBySlug = (slug: string) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = gSlug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (slug === "all") {
        return true;
      }
      return slugified === slug;
    });
  });
  return { blogs, allCategories };
};

export const getCategoriesPaths = () => {
  const slugger = new GithubSlugger();
  const categories: string[] = [];
  const paths = [
    {
      slug: "all",
    },
  ];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({
            slug: slugified,
          });
        }
      });
    }
  });

  return paths;
};

export const getBlogsPaths = () => {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
};
