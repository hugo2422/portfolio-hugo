export type Experience = {
    slug: string;

    roleFr: string;
    roleEn: string;

    company: string;

    locationFr: string;
    locationEn: string;

    periodFr: string;
    periodEn: string;

    descriptionFr: string;
    descriptionEn: string;

    missionsFr: string[];
    missionsEn: string[];

    technologies: string[];
};

export const experiences: Experience[] = [
    {
        slug: "lucatex-data-analyst",

        roleFr: "Stagiaire Data Analyst",
        roleEn: "Data Analyst Intern",

        company: "Lucatex SARL",

        locationFr: "Télétravail — Guinée-Bissau",
        locationEn: "Remote — Guinea-Bissau",

        periodFr: "Mars 2023 — Juillet 2023",
        periodEn: "March 2023 — July 2023",

        descriptionFr:
            "Stage en analyse de données orienté sur l’exploration de données commerciales, l’analyse statistique et la création de tableaux de bord interactifs afin d’améliorer la prise de décision basée sur les données.",

        descriptionEn:
            "Data analysis internship focused on business data exploration, statistical analysis, and the creation of interactive dashboards to support data-driven decision making.",

        missionsFr: [
            "Analyse de données et tendances de vente à l’aide de Python (pandas, matplotlib).",
            "Optimisation de la gestion des stocks basée sur l’analyse des données.",
            "Création de rapports interactifs et tableaux de bord via Tableau.",
            "Prévisions statistiques des ventes à l’aide de modèles de régression.",
            "Documentation des analyses et communication des résultats aux parties prenantes.",
        ],

        missionsEn: [
            "Analyzed sales data and trends using Python (pandas, matplotlib).",
            "Optimized inventory management based on data analysis.",
            "Developed interactive dashboards and reports using Tableau.",
            "Built statistical sales forecasts using regression models.",
            "Documented analyses and communicated insights to stakeholders.",
        ],

        technologies: ["Python", "Pandas", "Matplotlib", "Tableau", "Statistics"],
    },

    {
        slug: "merveille-tech-support",

        roleFr: "Technicien en informatique",
        roleEn: "IT Technician",

        company: "Merveille Pressins",

        locationFr: "Cameroun",
        locationEn: "Cameroon",

        periodFr: "2019 — 2023",
        periodEn: "2019 — 2023",

        descriptionFr:
            "Responsable du support technique, de la maintenance des équipements informatiques et de l’assistance aux utilisateurs dans un environnement professionnel.",

        descriptionEn:
            "Responsible for technical support, maintenance of IT equipment, and assisting users in a professional computing environment.",

        missionsFr: [
            "Installation, configuration et maintenance du matériel et des logiciels.",
            "Support technique, diagnostic et résolution des incidents informatiques.",
            "Formation et accompagnement des utilisateurs.",
            "Gestion des environnements informatiques et assistance opérationnelle.",
        ],

        missionsEn: [
            "Installed, configured, and maintained computer hardware and software.",
            "Provided technical support, troubleshooting, and incident resolution.",
            "Trained and assisted users with IT tools and systems.",
            "Managed IT environments and provided operational support.",
        ],

        technologies: [
            "Windows",
            "Networking",
            "Hardware Maintenance",
            "Technical Support",
        ],
    },
];