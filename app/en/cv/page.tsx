import Link from "next/link";

export default function CVPageEN() {
    return (
        <section className="flex flex-col gap-10">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="relative flex flex-col gap-5">
                    <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                        Resume
                    </span>

                    <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                        My Resume
                    </h1>

                    <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                        Find here a complete version of my resume, including my academic
                        background, professional experience, technical projects, and skills
                        in software development and data analysis.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/documents/hugo-tekeng-cv.pdf"
                            target="_blank"
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                        >
                            View resume
                        </Link>

                        <a
                            href="/documents/hugo-tekeng-cv.pdf"
                            download
                            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
                        >
                            Download
                        </a>

                        <Link
                            href="/en/contact"
                            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25"
                        >
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Target profile</p>
                    <p className="mt-2 text-lg font-medium">Software development & data</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        Backend, relational databases, Python automation,
                        data analysis, and robust software design.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Availability</p>
                    <p className="mt-2 text-lg font-medium">Summer 2026 internship</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        Final term at UQTR, currently seeking an internship to keep growing
                        in a professional software or data environment.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Quick access</p>
                    <p className="mt-2 text-lg font-medium">View & download</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        The resume is available online for direct reading and can also be
                        downloaded easily as a PDF.
                    </p>
                </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
                <iframe
                    src="/documents/hugo-tekeng-cv.pdf"
                    className="h-[900px] w-full rounded-2xl bg-white"
                    title="Hugo Tekeng Resume"
                />
            </div>
        </section>
    );
}