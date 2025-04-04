import EventCard from '@/components/EventCard'
import { getAllFrontMatter } from '@/lib/collectContent'
import groupBy from '@/lib/groupBy'
import mapToImage from '@/lib/mapToImage'

type EventsPageProps = {
    pageType: string
    pageTitle: string
}

export default function EventsPage({ pageType, pageTitle }: EventsPageProps) {
    const frontMatters = getAllFrontMatter(pageType)

    const groupedFrontMatters = groupBy(frontMatters, 3)

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
                            className="ml-[-0.75rem] mr-[-0.75rem] mt-[-0.75rem]
                            last:mb-[-0.75rem] md:flex"
                        >
                            {group.map((event, innerIndex) => {
                                const { nextImagePath, absoluteImagePath } =
                                    event.mdxFolderPath && event.frontMatter.summaryImage
                                        ? mapToImage(
                                            event.mdxFolderPath,
                                            event.frontMatter.summaryImage
                                        )
                                        : { nextImagePath: undefined, absoluteImagePath: undefined }
                                return (
                                    <EventCard
                                        key={`${index}${innerIndex}${event.frontMatter.title}`}
                                        contentType={pageType}
                                        title={event.frontMatter.title}
                                        summary={event.frontMatter.summary}
                                        contentSubdirectory={event.eventDirectory}
                                        image={nextImagePath}
                                        absoluteImagePath={absoluteImagePath}
                                    />
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
