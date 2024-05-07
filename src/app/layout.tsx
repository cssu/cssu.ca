import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "CSSU @ UofT",
    description: "Computer Science Student Union at the University of Toronto",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <div className="flex flex-col">
                    <div className="min-h-screen">
                        <header className="top-0 z-50 sticky">
                            <Navbar />
                        </header>
                        <div className="flex-grow">{children}</div>
                        <Footer />
                    </div>
                    <BackToTop />
                </div>
            </body>
        </html>
    )
}
