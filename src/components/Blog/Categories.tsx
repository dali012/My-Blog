import React from "react";
import Category from "../Elements/Category";
import { slug as gSlug } from "github-slugger";

interface Props {
  categories: string[];
  activeSlug: string;
}

const Categories: React.FC<Props> = ({ categories, activeSlug }: Props) => {
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((category) => (
        <Category
          key={category}
          link={category}
          activeSlug={activeSlug === gSlug(category)}
          name={category}
          className=""
        />
      ))}
    </div>
  );
};

export default Categories;
