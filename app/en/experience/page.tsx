import { experiences } from "../../../data/experience";

export default function ExperienceENPage() {
    return (
        <section className="flex flex-col gap-10">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="relative flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                            Professional path
                        </span>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            Professional experience
                        </h1>

                        <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                            A structured overview of my professional experience across IT support,
                            maintenance, user assistance, and data analysis focused on practical,
                            decision-oriented work.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm text-white/60">Experiences</p>
                            <p className="mt-2 text-3xl font-semibold">{experiences.length}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm text-white/60">Main areas</p>
                            <p className="mt-2 text-xl font-semibold">IT Support • Data Analysis</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm text-white/60">Positioning</p>
                            <p className="mt-2 text-xl font-semibold">Technical + analytical</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Support and maintenance</p>
                        <p className="mt-2 text-lg font-medium">
                            Assistance, troubleshooting, resolution
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Hands-on experience in installation, maintenance, technical support,
                            and user assistance in professional environments.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Data analysis</p>
                        <p className="mt-2 text-lg font-medium">
                            Exploration, visualization, forecasting
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Applied experience with Python, visualization, dashboards,
                            and statistical analysis for decision support.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Added value</p>
                        <p className="mt-2 text-lg font-medium">
                            Field versatility + data logic
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            A profile able to contribute both in technical environments
                            and in analytical, data-driven contexts.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {experiences.map((experience, index) => (
                    <div key={experience.slug} className="flex gap-4 md:gap-6">
                        <div className="hidden md:flex md:flex-col md:items-center">
                            <div className="mt-2 h-3 w-3 rounded-full bg-white/80" />
                            {index < experiences.length - 1 && (
                                <div className="mt-2 h-full w-px bg-white/10" />
                            )}
                        </div>

                        <div className="flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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
                                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                            {experience.roleEn}
                                        </h2>
                                        <p className="max-w-3xl text-white/70">{experience.descriptionEn}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                                <div className="flex flex-col gap-3">
                                    <p className="text-sm font-medium text-white/60">
                                        Main responsibilities
                                    </p>

                                    <ul className="space-y-3 text-white/80">
                                        {experience.missionsEn.map((mission, missionIndex) => (
                                            <li key={missionIndex} className="flex items-start gap-3">
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
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}