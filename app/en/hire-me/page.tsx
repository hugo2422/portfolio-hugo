import Link from "next/link";
import { profile } from "../../../data/profile";

export default function HireMeEN() {
    const t = profile.en;

    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">{t.internship.title}</h1>
                <p className="text-white/70">{t.internship.intro}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Target roles</p>
                    <p className="mt-2 text-white/85">{t.internship.targetRoles.join(" • ")}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Availability</p>
                    <p className="mt-2 text-white/85">Summer 2026</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Contact</p>
                    <Link
                        className="mt-2 inline-block text-white underline underline-offset-4"
                        href="/en/contact"
                    >
                        {t.contact.email}
                    </Link>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-white/80">
                    Recruiters, companies, founders: if my profile interests you, I’d be happy to connect.
                    I also welcome constructive feedback to keep improving.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                        href="/en/contact"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/en/projects"
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
                    >
                        View projects
                    </Link>
                </div>
            </div>
        </section>
    );
}