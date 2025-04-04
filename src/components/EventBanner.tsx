import Image from "next/image";
import HorizontalLogoBlack from "@/../public/horizontal_logo_black.png";

type EventBannerProps = {
  title: string;
  image?: string;
  width?: number;
  height?: number;
};

export default function EventBanner({
  title,
  image,
  width,
  height,
}: EventBannerProps) {
  if (image && width && height) {
    return (
      <Image
        src={image}
        className="block mx-auto w-auto h-full object-contain"
        alt={title}
        width={width}
        height={height}
        priority
      />
    );
  } else {
    return (
      <Image
        src={HorizontalLogoBlack}
        className="block mx-auto w-auto h-full object-contain"
        alt="CSSU placeholder logo"
        width={3990}
        height={1110}
        priority
      />
    );
  }
}
