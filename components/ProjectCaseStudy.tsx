import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";
import { caseStudies } from "../data/case-studies";
import ProjectLinks from "./ProjectLinks";

function List({ items }: { items: string[] }) { return <ul className="case-list">{items.map(s => <li key={s}>{s}</li>)}</ul>; }
function EEGResults({ en }: { en: boolean }) {
  const rows = [["Random Forest", ".9318", ".8409", ".5872"], [en ? "Transformer (5-run mean)" : "Transformer (moyenne de 5 essais)", ".8545", ".7318", ".5189"]];
  return <div className="results-block"><h3>{en ? "Predictive results on the test set" : "Résultats prédictifs sur le jeu de test"}</h3>
    <figure><Image src={`/images/projects/eeg-causal/results-${en ? "en" : "fr"}.svg`} alt={en ? "Balanced accuracy: Random Forest 0.8409; Transformer mean 0.7318. Full values in the following table." : "Exactitude équilibrée : Random Forest 0,8409 ; Transformer en moyenne 0,7318. Valeurs complètes dans le tableau suivant."} width={920} height={340} sizes="(max-width: 700px) 90vw, 850px" className="chart-image"/><figcaption>{en ? "Scores range from 0 to 1. Transformer values are means across five initializations." : "Scores de 0 à 1. Les valeurs du Transformer sont des moyennes sur cinq initialisations."}</figcaption></figure>
    <div className="table-scroll"><table><caption>{en ? "Recorded evaluation metrics" : "Métriques d’évaluation enregistrées"}</caption><thead><tr><th>{en ? "Model" : "Modèle"}</th><th>ROC-AUC</th><th>{en ? "Balanced accuracy" : "Exactitude équilibrée"}</th><th>F1 macro</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}>{r.map((c,i)=>i===0?<th scope="row" key={i}>{c}</th>:<td key={i}>{en ? `0${c}` : `0${c.replace(".",",")}`}</td>)}</tr>)}</tbody></table></div>
    <p className="result-note">{en ? "Transformer standard deviations: ROC-AUC ±0.2207; balanced accuracy ±0.1741; macro F1 ±0.2146. Only 24 test windows, including 2 closed-eye windows. These are descriptive results, not proof of clinical reliability." : "Écarts-types du Transformer : ROC-AUC ±0,2207 ; exactitude équilibrée ±0,1741 ; F1 macro ±0,2146. Seulement 24 fenêtres de test, dont 2 yeux fermés. Ces résultats descriptifs ne démontrent pas une fiabilité clinique."}</p>
    <h3>{en ? "A chronological evaluation" : "Une évaluation chronologique"}</h3><div className="split-bar" aria-hidden><span style={{flex:78}}>78</span><span style={{flex:15}}>15</span><span style={{flex:24}}>24</span></div><p>{en ? "78 training windows → 15 validation windows → 24 test windows. Temporal order is preserved." : "78 fenêtres d’entraînement → 15 de validation → 24 de test. L’ordre temporel est conservé."}</p>
  </div>;
}
export default function ProjectCaseStudy({ project: p, locale }: { project: Project; locale: "fr" | "en" }) {
  const en = locale === "en", base = en ? "/en" : "", c = caseStudies[p.slug];
  const title = en ? p.titleEn : p.titleFr;
  const sections = [
    [en ? "Architecture & implementation" : "Architecture & mise en œuvre", en ? p.architectureEn : p.architectureFr],
    [en ? "Technical decisions" : "Choix techniques", en ? p.engineeringDecisionsEn : p.engineeringDecisionsFr],
    [en ? "Lessons learned" : "Enseignements", en ? p.lessonsEn : p.lessonsFr],
    [en ? "Possible next steps" : "Pistes d’évolution", en ? p.improvementsEn : p.improvementsFr],
  ] as const;
  return <article className="case-study">
    <Link className="text-link" href={`${base}/projects`}>← {en ? "All projects" : "Tous les projets"}</Link>
    <header className="case-header"><p className="eyebrow">{en ? p.statusEn : p.statusFr}</p><h1>{title}</h1><p className="lead">{en ? p.taglineEn : p.taglineFr}</p><div className="case-meta"><div><span>{en ? "Period" : "Période"}</span><strong>{p.period}</strong></div><div><span>{en ? "My role" : "Mon rôle"}</span><strong>{en ? p.roleEn : p.roleFr}</strong></div><div><span>{en ? "Technologies" : "Technologies"}</span><strong>{p.stack.join(" · ")}</strong></div></div><ProjectLinks links={p.links} locale={locale}/></header>
    <nav className="case-nav" aria-label={en ? "Case study sections" : "Sommaire du projet"}><a href="#context">{en ? "Context" : "Contexte"}</a><a href="#approach">{en ? "Approach" : "Démarche"}</a><a href="#results">{en ? "Results & value" : "Résultats & apport"}</a><a href="#limits">{en ? "Limits" : "Limites"}</a></nav>
    <section id="context" className="case-section"><div className="case-section-label"><span>01</span><h2>{en ? "The starting point" : "Le point de départ"}</h2></div><div><p className="case-intro">{c.challenge[locale]}</p><p>{en ? p.overviewEn : p.overviewFr}</p>{c.metrics&&<div className="metric-grid">{c.metrics.map(m=><div key={m.value}><strong>{m.value}</strong><span>{m.label[locale]}</span></div>)}</div>}</div></section>
    <figure className="project-visual"><a href={p.cover} target="_blank" rel="noopener noreferrer" aria-label={en ? "Open project visual" : "Ouvrir le visuel du projet"}><Image src={p.cover} alt={title} width={1200} height={700} sizes="(max-width: 700px) 95vw, 1100px" className="case-cover"/></a><figcaption>{en ? "Project visual · open to view full size" : "Visuel du projet · ouvrir pour voir en grand"}</figcaption></figure>
    <section id="approach" className="case-section"><div className="case-section-label"><span>02</span><h2>{en ? "How it works" : "Comment cela fonctionne"}</h2></div><div><figure className="flow-diagram"><figcaption>{p.slug==="tekplateform" ? (en ? "Design stages — planned product" : "Étapes de conception — produit envisagé") : (en ? "Simplified functional workflow" : "Parcours fonctionnel simplifié")}</figcaption><ol>{c.flow.map((s,i)=><li key={s.fr}><span className="flow-number">{i+1}</span><strong>{s[locale]}</strong>{i<c.flow.length-1&&<span className="flow-arrow" aria-hidden>→</span>}</li>)}</ol></figure><div className="technical-details">{sections.map(([heading,items],i)=><details open={i===0} key={heading}><summary>{heading}</summary><List items={items}/></details>)}</div></div></section>
    <section id="results" className="case-section"><div className="case-section-label"><span>03</span><h2>{en ? "Results & practical value" : "Résultats & apport concret"}</h2></div><div>{p.slug==="eeg-causal"&&<EEGResults en={en}/>}<List items={c.impact.map(x=>x[locale])}/><h3>{en ? "Delivered so far" : "Ce qui est réalisé"}</h3><List items={en ? p.currentStateEn : p.currentStateFr}/></div></section>
    {p.screenshots&&p.screenshots.length>0&&<section className="case-gallery">{p.screenshots.filter(s=>s.src!==p.cover).map(s=><figure key={s.src}><a href={s.src} target="_blank" rel="noopener noreferrer"><Image src={s.src} alt={en?s.altEn:s.altFr} width={1000} height={650} sizes="90vw"/></a><figcaption>{en?s.altEn:s.altFr}</figcaption></figure>)}</section>}
    <section id="limits" className="case-section"><div className="case-section-label"><span>04</span><h2>{en ? "Scope & limitations" : "Portée & limites"}</h2></div><div className="surface limits-panel"><List items={c.limits.map(x=>x[locale])}/><p className="source-note">{c.evidence[locale]}</p></div></section>
    <footer className="case-footer"><Link href={`${base}/projects`} className="btn-secondary">← {en ? "Explore other projects" : "Explorer les autres projets"}</Link><Link href={`${base}/contact`} className="text-link">{en ? "Discuss this project" : "Échanger sur ce projet"} →</Link></footer>
  </article>;
}
