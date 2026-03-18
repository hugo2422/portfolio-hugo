import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projects";

export default function ProjectsENPage() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
                <p className="text-white/70">
                    Personal and professional projects (in progress, in production, long-term vision).
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/en/projects/${p.slug}`}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20"
                    >
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <Image
                                src={p.cover}
                                alt={p.titleEn}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <p className="text-sm text-white/60">{p.tags.join(" • ")}</p>
                                <p className="text-sm text-white/60">{p.statusEn}</p>
                            </div>

                            <p className="mt-2 text-lg font-medium">{p.titleEn}</p>
                            <p className="mt-2 text-sm text-white/70">{p.taglineEn}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}