"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const pathname = usePathname();

  const linkColumns = [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Book", href: "/book" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact us", href: "/contact" },
      ],
    },
  ];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61592191581669",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      comingSoon: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      comingSoon: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "#",
      comingSoon: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="py-16">
            <h2
              className="text-[clamp(24px,5.5vw,90px)] font-bold leading-none tracking-tighter uppercase text-center w-full"
              style={{
                fontFamily: "var(--font-tektur)",
                backgroundImage:
                  "url('/gallery/work-03.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Silverius Mobile Mechanic
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-16">
            <div className="flex flex-wrap gap-x-16 gap-y-6">
              {linkColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-[14px] font-semibold text-black mb-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {column.title}
                  </h4>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className={`text-[13px] transition-colors ${
                            isActive(link.href)
                              ? "text-primary font-medium"
                              : "text-[#5e5e5e] hover:text-black"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h4 className="text-[14px] font-semibold text-black mb-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Social
                </h4>
                <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <div key={social.name} className="relative group">
                      <a
                        href={social.href}
                        aria-label={social.name}
                        title={social.comingSoon ? "Soon" : undefined}
                        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all ${
                          social.comingSoon
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60"
                            : "bg-gray-100 text-[#5e5e5e] hover:bg-primary hover:text-white"
                        }`}
                      >
                        {social.icon}
                      </a>
                      {social.comingSoon && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          Soon
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold text-black mb-2">
                Stay in touch
              </h3>
              <p className="text-[14px] text-[#5e5e5e] mb-4">
                Stay connected for expert advice and reliable auto care.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-4 py-3 border border-gray-200 text-[14px] outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 text-[14px] font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#5e5e5e]">
            &copy; {new Date().getFullYear()} Silverius Mobile Mechanic LLC. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className={`text-[12px] ${isActive("/terms") ? "text-primary font-medium" : "text-[#5e5e5e] hover:text-black"}`}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className={`text-[12px] ${isActive("/privacy") ? "text-primary font-medium" : "text-[#5e5e5e] hover:text-black"}`}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
