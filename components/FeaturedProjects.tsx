import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "../data/featured-projects";

type Props = { locale: "fr" | "en" };

const statusLabel = {
  fr: { "in-production": "En production", "in-progress": "En cours", "completed": "Terminé" },
  en: { "in-production": "In production", "in-progress": "In progress",  "completed": "Completed"  },
};

const statusClass = {
  "in-production": "status-in-production",
  "in-progress":   "status-in-progress",
  "completed":     "status-completed",
};

export default function FeaturedProjects({ locale }: Props) {
  const isEN = locale === "en";
  const labels = statusLabel[locale];

  // First 2 projects → "hero" cards (big). Next 4 → regular grid.
  const heroProjects    = featuredProjects.slice(0, 2);
  const regularProjects = featuredProjects.slice(2, 6);

  return (
    <section className="flex flex-col gap-6 sm:gap-8">

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
            {isEN ? "Portfolio" : "Portfolio"}
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {isEN ? "Featured projects" : "Projets à la une"}
          </h2>
        </div>
        <Link
          href={isEN ? "/en/projects" : "/projects"}
          className="group flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55 transition hover:border-white/18 hover:text-white/80"
        >
          {isEN ? "All projects" : "Tous les projets"}
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </Link>
      </div>

      {/* ── Hero row: 2 big cards side-by-side ── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {heroProjects.map((p) => (
          <Link
            key={p.id}
            href={isEN ? p.hrefEn : p.hrefFr}
            className="project-card shimmer-border group flex flex-col overflow-hidden rounded-2xl"
          >
            {/* Image — taller for hero */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/[0.025]">
              <Image
                src={p.cover}
                alt={isEN ? p.titleEn : p.titleFr}
                fill
                className="project-img object-cover"
                sizes="(max-width: 639px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/75 via-[#030712]/10 to-transparent" />
              {/* Status badge over image */}
              <div className="absolute left-3 top-3">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusClass[p.statusKey]}`}>
                  {p.statusKey === "in-production" && <span className="h-1.5 w-1.5 rounded-full bg-green-400" />}
                  {labels[p.statusKey]}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                {isEN ? p.tagEn : p.tagFr}
              </p>

              <h3 className="text-base font-bold leading-snug text-white/95 transition-colors duration-200 group-hover:text-white sm:text-lg">
                {isEN ? p.titleEn : p.titleFr}
              </h3>

              <p className="flex-1 text-sm leading-relaxed text-white/52">
                {isEN ? p.descEn : p.descFr}
              </p>

              <div className="flex items-center justify-between pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {p.stackPreview.map((s) => (
                    <span key={s} className="stack-tag">{s}</span>
                  ))}
                </div>
                <span className="text-xs text-white/28 transition-colors duration-200 group-hover:text-white/55">
                  {isEN ? "View →" : "Voir →"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Regular grid: 4 cards ── */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
        {regularProjects.map((p) => (
          <Link
            key={p.id}
            href={isEN ? p.hrefEn : p.hrefFr}
            className="project-card shimmer-border group flex flex-col overflow-hidden rounded-xl"
          >
            {/* Compact image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/[0.025]">
              <Image
                src={p.cover}
                alt={isEN ? p.titleEn : p.titleFr}
                fill
                className="project-img object-cover"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
              <div className="absolute left-2 top-2">
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold ${statusClass[p.statusKey]}`}>
                  {labels[p.statusKey]}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-2 p-3.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/32">
                {isEN ? p.tagEn : p.tagFr}
              </p>

              <h3 className="text-sm font-bold leading-snug text-white/90 transition-colors duration-200 group-hover:text-white">
                {isEN ? p.titleEn : p.titleFr}
              </h3>

              <p className="flex-1 text-xs leading-relaxed text-white/48 line-clamp-2">
                {isEN ? p.descEn : p.descFr}
              </p>

              <div className="flex flex-wrap gap-1 pt-0.5">
                {p.stackPreview.slice(0, 2).map((s) => (
                  <span key={s} className="stack-tag">{s}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
