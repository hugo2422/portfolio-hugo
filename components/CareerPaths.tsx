import Link from "next/link";
export default function CareerPaths({locale}: {locale: "fr" | "en"}) {
 const en=locale==="en", base=en?"/en":"";
 return <section className="grid gap-5 sm:grid-cols-2" aria-label={en?"Explore my work":"Explorer mes réalisations"}>
 {[
 {id:"software",title:en?"Software development":"Développement logiciel",desc:en?"Java and Python applications, business processes and production experience.":"Applications Java et Python, processus métier et expérience en production."},
 {id:"data",title:en?"Data science":"Science des données",desc:en?"Data analysis, BI, statistical modeling and machine learning.":"Analyse de données, BI, modélisation statistique et apprentissage automatique."}
 ].map(item=><div className="card-premium rounded-2xl p-6" key={item.id}><h2 className="text-xl font-semibold">{item.title}</h2><p className="mt-3 text-white/65">{item.desc}</p><div className="mt-5 flex flex-wrap gap-4"><Link className="btn-secondary" href={base+"/projects?focus="+item.id}>{en?"Explore projects":"Voir les projets"}</Link><Link className="btn-tertiary" href={base+"/cv#"+item.id}>{en?"View resume":"Voir le CV"}</Link></div></div>)}
 </section>;
}
