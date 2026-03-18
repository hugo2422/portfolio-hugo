export default function NowEN() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">Now</h1>
                <p className="text-white/70">What I’m working on and learning right now.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Goal</p>
                    <p className="mt-2 text-white/85">Summer 2026 internship</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">In progress</p>
                    <p className="mt-2 text-white/85">Portfolio + technical projects</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">Learning</p>
                    <p className="mt-2 text-white/85">Backend, data, best practices</p>
                </div>
            </div>
        </section>
    );
}