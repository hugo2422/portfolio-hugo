"use client";
import { useState } from "react";

type Locale = "fr" | "en";

const needs = {
  fr: ["Application web ou backend", "Analyse de données / tableau de bord", "Automatisation & reporting", "Prototype de machine learning", "Sous-traitance pour une agence", "Diagnostic de départ", "Autre"],
  en: ["Web application or backend", "Data analysis / dashboard", "Automation & reporting", "Machine learning prototype", "Subcontracting for an agency", "Starting diagnostic", "Other"],
};

export default function ServiceInquiry({ locale, email }: { locale: Locale; email: string }) {
  const en = locale === "en";
  const [f, setF] = useState({ name: "", org: "", need: needs[locale][0], goal: "", timing: "", budget: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const subject = `${en ? "Project inquiry" : "Demande de projet"} — ${f.need}`;
  const body = en
    ? `Hello Hugo,\n\nName: ${f.name}\nOrganization: ${f.org}\nType of need: ${f.need}\n\nGoal / problem to solve:\n${f.goal}\n\nDesired timeframe: ${f.timing}\nBudget range (optional): ${f.budget}\n\nThank you.`
    : `Bonjour Hugo,\n\nNom : ${f.name}\nOrganisation : ${f.org}\nType de besoin : ${f.need}\n\nObjectif / problème à résoudre :\n${f.goal}\n\nÉchéance envisagée : ${f.timing}\nBudget indicatif (facultatif) : ${f.budget}\n\nMerci.`;
  const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const ready = f.name.trim() !== "" && f.goal.trim() !== "";

  return (
    <form className="inquiry-form" onSubmit={(e) => { e.preventDefault(); if (ready) window.location.href = href; }}>
      <div className="inquiry-row">
        <label>{en ? "Your name" : "Votre nom"} *<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>{en ? "Company or agency" : "Entreprise ou agence"}<input value={f.org} onChange={set("org")} autoComplete="organization" /></label>
      </div>
      <label>{en ? "Type of need" : "Type de besoin"}
        <select value={f.need} onChange={set("need")}>{needs[locale].map((n) => <option key={n}>{n}</option>)}</select>
      </label>
      <label>{en ? "Your goal or the problem to solve" : "Votre objectif ou le problème à résoudre"} *
        <textarea required rows={4} value={f.goal} onChange={set("goal")} placeholder={en ? "e.g. Our sales reports take a day to prepare every week…" : "Ex. : nos rapports de ventes prennent une journée à préparer chaque semaine…"} />
      </label>
      <div className="inquiry-row">
        <label>{en ? "Desired timeframe" : "Échéance envisagée"}<input value={f.timing} onChange={set("timing")} placeholder={en ? "e.g. within 2 months" : "Ex. : d’ici 2 mois"} /></label>
        <label>{en ? "Budget range (optional)" : "Budget indicatif (facultatif)"}<input value={f.budget} onChange={set("budget")} /></label>
      </div>
      <button type="submit" className="btn-primary" disabled={!ready}>{en ? "Prepare my email" : "Préparer mon courriel"} ↗</button>
      <p className="inquiry-note">{en ? "Opens a pre-filled draft in your email app — nothing is sent until you press send." : "Ouvre un brouillon prérempli dans votre messagerie — rien n’est envoyé avant que vous cliquiez sur Envoyer."}</p>
    </form>
  );
}
