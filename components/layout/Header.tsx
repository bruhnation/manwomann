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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16 16" />
    </svg>
  );
}

function AccountIcon() {
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
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-4 3.5-7 7-7s7 3 7 7" />
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-[41px] z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-bg/95 backdrop-blur-sm"
            : "border-b border-transparent bg-bg/0 backdrop-blur-none"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 md:h-16 md:px-10">
          <button
            type="button"
            className={`md:hidden ${scrolled ? "text-fg" : "text-fg md:text-inverse"}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-center md:static md:translate-x-0 md:text-left"
          >
            <span
              className={`block text-[11px] font-medium leading-tight tracking-[0.18em] transition-colors ${
                scrolled ? "text-fg" : "text-fg md:text-inverse"
              }`}
            >
              MAN + WOMAN
            </span>
            <span
              className={`block text-[10px] tracking-[0.28em] transition-colors ${
                scrolled ? "text-muted" : "text-muted md:text-inverse/80"
              }`}
            >
              HOME
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex md:flex-1 md:justify-center"
            aria-label="Main"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.12em] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg ${
                  scrolled ? "text-fg" : "text-fg md:text-inverse"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className={`flex items-center gap-5 transition-colors ${
              scrolled ? "text-fg" : "text-fg md:text-inverse"
            }`}
          >
            <button
              type="button"
              aria-label="Search"
              className="hidden transition-opacity hover:opacity-60 md:block"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="hidden transition-opacity hover:opacity-60 md:block"
            >
              <AccountIcon />
            </button>
            <button
              type="button"
              aria-label="Bag"
              className="transition-opacity hover:opacity-60"
            >
              <BagIcon />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-bg pt-[97px] md:hidden">
          <nav className="flex flex-col gap-8 px-6 py-10" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl font-medium tracking-tight"
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
