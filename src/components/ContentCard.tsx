import Link from "next/link"

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
    // TODO: Convert img to next/Image
    return (
        <div className="column is-4">
            <div className="box">
                <figure className="image is-3by2">
                    <Link href={`/${contentType}/${contentSubdirectory}`}>
                        <img
                            src={
                                image
                                    ? `/build-images/${contentType}/${contentSubdirectory}/${image}`
                                    : "/horizontal_logo_black.png"
                            }
                            style={
                                image
                                    ? { width: "auto", margin: "auto" }
                                    : { height: "auto", margin: "auto" }
                            }
                            alt=""
                        />
                        {/* <Image
                            src={`/build-images/${contentType}/${contentSubdirectory}/${image}`}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="w-auto m-auto"
                        /> */}
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
