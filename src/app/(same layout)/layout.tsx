import InsightRoll from "@/src/components/Shared/InsightRoll";
import React from "react";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />

      {children}
    </main>
  );
}
