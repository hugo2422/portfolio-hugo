export type FeaturedProject = {
    id: string;
    cover: string;
    tagFr: string;
    tagEn: string;
    titleFr: string;
    titleEn: string;
    descFr: string;
    descEn: string;
    hrefFr: string;
    hrefEn: string;
    stackPreview: string[];
    statusKey: "in-progress" | "in-production" | "completed";
};

export const featuredProjects: FeaturedProject[] = [
    {
        id: "ops-system",
        cover: "/images/projects/ops-system/cover.jpg",
        tagFr: "ERP · Spring Boot · En production",
        tagEn: "ERP · Spring Boot · In production",
        titleFr: "Système de gestion d'entreprise",
        titleEn: "Business Management System",
        descFr: "ERP complet conçu, développé et déployé en production pour Lucatex SARL — gestion multi-rôles, modules financiers, envois d'argent, rapports journaliers. Utilisé quotidiennement.",
        descEn: "Full ERP designed, built and deployed in production for Lucatex SARL — multi-role management, financial modules, money transfers, daily reports. Used daily.",
        hrefFr: "/projects/ops-system",
        hrefEn: "/en/projects/ops-system",
        stackPreview: ["Java", "Spring Boot", "PostgreSQL"],
        statusKey: "in-production",
    },
    {
        id: "citoyen-actif",
        cover: "/images/projects/citoyen-actif/cover.png",
        tagFr: "Android · Firebase · Google Maps",
        tagEn: "Android · Firebase · Google Maps",
        titleFr: "Citoyen Actif",
        titleEn: "Citoyen Actif",
        descFr: "Application Android de signalement d'infrastructures urbaines géolocalisées — architecture MVVM, Room, Firestore, notifications push FCM et carte interactive.",
        descEn: "Android app for geolocated urban infrastructure reporting — MVVM, Room, Firestore, FCM push notifications and interactive map.",
        hrefFr: "/projects/citoyen-actif",
        hrefEn: "/en/projects/citoyen-actif",
        stackPreview: ["Java", "Android", "Firebase"],
        statusKey: "completed",
    },
    {
        id: "projet-depression",
        cover: "/images/projects/projet-depression/cover.jpg",
        tagFr: "Machine Learning · Flask · MongoDB",
        tagEn: "Machine Learning · Flask · MongoDB",
        titleFr: "Analyse ML — Dépression",
        titleEn: "ML Analysis — Depression",
        descFr: "Application web combinant ML (classification, régression, clustering, PCA, embeddings) et Flask pour l'étude de facteurs de risque de dépression sur données sociodémographiques.",
        descEn: "Web app combining ML (classification, regression, clustering, PCA, embeddings) and Flask to study depression risk factors on sociodemographic data.",
        hrefFr: "/projects/projet-depression",
        hrefEn: "/en/projects/projet-depression",
        stackPreview: ["Python", "Scikit-learn", "MongoDB"],
        statusKey: "completed",
    },
    {
        id: "causal-smoking",
        cover: "/images/projects/projet-depression/cover.jpg",
        tagFr: "Inférence causale · DML · EconML",
        tagEn: "Causal Inference · DML · EconML",
        titleFr: "Inférence causale — Tabagisme & Sommeil",
        titleEn: "Causal Inference — Smoking & Sleep",
        descFr: "Estimation causale sur 413 768 observations — DAG, critère backdoor, Double Machine Learning avec Random Forest et cross-fitting 5 folds. Analyse de sensibilité complète.",
        descEn: "Causal estimation on 413,768 observations — DAG, backdoor criterion, Double Machine Learning with Random Forest and 5-fold cross-fitting. Full sensitivity analysis.",
        hrefFr: "/projects/causal-smoking",
        hrefEn: "/en/projects/causal-smoking",
        stackPreview: ["Python", "EconML", "Scikit-learn"],
        statusKey: "completed",
    },
    {
        id: "eeg-causal",
        cover: "/images/projects/projet-depression/cover.jpg",
        tagFr: "EEG · Deep Learning · Inférence causale",
        tagEn: "EEG · Deep Learning · Causal Inference",
        titleFr: "Analyse EEG & Inférence causale",
        titleEn: "EEG Analysis & Causal Inference",
        descFr: "Analyse EEG complète — LSTM, forêt aléatoire, gradient boosting avec respect de l'ordre temporel. Estimation d'effets causaux par arbres causaux, score de propension et DML.",
        descEn: "Full EEG analysis — LSTM, random forest, gradient boosting respecting temporal order. Causal effect estimation via causal trees, propensity score, and DML.",
        hrefFr: "/projects/eeg-causal",
        hrefEn: "/en/projects/eeg-causal",
        stackPreview: ["Python", "EconML", "Pandas"],
        statusKey: "completed",
    },
    {
        id: "ecomos-ai",
        cover: "/images/projects/ecomos-ai/cover.jpg",
        tagFr: "SaaS · Python · Startup",
        tagEn: "SaaS · Python · Startup",
        titleFr: "EcomOS AI",
        titleEn: "EcomOS AI",
        descFr: "Prototype SaaS e-commerce — pipeline de validation de données, scoring produit multi-critères, moteur de règles YAML (SURVIE/CROISSANCE) et rapports PDF automatisés.",
        descEn: "E-commerce SaaS prototype — data validation pipeline, multi-criteria product scoring, YAML rule engine (SURVIVAL/GROWTH levels), and automated PDF reports.",
        hrefFr: "/projects/ecomos-ai",
        hrefEn: "/en/projects/ecomos-ai",
        stackPreview: ["Python", "Pandas", "Streamlit"],
        statusKey: "in-progress",
    },
];
