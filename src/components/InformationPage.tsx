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
                                {new Date(
                                    metadata.lastModified ? metadata.lastModified : metadata.date
                                ).toLocaleDateString("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
