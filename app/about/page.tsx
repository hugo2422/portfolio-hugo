import Image from "next/image";
import Link from "next/link";
import { profile } from "../../data/profile";

const techCategories = [
  { label: "Langages", items: ["Python", "Java", "SQL", "C++", "C#", "HTML/CSS"] },
  { label: "Frameworks", items: ["Spring Boot", "Flask", "Android", "JavaFX", "Thymeleaf"] },
  { label: "Data & ML", items: ["Pandas", "Scikit-learn", "Matplotlib", "Streamlit", "Tableau"] },
  { label: "Bases de données", items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Room"] },
  { label: "Outils", items: ["Git", "Firebase", "REST API", "Agile", "Linux"] },
];

export default function AboutPage() {
  const t = profile.fr;

  return (
    <section className="flex flex-col gap-12">

      {/* Header */}
      <div className="animate-fade-in-up flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            À propos
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Bonjour, je suis{" "}
            <span className="gradient-text">{t.name}</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {t.headline}
          </p>
        </div>

        <div className="flex-shrink-0">
          <div className="avatar-ring relative h-32 w-32 overflow-hidden rounded-2xl sm:h-40 sm:w-40">
            <Image
              src="/images/avatar/avatar.jpeg"
              alt="Hugo Tekeng"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="animate-fade-in-up delay-100 card-premium rounded-3xl p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-white/90">Mon parcours</h2>
        <div className="flex flex-col gap-4">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-white/65">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Info grid */}
      <div className="animate-fade-in-up delay-200 grid gap-4 sm:grid-cols-3">
        <div className="card-premium rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Localisation</p>
          <p className="mt-3 text-white/85">{t.location}</p>
        </div>
        <div className="card-premium rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Contact</p>
          <a href={`mailto:${t.contact.email}`} className="mt-3 block text-blue-400/90 transition hover:text-blue-300">
            {t.contact.email}
          </a>
        </div>
        <div className="card-premium rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Statut</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-white/85">À la recherche d'un emploi</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="animate-fade-in-up delay-300 flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-white/90">Stack technique</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {techCategories.map((cat) => (
            <div key={cat.label} className="card-premium rounded-2xl p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="skill-pill rounded-full px-3 py-1.5 text-sm text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="animate-fade-in-up delay-400 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-400 hover:to-violet-400"
        >
          Voir mes projets
        </Link>
        <Link
          href="/hire-me"
          className="card-premium inline-flex min-h-[46px] items-center justify-center rounded-full px-6 py-2.5 text-sm text-white/80"
        >
          Je cherche un emploi →
        </Link>
      </div>
    </section>
  );
}
