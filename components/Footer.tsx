export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} Hugo Tekeng. Tous droits réservés.</p>
                <p className="text-white/50">Construit avec Next.js • Tailwind</p>
            </div>
        </footer>
    );
}