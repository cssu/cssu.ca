type InformationPageProps = {
    metadata: any
    children: React.ReactNode
}

export default function InformationPage({ metadata, children }: InformationPageProps) {
    return (
        <section className="section is-medium">
            <div className="section-container">
                <div className="columns">
                    <div className="column is-centered-tablet-portrait">
                        <h1 className="title is-2 section-title">{metadata.title}</h1>
                        <div className="subtitle is-5 is-muted"></div>
                        <div className="divider"></div>
                        <section className="section content has-text-left">{children}</section>
                    </div>
                </div>
            </div>
            {!metadata.hideLastModified && (
                <div className="section-container">
                    <div className="columns">
                        <div className="column has-text-right is-centered-tablet-portrait">
                            <span className="font-mono">
                                Last modified:&nbsp;
                                {
                                    metadata.lastModified
                                        ? new Date(metadata.lastModified).toLocaleDateString(
                                              "en-US",
                                              {
                                                  year: "numeric",
                                                  month: "long",
                                                  day: "numeric",
                                              }
                                          )
                                        : "Unknown" // This likely won't be the case, but always best to handle.
                                    // TODO: ^ It is indeed the case for exam-study-sessions. Need to add
                                    // a lastDateModified field to the frontmatter.
                                }
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
