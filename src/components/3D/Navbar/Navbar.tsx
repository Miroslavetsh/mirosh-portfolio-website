"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type Link = {
  text: string;
  href: string;
};

const navLinks: Array<Link> = [
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Experience", href: "/experience" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="header">
      <Link
        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold shadow-md"
        href="/"
      >
        <p className="blue-gradient_text">MT</p>
      </Link>
      <nav className="flex items-center gap-7 text-lg font-medium">
        {navLinks.map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            className={isActive(href) ? "text-blue-500" : "text-black"}
          >
            {text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
