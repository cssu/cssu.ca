import EventCard from "./EventCard";

type EventItem = {
  eventDirectory: string;
  mdxFolderPath?: string;
  frontMatter: {
    title: string;
    summary: string;
    summaryImage?: string;
  };
};

type EventsPageProps = {
  pageType: string;
  pageTitle: string;
};

// Instead of reading from MD files, we conditionally return data
function getAllFrontMatter(pageType: string): EventItem[] {
  if (pageType === "posts") {
    return [
      {
        eventDirectory: "faq",
        // For a posts page you might not need mdxFolderPath
        frontMatter: {
          title: "Frequently Asked Questions",
          summary: "Answering your most popular questions!",
          // Optionally, provide an image filename if needed
          summaryImage: "faq.jpg",
        },
      },
      {
        eventDirectory: "resources",
        frontMatter: {
          title: "Resources",
          summary: "List of Resources for CS students",
          summaryImage: "resources.jpg",
        },
      },
      {
        eventDirectory: "first-years-guide-to-cs",
        frontMatter: {
          title: "First Years Guide to CS",
          summary: "Everything you need to know for your first year in CS!",
          summaryImage: "first-year-guide.jpg",
        },
      },
    ];
  }

  // Otherwise, return your default (or MD-based) data.
  return [
    {
      eventDirectory: "event1",
      mdxFolderPath: "/events/event1",
      frontMatter: {
        title: "Event One",
        summary: "Summary for event one.",
        summaryImage: "event1.jpg",
      },
    },
    {
      eventDirectory: "event2",
      mdxFolderPath: "/events/event2",
      frontMatter: {
        title: "Event Two",
        summary: "Summary for event two.",
        summaryImage: "event2.jpg",
      },
    },
    {
      eventDirectory: "event3",
      mdxFolderPath: "/events/event3",
      frontMatter: {
        title: "Event Three",
        summary: "Summary for event three.",
        summaryImage: "event3.jpg",
      },
    },
    // ...other events if needed
  ];
}

// Groups an array into subarrays of a given size.
function groupBy<T>(arr: T[], groupSize: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    groups.push(arr.slice(i, i + groupSize));
  }
  return groups;
}

// Converts folder path and image name to image paths.
function mapToImage(mdxFolderPath: string, summaryImage: string) {
  const nextImagePath = `${mdxFolderPath}/${summaryImage}`;
  const absoluteImagePath = nextImagePath;
  return { nextImagePath, absoluteImagePath };
}

export default function EventsPage({ pageType, pageTitle }: EventsPageProps) {
  // Pass the pageType to getAllFrontMatter so it returns the right data.
  const frontMatters = getAllFrontMatter(pageType);
  const groupedFrontMatters = groupBy(frontMatters, 3);

  return (
    <section className="block py-12 px-6 lg:py-36 lg:px-6 fadeIn">
      <div className="section-container">
        <h1 className="title section-title">{pageTitle}</h1>
        <div className="subtitle text-xl text-[#999]"></div>
        <div className="h-[3px] rounded-[50px] bg-black w-[60px]"></div>
        <div className="block py-12 px-6">
          {groupedFrontMatters.map((group, index) => (
            <div
              key={index}
              className="ml-[-0.75rem] mr-[-0.75rem] mt-[-0.75rem] last:mb-[-0.75rem] md:flex"
            >
              {group.map((event, innerIndex) => {
                // When not using mdxFolderPath (i.e. for posts) image might be optional
                const { nextImagePath } =
                  event.mdxFolderPath && event.frontMatter.summaryImage
                    ? mapToImage(
                        event.mdxFolderPath,
                        event.frontMatter.summaryImage
                      )
                    : { nextImagePath: undefined };
                return (
                  <EventCard
                    key={`${index}${innerIndex}${event.frontMatter.title}`}
                    contentType={pageType}
                    title={event.frontMatter.title}
                    summary={event.frontMatter.summary}
                    contentSubdirectory={event.eventDirectory}
                    image={nextImagePath}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
