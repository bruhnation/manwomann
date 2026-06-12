"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Man", href: "#" },
  { label: "Woman", href: "#" },
  { label: "Home", href: "#" },
  { label: "Accessories", href: "#" },
];

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16 16" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M6 7h12l-1 14H7L6 7z" />
      <path d="M9 7V5a3 3 0 016 0v2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-[90px] z-40 border-b border-border bg-bg">
        <div className="mx-auto flex h-[57px] max-w-[1600px] items-center gap-6 px-5 md:px-8">
          <button
            type="button"
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Link
            href="/"
            className="shrink-0 font-serif text-[28px] font-bold leading-none tracking-tight text-fg md:text-[32px]"
          >
            M+W
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-10 md:flex"
            aria-label="Main"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] text-fg transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4 md:gap-6">
            <button
              type="button"
              className="hidden items-center gap-2 text-[15px] text-fg md:flex"
              aria-label="Search"
            >
              <span>Search</span>
              <SearchIcon />
            </button>
            <button
              type="button"
              aria-label="Bag"
              className="text-fg transition-opacity hover:opacity-60"
            >
              <BagIcon />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-bg pt-[147px] md:hidden">
          <nav className="flex flex-col gap-6 px-6 py-8" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
