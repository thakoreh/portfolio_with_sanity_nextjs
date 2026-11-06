import "../globals.css";
import type { Metadata } from "next";
import {
  Alata,
  EB_Garamond,
  Source_Code_Pro,
  Shadows_Into_Light,
  Henny_Penny,
} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { loadProfile } from "@/lib/profile";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
});
const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
});
const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
});
const handwriting = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwriting",
});
const henny = Henny_Penny({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-henny",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://hirenthakore.com"),
  applicationName: "Hiren Thakore",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  title: {
    default: "Hiren Thakore — Software Engineer & AI Product Builder",
    template: "%s | Hiren Thakore",
  },
  description:
    "Software engineer building useful AI products, developer tools, and reliable cloud systems. Explore my work, engineering background, and current projects.",
  openGraph: {
    title: "Hiren Thakore — From concept to code",
    description: "Software engineer. AI product builder. Always curious.",
    images: [{ url: "/images/hiren-portrait.jpg", alt: "Hiren Thakore" }],
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await loadProfile();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${alata.variable} ${garamond.variable} ${sourceCode.variable} ${handwriting.variable} ${henny.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar profile={profile} />
        <div id="main-content" className="main-wrapper">
          {children}
        </div>
        <Footer profile={profile} />
      </body>
    </html>
  );
}
