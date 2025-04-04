import EventsPage from "@/components/EventsPage";

const PAGE_TYPE = "posts";
const PAGE_TITLE = "Posts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts by the CSSU",
};

export default function Posts() {
  return <EventsPage pageTitle={PAGE_TITLE} pageType={PAGE_TYPE} />;
}
