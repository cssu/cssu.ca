import React from "react";
import type { Metadata } from "next";

// Metadata extracted from the frontmatter.
export const metadata: Metadata = {
  title: "First Year's Guide to CS",
  description: "A Guide for First Year CS Students!",
};

export default function FirstYearsGuideToCS() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-xl mb-4">Work in Progress</p>
      <a
        href="https://github.com/cssu/firstyearguide/blob/main/FYG.md"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        View the Guide on GitHub
      </a>
    </div>
  );
}
