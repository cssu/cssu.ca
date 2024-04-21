import Link from "next/link"
import Image from "next/image"

type NavbarHrefProps = {
    href: string
    text: string
}

function NavbarHref({ href, text }: NavbarHrefProps) {
    return (
        <Link href={href} className="navbar-item is-secondary">
            {text}
        </Link>
    )
}

export default function Navbar() {
    // return (
    //     <nav className="bg-transparent py-4 sticky top-0">
    //         <div className="container mx-auto flex justify-between items-center">
    //             <div className="flex items-center">
    //                 <Link href="/">
    //                     <Image
    //                         src="/horizontal_logo_black.png"
    //                         alt="CSSU Logo"
    //                         width={128}
    //                         height={32}
    //                         quality={100}
    //                     />
    //                 </Link>
    //                 <div className="hidden md:block flex-grow"></div>
    //             </div>
    //             <div className="hidden md:flex space-x-5">
    //                 <Link href="/ba2250/" className="text-gray-500 font-light hover:text-gray-900">
    //                     BA2250
    //                 </Link>
    //                 <Link href="/about/" className="text-gray-500 font-light hover:text-gray-900">
    //                     About
    //                 </Link>
    //                 <Link href="/community/" className="text-gray-500 font-light hover:text-gray-900">
    //                     Community
    //                 </Link>
    //                 <Link
    //                     href="/posts/student-resources/"
    //                     className="text-gray-500 font-light hover:text-gray-900"
    //                 >
    //                     Resources
    //                 </Link>
    //                 <Link href="/partner-events/" className="text-gray-500 font-light hover:text-gray-900">
    //                     Partner Events
    //                 </Link>
    //                 <Link href="/events/" className="text-gray-500 font-light hover:text-gray-900">
    //                     Events
    //                 </Link>
    //                 <Link href="/posts/" className="text-gray-500 font-light hover:text-gray-900">
    //                     Posts
    //                 </Link>
    //             </div>
    //         </div>
    //     </nav>
    // )
    return (
        <nav
            className="navbar is-fresh is-transparent is-active"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link className="navbar-item" href="/">
                        <Image
                            src="/horizontal_logo_black.png"
                            alt="CSSU Logo"
                            width={128}
                            height={32}
                            quality={100}
                        />
                    </Link>
                    <div className="navbar-item is-expanded"></div>
                    <a className="navbar-item is-hidden-desktop">
                        <div
                            data-target="cloned-navbar-menu"
                            className="navbar-item right-menu-icon-wrapper is-hidden-desktop"
                        >
                            Menu
                        </div>
                        <div
                            data-target="cloned-navbar-menu"
                            className="menu-icon-wrapper right-menu-icon-wrapper visible"
                        >
                            {" "}
                            <svg width="1000px" height="1000px">
                                <path
                                    className="path1"
                                    d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                                ></path>
                                <path className="path2" d="M 300 500 L 700 500"></path>
                                <path
                                    className="path3"
                                    d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                                ></path>
                            </svg>{" "}
                            <button id="menu-icon-trigger" className="menu-icon-trigger"></button>{" "}
                        </div>
                    </a>
                </div>
                <div id="cloned-navbar-menu" className="navbar-menu is-static">
                    <div className="navbar-end">
                        <NavbarHref href="/ba2250/" text="BA2250" />
                        <NavbarHref href="/about/" text="About" />
                        <NavbarHref href="/community/" text="Community" />
                        <NavbarHref href="/posts/student-resources/" text="Resources" />
                        <NavbarHref href="/partner-events/" text="Partner Events" />
                        <NavbarHref href="/events/" text="Events" />
                        <NavbarHref href="/posts/" text="Posts" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
