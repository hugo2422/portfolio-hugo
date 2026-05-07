import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
    "in-progress": { label: "En cours", color: "text-amber-400", dot: "bg-amber-400" },
    "in-production": { label: "En production", color: "text-green-400", dot: "bg-green-400" },
    "completed": { label: "Terminé", color: "text-blue-400", dot: "bg-blue-400" },
};

export default function ProjectsPage() {
    return (
        <section className="flex flex-col gap-10">

            {/* Header */}
            <div className="animate-fade-in-up flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Portfolio</p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Mes <span className="gradient-text">projets</span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/55">
                    Projets académiques, professionnels et personnels — back-end, data, mobile et produit.
                </p>

                {/* Stats */}
                <div className="mt-2 flex flex-wrap gap-3">
                    {[
                        { label: "Projets total", value: projects.length.toString() },
                        { label: "En production", value: projects.filter(p => p.statusKey === "in-production").length.toString() },
                        { label: "En cours", value: projects.filter(p => p.statusKey === "in-progress").length.toString() },
                    ].map((stat) => (
                        <div key={stat.label} className="card-premium rounded-xl px-4 py-2">
                            <span className="text-lg font-bold text-white/90">{stat.value}</span>
                            <span className="ml-2 text-sm text-white/40">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects grid */}
            <div className="animate-fade-in-up delay-100 grid gap-4 sm:gap-5 sm:grid-cols-2">
                {projects.map((p) => {
                    const status = statusConfig[p.statusKey];
                    return (
                        <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="card-premium shimmer-border group flex flex-col overflow-hidden rounded-2xl"
                        >
                            {/* Cover */}
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/[0.03]">
                                <Image
                                    src={p.cover}
                                    alt={p.titleFr}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                                    sizes="(max-width: 767px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent" />

                                {/* Status badge on image */}
                                <div className="absolute bottom-3 left-3">
                                    <span className={`inline-flex items-center gap-1.5 rounded-full border border-current/20 bg-[#030712]/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${status.color}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                                        {status.label}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-3 p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                                            {p.tags.slice(0, 3).join(" · ")}
                                        </p>
                                        <h2 className="mt-1.5 text-lg font-semibold leading-snug text-white/95 transition group-hover:text-white">
                                            {p.titleFr}
                                        </h2>
                                    </div>
                                    <span className="shrink-0 text-xs text-white/30">{p.period}</span>
                                </div>

                                <p className="flex-1 text-sm leading-relaxed text-white/55">
                                    {p.taglineFr}
                                </p>

                                {/* Stack pills */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {p.stack.slice(0, 4).map((tech) => (
                                        <span key={tech} className="skill-pill rounded-full px-2.5 py-1 text-xs text-white/60">
                                            {tech}
                                        </span>
                                    ))}
                                    {p.stack.length > 4 && (
                                        <span className="rounded-full border border-white/6 px-2.5 py-1 text-xs text-white/30">
                                            +{p.stack.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

        </section>
    );
}
