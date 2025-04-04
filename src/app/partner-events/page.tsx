import EventsPage from "@/components/EventsPage";

import type { Metadata } from "next";

const PAGE_TYPE = "partner-events";
const PAGE_TITLE = "Partner Events";

export const metadata: Metadata = {
  title: "Partner Events",
  description: "Events hosted by the partners of CSSU",
};

export default function PartnerEvents() {
  return <EventsPage pageTitle={PAGE_TITLE} pageType={PAGE_TYPE} />;
}
