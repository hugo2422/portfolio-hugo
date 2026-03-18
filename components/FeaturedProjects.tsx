import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "../data/featured-projects";

type Props = {
    locale: "fr" | "en";
};

export default function FeaturedProjects({ locale }: Props) {
    const isEN = locale === "en";

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-end justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight">
                    {isEN ? "Featured projects" : "Projets à la une"}
                </h2>
                <Link
                    href={isEN ? "/en/projects" : "/projects"}
                    className="text-sm text-white/70 hover:text-white"
                >
                    {isEN ? "View all →" : "Tout voir →"}
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {featuredProjects.map((p) => (
                    <Link
                        key={p.id}
                        href={isEN ? p.hrefEn : p.hrefFr}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20"
                    >
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <Image
                                src={p.cover}
                                alt={isEN ? p.titleEn : p.titleFr}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-5">
                            <p className="text-sm text-white/60">{isEN ? p.tagEn : p.tagFr}</p>
                            <p className="mt-2 text-lg font-medium">
                                {isEN ? p.titleEn : p.titleFr}
                            </p>
                            <p className="mt-2 text-sm text-white/70">
                                {isEN ? p.descEn : p.descFr}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}