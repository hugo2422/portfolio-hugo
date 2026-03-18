import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "../../../../data/university";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function UniversityCourseENPage({ params }: PageProps) {
    const { slug } = await params;

    const course = courses.find((item) => item.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <section className="flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="relative flex flex-col gap-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                            {course.code}
                        </span>

                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                            {course.sessionEn}
                        </span>

                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                            {course.category === "Programmation objet"
                                ? "Object-Oriented Programming"
                                : course.category === "Systèmes"
                                    ? "Systems"
                                    : course.category === "Maths"
                                        ? "Mathematics"
                                        : course.category === "Santé"
                                            ? "Health"
                                            : course.category === "Algorithmique"
                                                ? "Algorithms"
                                                : course.category === "Interfaces"
                                                    ? "Interfaces"
                                                    : course.category === "Bases de données"
                                                        ? "Databases"
                                                        : course.category === "Logiciel"
                                                            ? "Software"
                                                            : course.category === "Réseaux"
                                                                ? "Networks"
                                                                : course.category === "Projet"
                                                                    ? "Project"
                                                                    : course.category === "Droit"
                                                                        ? "Law"
                                                                        : course.category === "Société"
                                                                            ? "Society"
                                                                            : course.category === "Stage"
                                                                                ? "Internship"
                                                                                : course.category}
                        </span>

                        {course.status && (
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                                Planned 2026
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/en/university"
                            className="text-sm text-white/60 transition hover:text-white"
                        >
                            ← Back to university path
                        </Link>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            {course.titleEn}
                        </h1>

                        <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                            Detailed view of the course, studied concepts, technologies used,
                            and major academic work associated with it.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Code</p>
                    <p className="mt-2 text-xl font-semibold">{course.code}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Session</p>
                    <p className="mt-2 text-xl font-semibold">{course.sessionEn}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Domain</p>
                    <p className="mt-2 text-xl font-semibold">
                        {course.category === "Programmation objet"
                            ? "Object-Oriented Programming"
                            : course.category === "Systèmes"
                                ? "Systems"
                                : course.category === "Maths"
                                    ? "Mathematics"
                                    : course.category === "Santé"
                                        ? "Health"
                                        : course.category === "Algorithmique"
                                            ? "Algorithms"
                                            : course.category === "Interfaces"
                                                ? "Interfaces"
                                                : course.category === "Bases de données"
                                                    ? "Databases"
                                                    : course.category === "Logiciel"
                                                        ? "Software"
                                                        : course.category === "Réseaux"
                                                            ? "Networks"
                                                            : course.category === "Projet"
                                                                ? "Project"
                                                                : course.category === "Droit"
                                                                    ? "Law"
                                                                    : course.category === "Société"
                                                                        ? "Society"
                                                                        : course.category === "Stage"
                                                                            ? "Internship"
                                                                            : course.category}
                    </p>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="mt-4 leading-relaxed text-white/80">{course.summaryEn}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Technologies used</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                    {course.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Key concepts covered</h2>

                <ul className="mt-4 space-y-3 text-white/80">
                    {course.topicsEn.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                            <span className="leading-relaxed">{topic}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Coursework and evaluated components</h2>

                <ul className="mt-4 space-y-3 text-white/80">
                    {course.workEn.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {course.screenshots && course.screenshots.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold">Screenshots and illustrations</h2>
                    <p className="mt-3 text-white/70">
                        Visuals can be added here later to showcase selected coursework,
                        prototypes, outputs, or interfaces related to this course.
                    </p>
                </div>
            )}
        </section>
    );
}