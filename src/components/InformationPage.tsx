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
        </section>
    )
}
