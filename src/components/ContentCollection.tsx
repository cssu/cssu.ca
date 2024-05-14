import ContentCard from '@/components/ContentCard'
import { getAllFrontMatter } from '@/lib/collectContent'
import groupBy from '@/lib/groupBy'
import mapToImage from '@/lib/mapToImage'

type ContentCollectionProps = {
    pageType: string
    pageTitle: string
}

export default function ContentCollection({ pageType, pageTitle }: ContentCollectionProps) {
    const frontMatters = getAllFrontMatter(pageType)

    const groupedFrontMatters = groupBy(frontMatters, 3)

    return (
        <section className="section is-medium">
            <div className="section-container">
                <h1 className="title section-title">{pageTitle}</h1>
                <div className="subtitle is-5 is-muted"></div>
                <div className="divider"></div>
                <div className="section">
                    {groupedFrontMatters.map((group, index) => (
                        <div key={index} className="columns">
                            {group.map((event, innerIndex) => {
                                const { nextImagePath, absoluteImagePath } =
                                    event.mdxFolderPath && event.frontMatter.summaryImage
                                        ? mapToImage(
                                            event.mdxFolderPath,
                                            event.frontMatter.summaryImage
                                        )
                                        : { nextImagePath: undefined, absoluteImagePath: undefined }
                                return (
                                    <ContentCard
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
