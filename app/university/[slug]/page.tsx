import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "../../../data/university";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function UniversityCoursePage({ params }: PageProps) {
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
                            {course.sessionFr}
                        </span>

                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                            {course.category}
                        </span>

                        {course.status && (
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                                {course.status}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/university"
                            className="text-sm text-white/60 transition hover:text-white"
                        >
                            ← Retour au parcours universitaire
                        </Link>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            {course.titleFr}
                        </h1>

                        <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                            Vue détaillée du cours, des notions étudiées, des technologies mobilisées
                            et des principaux travaux associés.
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
                    <p className="mt-2 text-xl font-semibold">{course.sessionFr}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Domaine</p>
                    <p className="mt-2 text-xl font-semibold">{course.category}</p>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Résumé global</h2>
                <p className="mt-4 leading-relaxed text-white/80">{course.summaryFr}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Technologies utilisées</h2>

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
                <h2 className="text-xl font-semibold">Notions vues dans ce cours</h2>

                <ul className="mt-4 space-y-3 text-white/80">
                    {course.topicsFr.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                            <span className="leading-relaxed">{topic}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Travaux et éléments évalués</h2>

                <ul className="mt-4 space-y-3 text-white/80">
                    {course.workFr.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {course.screenshots && course.screenshots.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold">Captures et illustrations</h2>
                    <p className="mt-3 text-white/70">
                        Des captures pourront être ajoutées ici pour illustrer certains travaux,
                        prototypes, résultats ou interfaces produits dans le cadre du cours.
                    </p>
                </div>
            )}
        </section>
    );
}