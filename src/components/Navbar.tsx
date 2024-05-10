"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

type NavbarHrefProps = {
    href: string
    text: string
}

function MobileNavbarCloseSvg() {
    return (
        <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g stroke-width="0" />
            <g strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="m16 8-8 8m0-8 8 8"
                stroke="#000"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function MobileNavbarOpenSvg() {
    return (
        <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g strokeWidth="0" />
            <g strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
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
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const [hasShadow, setHasShadow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true)
            } else {
                setHasShadow(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav
            className={`navbar is-fresh is-transparent ${hasShadow ? "shadow-active" : ""}`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-container">
                <div className="navbar-brand pr-2 md:pr-0">
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
                    <div className="flex m-auto items-center justify-center navbar-item is-hidden-desktop">
                        <button
                            onClick={() => setMobileMenuIsOpen(isOpen => !isOpen)}
                            id="menu-icon-trigger"
                            className="menu-icon-trigger"
                        >
                            {mobileMenuIsOpen ? <MobileNavbarCloseSvg /> : <MobileNavbarOpenSvg />}
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-menu"
                    className={
                        mobileMenuIsOpen
                            ? `flex flex-col text-center justify-center shadow-md`
                            : `navbar-menu is-static`
                    }
                >
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
