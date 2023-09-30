import Image from "next/image";
import Link from "next/link";
import React from "react";

import headerLogo from "@/public/header-logo.webp";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
        <Image
          src={headerLogo}
          alt="Dali012"
          className="w-full h-auto rounded-full"
          priority
          sizes="20vw"
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        My Blog
      </span>
    </Link>
  );
};

export default Logo;
