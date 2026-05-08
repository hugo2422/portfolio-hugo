import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "../data/featured-projects";

type Props = { locale: "fr" | "en" };

/* ── Inline styles — 100% reliable, Tailwind can't touch them ── */
const STATUS: Record<string, { label: { fr: string; en: string }; style: React.CSSProperties; dot?: string }> = {
  "in-production": {
    label: { fr: "En production", en: "In production" },
    style: {
      background: "rgba(16, 185, 129, 0.14)",
      border: "1px solid rgba(16, 185, 129, 0.35)",
      color: "#6ee7b7",
    },
    dot: "#10b981",
  },
  "in-progress": {
    label: { fr: "En cours", en: "In progress" },
    style: {
      background: "rgba(245, 158, 11, 0.14)",
      border: "1px solid rgba(245, 158, 11, 0.32)",
      color: "#fcd34d",
    },
  },
  "completed": {
    label: { fr: "Terminé", en: "Completed" },
    style: {
      background: "rgba(99, 102, 241, 0.14)",
      border: "1px solid rgba(99, 102, 241, 0.32)",
      color: "#a5b4fc",
    },
  },
};

const TAG_STYLE: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
};

const STACK_TAG: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.09)",
  color: "rgba(255,255,255,0.45)",
  fontSize: "11px",
  fontWeight: 500,
  padding: "2px 9px",
  borderRadius: "999px",
};

export default function FeaturedProjects({ locale }: Props) {
  const isEN = locale === "en";

  const heroProjects    = featuredProjects.slice(0, 2);
  const regularProjects = featuredProjects.slice(2, 6);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <div>
          <p style={TAG_STYLE}>Portfolio</p>
          <h2 style={{ margin: "6px 0 0", fontSize: "clamp(1.4rem,4vw,1.875rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.95)" }}>
            {isEN ? "Featured projects" : "Projets à la une"}
          </h2>
        </div>
        <Link
          href={isEN ? "/en/projects" : "/projects"}
          style={{
            display: "inline-flex", alignItems: "center", gap: "5px",
            padding: "7px 16px", borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            fontSize: "13px", color: "rgba(255,255,255,0.5)",
            textDecoration: "none", transition: "all 0.18s",
            whiteSpace: "nowrap",
          }}
        >
          {isEN ? "All projects" : "Tous les projets"} →
        </Link>
      </div>

      {/* ── Hero row — 2 big cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
        {heroProjects.map((p) => {
          const s = STATUS[p.statusKey];
          return (
            <Link
              key={p.id}
              href={isEN ? p.hrefEn : p.hrefFr}
              className="project-card shimmer-border group"
              style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", textDecoration: "none" }}
            >
              {/* Image */}
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "rgba(255,255,255,0.025)" }}>
                <Image
                  src={p.cover}
                  alt={isEN ? p.titleEn : p.titleFr}
                  fill
                  className="project-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 639px) 100vw, 50vw"
                  priority
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3,7,18,0.75) 0%, rgba(3,7,18,0.08) 50%, transparent 100%)" }} />
                {/* Status badge */}
                <div style={{ position: "absolute", top: 12, left: 12 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "4px 10px", borderRadius: "999px",
                    fontSize: "11px", fontWeight: 600,
                    backdropFilter: "blur(8px)",
                    ...s.style,
                  }}>
                    {s.dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />}
                    {isEN ? s.label.en : s.label.fr}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px 18px", flex: 1 }}>
                <p style={TAG_STYLE}>{isEN ? p.tagEn : p.tagFr}</p>
                <h3 style={{ fontSize: "17px", fontWeight: 700, lineHeight: 1.25, color: "rgba(255,255,255,0.94)", margin: 0 }}>
                  {isEN ? p.titleEn : p.titleFr}
                </h3>
                <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: 0, flex: 1 }}>
                  {isEN ? p.descEn : p.descFr}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 4 }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.stackPreview.map((s) => (
                      <span key={s} style={STACK_TAG}>{s}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                    {isEN ? "View →" : "Voir →"}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ── Regular grid — 4 compact cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
        {regularProjects.map((p) => {
          const s = STATUS[p.statusKey];
          return (
            <Link
              key={p.id}
              href={isEN ? p.hrefEn : p.hrefFr}
              className="project-card shimmer-border group"
              style={{ display: "flex", flexDirection: "column", borderRadius: "12px", overflow: "hidden", textDecoration: "none" }}
            >
              {/* Image */}
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "rgba(255,255,255,0.025)" }}>
                <Image
                  src={p.cover}
                  alt={isEN ? p.titleEn : p.titleFr}
                  fill
                  className="project-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3,7,18,0.82) 0%, transparent 60%)" }} />
                {/* Status badge */}
                <div style={{ position: "absolute", top: 8, left: 8 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "3px 8px", borderRadius: "999px",
                    fontSize: "10px", fontWeight: 600,
                    backdropFilter: "blur(8px)",
                    ...s.style,
                  }}>
                    {s.dot && <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />}
                    {isEN ? s.label.en : s.label.fr}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "7px", padding: "12px 14px", flex: 1 }}>
                <p style={{ ...TAG_STYLE, fontSize: "9px" }}>{isEN ? p.tagEn : p.tagFr}</p>
                <h3 style={{ fontSize: "13.5px", fontWeight: 700, lineHeight: 1.3, color: "rgba(255,255,255,0.92)", margin: 0 }}>
                  {isEN ? p.titleEn : p.titleFr}
                </h3>
                <p style={{ fontSize: "12px", lineHeight: 1.55, color: "rgba(255,255,255,0.45)", margin: 0,
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {isEN ? p.descEn : p.descFr}
                </p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", paddingTop: 2 }}>
                  {p.stackPreview.slice(0, 2).map((s) => (
                    <span key={s} style={{ ...STACK_TAG, fontSize: "10px", padding: "2px 7px" }}>{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}
