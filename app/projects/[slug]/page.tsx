import Image from "next/image";
import Link from "next/link";
import ProjectLinks from "../../../components/ProjectLinks";
import { getProjectBySlug, projects } from "../../../data/projects";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <section className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold">Projet introuvable</h1>
                <Link className="text-white/70 underline underline-offset-4" href="/projects">
                    Retour aux projets
                </Link>
            </section>
        );
    }

    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <Link className="text-sm text-white/60 hover:text-white" href="/projects">
                    ← Retour aux projets
                </Link>

                <h1 className="text-4xl font-semibold tracking-tight">{project.titleFr}</h1>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                        {project.statusFr}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                        {project.period}
                    </span>
                </div>

                <ProjectLinks links={project.links} locale="fr" />

                <p className="max-w-3xl text-lg text-white/75">{project.taglineFr}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[16/9] w-full">
                    <Image
                        src={project.cover}
                        alt={project.titleFr}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Résumé</h2>
                <p className="mt-3 leading-relaxed text-white/80">{project.overviewFr}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">État actuel</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
                    {project.currentStateFr.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold">Rôle</h2>
                    <p className="mt-3 leading-relaxed text-white/80">{project.roleFr}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold">Stack</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                            <span
                                key={s}
                                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {project.screenshots && project.screenshots.length > 0 && (
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold">Captures d’écran</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {project.screenshots.map((shot, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                            >
                                <div className="relative aspect-[16/9] w-full">
                                    <Image
                                        src={shot.src}
                                        alt={shot.altFr}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 text-sm text-white/70">{shot.altFr}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold">Vision</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                        {project.visionFr.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold">Architecture</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                        {project.architectureFr.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold">Roadmap</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                        {project.roadmapFr.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold">Engineering decisions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                        {project.engineeringDecisionsFr.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold">Améliorations possibles</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                        {project.improvementsFr.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold">Lessons learned</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
                        {project.lessonsFr.map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}