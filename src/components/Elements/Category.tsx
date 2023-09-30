import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  className: string;
  name: string;
  activeSlug: boolean;
}

const Category: React.FC<Props> = ({
  link,
  className,
  name,
  activeSlug,
}: Props) => {
  return (
    <Link
      href={`/categories/${link}`}
      className={cx(
        "inline-block py-1.5 md:py-2 px-6  md:px-10   rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
        className,
        activeSlug
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light",
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
