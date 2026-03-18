import Link from "next/link";

export default function ServicesEN() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
                <p className="text-white/70">
                    I can help with short missions or projects: backend, data, automation.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Backend & APIs</p>
                    <p className="mt-2 text-white/85">Python/Java • business logic • databases</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Data & dashboards</p>
                    <p className="mt-2 text-white/85">Analysis • KPIs • visualization</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Automation</p>
                    <p className="mt-2 text-white/85">Python scripts • ETL • reporting</p>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/70">
                    For internships, missions, or collaboration, feel free to reach out.
                </p>
                <Link
                    href="/en/contact"
                    className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                >
                    Contact
                </Link>
            </div>
        </section>
    );
}