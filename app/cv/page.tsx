import Link from "next/link";

export default function CVPage() {
    return (
        <section className="flex flex-col gap-10">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="relative flex flex-col gap-5">
                    <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                        Curriculum Vitae
                    </span>

                    <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                        Mon CV
                    </h1>

                    <p className="max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                        Retrouvez ici une version complète de mon CV, avec mon parcours
                        universitaire, mes expériences, mes projets techniques et mes
                        compétences en développement logiciel et analyse de données.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/documents/hugo-tekeng-cv.pdf"
                            target="_blank"
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                        >
                            Voir le CV
                        </Link>

                        <a
                            href="/documents/hugo-tekeng-cv.pdf"
                            download
                            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
                        >
                            Télécharger
                        </a>

                        <Link
                            href="/contact"
                            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25"
                        >
                            Me contacter
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Profil visé</p>
                    <p className="mt-2 text-lg font-medium">Développement logiciel & data</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        Backend, bases de données relationnelles, automatisation Python,
                        analyse de données et conception de solutions robustes.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Disponibilité</p>
                    <p className="mt-2 text-lg font-medium">Stage été 2026</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        Dernière session à l’UQTR, actuellement à la recherche d’un stage
                        pour continuer à progresser en environnement professionnel.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Accès rapide</p>
                    <p className="mt-2 text-lg font-medium">Consultation & téléchargement</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        Le CV est disponible directement en ligne et peut être téléchargé
                        facilement au format PDF.
                    </p>
                </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
                <iframe
                    src="/documents/hugo-tekeng-cv.pdf"
                    className="h-[900px] w-full rounded-2xl bg-white"
                    title="CV Hugo Tekeng"
                />
            </div>
        </section>
    );
}