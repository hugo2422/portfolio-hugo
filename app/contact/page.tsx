export default function ContactPage() {
    return (
        <section className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
            <p className="text-white/70">
                Vous êtes recruteur, entrepreneur, ou vous voulez me proposer une idée/projet ? Écrivez-moi.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/60">Email</p>
                <p className="mt-2 text-white/85">tekenghugo7750@gmail.com</p>
            </div>
        </section>
    );
}