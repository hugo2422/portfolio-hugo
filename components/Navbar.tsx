"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function isEnglishPath(pathname: string) {
    return pathname === "/en" || pathname.startsWith("/en/");
}

export default function Navbar() {
    const pathname = usePathname();
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

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link href={base || "/"} className="font-semibold tracking-tight text-white">
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

                <div className="flex items-center gap-2">
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
            </div>
        </header>
    );
}