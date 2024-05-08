import { FaFacebook, FaGithub, FaLinkedin, FaUser } from "react-icons/fa"
import Image from "next/image"

function ProfileUrl({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            className="no-underline text-[black]"
            rel="noopener noreferrer"
        >
            <span className="h-[20px] px-[5px] py-0 [filter:opacity(0.7)] inline-block">
                {children}
            </span>
        </a>
    )
}

type ProfileCardProps = {
    fullName: string
    position?: string
    imageUrl?: string
    linkedin?: string
    github?: string
    facebook?: string
    website?: string
}

export default function ProfileCard({
    fullName,
    position,
    imageUrl,
    linkedin,
    github,
    facebook,
    website,
}: ProfileCardProps) {
    return (
        <div className="flex flex-wrap justify-center bg-[white]">
            <div className="bg-[white] w-[200px] h-[300px]">
                <center className="block px-0 py-[9px] h-[44px]">
                    {linkedin && (
                        <ProfileUrl href={linkedin}>
                            <FaLinkedin className="text-[20px]" />
                        </ProfileUrl>
                    )}
                    {github && (
                        <ProfileUrl href={github}>
                            <FaGithub className="text-[20px]" />
                        </ProfileUrl>
                    )}
                    {facebook && (
                        <ProfileUrl href={facebook}>
                            <FaFacebook className="text-[20px]" />
                        </ProfileUrl>
                    )}
                    {website && (
                        <ProfileUrl href={website}>
                            <FaUser className="text-[20px]" />
                        </ProfileUrl>
                    )}
                </center>
                <div className="relative top-0">
                    <div className="border-[thin] border-[darkblue] rounded-[50%] border-solid w-[150px] h-[150px] max-w-[300px] ml-[25px] mr-[25px] my-0 bg-[#000000]">
                        <div
                            className="rounded-[50%] border-none w-[148px] h-[148px] object-cover bg-[#000000] bg-center [background-size:105px] bg-no-repeat"
                            style={{ backgroundImage: "url(/cssu_logo.png)" }}
                        >
                            {imageUrl && (
                                <div className="min-w-full min-h-full rounded-[50%]">
                                    <Image
                                        className="rounded-[50%] border-none object-cover w-[148px] h-[148px]"
                                        src={imageUrl}
                                        alt={fullName}
                                        height={148}
                                        width={148}
                                    />
                                </div>
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
    )
}
