import Link from 'next/link'

import ContentImageBanner from './ContentImageBanner'

type ContentCardProps = {
    contentType: string
    title: string
    summary: string
    contentSubdirectory: string
    image?: string
}

export default async function ContentCard({
    contentType,
    title,
    summary,
    contentSubdirectory,
    image,
}: ContentCardProps) {
    return (
        <div className="column is-4">
            <div className="box">
                <figure className="image is-3by2">
                    <Link className="w-full h-full" href={`/${contentType}/${contentSubdirectory}`}>
                        <ContentImageBanner
                            contentType={contentType}
                            contentSubdirectory={contentSubdirectory}
                            image={image}
                            title={title}
                        />
                    </Link>
                </figure>
                <h3 className="title is-5 refresh-summary-title">{title}</h3>
                <p className="refresh-summary">{summary}</p>
                <div className="action has-text-right">
                    <Link
                        href={`/${contentType}/${contentSubdirectory}`}
                        className="button is-primary"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}
