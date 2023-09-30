import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";

import { getBlogsBySlug, getCategoriesPaths } from "@/src/utils";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params: { slug } }: Props) {
  const { allCategories, blogs } = getBlogsBySlug(slug);

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} activeSlug={slug} />
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return getCategoriesPaths();
}

export async function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `${slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      slug === "all" ? "web development" : slug.replaceAll("-", " ")
    } through our collection of expert blogs andd tutorials`,
  };
}
