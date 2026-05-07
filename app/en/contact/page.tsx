import { profile } from "../../../data/profile";
import Link from "next/link";

export default function ContactPageEN() {
    const t = profile.en;

    return (
        <section className="flex flex-col gap-10">
            <div className="animate-fade-in-up flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Contact</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Let&apos;s work <span className="gradient-text">together</span>
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
                    My B.Sc. in Computer Science concludes in Summer 2026 and I am actively seeking my first job in software development or data.
                </p>
            </div>

            <div className="animate-fade-in-up delay-100 grid gap-4 sm:grid-cols-2">
                <a href={`mailto:${t.contact.email}`} className="card-premium shimmer-border group flex flex-col gap-4 rounded-2xl p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Email</p>
                        <p className="mt-1 text-white/85 transition group-hover:text-white">{t.contact.email}</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/hugo-tekeng-a31295292" target="_blank" rel="noopener noreferrer" className="card-premium shimmer-border group flex flex-col gap-4 rounded-2xl p-6">
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
            </div>

            <div className="animate-fade-in-up delay-200 overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-500/8 to-violet-500/5 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="status-dot" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">Available</span>
                        </div>
                        <h2 className="text-xl font-bold text-white/95 sm:text-2xl">Fall 2026 Internship</h2>
                        <p className="mt-1 text-white/55">Backend • Python • Java • Data • Android — Trois-Rivières or remote</p>
                    </div>
                    <Link href="/en/hire-me" className="shrink-0 inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-400 hover:to-violet-400">
                        Learn more →
                    </Link>
                </div>
            </div>
        </section>
    );
}
