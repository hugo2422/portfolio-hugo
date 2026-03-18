"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { courses, priorDegrees } from "../../data/university";
import { experiences } from "../../data/experience";

const sessionsOrder = [
    "Automne 2023",
    "Hiver 2024",
    "Automne 2024",
    "Hiver 2025",
    "Été 2025",
    "Automne 2025",
    "Hiver 2026",
    "Été 2026",
];

export default function UniversityPage() {
    const [activeCategory, setActiveCategory] = useState("Tous");

    const categories = useMemo(() => {
        const unique = Array.from(new Set(courses.map((course) => course.category)));
        return ["Tous", ...unique];
    }, []);

    const filteredCourses =
        activeCategory === "Tous"
            ? courses
            : courses.filter((course) => course.category === activeCategory);

    const groupedCourses = sessionsOrder.map((session) => ({
        session,
        items: filteredCourses.filter((course) => course.sessionFr === session),
    }));

    const totalCourses = courses.length;
    const plannedCourses = courses.filter((course) => course.status === "Prévu 2026").length;
    const completedCourses = totalCourses - plannedCourses;

    return (
        <section className="flex flex-col gap-10">


            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Vue d’ensemble académique
                    </h2>
                    <p className="max-w-3xl text-white/70">
                        Mon parcours universitaire repose sur deux formations complémentaires :
                        une base rigoureuse en mathématiques appliquées, puis une spécialisation
                        en informatique et sciences des données.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                                    Université de Dschang
                                </span>
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                                    Cameroun
                                </span>
                                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                                    WES : Bachelor’s degree
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold">
                                Licence en mathématiques appliquées
                            </h3>

                            <p className="text-sm text-white/60">2019 — 2023</p>

                            <p className="leading-relaxed text-white/75">
                                Formation initiale complète en analyse, algèbre, probabilités,
                                statistiques, équations différentielles, modélisation et calcul scientifique.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                                    UQTR
                                </span>
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                                    Canada
                                </span>
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                                    2023 — présent
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold">
                                Baccalauréat en informatique — Sciences des données
                            </h3>

                            <p className="text-sm text-white/60">
                                Dernière session en cours • stage été 2026 recherché
                            </p>

                            <p className="leading-relaxed text-white/75">
                                Approfondissement en développement logiciel, data science, bases de
                                données, systèmes, réseaux, architecture et projets appliqués.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-white/60">Progression du parcours</p>
                    <p className="mt-2 text-lg font-medium">
                        Mathématiques appliquées → Informatique → Data / Logiciel / Plateformes
                    </p>
                    <p className="mt-3 max-w-4xl leading-relaxed text-white/70">
                        Cette progression rend mon profil particulièrement cohérent : une base
                        mathématique forte pour la modélisation et l’analyse, prolongée par une
                        formation avancée en informatique orientée vers les systèmes, les données
                        et la réalisation de projets concrets.
                    </p>
                </div>
            </div>


            <div className="flex flex-wrap gap-3">
                <a
                    href="#uqtr-path"
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                >
                    Aller à UQTR
                </a>
                <a
                    href="#dschang-path"
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                >
                    Aller à Université de Dschang
                </a>
                <a
                    href="#professional-path"
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                >
                    Aller au parcours professionnel
                </a>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">Filtrer par domaine</h2>
                    <p className="text-sm text-white/50">
                        {activeCategory === "Tous" ? "Tous les cours" : activeCategory}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-4 py-2 text-sm transition ${isActive
                                    ? "border-white/30 bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                                    : "border-white/15 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div id="uqtr-path" className="flex flex-col gap-10 scroll-mt-28">
                {groupedCourses.map(
                    ({ session, items }) =>
                        items.length > 0 && (
                            <div key={session} className="flex flex-col gap-5">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-white/70" />
                                        <h2 className="text-2xl font-semibold tracking-tight">{session}</h2>
                                    </div>

                                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
                                        {items.length} cours
                                    </span>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {items.map((course) => (
                                        <Link
                                            key={course.slug}
                                            href={`/university/${course.slug}`}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                                        {course.code}
                                                    </span>

                                                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                                        {course.category}
                                                    </span>

                                                    {course.status && (
                                                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                                                            {course.status}
                                                        </span>
                                                    )}
                                                </div>

                                                <span className="text-white/40 transition group-hover:translate-x-1 group-hover:text-white/70">
                                                    →
                                                </span>
                                            </div>

                                            <p className="mt-4 text-lg font-medium">{course.titleFr}</p>
                                            <p className="mt-2 text-sm leading-relaxed text-white/75 line-clamp-3">
                                                {course.summaryFr}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                )}
            </div>


            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />

                <div className="relative grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Base académique</p>
                        <p className="mt-2 text-lg font-medium">Mathématiques appliquées</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Formation initiale rigoureuse en analyse, algèbre, probabilités,
                            statistiques, équations différentielles, géométrie et calcul scientifique.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Évolution du parcours</p>
                        <p className="mt-2 text-lg font-medium">Transition vers l’informatique</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Cette base mathématique a naturellement soutenu mon développement en
                            algorithmique, programmation, data science, systèmes, bases de données
                            et conception logicielle.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Positionnement actuel</p>
                        <p className="mt-2 text-lg font-medium">Profil hybride mathématiques + informatique</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Mon parcours combine raisonnement abstrait, modélisation quantitative
                            et réalisation concrète de projets logiciels, data et plateformes numériques.
                        </p>
                    </div>
                </div>
            </div>


            {priorDegrees.length > 0 && (
                <div id="dschang-path" className="flex flex-col gap-8 scroll-mt-28">
                    <div className="flex flex-col gap-3">
                        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                            Parcours universitaire antérieur
                        </span>

                        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                            Formation antérieure et équivalence académique
                        </h2>

                        <p className="max-w-3xl text-white/70">
                            Avant mon parcours à l’UQTR, j’ai complété une licence complète en
                            mathématiques appliquées à l’Université de Dschang. Cette formation
                            m’a donné une base théorique forte en modélisation, calcul scientifique,
                            analyse, probabilités, statistiques et raisonnement abstrait.
                        </p>
                    </div>

                    {priorDegrees.map((degree) => (
                        <div
                            key={degree.slug}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                        >
                            <div className="border-b border-white/10 p-6 md:p-8">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                            {degree.schoolFr}
                                        </span>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                            {degree.countryFr}
                                        </span>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                            {degree.periodFr}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                            {degree.degreeFr} en {degree.fieldFr}
                                        </h3>
                                        <p className="text-white/70">{degree.summaryFr}</p>
                                    </div>

                                    {degree.wesFr && (
                                        <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4">
                                            <p className="text-sm font-medium text-emerald-300">
                                                Équivalence académique WES
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-emerald-100/90">
                                                {degree.wesFr}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 p-6 md:p-8">
                                {degree.years.map((year) => (
                                    <div key={year.yearFr} className="flex flex-col gap-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-3 w-3 rounded-full bg-white/70" />
                                            <h4 className="text-xl font-semibold tracking-tight md:text-2xl">
                                                {year.yearFr}
                                            </h4>
                                        </div>

                                        <div className="grid gap-6">
                                            {year.semesters.map((semester) => (
                                                <div
                                                    key={semester.semesterFr}
                                                    className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6"
                                                >
                                                    <h5 className="text-lg font-semibold tracking-tight">
                                                        {semester.semesterFr}
                                                    </h5>

                                                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                                                        <div className="flex flex-col gap-3">
                                                            <p className="text-sm font-medium text-white/60">
                                                                Cours suivis
                                                            </p>

                                                            <ul className="space-y-3 text-white/80">
                                                                {semester.courses.map((course) => (
                                                                    <li key={course.code} className="flex items-start gap-3">
                                                                        <span className="mt-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                                                                            {course.code}
                                                                        </span>
                                                                        <span className="leading-relaxed">{course.titleFr}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="flex flex-col gap-3">
                                                            <p className="text-sm font-medium text-white/60">
                                                                Notions approfondies
                                                            </p>

                                                            <ul className="space-y-3 text-white/80">
                                                                {semester.topicsFr.map((topic, index) => (
                                                                    <li key={index} className="flex items-start gap-3">
                                                                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                                                                        <span className="leading-relaxed">{topic}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}


            {experiences.length > 0 && (
                <div id="professional-path" className="flex flex-col gap-8 scroll-mt-28">
                    <div className="flex flex-col gap-3">
                        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                            Parcours professionnel
                        </span>

                        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                            Expériences professionnelles et terrain
                        </h2>

                        <p className="max-w-3xl text-white/70">
                            En parallèle de ma formation, j’ai occupé des rôles concrets en
                            environnement professionnel, à la fois dans le support informatique
                            et dans l’analyse de données.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {experiences.map((experience) => (
                            <div
                                key={experience.slug}
                                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                            >
                                <div className="border-b border-white/10 p-6 md:p-8">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                                {experience.company}
                                            </span>
                                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                                {experience.locationFr}
                                            </span>
                                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                                {experience.periodFr}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                                {experience.roleFr}
                                            </h3>
                                            <p className="text-white/70">{experience.descriptionFr}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium text-white/60">
                                            Missions principales
                                        </p>

                                        <ul className="space-y-3 text-white/80">
                                            {experience.missionsFr.map((mission, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                                                    <span className="leading-relaxed">{mission}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium text-white/60">
                                            Technologies / environnement
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}