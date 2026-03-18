export default function NowPage() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">En ce moment</h1>
                <p className="text-white/70">
                    Ce sur quoi je travaille et ce que j’apprends actuellement.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Objectif</p>
                    <p className="mt-2 text-white/85">Stage été 2026</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Projets en cours</p>
                    <p className="mt-2 text-white/85">Portfolio + projets techniques</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Apprentissage</p>
                    <p className="mt-2 text-white/85">Back-end, data, bonnes pratiques</p>
                </div>
            </div>
        </section>
    );
}