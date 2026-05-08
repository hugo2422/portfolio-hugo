import Link from "next/link";
import Image from "next/image";
import { profile } from "../../data/profile";
import FeaturedProjects from "../../components/FeaturedProjects";

const skills = {
    "Languages":    ["Python", "Java", "SQL", "C++", "C#", "HTML/CSS", "TypeScript"],
    "Frameworks":   ["Spring Boot", "Flask", "Android", "JavaFX", "Thymeleaf"],
    "Data & ML":    ["Pandas", "Scikit-learn", "Matplotlib", "Streamlit", "Tableau"],
    "Databases":    ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Room"],
    "Tools":        ["Git", "Firebase", "REST API", "Agile", "Linux"],
};

const education = [
    {
        href: "/en/university",
        logo: "/images/logos/uqtr.jpg",
        alt: "UQTR",
        name: "UQTR",
        desc: "B.Sc. Computer Science",
        status: "Summer 2026",
        statusColor: "text-amber-400",
        statusBg: "bg-amber-400/10 border-amber-400/25",
    },
    {
        href: "/en/university",
        logo: "/images/logos/dschang.jpg",
        alt: "U. Dschang",
        name: "U. Dschang",
        desc: "Applied Mathematics",
        status: "Graduated",
        statusColor: "text-green-400",
        statusBg: "bg-green-400/10 border-green-400/25",
    },
];

const experience = [
    {
        href: "/en/experience",
        logo: "/images/logos/lucatex.jpg",
        alt: "Lucatex",
        name: "Lucatex SARL",
        desc: "Data Analyst Intern",
        period: "Mar – Jul 2023",
    },
    {
        href: "/en/experience",
        logo: "/images/logos/merveille-pressing.jpeg",
        alt: "Merveille Pressing",
        name: "Merveille Pressing",
        desc: "IT Technician",
        period: "2019 – 2023",
    },
];

function GraduationCapIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
        </svg>
    );
}

export default function HomeEN() {
    const t = profile.en;

    return (
        <section className="flex flex-col gap-16 sm:gap-20">

            {/* ── HERO ── */}
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                <div className="flex flex-col gap-6 lg:max-w-[58%]">

                    <div className="animate-fade-in-up">
                        <span className="badge-accent inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                            <span className="status-dot shrink-0" />
                            {t.hero.badge}
                        </span>
                    </div>

                    <div className="animate-fade-in-up delay-100 flex flex-col gap-3">
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                            <span className="text-white/95">{t.name}</span>
                        </h1>
                        <p className="gradient-text text-2xl font-semibold sm:text-3xl lg:text-4xl">
                            {t.hero.title}
                        </p>
                    </div>

                    <p className="animate-fade-in-up delay-200 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                        {t.hero.subtitle}
                    </p>

                    <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3">
                        <Link href="/en/contact" className="btn-primary">
                            {t.hero.ctas.primary}
                        </Link>
                        <Link href="/en/projects" className="btn-secondary">
                            {t.hero.ctas.secondary}
                        </Link>
                        <Link href="/en/cv" className="btn-tertiary">
                            {t.hero.ctas.tertiary}
                            <span style={{fontSize:'11px',opacity:0.6}}>↗</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/hugo-tekeng-a31295292"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-linkedin"
                        >
                            <svg style={{width:'14px',height:'14px',flexShrink:0}} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </Link>
                    </div>
                </div>

                <div className="animate-scale-in delay-200 flex items-center justify-center lg:justify-end">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-cyan-500/10 blur-xl" />
                        <div className="avatar-ring animate-float relative h-44 w-44 overflow-hidden rounded-full sm:h-52 sm:w-52 lg:h-72 lg:w-72">
                            <Image
                                src="/images/avatar/avatar.jpeg"
                                alt="Hugo Tekeng"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 639px) 176px, (max-width: 1023px) 208px, 288px"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 rounded-2xl border border-white/10 bg-[#030712]/90 px-3 py-2 backdrop-blur-sm sm:-bottom-4 sm:-right-4">
                            <p className="text-xs font-semibold text-green-400">Open to work</p>
                            <p className="text-xs text-white/50">Graduating Summer 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── SKILLS ── */}
            <div className="animate-fade-in-up delay-400 flex flex-col gap-6">
                <div className="section-divider" />
                <div className="flex flex-col gap-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Tech stack</p>
                    <div className="flex flex-col gap-3.5">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="flex flex-wrap items-center gap-3">
                                <span className="w-28 shrink-0 text-xs text-white/40">{category}</span>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span key={skill} className="skill-pill rounded-full px-3 py-1.5 text-sm text-white/75">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section-divider" />
            </div>

            {/* ── EDUCATION & EXPERIENCE ── */}
            <div className="animate-fade-in-up delay-500 flex flex-col gap-8">

                {/* Education */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <GraduationCapIcon className="h-4 w-4 text-violet-400/70" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                            University education
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {education.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="card-premium shimmer-border group rounded-2xl p-4"
                            >
                                <div className="flex h-14 items-center justify-center rounded-xl bg-white/[0.04]">
                                    <Image
                                        src={item.logo}
                                        alt={item.alt}
                                        width={100}
                                        height={40}
                                        className="h-9 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="mt-3 flex items-start justify-between gap-2">
                                    <div>
                                        <p className="text-sm font-semibold leading-snug text-white/90">{item.name}</p>
                                        <p className="mt-0.5 text-xs text-white/50">{item.desc}</p>
                                    </div>
                                    <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${item.statusColor} ${item.statusBg}`}>
                                        {item.status}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <p className="flex items-center gap-1.5 text-xs text-white/30">
                        <GraduationCapIcon className="h-3.5 w-3.5 text-white/25" />
                        The Applied Mathematics degree (U. Dschang) is recognized as equivalent to a Canadian B.Sc. in Applied Mathematics.
                    </p>
                </div>

                {/* Work experience */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-blue-400/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25V6a2.25 2.25 0 0 1 2.25-2.25h4.5M20.25 14.15l-7.5-7.5M20.25 14.15H15a.75.75 0 0 1-.75-.75V8.4" />
                        </svg>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                            Work experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {experience.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="card-premium shimmer-border group rounded-2xl p-4"
                            >
                                <div className="flex h-14 items-center justify-center rounded-xl bg-white/[0.04]">
                                    <Image
                                        src={item.logo}
                                        alt={item.alt}
                                        width={100}
                                        height={40}
                                        className="h-9 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="mt-3 flex items-start justify-between gap-2">
                                    <div>
                                        <p className="text-sm font-semibold leading-snug text-white/90">{item.name}</p>
                                        <p className="mt-0.5 text-xs text-white/50">{item.desc}</p>
                                    </div>
                                    <span className="shrink-0 text-[10px] text-white/30">{item.period}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── FEATURED PROJECTS ── */}
            <div className="animate-fade-in-up delay-600">
                <FeaturedProjects locale="en" />
            </div>

        </section>
    );
}
