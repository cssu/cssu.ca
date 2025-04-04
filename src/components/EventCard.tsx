import Link from "next/link";
import EventBanner from "./EventBanner";

type EventCardProps = {
  contentType: string;
  title: string;
  summary: string;
  contentSubdirectory: string;
  image?: string;
  width?: number;
  height?: number;
};

export default function EventCard({
  contentType,
  title,
  summary,
  contentSubdirectory,
  image,
  width,
  height,
}: EventCardProps) {
  // Determine the URL. Use customLink if provided; otherwise, fall back to default.
  const url = `/${contentType}/${contentSubdirectory}`;

  return (
    <div className="block basis-0 grow shrink p-3 w-full md:w-1/3 md:flex-none">
      <div className="bg-white shadow-[0_2px_3px_rgba(10,10,10,0.1),0_0_0_1px_rgba(10,10,10,0.1)] text-[#4a4a4a] block p-5 rounded-md">
        <figure className="relative w-full h-48 md:h-40 xl:h-64">
          <Link className="w-full h-full" href={url}>
            <EventBanner
              image={image}
              title={title}
              width={width}
              height={height}
            />
          </Link>
        </figure>
        <h3 className="title is-5 relative mx-0 my-[10px] pb-[5px] !mb-[10px] px-0 py-0 max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
          {title}
        </h3>
        <p className="card-summary">{summary}</p>
        <div className="text-right mt-2 lg:mt-0">
          <Link
            href={url}
            className="duration-300 border cursor-pointer justify-center pl-[0.75em] pr-[0.75em] text-center whitespace-nowrap rounded-[6px] pt-[0.375em] pb-[0.375em] bg-[#00329e] border-transparent text-white hover:bg-[#002e91]"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
