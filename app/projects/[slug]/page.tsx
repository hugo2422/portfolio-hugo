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

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
    "in-progress":   { label: "En cours",        color: "text-amber-400", dot: "bg-amber-400" },
    "in-production": { label: "En production",   color: "text-green-400", dot: "bg-green-400" },
    "completed":     { label: "Terminé",          color: "text-blue-400",  dot: "bg-blue-400"  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="card-premium rounded-2xl p-6">
            <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-white/40">{title}</h2>
            {children}
        </div>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-2.5">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/60" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <section className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Projet introuvable</h1>
                <Link className="text-white/60 hover:text-white" href="/projects">← Retour aux projets</Link>
            </section>
        );
    }

    const status = statusConfig[project.statusKey];

    return (
        <section className="flex flex-col gap-8">

            {/* Breadcrumb */}
            <div className="animate-fade-in flex items-center gap-2 text-sm text-white/40">
                <Link href="/projects" className="transition hover:text-white/70">Projets</Link>
                <span>/</span>
                <span className="text-white/60">{project.titleFr}</span>
            </div>

            {/* Header */}
            <div className="animate-fade-in-up flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border border-current/20 bg-current/8 px-3 py-1 text-xs font-semibold ${status.color}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                        {status.label}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                        {project.period}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                        {project.roleFr}
                    </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {project.titleFr}
                </h1>

                <p className="max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
                    {project.taglineFr}
                </p>

                <ProjectLinks links={project.links} locale="fr" />
            </div>

            {/* Cover image */}
            <div className="animate-fade-in-up delay-100 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
                <div className="relative aspect-[16/9] w-full">
                    <Image
                        src={project.cover}
                        alt={project.titleFr}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 to-transparent" />
                </div>
            </div>

            {/* Overview */}
            <div className="animate-fade-in-up delay-200">
                <Section title="Résumé du projet">
                    <p className="leading-relaxed text-white/65">{project.overviewFr}</p>
                </Section>
            </div>

            {/* Current state */}
            <div className="animate-fade-in-up delay-200">
                <Section title="État actuel">
                    <BulletList items={project.currentStateFr} />
                </Section>
            </div>

            {/* Stack + Code status */}
            <div className="animate-fade-in-up delay-300 grid gap-5 md:grid-cols-2">
                <Section title="Stack technique">
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                            <span key={s} className="skill-pill rounded-full px-3 py-1.5 text-sm text-white/70">
                                {s}
                            </span>
                        ))}
                    </div>
                </Section>

                <Section title="Tags & Code">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="badge-accent rounded-full px-3 py-1.5 text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-white/50">{project.codeStatusFr}</p>
                    </div>
                </Section>
            </div>

            {/* Vision + Architecture + Roadmap */}
            <div className="animate-fade-in-up delay-300 grid gap-5 md:grid-cols-3">
                <Section title="Vision">
                    <BulletList items={project.visionFr} />
                </Section>
                <Section title="Architecture">
                    <BulletList items={project.architectureFr} />
                </Section>
                <Section title="Roadmap">
                    <BulletList items={project.roadmapFr} />
                </Section>
            </div>

            {/* Engineering decisions + Improvements + Lessons */}
            <div className="animate-fade-in-up delay-400 grid gap-5 md:grid-cols-3">
                <Section title="Décisions techniques">
                    <BulletList items={project.engineeringDecisionsFr} />
                </Section>
                <Section title="Améliorations possibles">
                    <BulletList items={project.improvementsFr} />
                </Section>
                <Section title="Lessons learned">
                    <BulletList items={project.lessonsFr} />
                </Section>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
                <div className="animate-fade-in-up delay-400 flex flex-col gap-4">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-white/40">Captures d&apos;écran</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                        {project.screenshots.map((shot, i) => (
                            <div key={i} className="card-premium overflow-hidden rounded-2xl">
                                <div className="relative aspect-[16/9] w-full">
                                    <Image src={shot.src} alt={shot.altFr} fill className="object-cover" />
                                </div>
                                <p className="px-4 py-3 text-sm text-white/50">{shot.altFr}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Navigation */}
            <div className="animate-fade-in-up delay-500 flex items-center justify-between border-t border-white/[0.07] pt-6">
                <Link href="/projects" className="text-sm text-white/50 transition hover:text-white/80">
                    ← Tous les projets
                </Link>
                <Link
                    href="/contact"
                    className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/20 transition hover:from-blue-400 hover:to-violet-400"
                >
                    Me contacter
                </Link>
            </div>

        </section>
    );
}
