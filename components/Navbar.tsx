"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isEnglishPath(p: string) {
  return p === "/en" || p.startsWith("/en/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  const isEN = isEnglishPath(pathname);
  const base = isEN ? "/en" : "";

  const navItems = [
    { href: `${base}/about`,      label: isEN ? "About"      : "À propos"   },
    { href: `${base}/projects`,   label: isEN ? "Projects"   : "Projets"    },
    { href: `${base}/experience`, label: isEN ? "Experience" : "Expérience" },
    { href: `${base}/university`, label: isEN ? "University" : "Parcours"   },
    { href: `${base}/hire-me`,    label: isEN ? "Open to work" : "Emploi"   },
  ];

  const switchHref = isEN
    ? pathname.replace(/^\/en(\/|$)/, "/")
    : `/en${pathname === "/" ? "" : pathname}`;

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.065] bg-[#030712]/88 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

          {/* Logo */}
          <Link
            href={base || "/"}
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="Hugo Tekeng — Accueil"
          >
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-[11px] font-bold text-white shadow-lg shadow-blue-500/25">
              HT
              <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
            </div>
            <span className="hidden text-sm font-semibold tracking-tight text-white/85 transition group-hover:text-white sm:block">
              Hugo Tekeng
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Navigation principale">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                    active
                      ? "text-white"
                      : "text-white/55 hover:bg-white/[0.05] hover:text-white/90"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-violet-400 opacity-80" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={switchHref}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/55 transition hover:border-white/18 hover:bg-white/[0.07] hover:text-white/85"
              aria-label={isEN ? "Passer en français" : "Switch to English"}
            >
              {isEN ? "FR" : "EN"}
            </Link>
            <Link
              href={`${base}/contact`}
              className="btn-primary !min-h-[36px] !px-4 !py-1.5 !text-xs"
            >
              {isEN ? "Contact" : "Me contacter"}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/70 transition hover:bg-white/[0.09] md:hidden"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />

          {/* Panel */}
          <div className="absolute inset-x-3 top-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080e1e]/97 shadow-2xl">

            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-[11px] font-bold text-white">
                  HT
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none text-white">Hugo Tekeng</p>
                  <p className="mt-0.5 text-[10px] text-white/40">Développeur logiciel & Data</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/55 hover:bg-white/[0.07]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-2 py-2" aria-label="Navigation mobile">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] transition-colors ${
                      active
                        ? "bg-white/[0.08] font-medium text-white"
                        : "text-white/65 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom actions */}
            <div className="grid grid-cols-3 gap-2 p-3">
              <Link
                href={switchHref}
                className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-medium text-white/60"
              >
                {isEN ? "FR" : "EN"}
              </Link>
              <Link
                href={`${base}/cv`}
                className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white/60"
              >
                CV ↗
              </Link>
              <Link
                href={`${base}/contact`}
                className="flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-sm font-semibold text-white shadow-md shadow-blue-500/20"
              >
                Contact
              </Link>
            </div>

            {/* Status strip */}
            <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] px-4 py-2.5">
              <span className="status-dot h-1.5 w-1.5" />
              <span className="text-[10px] text-white/35">Disponible · Fin de programme été 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
