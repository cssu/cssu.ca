type InformationPageMetadata = {
  title: string;
  hideLastModified?: boolean;
  date: string;
  lastModified?: string;
};

type InformationPageProps = {
  metadata: InformationPageMetadata;
  children: React.ReactNode;
};

export default function InformationPage({
  metadata,
  children,
}: InformationPageProps) {
  return (
    <section className="block py-12 px-6 lg:py-36 lg:px-6 fadeIn">
      <div className="section-container">
        <div
          className="ml-[-0.75rem] mr-[-0.75rem] mt-[-0.75rem]
                last:mb-[-0.75rem] md:flex"
        >
          <div
            className="block basis-0 grow shrink p-3 text-left
                    md:text-center lg:text-left"
          >
            <h1 className="title is-2 section-title">{metadata.title}</h1>
            <div className="subtitle text-xl text-[#999]"></div>
            <div
              className="h-[3px] rounded-[50px] bg-black w-[60px]
                        md:mx-auto !md:my-0 lg:mx-0"
            ></div>
            <section className="block py-12 px-6 content text-left">
              {children}
            </section>
          </div>
        </div>
      </div>
      {!metadata.hideLastModified && (
        <div className="section-container">
          <div
            className="ml-[-0.75rem] mr-[-0.75rem] mt-[-0.75rem]
                    last:mb-[-0.75rem] md:flex"
          >
            <div
              className="block basis-0 grow shrink p-3 text-right
                        md:text-center lg:text-right"
            >
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
  );
}
