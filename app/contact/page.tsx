import { profile } from "../../data/profile";
import Link from "next/link";

export default function ContactPage() {
  const t = profile.fr;

  return (
    <section className="flex flex-col gap-10">

      <div className="animate-fade-in-up flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Contact</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Travaillons <span className="gradient-text">ensemble</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
          Mon baccalauréat en informatique (UQTR) se termine à l&apos;été 2026 et je suis
          activement à la recherche d&apos;un premier emploi en développement logiciel ou en data.
        </p>
      </div>

      <div className="animate-fade-in-up delay-100 grid gap-4 sm:grid-cols-2">
        {/* Email */}
        <a
          href={`mailto:${t.contact.email}`}
          className="card-premium shimmer-border group flex flex-col gap-4 rounded-2xl p-6 transition"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Email</p>
            <p className="mt-1 break-all text-white/85 transition group-hover:text-white">{t.contact.email}</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href={`tel:${t.contact.phone}`}
          className="card-premium shimmer-border group flex flex-col gap-4 rounded-2xl p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Téléphone</p>
            <p className="mt-1 text-white/85 transition group-hover:text-white">{t.contact.phone}</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hugo-tekeng-a31295292"
          target="_blank"
          rel="noopener noreferrer"
          className="card-premium shimmer-border group flex flex-col gap-4 rounded-2xl p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">LinkedIn</p>
            <p className="mt-1 text-white/85 transition group-hover:text-white">hugo-tekeng-a31295292</p>
          </div>
        </a>

        {/* Portfolio */}
        <div className="card-premium flex flex-col gap-4 rounded-2xl p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Portfolio</p>
            <p className="mt-1 text-white/85">www.hugotekeng.com</p>
          </div>
        </div>
      </div>

      {/* Open to work banner */}
      <div className="animate-fade-in-up delay-200 overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-500/8 to-violet-500/5 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-xs font-semibold uppercase tracking-wider text-green-400">Disponible</span>
            </div>
            <h2 className="text-xl font-bold text-white/95 sm:text-2xl">À la recherche d&apos;un emploi</h2>
            <p className="mt-1 text-white/55">
              Développement logiciel · Back-end · Data · Android — Fin de programme été 2026
            </p>
          </div>
          <Link
            href="/hire-me"
            className="shrink-0 inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-400 hover:to-violet-400"
          >
            En savoir plus →
          </Link>
        </div>
      </div>

    </section>
  );
}
