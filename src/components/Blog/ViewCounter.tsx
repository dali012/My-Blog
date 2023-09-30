"use client";

import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface Props {
  slug: string;
  noCount: boolean;
  showCount: boolean;
}

const supabase = createClientComponentClient();

const ViewCounter: React.FC<Props> = ({
  noCount = false,
  showCount = true,
  slug,
}: Props) => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error) {
          console.error(error.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (!noCount) {
      incrementView();
    }
  }, [noCount, slug]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({
            slug: slug,
          })
          .single();
        if (error) {
          console.error(error.message);
        }
        setViews(data ? data.count : 0);
      } catch (error) {
        console.error(error);
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
