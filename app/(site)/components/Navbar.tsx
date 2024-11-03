import Image from "next/image";
import Link from "next/link";
import Logo from "../icons/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 navbar-glass z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 md:px-16 px-6">
        <Link href="/">
          <Image 
            src={Logo} 
            width={35} 
            height={35} 
            alt="logo" 
            className="hover:opacity-80 transition-opacity hover:rotate-12 duration-300" 
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 inline-block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 inline-block"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
