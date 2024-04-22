import Link from "next/link"
import Image from "next/image"
import Sticky from "./Sticky"

type NavbarHrefProps = {
    href: string
    text: string
}

function MobileNavbarOpenSvg() {
    return (
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
        </svg>
    )
}

function NavbarHref({ href, text }: NavbarHrefProps) {
    return (
        <Link href={href} className="navbar-item is-secondary">
            {text}
        </Link>
    )
}

export default function Navbar() {
    return (
        <nav
            className="navbar is-fresh is-transparent is-active"
            role="navigation"
            aria-label="main navigation"
        >
            <Sticky />
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link className="navbar-item" href="/">
                        <Image
                            src="/horizontal_logo_black.png"
                            alt="CSSU Logo"
                            width={128}
                            height={32}
                            priority
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
                            <MobileNavbarOpenSvg />
                            <button
                                id="menu-icon-trigger"
                                className="menu-icon-trigger"
                            ></button>{" "}
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
