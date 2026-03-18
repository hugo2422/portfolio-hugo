import Link from "next/link";

export default function ServicesPage() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
                <p className="text-white/70">
                    Je peux aider sur des missions courtes ou projets : back-end, data, automatisation.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Back-end & API</p>
                    <p className="mt-2 text-white/85">Python/Java • logique métier • base de données</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Data & tableaux de bord</p>
                    <p className="mt-2 text-white/85">Analyse • KPIs • visualisation</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Automatisation</p>
                    <p className="mt-2 text-white/85">Scripts Python • ETL • reporting</p>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/70">
                    Pour une demande (stage, mission, collaboration), écris-moi.
                </p>
                <Link
                    href="/contact"
                    className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                >
                    Me contacter
                </Link>
            </div>
        </section>
    );
}