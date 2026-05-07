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
        tagFr: "ERP · Spring Boot",
        tagEn: "ERP · Spring Boot",
        titleFr: "Système de gestion d'entreprise",
        titleEn: "Business Management System",
        descFr: "ERP complet en production chez Lucatex SARL — envois d'argent, modules financiers, gestion multi-rôles et rapports journaliers. Utilisé quotidiennement.",
        descEn: "Full ERP in production at Lucatex SARL — money transfers, financial modules, multi-role management and daily reports. Used daily.",
        hrefFr: "/projects/ops-system",
        hrefEn: "/en/projects/ops-system",
        stackPreview: ["Java", "Spring Boot", "PostgreSQL"],
        statusKey: "in-production",
    },
    {
        id: "citoyen-actif",
        cover: "/images/projects/citoyen-actif/cover.png",
        tagFr: "Android · Firebase",
        tagEn: "Android · Firebase",
        titleFr: "Citoyen Actif",
        titleEn: "Citoyen Actif",
        descFr: "App Android de signalement d'infrastructures urbaines — MVVM, géolocalisation GPS, carte Google Maps interactive, notifications push Firebase.",
        descEn: "Android app for reporting urban infrastructure issues — MVVM, GPS geolocation, Google Maps, Firebase push notifications.",
        hrefFr: "/projects/citoyen-actif",
        hrefEn: "/en/projects/citoyen-actif",
        stackPreview: ["Java", "Android", "Firebase"],
        statusKey: "completed",
    },
    {
        id: "projet-depression",
        cover: "/images/projects/projet-depression/cover.jpg",
        tagFr: "Data Science · ML",
        tagEn: "Data Science · ML",
        titleFr: "Analyse & ML — Dépression",
        titleEn: "Analysis & ML — Depression",
        descFr: "Application Flask combinant classification, régression, clustering, PCA et recherche sémantique par embeddings pour l'étude de facteurs de risque.",
        descEn: "Flask app combining classification, regression, clustering, PCA, and embedding-based semantic search to study depression risk factors.",
        hrefFr: "/projects/projet-depression",
        hrefEn: "/en/projects/projet-depression",
        stackPreview: ["Python", "Scikit-learn", "MongoDB"],
        statusKey: "completed",
    },
    {
        id: "ecomos-ai",
        cover: "/images/projects/ecomos-ai/cover.jpg",
        tagFr: "SaaS · Python",
        tagEn: "SaaS · Python",
        titleFr: "EcomOS AI",
        titleEn: "EcomOS AI",
        descFr: "Prototype SaaS e-commerce — pipeline de données, scoring produit multi-critères, moteur de règles YAML et génération de rapports PDF.",
        descEn: "E-commerce SaaS prototype — data pipeline, multi-criteria product scoring, YAML rule engine and PDF report generation.",
        hrefFr: "/projects/ecomos-ai",
        hrefEn: "/en/projects/ecomos-ai",
        stackPreview: ["Python", "Pandas", "Streamlit"],
        statusKey: "in-progress",
    },
    {
        id: "bibliotheque-universitaire",
        cover: "/images/projects/projet-depression/cover.jpg",
        tagFr: "Back-end · SQL",
        tagEn: "Backend · SQL",
        titleFr: "Gestion de bibliothèque universitaire",
        titleEn: "University Library Management",
        descFr: "Système de gestion des prêts et retours avec gestion des pénalités, schéma relationnel avancé et conception orientée objet.",
        descEn: "Library loan and return management system with penalty tracking, advanced relational schema and object-oriented design.",
        hrefFr: "/projects/bibliotheque-universitaire",
        hrefEn: "/en/projects/bibliotheque-universitaire",
        stackPreview: ["Python", "PostgreSQL", "SQL"],
        statusKey: "completed",
    },
    {
        id: "gestion-chantier",
        cover: "/images/projects/ops-system/cover.jpg",
        tagFr: "Desktop · Java",
        tagEn: "Desktop · Java",
        titleFr: "Gestion de chantier de construction",
        titleEn: "Construction Site Management",
        descFr: "Application desktop de gestion des approvisionnements et stocks pour chantier — commandes, planning, traçabilité complète. Déployée en .jar.",
        descEn: "Desktop app for construction site supply and inventory management — orders, planning, full traceability. Deployed as .jar.",
        hrefFr: "/projects/gestion-chantier",
        hrefEn: "/en/projects/gestion-chantier",
        stackPreview: ["Java", "JavaFX", "PostgreSQL"],
        statusKey: "completed",
    },
];
