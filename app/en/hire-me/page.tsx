import Link from "next/link";
import { profile } from "../../../data/profile";

const skills = [
    { category: "Languages", items: ["Python", "Java", "SQL", "C++", "C#", "HTML/CSS"] },
    { category: "Frameworks", items: ["Spring Boot", "Flask", "Android", "JavaFX", "Next.js"] },
    { category: "Data & ML", items: ["Pandas", "Scikit-learn", "Matplotlib", "Tableau", "Streamlit"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Room"] },
    { category: "Tools", items: ["Git", "Firebase", "REST API", "Agile", "Linux"] },
];

export default function HireMePageEN() {
    const t = profile.en;

    return (
        <section className="flex flex-col gap-12">
            <div className="animate-fade-in-up flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Hiring</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Available for a{" "}
                    <span className="gradient-text">job opportunities</span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">My B.Sc. in Computer Science at UQTR concludes in Summer 2026. I am actively seeking my first job in software development, backend, or data.</p>
            </div>

            <div className="animate-fade-in-up delay-100 grid gap-4 sm:grid-cols-3">
                <div className="card-premium rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Availability</p>
                    <div className="mt-3 flex items-center gap-2">
                        <span className="status-dot" />
                        <p className="font-medium text-white/90">From Summer 2026</p>
                    </div>
                </div>
                <div className="card-premium rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Target roles</p>
                    <p className="mt-3 font-medium text-white/85">Backend • Data • Android</p>
                </div>
                <div className="card-premium rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Location</p>
                    <p className="mt-3 font-medium text-white/85">Trois-Rivières / remote</p>
                </div>
            </div>

            <div className="animate-fade-in-up delay-200 overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-500/8 to-violet-500/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white/95">B.Sc. Computer Science — Completed</h2>
                        <p className="mt-1 text-white/55">Université du Québec à Trois-Rivières (UQTR) · Specialization: Data Science & Software Development</p>
                    </div>
                </div>
            </div>

            <div className="animate-fade-in-up delay-300 flex flex-col gap-5">
                <h2 className="text-xl font-semibold text-white/90">Technical skills</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                    {skills.map((cat) => (
                        <div key={cat.category} className="card-premium rounded-2xl p-5">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/35">{cat.category}</p>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span key={item} className="skill-pill rounded-full px-3 py-1.5 text-sm text-white/70">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="animate-fade-in-up delay-400 flex flex-col gap-5">
                <h2 className="text-xl font-semibold text-white/90">What I bring</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {[
                        { icon: "🖥️", title: "Backend development", desc: "Production experience with Spring Boot, Java, and PostgreSQL. Full ERP deployed and used daily in a real company." },
                        { icon: "📊", title: "Data science", desc: "Data pipelines, ML (classification, regression, clustering), visualization and analytical reporting." },
                        { icon: "📱", title: "Android mobile", desc: "MVVM architecture, Firebase, Room, Google Maps. Functional app developed collaboratively." },
                    ].map((item) => (
                        <div key={item.title} className="card-premium rounded-2xl p-5">
                            <span className="text-2xl">{item.icon}</span>
                            <h3 className="mt-3 font-semibold text-white/90">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="animate-fade-in-up delay-500 overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white/95 sm:text-2xl">Recruiters &amp; companies, let&apos;s talk.</h2>
                <p className="mt-2 max-w-xl text-white/55">If my profile interests you, I&apos;d be happy to discuss. I&apos;m also open to constructive feedback.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/en/contact" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-400 hover:to-violet-400">
                        Contact me
                    </Link>
                    <Link href="/en/projects" className="card-premium inline-flex min-h-[46px] items-center justify-center rounded-full px-6 py-2.5 text-sm text-white/80">
                        View my projects →
                    </Link>
                    <Link href="/en/cv" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/10 px-6 py-2.5 text-sm text-white/65 transition hover:border-white/20 hover:text-white/90">
                        Download CV ↗
                    </Link>
                </div>
            </div>
        </section>
    );
}
