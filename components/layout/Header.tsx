"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative flex w-full items-center justify-between px-6 py-6 md:px-28 md:py-8">

      {/* LOGO */}
      <Link
        href="/"
        onClick={closeMenu}
        className="z-50 flex flex-col text-3xl font-black leading-none tracking-tight text-indigo-sombre transition-colors hover:text-framboise md:text-4xl"
      >
        <span>Louise</span>
        <span>Pietrzyk</span>
      </Link>

      {/* NAVIGATION DESKTOP */}
      <nav className="hidden items-center gap-8 text-2xl font-medium text-indigo-sombre md:flex">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`border-b-2 pb-1 transition-all ${
              isActive(href)
                ? "border-indigo-sombre text-indigo-sombre"
                : "border-transparent hover:border-framboise hover:text-framboise"
            }`}
          >
            {label}
          </Link>
        ))}
        <a
          href="#"
          aria-label="Instagram"
          className="ml-2 text-indigo-sombre transition-colors hover:text-framboise"
        >
          <InstagramIcon className="h-6 w-6" />
        </a>
      </nav>

      {/* BOUTON MENU MOBILE */}
      <button
        className="z-50 -mr-2 p-2 text-indigo-sombre transition-colors hover:text-framboise focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-framboise md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
      >
        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* NAVIGATION MOBILE */}
      <nav
        className={`absolute left-0 top-full z-40 flex w-full flex-col overflow-hidden bg-[#F7C9D3] px-6 shadow-lg shadow-indigo-sombre/5 transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "max-h-[500px] border-t-2 border-indigo-sombre/10 py-6 opacity-100"
            : "pointer-events-none max-h-0 py-0 opacity-0"
        }`}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={closeMenu}
            className={`border-b border-indigo-sombre/10 py-4 text-3xl font-black leading-none tracking-tight transition-colors ${
              isActive(href) ? "text-framboise" : "text-indigo-sombre"
            }`}
          >
            {label}
          </Link>
        ))}

        <a
          href="#"
          onClick={closeMenu}
          className="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-sombre/60 transition-colors hover:text-framboise"
        >
          <InstagramIcon className="h-5 w-5" />
          Instagram
        </a>
      </nav>

    </header>
  );
}