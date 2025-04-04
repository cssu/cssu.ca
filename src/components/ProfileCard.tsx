import Image from "next-image-export-optimizer";
import { FaGithub, FaInstagram, FaLinkedin, FaUser } from "react-icons/fa";

function ProfileUrl({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="no-underline text-black"
      rel="noopener noreferrer"
    >
      <span
        className="h-[20px] px-[5px] py-0 inline-block"
        style={{ filter: "opacity(0.7)" }}
      >
        {children}
      </span>
    </a>
  );
}

function ProfileImage({
  imageUrl,
  fullName,
}: {
  imageUrl: string;
  fullName: string;
}) {
  // Directly render the image using the provided URL.
  return (
    <div className="min-w-full min-h-full rounded-full">
      <Image
        src={imageUrl}
        alt={fullName}
        className="rounded-full border-none object-cover w-[148px] h-[148px]"
        height={148}
        width={148}
        priority
      />
    </div>
  );
}

type ProfileCardProps = {
  fullName: string;
  position?: string;
  imageUrl?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
};

export default function ProfileCard({
  fullName,
  position,
  imageUrl,
  github,
  instagram,
  linkedin,
  website,
}: ProfileCardProps) {
  return (
    <div className="flex flex-wrap justify-center bg-white">
      <div className="bg-white w-[200px] h-[300px]">
        <center className="block px-0 py-[9px] h-[44px]">
          {github && (
            <ProfileUrl href={github}>
              <FaGithub className="text-[20px]" />
            </ProfileUrl>
          )}
          {instagram && (
            <ProfileUrl href={instagram}>
              <FaInstagram className="text-[20px]" />
            </ProfileUrl>
          )}
          {linkedin && (
            <ProfileUrl href={linkedin}>
              <FaLinkedin className="text-[20px]" />
            </ProfileUrl>
          )}
          {website && (
            <ProfileUrl href={website}>
              <FaUser className="text-[20px]" />
            </ProfileUrl>
          )}
        </center>
        <div className="relative top-0">
          <div className="border border-darkblue rounded-full w-[150px] h-[150px] max-w-[300px] ml-[25px] mr-[25px] my-0 bg-black">
            <div
              className="rounded-full border-none w-[148px] h-[148px] object-cover bg-black bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  process.env.__NEXT_ROUTER_BASEPATH || ""
                }/cssu_logo.png)`,
                backgroundSize: "105px",
              }}
            >
              {imageUrl && (
                <ProfileImage imageUrl={imageUrl} fullName={fullName} />
              )}
            </div>
          </div>
          <div className="block w-[170px] ml-[15px] mr-[15px] relative">
            <center className="text-base font-semibold">{fullName}</center>
          </div>
          <div className="block w-[170px] ml-[15px] mr-[15px] relative">
            <center className="text-sm">{position}</center>
          </div>
        </div>
      </div>
    </div>
  );
}
