import { existsSync, lstatSync, readFileSync, readdirSync } from "fs"
import { join } from "path"

import matter from "gray-matter"
import Image from "next/image"
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

function EventCard({ title, summary, eventDirectory, image }: EventCardProps) {
    // <div className="column is-4">
    //     <div className="box">
    //         <figure className="image is-3by2">
    //             <Link href={`/events/${eventDirectory}`}>
    //                 <Image
    //                     src={`/build-images/events/${eventDirectory}/${image}`}
    //                     alt={title}
    //                     layout="fill"
    //                     objectFit="cover"
    //                 />
    //                 {/* <img
    //                     src={"/Users/baris/dev/cssu.github.io/content/events/semi-formal/cssu-semiadv3.png"}
    //                     alt={title}
    //                 /> */}
    //             </Link>
    //         </figure>
    //         <h3 className="title is-5 refresh-summary-title">{title}</h3>
    //         <p className="refresh-summary">{summary}</p>
    //         <div className="action has-text-right">
    //             <Link href={`/events/${eventDirectory}`} className="button is-primary">
    //                 Read more
    //             </Link>
    //         </div>
    //     </div>
    // </div>
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
    // return (
    //     <div
    //         style={{
    //             flex: "0 0 auto",
    //             width: "33.3333%",
    //             outline: "rgb(74, 74, 74) none 0px",
    //             display: "block",
    //             padding: "12px",
    //             boxSizing: "border-box",
    //         }}
    //     >
    //         <div
    //             style={{
    //                 outline: "rgb(74, 74, 74) none 0px",
    //                 backgroundColor: "rgb(255, 255, 255)",
    //                 borderRadius: "6px",
    //                 boxShadow:
    //                     "rgba(10, 10, 10, 0.1) 0px 2px 3px 0px, rgba(10, 10, 10, 0.1) 0px 0px 0px 1px",
    //                 color: "rgb(74, 74, 74)",
    //                 display: "block",
    //                 padding: "20px",
    //                 boxSizing: "border-box",
    //             }}
    //         >
    //             <figure
    //                 style={{
    //                     outline: "rgb(74, 74, 74) none 0px",
    //                     paddingTop: "250.664px",
    //                     display: "block",
    //                     position: "relative",
    //                     boxSizing: "border-box",
    //                     margin: "auto",
    //                     padding: "250.664px 0px 0px",
    //                 }}
    //             >
    //                 <a
    //                     href="/events/exam-study-sessions/"
    //                     style={{
    //                         outline: "rgb(50, 115, 220) none 0px",
    //                         color: "rgb(50, 115, 220)",
    //                         cursor: "pointer",
    //                         textDecoration: "none solid rgb(50, 115, 220)",
    //                         boxSizing: "border-box",
    //                     }}
    //                 >
    //                     <img
    //                         src="https://cssu.ca/events/exam-study-sessions/examstudysessions_huae1627f5a70ae5d398b11c205210cb0c_541753_600x0_resize_box_2.png"
    //                         style={{
    //                             width: "auto",
    //                             margin: "auto",
    //                             outline: "rgb(50, 115, 220) none 0px",
    //                             height: "250.664px",
    //                             display: "block",
    //                             maxWidth: "100%",
    //                             boxSizing: "border-box",
    //                             inset: "0px",
    //                             position: "absolute",
    //                         }}
    //                         alt=""
    //                     />{" "}
    //                 </a>
    //             </figure>
    //             <h3
    //                 style={{
    //                     outline: "rgb(54, 54, 54) none 0px",
    //                     position: "relative",
    //                     marginTop: "10px",
    //                     marginRight: "0px",
    //                     marginLeft: "0px",
    //                     padding: "0px 0px 5px",
    //                     maxWidth: "100%",
    //                     overflow: "hidden",
    //                     whiteSpace: "nowrap",
    //                     textOverflow: "ellipsis",
    //                     marginBottom: "10px",
    //                     fontFamily: '"Open Sans", sans-serif',
    //                     fontSize: "20px",
    //                     color: "rgb(54, 54, 54)",
    //                     fontWeight: 600,
    //                     lineHeight: "22.5px",
    //                     wordBreak: "break-word",
    //                     boxSizing: "border-box",
    //                     margin: "10px 0px",
    //                 }}
    //             >
    //                 CSSU Exam Study Sessions
    //             </h3>
    //             <p
    //                 style={{
    //                     outline: "rgb(74, 74, 74) none 0px",
    //                     display: "-webkit-box",
    //                     WebkitLineClamp: 3,
    //                     WebkitBoxOrient: "vertical",
    //                     overflow: "hidden",
    //                     height: "72px",
    //                     textOverflow: "ellipsis",
    //                     boxSizing: "border-box",
    //                     margin: "0px",
    //                     padding: "0px",
    //                 }}
    //             >
    //                 Student-led final exam review for students
    //             </p>
    //             <div
    //                 style={{
    //                     outline: "rgb(74, 74, 74) none 0px",
    //                     textAlign: "right",
    //                     boxSizing: "border-box",
    //                 }}
    //             >
    //                 <a
    //                     href="/events/exam-study-sessions/"
    //                     style={{
    //                         outline: "rgb(255, 255, 255) none 0px",
    //                         cursor: "pointer",
    //                         transition: "all 0.5s ease 0s",
    //                         backgroundColor: "rgb(0, 50, 158)",
    //                         borderColor: "rgba(0, 0, 0, 0)",
    //                         color: "rgb(255, 255, 255)",
    //                         borderWidth: "1px",
    //                         justifyContent: "center",
    //                         padding: "5px 12px",
    //                         textAlign: "center",
    //                         whiteSpace: "nowrap",
    //                         textDecoration: "none solid rgb(255, 255, 255)",
    //                         boxSizing: "border-box",
    //                         appearance: "none",
    //                         alignItems: "center",
    //                         border: "1px solid rgba(0, 0, 0, 0)",
    //                         borderRadius: "4px",
    //                         boxShadow: "none",
    //                         display: "inline-flex",
    //                         fontSize: "16px",
    //                         height: "36px",
    //                         lineHeight: "24px",
    //                         position: "relative",
    //                         verticalAlign: "top",
    //                         userSelect: "none",
    //                     }}
    //                 >
    //                     Read more
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // )
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

    // title: "Pancake Breakfast"
    // date: 2024-03-04
    // draft: false
    // hideLastModified: false
    // keepImageRatio: true
    // showInMenu: false
    // summary: "Bi-weekly Pancake Breakfast!"
    // summaryImage: pancake-breakfast.png

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
