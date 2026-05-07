import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Left — brand + status */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-600 text-[9px] font-bold text-white">
                HT
              </div>
              <span className="text-sm font-semibold text-white/80">Hugo Tekeng</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="status-dot h-1.5 w-1.5" />
              <p className="text-[11px] text-white/35">
                Open to work · Fin de programme été 2026
              </p>
            </div>
          </div>

          {/* Center — links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Footer navigation">
            {[
              { href: "/projects",   label: "Projets"  },
              { href: "/about",      label: "À propos" },
              { href: "/experience", label: "Expérience" },
              { href: "/hire-me",    label: "Emploi"   },
              { href: "/contact",    label: "Contact"  },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[12px] text-white/38 transition hover:text-white/70">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right — built with */}
          <p className="text-[11px] text-white/25">
            Construit avec Next.js & Tailwind
          </p>
        </div>

        <div className="mt-5 border-t border-white/[0.05] pt-4 text-center">
          <p className="text-[11px] text-white/22">
            © {new Date().getFullYear()} Hugo Tekeng. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
