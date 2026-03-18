import { profile } from "../../../data/profile";

export default function ContactEN() {
    const t = profile.en;

    return (
        <section className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
            <p className="text-white/70">
                Recruiter, founder, or you have an idea/project for me? Reach out.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/60">Email</p>
                <p className="mt-2 text-white/85">{t.contact.email}</p>
            </div>
        </section>
    );
}