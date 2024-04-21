import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="bg-transparent py-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/horizontal_logo_black.png"
                            alt="CSSU Logo"
                            width={128}
                            height={32}
                            quality={100}
                        />
                    </Link>
                    <div className="hidden md:block flex-grow"></div>
                </div>
                <div className="hidden md:flex space-x-5">
                    <Link href="/ba2250/" className="text-gray-500 font-light hover:text-gray-900">
                        BA2250
                    </Link>
                    <Link href="/about/" className="text-gray-500 font-light hover:text-gray-900">
                        About
                    </Link>
                    <Link href="/community/" className="text-gray-500 font-light hover:text-gray-900">
                        Community
                    </Link>
                    <Link
                        href="/posts/student-resources/"
                        className="text-gray-500 font-light hover:text-gray-900"
                    >
                        Resources
                    </Link>
                    <Link href="/partner-events/" className="text-gray-500 font-light hover:text-gray-900">
                        Partner Events
                    </Link>
                    <Link href="/events/" className="text-gray-500 font-light hover:text-gray-900">
                        Events
                    </Link>
                    <Link href="/posts/" className="text-gray-500 font-light hover:text-gray-900">
                        Posts
                    </Link>
                </div>
            </div>
        </nav>
    )
}
