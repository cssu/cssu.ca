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

// <html lang="en">
//     <body className={openSasFont.className}>{children}</body>
// </html>

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`min-h-screen ${openSans.className}`}>
                <div className="min-h-screen flex flex-col">
                    <header>
                        <Navbar />
                    </header>
                    <div className="flex-grow">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
