"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { courses, priorDegrees } from "../../../data/university";
import { experiences } from "../../../data/experience";

const sessionsOrder = [
    "Fall 2023",
    "Winter 2024",
    "Fall 2024",
    "Winter 2025",
    "Summer 2025",
    "Fall 2025",
    "Winter 2026",
    "Summer 2026",
];

export default function UniversityENPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categoryMap: Record<string, string> = {
        Web: "Web",
        "Programmation objet": "Object-Oriented Programming",
        Systèmes: "Systems",
        Maths: "Mathematics",
        Santé: "Health",
        Algorithmique: "Algorithms",
        Interfaces: "Interfaces",
        "Bases de données": "Databases",
        Logiciel: "Software",
        Data: "Data",
        Réseaux: "Networks",
        Projet: "Project",
        Droit: "Law",
        Société: "Society",
        Mobile: "Mobile",
        Stage: "Internship",
    };

    const categories = useMemo(() => {
        const unique = Array.from(new Set(courses.map((course) => course.category)));
        return ["All", ...unique];
    }, []);

    const filteredCourses =
        activeCategory === "All"
            ? courses
            : courses.filter((course) => course.category === activeCategory);

    const groupedCourses = sessionsOrder.map((session) => ({
        session,
        items: filteredCourses.filter((course) => course.sessionEn === session),
    }));

    const totalCourses = courses.length;
    const plannedCourses = courses.filter((course) => course.status === "Prévu 2026").length;
    const completedCourses = totalCourses - plannedCourses;

    return (
        <section className="flex flex-col gap-10">


            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Academic overview
                    </h2>
                    <p className="max-w-3xl text-white/70">
                        My academic path is built on two complementary degrees: a rigorous
                        foundation in applied mathematics, followed by a specialization in
                        computer science and data science.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                                    University of Dschang
                                </span>
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/75">
                                    Cameroon
                                </span>
                                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                                    WES: Bachelor’s degree
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold">
                                Bachelor’s Degree in Applied Mathematics
                            </h3>

                            <p className="text-sm text-white/60">2019 — 2023</p>

                            <p className="leading-relaxed text-white/75">
                                Initial academic training in analysis, algebra, probability,
                                statistics, differential equations, modeling, and scientific computing.
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
                                    2023 — present
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold">
                                Bachelor’s in Computer Science — Data Science
                            </h3>

                            <p className="text-sm text-white/60">
                                Final term in progress • seeking Summer 2026 internship
                            </p>

                            <p className="leading-relaxed text-white/75">
                                Further development in software engineering, data science,
                                databases, systems, networks, architecture, and applied projects.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-white/60">Path progression</p>
                    <p className="mt-2 text-lg font-medium">
                        Applied Mathematics → Computer Science → Data / Software / Platforms
                    </p>
                    <p className="mt-3 max-w-4xl leading-relaxed text-white/70">
                        This progression makes my profile especially coherent: a strong
                        mathematical foundation for modeling and analysis, extended by advanced
                        training in computing focused on systems, data, and real-world projects.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                <a
                    href="#uqtr-path"
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                >
                    Jump to UQTR
                </a>
                <a
                    href="#dschang-path"
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                >
                    Jump to University of Dschang
                </a>
                <a
                    href="#professional-path"
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                >
                    Jump to professional path
                </a>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">Filter by domain</h2>
                    <p className="text-sm text-white/50">
                        {activeCategory === "All"
                            ? "All courses"
                            : categoryMap[activeCategory] || activeCategory}
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
                                {category === "All" ? "All" : categoryMap[category] || category}
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
                                        {items.length} courses
                                    </span>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {items.map((course) => (
                                        <Link
                                            key={course.slug}
                                            href={`/en/university/${course.slug}`}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                                        {course.code}
                                                    </span>

                                                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                                        {categoryMap[course.category] || course.category}
                                                    </span>

                                                    {course.status && (
                                                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                                                            Planned 2026
                                                        </span>
                                                    )}
                                                </div>

                                                <span className="text-white/40 transition group-hover:translate-x-1 group-hover:text-white/70">
                                                    →
                                                </span>
                                            </div>

                                            <p className="mt-4 text-lg font-medium">{course.titleEn}</p>
                                            <p className="mt-2 text-sm leading-relaxed text-white/75 line-clamp-3">
                                                {course.summaryEn}
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
                        <p className="text-sm text-white/60">Academic foundation</p>
                        <p className="mt-2 text-lg font-medium">Applied mathematics</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            A rigorous initial training in analysis, algebra, probability,
                            statistics, differential equations, geometry, and scientific computing.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Path evolution</p>
                        <p className="mt-2 text-lg font-medium">Transition into computer science</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            This mathematical foundation naturally supported my development in
                            algorithms, programming, data science, systems, databases, and software design.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Current positioning</p>
                        <p className="mt-2 text-lg font-medium">Hybrid mathematics + computing profile</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            My path combines abstract reasoning, quantitative modeling,
                            and concrete execution across software, data, and digital platform projects.
                        </p>
                    </div>
                </div>
            </div>

            {priorDegrees.length > 0 && (
                <div id="dschang-path" className="flex flex-col gap-8 scroll-mt-28">
                    <div className="flex flex-col gap-3">
                        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                            Previous academic background
                        </span>

                        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                            Previous degree and academic equivalency
                        </h2>

                        <p className="max-w-3xl text-white/70">
                            Before starting my program at UQTR, I completed a full degree in
                            applied mathematics at the University of Dschang. This training
                            gave me a strong theoretical foundation in modeling, scientific
                            computing, analysis, probability, statistics, and abstract reasoning.
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
                                            {degree.schoolEn}
                                        </span>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                            {degree.countryEn}
                                        </span>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                            {degree.periodEn}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                            {degree.degreeEn} in {degree.fieldEn}
                                        </h3>
                                        <p className="text-white/70">{degree.summaryEn}</p>
                                    </div>

                                    {degree.wesEn && (
                                        <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4">
                                            <p className="text-sm font-medium text-emerald-300">
                                                WES academic equivalency
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-emerald-100/90">
                                                {degree.wesEn}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 p-6 md:p-8">
                                {degree.years.map((year) => (
                                    <div key={year.yearEn} className="flex flex-col gap-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-3 w-3 rounded-full bg-white/70" />
                                            <h4 className="text-xl font-semibold tracking-tight md:text-2xl">
                                                {year.yearEn}
                                            </h4>
                                        </div>

                                        <div className="grid gap-6">
                                            {year.semesters.map((semester) => (
                                                <div
                                                    key={semester.semesterEn}
                                                    className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6"
                                                >
                                                    <h5 className="text-lg font-semibold tracking-tight">
                                                        {semester.semesterEn}
                                                    </h5>

                                                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                                                        <div className="flex flex-col gap-3">
                                                            <p className="text-sm font-medium text-white/60">
                                                                Courses taken
                                                            </p>

                                                            <ul className="space-y-3 text-white/80">
                                                                {semester.courses.map((course) => (
                                                                    <li key={course.code} className="flex items-start gap-3">
                                                                        <span className="mt-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                                                                            {course.code}
                                                                        </span>
                                                                        <span className="leading-relaxed">{course.titleEn}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="flex flex-col gap-3">
                                                            <p className="text-sm font-medium text-white/60">
                                                                Advanced concepts covered
                                                            </p>

                                                            <ul className="space-y-3 text-white/80">
                                                                {semester.topicsEn.map((topic, index) => (
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
                            Professional path
                        </span>

                        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                            Professional experience and field work
                        </h2>

                        <p className="max-w-3xl text-white/70">
                            Alongside my academic journey, I have held practical roles in
                            professional environments, both in IT support and data analysis.
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
                                                {experience.locationEn}
                                            </span>
                                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                                {experience.periodEn}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                                {experience.roleEn}
                                            </h3>
                                            <p className="text-white/70">{experience.descriptionEn}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium text-white/60">
                                            Main responsibilities
                                        </p>

                                        <ul className="space-y-3 text-white/80">
                                            {experience.missionsEn.map((mission, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                                                    <span className="leading-relaxed">{mission}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm font-medium text-white/60">
                                            Technologies / environment
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