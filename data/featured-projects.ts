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
    "id": "ops-system",
    "cover": "/images/projects/ops-system/cover.jpg",
    "tagFr": "ERP · Spring Boot · En production",
    "tagEn": "ERP · Spring Boot · In production",
    "titleFr": "Système de gestion d'entreprise",
    "titleEn": "Business Management System",
    "descFr": "ERP complet conçu, développé et déployé en production pour Lucatex SARL — gestion multi-rôles, modules financiers, envois d'argent, rapports journaliers. Utilisé quotidiennement.",
    "descEn": "Full ERP designed, built and deployed in production for Lucatex SARL — multi-role management, financial modules, money transfers, daily reports. Used daily.",
    "hrefFr": "/projects/ops-system",
    "hrefEn": "/en/projects/ops-system",
    "stackPreview": [
        "Java",
        "Spring Boot",
        "SQL"
    ],
    "statusKey": "in-production"
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
    "id": "projet-depression",
    "cover": "/images/projects/projet-depression/cover.jpg",
    "tagFr": "Machine Learning · Flask · MongoDB",
    "tagEn": "Machine Learning · Flask · MongoDB",
    "titleFr": "Analyse ML — Dépression",
    "titleEn": "ML Analysis — Depression",
    "descFr": "Application Flask/MongoDB, recherche sémantique et analyses sur 19 999 enregistrements.",
    "descEn": "Flask/MongoDB application, semantic search and analyses of 19,999 records.",
    "hrefFr": "/projects/projet-depression",
    "hrefEn": "/en/projects/projet-depression",
    "stackPreview": [
        "Python",
        "Scikit-learn",
        "MongoDB"
    ],
    "statusKey": "completed"
},
    {
    "id": "causal-smoking",
    "cover": "/images/projects/projet-depression/cover.jpg",
    "tagFr": "Inférence causale · DML · Random Forest",
    "tagEn": "Causal inference · DML · Random Forest",
    "titleFr": "Inférence causale — Tabagisme & Sommeil",
    "titleEn": "Causal Inference — Smoking & Sleep",
    "descFr": "Étude du tabagisme et du sommeil sur 297 584 observations analysées, avec Double Machine Learning.",
    "descEn": "Smoking and sleep study using 297,584 analyzed observations and Double Machine Learning.",
    "hrefFr": "/projects/causal-smoking",
    "hrefEn": "/en/projects/causal-smoking",
    "stackPreview": [
        "Python",
        "Scikit-learn",
        "Statsmodels"
    ],
    "statusKey": "completed"
},
    {
    "id": "eeg-causal",
    "cover": "/images/projects/projet-depression/cover.jpg",
    "tagFr": "EEG · Deep Learning · Inférence causale",
    "tagEn": "EEG · Deep Learning · Causal Inference",
    "titleFr": "EEG et état des yeux",
    "titleEn": "EEG and eye state",
    "descFr": "Classification de l’état des yeux sur signaux EEG et analyse causale, avec évaluation chronologique.",
    "descEn": "Eye-state classification from EEG signals and causal analysis, with chronological evaluation.",
    "hrefFr": "/projects/eeg-causal",
    "hrefEn": "/en/projects/eeg-causal",
    "stackPreview": [
        "Python",
        "PyTorch",
        "EconML"
    ],
    "statusKey": "completed"
},
    {
    "id": "ecomos-ai",
    "cover": "/images/projects/ecomos-ai/cover.jpg",
    "tagFr": "Prototype · Python · Analyse e-commerce",
    "tagEn": "Prototype · Python · E-commerce analytics",
    "titleFr": "EcomOS AI",
    "titleEn": "EcomOS AI",
    "descFr": "Prototype SaaS e-commerce — pipeline de validation de données, scoring produit multi-critères, moteur de règles YAML (SURVIE/CROISSANCE) et rapports PDF automatisés.",
    "descEn": "E-commerce SaaS prototype — data validation pipeline, multi-criteria product scoring, YAML rule engine (SURVIVAL/GROWTH levels), and automated PDF reports.",
    "hrefFr": "/projects/ecomos-ai",
    "hrefEn": "/en/projects/ecomos-ai",
    "stackPreview": [
        "Python",
        "Pandas",
        "Streamlit"
    ],
    "statusKey": "in-progress"
},
];
