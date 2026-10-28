import Image from "next/image";
import Link from "next/link";
export default function EducationStory({ locale }: { locale: "fr" | "en" }) {
  const en = locale === "en", base = en ? "/en" : "";
  const blocks = en ? [
    ["01 / APPLIED MATHEMATICS", "Reason about models", "University of Dschang · 2023", "Analysis, linear algebra, probability, statistics and numerical methods form the foundation of my work on data. They help me examine assumptions and interpret model outputs.", "uds-licence-mathematiques-appliquees", "Explore my mathematics background"],
    ["02 / COMPUTER SCIENCE", "Build working applications", "UQTR · 2023–2026", "My bachelor’s degree in Computer Science, concentration in Data Science, connects object-oriented programming, databases, software engineering and applied projects. Lucatex and Citoyen Actif illustrate these skills in different contexts.", "inf1011-genie-logiciel", "Explore software engineering"],
    ["03 / DATA & ARTIFICIAL INTELLIGENCE", "Evaluate before drawing conclusions", "Academic projects · 2025–2026", "Machine learning, causal inference and the EEG project brought my two backgrounds together: preparing data, comparing models and documenting what the results can—and cannot—support.", "sdd1004-apprentissage-automatique-applications", "Explore machine learning"]
  ] : [
    ["01 / MATHÉMATIQUES APPLIQUÉES", "Raisonner sur les modèles", "Université de Dschang · 2023", "Analyse, algèbre linéaire, probabilités, statistiques et méthodes numériques constituent les fondations de mon travail sur les données. Elles m’aident à examiner les hypothèses et à interpréter les résultats d’un modèle.", "uds-licence-mathematiques-appliquees", "Explorer ma formation en mathématiques"],
    ["02 / INFORMATIQUE", "Construire des applications utiles", "UQTR · 2023–2026", "Mon baccalauréat en informatique, concentration en science des données, relie programmation objet, bases de données, génie logiciel et projets appliqués. Lucatex et Citoyen Actif illustrent ces compétences dans des contextes différents.", "inf1011-genie-logiciel", "Explorer le génie logiciel"],
    ["03 / DONNÉES & INTELLIGENCE ARTIFICIELLE", "Évaluer avant de conclure", "Projets universitaires · 2025–2026", "L’apprentissage automatique, l’inférence causale et le projet EEG réunissent mes deux formations : préparer les données, comparer les modèles et documenter ce que les résultats permettent réellement de conclure.", "sdd1004-apprentissage-automatique-applications", "Explorer l’apprentissage automatique"]
  ];
  return <section className="education-story">
    <div className="education-intro"><div><p className="eyebrow">{en ? "Academic journey" : "Parcours universitaire"}</p><h1>{en ? "From mathematics to data science." : "Des mathématiques à la science des données."}</h1><p className="lead">{en ? "Two complementary degrees. One approach: understand the problem, build a solution and evaluate its usefulness." : "Deux formations complémentaires. Une même démarche : comprendre le problème, construire une solution et évaluer son utilité."}</p></div>
      <figure className="graduation-portrait"><Image src="/images/avatar/graduation-home.png" alt={en ? "Armel Hugo Tekeng in graduation attire holding his UQTR diploma scroll" : "Armel Hugo Tekeng en toge avec son parchemin de diplomation UQTR"} width={1022} height={1279} sizes="(max-width: 700px) 280px, 300px" priority /><figcaption>{en ? "A milestone in my academic journey" : "Une étape de mon parcours universitaire"}</figcaption></figure>
    </div>
    <div className="learning-timeline">{blocks.map(b => <article key={b[0]}><p className="eyebrow">{b[0]}</p><p className="muted">{b[2]}</p><h2>{b[1]}</h2><p>{b[3]}</p><Link className="text-link" href={b[4].startsWith("uds-") ? `${base}/university#dschang-path` : `${base}/university/${b[4]}`}>{b[5]} →</Link></article>)}</div>
    <div className="surface learning-bridge"><p className="eyebrow">{en ? "From coursework to projects" : "Des cours aux réalisations"}</p><div className="bridge-grid">
      <Link href={`${base}/projects/eeg-causal`}><strong>{en ? "Statistics → EEG" : "Statistiques → EEG"}</strong><span>{en ? "Temporal evaluation and causal assumptions" : "Évaluation temporelle et hypothèses causales"}</span></Link>
      <Link href={`${base}/projects/projet-depression`}><strong>{en ? "Databases → Flask & MongoDB" : "Bases de données → Flask & MongoDB"}</strong><span>{en ? "Data management and semantic search" : "Gestion des données et recherche sémantique"}</span></Link>
      <Link href={`${base}/projects/citoyen-actif`}><strong>{en ? "Mobile development → Citoyen Actif" : "Développement mobile → Citoyen Actif"}</strong><span>{en ? "MVVM, persistence and teamwork" : "MVVM, persistance et travail en équipe"}</span></Link>
    </div></div>
  </section>;
}
