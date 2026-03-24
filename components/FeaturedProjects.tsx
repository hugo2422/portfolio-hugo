import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "../data/featured-projects";

type Props = {
    locale: "fr" | "en";
};

export default function FeaturedProjects({ locale }: Props) {
    const isEN = locale === "en";

    return (
        <section className="flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {isEN ? "Featured projects" : "Projets à la une"}
                </h2>

                <Link
                    href={isEN ? "/en/projects" : "/projects"}
                    className="w-fit text-sm text-white/70 transition hover:text-white"
                >
                    {isEN ? "View all →" : "Tout voir →"}
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map((p) => (
                    <Link
                        key={p.id}
                        href={isEN ? p.hrefEn : p.hrefFr}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image
                                src={p.cover}
                                alt={isEN ? p.titleEn : p.titleFr}
                                fill
                                className="object-contain transition duration-500 group-hover:scale-[1.03]"
                                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                            />
                        </div>

                        <div className="p-4 sm:p-5">
                            <p className="text-sm text-white/55">
                                {isEN ? p.tagEn : p.tagFr}
                            </p>

                            <h3 className="mt-2 text-lg font-medium leading-snug sm:text-xl">
                                {isEN ? p.titleEn : p.titleFr}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-white/70 sm:text-[15px]">
                                {isEN ? p.descEn : p.descFr}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}