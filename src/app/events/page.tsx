import { existsSync, lstatSync, readFileSync, readdirSync } from "fs"
import { join } from "path"

import matter from "gray-matter"
import Link from "next/link"

function getFrontMatter(eventName: string) {
    const filePath = join(process.cwd(), "./content/events/", eventName, "index.mdx")
    if (existsSync(filePath)) {
        const content = readFileSync(filePath, "utf8")
        const { data } = matter(content)
        return data
    } else {
        const dir = join(process.cwd(), "./content/events/", eventName)

        if (!lstatSync(dir).isDirectory()) {
            return undefined
        }

        console.warn(
            `Warning: No index.mdx file found in ${filePath}. Consider renaming the MDX file in ${eventName} folder to index.mdx`
        )

        for (const file of readdirSync(dir)) {
            if (file.endsWith(".mdx")) {
                const content = readFileSync(join(dir, file), "utf8")
                const { data } = matter(content)
                return data
            }
        }

        return undefined
    }
}

function getAllFrontMatter() {
    const frontMatters = []
    const dir = join(process.cwd(), "./content/events/")

    for (const subdirectory of readdirSync(dir)) {
        const frontMatter = getFrontMatter(subdirectory)
        if (frontMatter) {
            frontMatter.eventDirectory = subdirectory
            frontMatters.push(frontMatter)
        }
    }
    return frontMatters.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

type EventCardProps = {
    title: string
    summary: string
    eventDirectory: string
    image: string
}

// TODO: Generate dynamic sitemap

function EventCard({ title, summary, eventDirectory, image }: EventCardProps) {
    // TODO: Convert img to next/Image
    return (
        <div className="column is-4">
            <div className="box">
                <figure className="image is-3by2">
                    <Link href={`/events/${eventDirectory}`}>
                        <img
                            src={`/build-images/events/${eventDirectory}/${image}`}
                            style={{ width: "auto", margin: "auto" }}
                            alt=""
                        />
                        {/* <Image
                            src={`/build-images/events/${eventDirectory}/${image}`}
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
                    <Link href={`/events/${eventDirectory}`} className="button is-primary">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

function groupBy(array: any[], n: number) {
    let groups = []
    for (let i = 0; i < array.length; i += n) {
        groups.push(array.slice(i, i + n))
    }
    return groups
}

export default function Events() {
    const frontMatters = getAllFrontMatter()

    const groupedFrontMatters = groupBy(frontMatters, 3)

    return (
        <section className="section is-medium">
            <div className="section-container">
                <h1 className="title section-title">Events</h1>
                <div className="subtitle is-5 is-muted"></div>
                <div className="divider"></div>
                <div className="section">
                    {groupedFrontMatters.map((group, index) => (
                        <div key={index} className="columns">
                            {group.map((event, innerIndex) => (
                                <EventCard
                                    key={`${index}${innerIndex}${event.title}`}
                                    title={event.title}
                                    summary={event.summary}
                                    eventDirectory={event.eventDirectory}
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
