import HomeCoverSection from "../components/Home/HomeCoverSection";

import { allBlogs } from "contentlayer/generated";
import { shortBlogs } from "../utils";
import FeaturedBlogs from "../components/Home/FeaturedBlogs";
import RecentBlogs from "../components/Home/RecentBlogs";

export default function Home() {
  const sortedBlogs = shortBlogs(allBlogs);

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blog={sortedBlogs[0]} />
      <FeaturedBlogs blogs={sortedBlogs.slice(1)} />
      <RecentBlogs blogs={sortedBlogs.slice(5, 11)} />
    </main>
  );
}
