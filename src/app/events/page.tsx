export default function Events({ children }: { children: React.ReactNode }) {
    return (
        <section className="section is-medium">
            <div className="section-container">
                <h1 className="title section-title">Events</h1>
                <div className="subtitle is-5 is-muted"></div>
                <div className="divider"></div>
                <div className="section">{children}</div>
            </div>
        </section>
    )
}
