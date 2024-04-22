import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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
                        <header className="static-header" id="static-header">
                            <Navbar />
                        </header>
                        <header className="sticky top-0 z-50 sticky-header" id="sticky-header">
                            <Navbar />
                        </header>
                        <div className="flex-grow -mt-16">{children}</div>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
