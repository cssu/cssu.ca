"use client"

import { useEffect } from "react"

export default function Sticky() {
    useEffect(() => {
        const staticHeader = document.getElementById("static-header")
        const animatedHeader = document.getElementById("sticky-header")

        const handleScroll = () => {
            if (!staticHeader || !animatedHeader) return
            const staticHeaderBottom = staticHeader.getBoundingClientRect().bottom + window.scrollY

            if (window.scrollY > staticHeaderBottom) {
                animatedHeader.classList.add("scrolled")
            } else {
                animatedHeader.classList.remove("scrolled")
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return <></>
}
