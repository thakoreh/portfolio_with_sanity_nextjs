// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-with-sanity-nextjs.vercel.app"),
  title: "Hiren Thakore - AI Product Builder and Software Engineer",
  description: "Senior software engineer building AI products, developer tools, cloud integrations, and trust QA systems for AI-built websites.",
  openGraph: {
    images: "https://media.licdn.com/dms/image/v2/D5603AQH5XulB08-9tw/profile-displayphoto-shrink_800_800/0/1688578156925",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/bluesky-comments@0.3.0/dist/bluesky-comments.css" 
        />
      </head>
      <body className={`${outfit.variable} ${outfit.className} bg-[#08090a] text-zinc-100`}>
        <Navbar />
        <div className="main-wrapper">
          {children}
        </div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}