import "../globals.css";
import type { Metadata } from "next";
import { Alata, EB_Garamond } from "next/font/google";
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
export const metadata: Metadata = {
  metadataBase: new URL("https://hirenthakore.com"),
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
      <body className={`${alata.variable} ${garamond.variable}`}>
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
