"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/book", label: "Book" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center">
            <span className="text-[20px] font-bold text-black" style={{ fontFamily: "var(--font-tektur)" }}>
              Silverius Mobile Mechanic
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-[18px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[16px] font-normal transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-black hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/book"
            className="hidden md:flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-[22px] py-[16px] rounded-none text-[16px] font-medium transition-colors h-[46px]"
          >
            Service now
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-normal ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-black hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="block w-full text-center bg-primary text-white px-5 py-3 rounded-none text-[16px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
