import Link from "next/link";
import { profile } from "../../data/profile";

const skills = [
    { category: "Langages",      items: ["Python", "Java", "SQL", "C++", "C#", "HTML/CSS"] },
    { category: "Frameworks",    items: ["Spring Boot", "Flask", "Android", "JavaFX", "Thymeleaf"] },
    { category: "Data & ML",     items: ["Pandas", "Scikit-learn", "Matplotlib", "Tableau", "Streamlit"] },
    { category: "Bases de données", items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Room"] },
    { category: "Outils",        items: ["Git", "Firebase", "REST API", "Agile", "Linux"] },
];

export default function HireMePage() {
    const t = profile.fr;

    return (
        <section className="flex flex-col gap-12">

            {/* Header */}
            <div className="animate-fade-in-up flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Recrutement</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    À la recherche{" "}
                    <span className="gradient-text">d&apos;un emploi</span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
                    {t.internship.intro}
                </p>
            </div>

            {/* Status cards */}
            <div className="animate-fade-in-up delay-100 grid gap-4 sm:grid-cols-3">
                <div className="card-premium rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Disponibilité</p>
                    <div className="mt-3 flex items-center gap-2">
                        <span className="status-dot" />
                        <p className="font-medium text-white/90">Automne 2026</p>
                    </div>
                </div>

                <div className="card-premium rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Rôles ciblés</p>
                    <p className="mt-3 font-medium text-white/85">Back-end · Data · Android</p>
                </div>

                <div className="card-premium rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Localisation</p>
                    <p className="mt-3 font-medium text-white/85">Trois-Rivières / télétravail</p>
                </div>
            </div>

            {/* Degree completion banner */}
            <div className="animate-fade-in-up delay-200 overflow-hidden rounded-3xl border border-violet-500/15 bg-gradient-to-br from-violet-500/8 to-blue-500/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white/95">
                            Baccalauréat en informatique — Fin de programme été 2026
                        </h2>
                        <p className="mt-1 text-sm text-white/50">
                            Université du Québec à Trois-Rivières (UQTR) · Spécialisation : Science des données & développement logiciel
                        </p>
                        <p className="mt-2 text-sm text-white/55">
                            Également titulaire d&apos;une Licence en Mathématiques Appliquées de l&apos;Université de Dschang
                            (reconnue équivalente à un Baccalauréat canadien en mathématiques appliquées).
                        </p>
                    </div>
                </div>
            </div>

            {/* What I bring */}
            <div className="animate-fade-in-up delay-300 flex flex-col gap-5">
                <h2 className="text-xl font-semibold text-white/90">Ce que j&apos;apporte</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {[
                        {
                            icon: "🖥️",
                            title: "Développement back-end",
                            desc: "Expérience réelle en production avec Spring Boot, Java et PostgreSQL. Système ERP complet déployé et utilisé quotidiennement par une entreprise.",
                        },
                        {
                            icon: "📊",
                            title: "Science des données",
                            desc: "Pipeline de données, ML (classification, régression, clustering, PCA), visualisation et reporting analytique. Expérience en stage chez Lucatex SARL.",
                        },
                        {
                            icon: "📱",
                            title: "Mobile Android",
                            desc: "Architecture MVVM, Firebase, Room, Google Maps. Application fonctionnelle développée en équipe et géolocalisée.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="card-premium rounded-2xl p-5">
                            <span className="text-2xl">{item.icon}</span>
                            <h3 className="mt-3 font-semibold text-white/90">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills */}
            <div className="animate-fade-in-up delay-400 flex flex-col gap-5">
                <h2 className="text-xl font-semibold text-white/90">Compétences techniques</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                    {skills.map((cat) => (
                        <div key={cat.category} className="card-premium rounded-2xl p-5">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/35">{cat.category}</p>
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
            <div className="animate-fade-in-up delay-500 overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white/95 sm:text-2xl">
                    Recruteurs &amp; entreprises, échangeons.
                </h2>
                <p className="mt-2 max-w-xl text-white/55">
                    Mon programme se termine à l&apos;été 2026. Je suis ouvert à tout type de poste en développement
                    logiciel, back-end, data ou mobile Android. N&apos;hésitez pas à me contacter — je suis également
                    ouvert aux retours constructifs.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href="/contact"
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-400 hover:to-violet-400"
                    >
                        Me contacter
                    </Link>
                    <Link
                        href="/projects"
                        className="card-premium inline-flex min-h-[46px] items-center justify-center rounded-full px-6 py-2.5 text-sm text-white/80"
                    >
                        Voir mes projets →
                    </Link>
                    <Link
                        href="/cv"
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/10 px-6 py-2.5 text-sm text-white/65 transition hover:border-white/20 hover:text-white/90"
                    >
                        Télécharger mon CV ↗
                    </Link>
                </div>
            </div>

        </section>
    );
}
