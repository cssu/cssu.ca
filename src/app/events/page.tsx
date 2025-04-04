import EventsPage from "@/components/EventsPage";

import type { Metadata } from "next";

const PAGE_TYPE = "events";
const PAGE_TITLE = "Events";

export const metadata: Metadata = {
  title: "Events",
  description: "Events hosted by the CSSU",
};

export default function Events() {
  return <EventsPage pageTitle={PAGE_TITLE} pageType={PAGE_TYPE} />;
}
