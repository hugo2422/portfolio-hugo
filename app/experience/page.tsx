import { experiences } from "../../data/experience";


export default function ExperiencePage() {
    return (
        <section className="flex flex-col gap-10">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="relative flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                            Parcours professionnel
                        </span>

                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            Expériences professionnelles
                        </h1>

                        <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                            Une vue structurée de mes expériences en environnement professionnel,
                            entre support informatique, maintenance, accompagnement utilisateur
                            et analyse de données orientée décision.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm text-white/60">Expériences</p>
                            <p className="mt-2 text-3xl font-semibold">{experiences.length}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm text-white/60">Axes principaux</p>
                            <p className="mt-2 text-xl font-semibold">Support IT • Data Analysis</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm text-white/60">Positionnement</p>
                            <p className="mt-2 text-xl font-semibold">Technique + analytique</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Support et maintenance</p>
                        <p className="mt-2 text-lg font-medium">
                            Assistance, diagnostic, résolution
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Expérience concrète dans l’installation, la maintenance, le support
                            technique et l’accompagnement utilisateur.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Analyse de données</p>
                        <p className="mt-2 text-lg font-medium">
                            Exploration, visualisation, prévision
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Expérience appliquée en Python, visualisation, tableaux de bord
                            et analyse statistique orientée décision.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm text-white/60">Valeur ajoutée</p>
                        <p className="mt-2 text-lg font-medium">
                            Polyvalence terrain + logique data
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Un profil capable d’intervenir à la fois sur les environnements
                            techniques et sur l’exploitation analytique des données.
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
                                            {experience.locationFr}
                                        </span>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                                            {experience.periodFr}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                            {experience.roleFr}
                                        </h2>
                                        <p className="max-w-3xl text-white/70">{experience.descriptionFr}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                                <div className="flex flex-col gap-3">
                                    <p className="text-sm font-medium text-white/60">
                                        Missions principales
                                    </p>

                                    <ul className="space-y-3 text-white/80">
                                        {experience.missionsFr.map((mission, missionIndex) => (
                                            <li key={missionIndex} className="flex items-start gap-3">
                                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                                                <span className="leading-relaxed">{mission}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <p className="text-sm font-medium text-white/60">
                                        Technologies / environnement
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