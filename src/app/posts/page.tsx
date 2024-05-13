import ContentCard from '@/components/ContentCard'
import { getAllFrontMatter } from '@/lib/collectContent'
import groupBy from '@/lib/groupBy'

const PAGE_TYPE = 'posts'
const PAGE_TITLE = 'Posts'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Posts',
    description: 'Posts by the CSSU',
}

export default function Posts() {
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
