import Link from "next/link";

type Links = {
    github?: string;
    demo?: string;
    docs?: string;
};

export default function ProjectLinks({
    links,
    locale,
}: {
    links?: Links;
    locale: "fr" | "en";
}) {
    if (!links || (!links.github && !links.demo && !links.docs)) return null;

    const labels = {
        github: "GitHub",
        demo: locale === "en" ? "Live demo" : "Démo",
        docs: locale === "en" ? "Docs" : "Documentation",
    } as const;

    const items: Array<{ key: keyof Links; href?: string }> = [
        { key: "github", href: links.github },
        { key: "demo", href: links.demo },
        { key: "docs", href: links.docs },
    ];

    return (
        <div className="flex flex-wrap gap-3">
            {items
                .filter((x) => !!x.href)
                .map((x) => (
                    <Link
                        key={x.key}
                        href={x.href as string}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10"
                    >
                        {labels[x.key]}
                    </Link>
                ))}
        </div>
    );
}