// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <div className="main-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}