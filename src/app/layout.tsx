import { Open_Sans } from 'next/font/google'

import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import type { Metadata } from 'next'

import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'CSSU @ UofT',
    description: 'Computer Science Student Union at the University of Toronto',
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
                    <div>
                        <div className="min-h-screen">
                            <header className="top-0 z-50 sticky">
                                <Navbar />
                            </header>
                            <div className="flex-grow">{children}</div>
                        </div>
                        <Footer />
                    </div>
                    <BackToTop />
                </div>
            </body>
        </html>
    )
}
