import { profile } from "../../data/profile";

export default function AboutPage() {
    const t = profile.fr;

    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">{t.about.title}</h1>
                <p className="text-white/70">{t.headline}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-4">
                    {t.about.paragraphs.map((p, i) => (
                        <p key={i} className="text-white/80 leading-relaxed">
                            {p}
                        </p>
                    ))}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Localisation</p>
                    <p className="mt-2 text-white/85">{t.location}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Contact</p>
                    <p className="mt-2 text-white/85">{t.contact.email}</p>
                </div>
            </div>
        </section>
    );
}