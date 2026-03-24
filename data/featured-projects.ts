export type FeaturedProject = {
    id: "ecomos-ai" | "ops-system" | "tekplateform" | "projet-depression";
    cover: string;
    tagFr: string;
    tagEn: string;
    titleFr: string;
    titleEn: string;
    descFr: string;
    descEn: string;
    hrefFr: string;
    hrefEn: string;
    codeStatusFr: string;
    codeStatusEn: string;
};

export const featuredProjects: FeaturedProject[] = [

    {
        id: "projet-depression",
        cover: "/images/projects/projet-depression/cover.jpg",
        tagFr: "Data Science / Machine Learning",
        tagEn: "Data Science / Machine Learning",
        titleFr: "Projet dépression",
        titleEn: "Depression Project",
        codeStatusFr: "Code privé (projet académique)",
        codeStatusEn: "Private code (academic project)",
        descFr:
            "Application web combinant analyse de données, machine learning, visualisation analytique et recherche sémantique pour l’étude de facteurs liés à la dépression.",
        descEn:
            "Web application combining data analysis, machine learning, analytical visualization, and semantic search to study factors related to depression.",
        hrefFr: "/projects/projet-depression",
        hrefEn: "/en/projects-depression",
    },
    {
        id: "ecomos-ai",
        cover: "/images/projects/ecomos-ai/cover.jpg",
        tagFr: "SaaS / Data",
        tagEn: "SaaS / Data",
        titleFr: "EcomOS AI (En cours — avancé)",
        titleEn: "EcomOS AI (In progress — advanced)",
        codeStatusFr: "Code privé (startup en développement)",
        codeStatusEn: "Private code (startup in development)",
        descFr:
            "De prototype démonstrateur (CSV, scoring, recommandations) vers un MVP SaaS connecté à des données réelles (ex: Shopify), puis une vision long terme “OS IA” pour piloter l’e-commerce.",
        descEn:
            "From a working prototype (CSV import, scoring, recommendations) to a connected SaaS MVP (e.g., Shopify data), with a long-term vision of an “AI OS” for e-commerce operations.",
        hrefFr: "/projects",
        hrefEn: "/en/projects",
    },
    {
        id: "ops-system",
        cover: "/images/projects/ops-system/cover.jpg",
        tagFr: "ERP / Opérations",
        tagEn: "ERP / Operations",
        titleFr: "Système de gestion des opérations (En production)",
        titleEn: "Operations Management System (In production)",
        codeStatusFr: "code prive ( systeme en production )",
        codeStatusEn: "Private code (production systeme)",
        descFr:
            "Plateforme interne utilisée dans l’entreprise pour gérer envois, retraits, employés, rapports, traçabilité et synthèse de la situation globale.",
        descEn:
            "Internal platform used in production to manage transfers, withdrawals, employees, reporting workflows, full traceability, and consolidated business reporting.",
        hrefFr: "/projects",
        hrefEn: "/en/projects",
    },
    {
        id: "tekplateform",
        cover: "/images/projects/tekplateform/cover.png",
        tagFr: "Startup / Infrastructure / Data",
        tagEn: "Startup / Infrastructure / Data",
        titleFr: "TEKPlateform (En cours — Flagship)",
        titleEn: "TEKPlateform (In progress — flagship)",
        codeStatusFr: "Code privé (startup en développement)",
        codeStatusEn: "Private code (startup in development)",
        descFr:
            "Super-plateforme multisectorielle connectant commerce, santé et services du quotidien, avec paiements, confiance et intelligence de données.",
        descEn:
            "Multi-sector super-platform connecting commerce, health, and on-demand services, with payments, trust, and data intelligence at the core.",
        hrefFr: "/projects",
        hrefEn: "/en/projects",
    },
];