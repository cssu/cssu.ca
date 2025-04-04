"use client";

import Link from "next/link";
import Image from "next-image-export-optimizer";
import { useEffect, useState } from "react";

import CSSULogoHorizontal from "@/../public/horizontal_logo_black.png";

function MobileNavbarCloseSvg() {
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
        d="m16 8-8 8m0-8 8 8"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
  );
}

type NavbarHrefProps = {
  href: string;
  text: string;
  setMobileMenuIsOpen: (isOpen: boolean) => void;
};

function NavbarHref({ href, text, setMobileMenuIsOpen }: NavbarHrefProps) {
  return (
    <Link
      href={href}
      className="text-gray-700 block leading-normal relative px-3 py-2 grow-0 shrink-0
            hover:text-black lg:items-center lg:flex"
      onClick={() => setMobileMenuIsOpen(false)}
    >
      {text}
    </Link>
  );
}

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`relative z-30 lg:items-stretch
            lg:flex lg:min-h-[3.25rem] min-h-[3.8rem] transition-all bg-white
            ${hasShadow ? "navbar-shadow-active" : ""}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-screen mx-auto items-stretch w-full block lg:flex min-h-[4rem]">
        <div
          className="items-stretch lg:ml-[-0.75rem] shrink-0 min-h-[4rem] flex
                pr-2 md:pr-0"
        >
          <Link
            className="text-[#999] flex leading-normal relative px-3 py-2 grow-0
                        shrink-0 hover:text-black items-center lg:items-center"
            href="/"
          >
            <Image
              src={CSSULogoHorizontal}
              alt="CSSU Logo"
              className="max-h-9 h-9"
              basePath={process.env.__NEXT_ROUTER_BASEPATH}
              width={128}
              height={32}
              priority
            />
          </Link>
          <div
            className="text-[#999] leading-normal relative px-3 py-2
                    hover:text-black items-center flex lg:items-center grow shrink"
          ></div>
          <div
            className="m-auto items-center justify-center text-[#999]
                        flex leading-normal relative px-3 py-2 grow-0
                        shrink-0 hover:text-black lg:items-center lg:hidden"
          >
            <button
              onClick={() => setMobileMenuIsOpen((isOpen) => !isOpen)}
              className="relative w-full h-full
                            cursor-pointer pointer-events-auto m-0 p-0"
              aria-label="menu"
            >
              {mobileMenuIsOpen ? (
                <MobileNavbarCloseSvg />
              ) : (
                <MobileNavbarOpenSvg />
              )}
            </button>
          </div>
        </div>
        <div
          // id="navbar-menu"
          className={
            mobileMenuIsOpen
              ? "flex flex-col text-center justify-center shadow-md"
              : "hidden lg:grow lg:shrink-0 px-0 py-2 lg:px-0 lg:py-0 " +
                "lg:items-stretch lg:flex lg:mr-[-0.75rem]"
          }
        >
          <div
            className="items-center lg:items-stretch lg:flex
                    lg:justify-end lg:ml-auto"
          >
            <NavbarHref
              setMobileMenuIsOpen={setMobileMenuIsOpen}
              href="/ba2250/"
              text="BA2250"
            />
            <NavbarHref
              setMobileMenuIsOpen={setMobileMenuIsOpen}
              href="/about/"
              text="About"
            />
            <NavbarHref
              setMobileMenuIsOpen={setMobileMenuIsOpen}
              href="/community/"
              text="Community"
            />
            <NavbarHref
              setMobileMenuIsOpen={setMobileMenuIsOpen}
              href="/posts/student-resources/"
              text="Resources"
            />
            {/* <NavbarHref
              setMobileMenuIsOpen={setMobileMenuIsOpen}
              href="/partner-events/"
              text="Partner Events"
            />
            <NavbarHref
              setMobileMenuIsOpen={setMobileMenuIsOpen}
              href="/events/"
              text="Events"
            /> */}
            <NavbarHref
              setMobileMenuIsOpen={setMobileMenuIsOpen}
              href="/posts/"
              text="Posts"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
