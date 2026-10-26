import { Open_Sans } from "next/font/google";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { APP_CONFIG } from "@/config/constants";

import type { Metadata } from "next";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

// TODO: OG Image for each page
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_CONFIG.name}`,
    default: APP_CONFIG.name,
  },
  description: APP_CONFIG.fullName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e703a421-0ede-46a1-b81f-c72bd26c654b"
        ></script>
      </head>
      <body className={openSans.className} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <header className="top-0 z-50 sticky">
            <Navbar />
          </header>
          <div className="flex-grow flex flex-col justify-center">
            {children}
          </div>
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
