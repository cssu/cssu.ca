import Link from "next/link"
import Image from "next/image"

type ContentCardProps = {
    contentType: string
    title: string
    summary: string
    contentSubdirectory: string
    image: string | undefined
}

export default function ContentCard({
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
                        {image ? (
                            <Image
                                src={`/build-images/${contentType}/${contentSubdirectory}/${image}`}
                                className="w-auto h-full m-auto object-contain"
                                alt={`Image describing ${title}`}
                                fill
                            />
                        ) : (
                            <Image
                                src="/horizontal_logo_black.png"
                                className="h-auto m-auto object-contain"
                                alt="CSSU placeholder logo"
                                fill
                            />
                        )}
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
