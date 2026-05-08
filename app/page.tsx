import Link from "next/link";
import Image from "next/image";
import { profile } from "../data/profile";
import FeaturedProjects from "../components/FeaturedProjects";

const skills = {
  "Langages":          ["Python", "Java", "SQL", "C++", "C#", "HTML/CSS", "TypeScript"],
  "Frameworks":        ["Spring Boot", "Flask", "Android", "JavaFX", "Thymeleaf"],
  "Data & ML":         ["Pandas", "Scikit-learn", "Matplotlib", "Streamlit", "Tableau"],
  "Bases de données":  ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Room"],
  "Outils":            ["Git", "Firebase", "REST API", "Agile", "Linux"],
};

const education = [
  {
    href: "/university",
    logo: "/images/logos/uqtr.jpg",
    alt: "UQTR",
    name: "UQTR",
    desc: "Bac. Informatique",
    status: "Été 2026",
    statusClass: "status-in-progress",
  },
  {
    href: "/university",
    logo: "/images/logos/dschang.jpg",
    alt: "Université de Dschang",
    name: "U. Dschang",
    desc: "Licence Mathématiques app.",
    status: "Diplômé",
    statusClass: "status-completed",
  },
];

const experience = [
  {
    href: "/experience",
    logo: "/images/logos/lucatex.jpg",
    alt: "Lucatex",
    name: "Lucatex SARL",
    desc: "Stagiaire Data Analyst",
    period: "Mar – Juil 2023",
  },
  {
    href: "/experience",
    logo: "/images/logos/merveille-pressing.jpeg",
    alt: "Merveille Pressing",
    name: "Merveille Pressing",
    desc: "Technicien IT",
    period: "2019 – 2023",
  },
];

function CapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912-.003.002-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
    </svg>
  );
}

export default function Home() {
  const t = profile.fr;

  return (
    <section className="flex flex-col gap-14 sm:gap-20">

      {/* ── HERO ── */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

        {/* Left */}
        <div className="flex flex-col gap-5 lg:max-w-[58%]">

          <div className="animate-fade-in-up">
            <span className="badge-accent inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium">
              <span className="status-dot" />
              {t.hero.badge}
            </span>
          </div>

          <div className="animate-fade-in-up delay-100 flex flex-col gap-2">
            <h1 className="text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {t.name}
            </h1>
            <p className="gradient-text text-xl font-semibold sm:text-2xl lg:text-3xl">
              {t.hero.title}
            </p>
          </div>

          <p className="animate-fade-in-up delay-200 max-w-lg text-[15px] leading-relaxed text-white/55 sm:text-base">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-2.5">
            <Link href="/contact" className="btn-primary">
              {t.hero.ctas.primary}
            </Link>
            <Link href="/projects" className="btn-secondary">
              {t.hero.ctas.secondary}
            </Link>
            <Link href="/cv" className="btn-tertiary">
              {t.hero.ctas.tertiary}
              <span className="text-[11px] opacity-60">↗</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hugo-tekeng-a31295292"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin"
            >
              <svg className="h-[14px] w-[14px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Avatar — centered on mobile, right on desktop */}
        <div className="animate-scale-in delay-150 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/18 via-violet-500/12 to-cyan-500/8 blur-2xl" />
            <div className="avatar-ring animate-float relative h-40 w-40 overflow-hidden rounded-full sm:h-48 sm:w-48 lg:h-64 lg:w-64">
              <Image
                src="/images/avatar/avatar.jpeg"
                alt="Hugo Tekeng"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 639px) 160px, (max-width: 1023px) 192px, 256px"
              />
            </div>
            {/* "Open to work" badge */}
            <div className="absolute -bottom-1 -right-1 rounded-xl border border-white/[0.09] bg-[#030712]/92 px-2.5 py-1.5 backdrop-blur-sm sm:-bottom-3 sm:-right-3">
              <p className="text-[10px] font-bold text-green-400 sm:text-xs">Open to work</p>
              <p className="text-[9px] text-white/40 sm:text-[10px]">Diplômé été 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STACK TECHNIQUE ── */}
      <div className="animate-fade-in-up delay-400 flex flex-col gap-5">
        <div className="section-divider" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
          Stack technique
        </p>

        {/* Scrollable on mobile, wrap on larger */}
        <div className="flex flex-col gap-3">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
              <span className="w-full shrink-0 text-[11px] font-medium text-white/35 sm:w-36 sm:pt-1">{cat}</span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span key={s} className="skill-pill rounded-full px-3 py-1.5 text-[13px] text-white/70 sm:text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-divider" />
      </div>

      {/* ── FORMATION & EXPÉRIENCE ── */}
      <div className="animate-fade-in-up delay-500 flex flex-col gap-7">

        {/* Formation */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <CapIcon className="h-4 w-4 text-violet-400/60" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Formation universitaire
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {education.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="card-premium shimmer-border group rounded-xl p-3.5 sm:rounded-2xl sm:p-4"
              >
                <div className="flex h-12 items-center justify-center rounded-lg bg-white/[0.035] sm:h-14">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={90}
                    height={36}
                    className="h-8 w-auto object-contain opacity-65 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-1">
                  <div>
                    <p className="text-[13px] font-bold leading-tight text-white/90 sm:text-sm">{item.name}</p>
                    <p className="mt-0.5 text-[11px] text-white/45">{item.desc}</p>
                  </div>
                  <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${item.statusClass}`}>
                    {item.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-white/25">
            <CapIcon className="mt-0.5 h-3 w-3 shrink-0 text-white/20" />
            La Licence en Mathématiques Appliquées (U. Dschang) est reconnue comme équivalente à un Baccalauréat canadien en mathématiques appliquées.
          </p>
        </div>

        {/* Expérience */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-blue-400/60" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25V6a2.25 2.25 0 0 1 2.25-2.25h4.5M20.25 14.15l-7.5-7.5M20.25 14.15H15a.75.75 0 0 1-.75-.75V8.4" />
            </svg>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Expérience professionnelle
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {experience.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="card-premium shimmer-border group rounded-xl p-3.5 sm:rounded-2xl sm:p-4"
              >
                <div className="flex h-12 items-center justify-center rounded-lg bg-white/[0.035] sm:h-14">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={90}
                    height={36}
                    className="h-8 w-auto object-contain opacity-65 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-1">
                  <div>
                    <p className="text-[13px] font-bold leading-tight text-white/90 sm:text-sm">{item.name}</p>
                    <p className="mt-0.5 text-[11px] text-white/45">{item.desc}</p>
                  </div>
                  <span className="mt-0.5 shrink-0 text-[9px] text-white/28">{item.period}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6 FEATURED PROJECTS ── */}
      <div className="animate-fade-in-up delay-600">
        <FeaturedProjects locale="fr" />
      </div>

    </section>
  );
}
