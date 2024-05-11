import ContentCard from '@/components/ContentCard'
import { getAllFrontMatter } from '@/lib/collectContent'
import groupBy from '@/lib/groupBy'


// TODO: Generate dynamic sitemap
const PAGE_TYPE = 'events'
const PAGE_TITLE = 'Events'

export default function Events() {
    const frontMatters = getAllFrontMatter(PAGE_TYPE)

    const groupedFrontMatters = groupBy(frontMatters, 3)

    return (
        <section className="section is-medium">
            <div className="section-container">
                <h1 className="title section-title">{PAGE_TITLE}</h1>
                <div className="subtitle is-5 is-muted"></div>
                <div className="divider"></div>
                <div className="section">
                    {groupedFrontMatters.map((group, index) => (
                        <div key={index} className="columns">
                            {group.map((event, innerIndex) => (
                                <ContentCard
                                    key={`${index}${innerIndex}${event.title}`}
                                    contentType={PAGE_TYPE}
                                    title={event.title}
                                    summary={event.summary}
                                    contentSubdirectory={event.eventDirectory}
                                    image={event.summaryImage}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
