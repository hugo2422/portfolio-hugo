const certifications = [
  { name: "Power BI Data Analyst Associate", issuer: "Microsoft · PL-300", fr: "Modélisation des données, DAX et restitution visuelle.", en: "Data modeling, DAX and visual reporting.", href: "https://learn.microsoft.com/en-us/credentials/certifications/power-bi-data-analyst-associate/" },
  { name: "Java", issuer: "Oracle", fr: "Approfondissement des API et des règles du langage. Version de l’examen à préciser.", en: "Deepening knowledge of APIs and language rules. Exam version to be selected.", href: "https://www.oracle.com/education/training/java/" },
  { name: "Machine Learning Associate", issuer: "Databricks", fr: "Pratique de Databricks, suivi des expériences et MLflow.", en: "Hands-on Databricks, experiment tracking and MLflow.", href: "https://www.databricks.com/learn/certification/machine-learning-associate" },
  { name: "Developer – Associate", issuer: "AWS", fr: "Développement, déploiement et exploitation d’applications cloud.", en: "Developing, deploying and operating cloud applications.", href: "https://aws.amazon.com/certification/certified-developer-associate/" },
];
export default function Certifications({ locale, standalone = false }: { locale: "fr" | "en"; standalone?: boolean }) {
  const en = locale === "en";
  const Heading = standalone ? "h1" : "h2";
  return <section id="certifications" className="editorial-section scroll-mt-24">
    <div className="section-heading"><div><p className="eyebrow">{en ? "Continuous learning" : "Formation continue"}</p><Heading>{en ? "Certifications I am preparing for" : "Les certifications que je prépare"}</Heading></div><p>{en ? "A learning plan spanning software, BI and applied AI. These credentials have not yet been earned; no exam date is announced." : "Un parcours de préparation en logiciel, BI et IA appliquée. Ces certifications ne sont pas encore obtenues ; aucune date d’examen n’est annoncée."}</p></div>
    <div className="cert-grid">{certifications.map((c, i) => <article className="surface cert-card" key={c.issuer}>
      <div className="row-between"><span className="index-label">0{i + 1}</span><span className="status-label">{en ? "Preparation objective" : "Objectif de préparation"}</span></div>
      <p className="eyebrow">{c.issuer}</p><h3>{c.name}</h3><p>{en ? c.en : c.fr}</p><a href={c.href} target="_blank" rel="noopener noreferrer" className="text-link">{en ? "Official program" : "Programme officiel"} <span aria-hidden>↗</span></a>
    </article>)}</div>
  </section>;
}
