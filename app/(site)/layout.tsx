// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hiren Thakore - Software Engineer",
  description: "Experienced Software Engineer implementing effective cloud solutions",
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
      <body className={`${inter.className} bg-white text-gray-800`}>
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