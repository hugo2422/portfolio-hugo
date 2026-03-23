"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isEnglishPath(pathname: string) {
    return pathname === "/en" || pathname.startsWith("/en/");
}

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isEN = isEnglishPath(pathname);
    const base = isEN ? "/en" : "";

    const navItems = [
        { href: `${base}/about`, label: isEN ? "About" : "À propos" },
        { href: `${base}/now`, label: isEN ? "Now" : "Now" },
        { href: `${base}/projects`, label: isEN ? "Projects" : "Projets" },
        { href: `${base}/university`, label: isEN ? "University" : "Parcours" },
        { href: `${base}/experience`, label: isEN ? "Experience" : "Expérience" },
        { href: `${base}/services`, label: isEN ? "Services" : "Services" },
        { href: `${base}/hire-me`, label: isEN ? "Internship" : "Stage été 2026" },
        { href: `${base}/contact`, label: isEN ? "Contact" : "Contact" },
    ];

    const switchHref = isEN
        ? pathname.replace(/^\/en(\/|$)/, "/")
        : `/en${pathname === "/" ? "" : pathname}`;

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                    <Link
                        href={base || "/"}
                        className="shrink-0 text-base font-semibold tracking-tight text-white sm:text-lg"
                    >
                        Hugo Tekeng
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm text-white/70 transition hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-2 md:flex">
                        <Link
                            href={switchHref}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
                            aria-label={isEN ? "Switch to French" : "Passer en anglais"}
                        >
                            {isEN ? "FR" : "EN"}
                        </Link>

                        <Link
                            href={`${base}/cv`}
                            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:text-white"
                        >
                            CV
                        </Link>

                        <Link
                            href={`${base}/contact`}
                            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                        >
                            {isEN ? "Contact" : "Me contacter"}
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-white transition hover:border-white/25 hover:bg-white/10 md:hidden"
                        aria-label={menuOpen ? (isEN ? "Close menu" : "Fermer le menu") : isEN ? "Open menu" : "Ouvrir le menu"}
                        aria-expanded={menuOpen}
                    >
                        <span className="text-sm font-medium">
                            {menuOpen ? "✕" : "☰"}
                        </span>
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    <button
                        type="button"
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        aria-label={isEN ? "Close menu overlay" : "Fermer le fond du menu"}
                        onClick={() => setMenuOpen(false)}
                    />

                    <div className="absolute inset-x-4 top-4 rounded-3xl border border-white/10 bg-[#0b1020]/95 p-4 shadow-2xl">
                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                            <Link
                                href={base || "/"}
                                className="text-base font-semibold tracking-tight text-white"
                            >
                                Hugo Tekeng
                            </Link>

                            <button
                                type="button"
                                onClick={() => setMenuOpen(false)}
                                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/25 hover:bg-white/10"
                                aria-label={isEN ? "Close menu" : "Fermer le menu"}
                            >
                                ✕
                            </button>
                        </div>

                        <nav className="flex flex-col">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`rounded-2xl px-4 py-3 text-base transition ${isActive
                                                ? "bg-white/10 text-white"
                                                : "text-white/80 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <Link
                                href={switchHref}
                                className="flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
                            >
                                {isEN ? "FR" : "EN"}
                            </Link>

                            <Link
                                href={`${base}/cv`}
                                className="flex min-h-[44px] items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:text-white"
                            >
                                CV
                            </Link>
                        </div>

                        <Link
                            href={`${base}/contact`}
                            className="mt-3 flex min-h-[48px] items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-medium text-black transition hover:opacity-90"
                        >
                            {isEN ? "Contact" : "Me contacter"}
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}