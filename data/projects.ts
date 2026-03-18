export type Project = {
    slug: "ecomos-ai" | "ops-system" | "tekplateform";
    cover: string;

    // FR
    titleFr: string;
    statusFr: string;
    taglineFr: string;
    overviewFr: string;
    codeStatusFr: string;

    // EN (on l’utilisera après)
    titleEn: string;
    statusEn: string;
    taglineEn: string;
    overviewEn: string;
    codeStatusEn: string;

    // Contenu “vision + architecture”
    visionFr: string[];
    architectureFr: string[];
    roadmapFr: string[];



    visionEn: string[];
    architectureEn: string[];
    roadmapEn: string[];

    currentStateFr: string[];
    currentStateEn: string[];

    engineeringDecisionsFr: string[];
    engineeringDecisionsEn: string[];

    improvementsFr: string[];
    improvementsEn: string[];

    lessonsFr: string[];
    lessonsEn: string[];

    screenshots?: {
        src: string;
        altFr: string;
        altEn: string;
    }[];



    tags: string[];

    period: string; // ex: "2026" ou "2025 — présent"
    roleFr: string;
    roleEn: string;
    stack: string[];
    links?: {
        github?: string;
        demo?: string;
        docs?: string;
    };
    statusKey: "in-progress" | "in-production";
};



export const projects: Project[] = [
    {
        slug: "tekplateform",
        cover: "/images/projects/tekplateform/cover.png",

        titleFr: "TEKPlateform",
        statusFr: "En cours — Flagship",
        codeStatusFr: "Code privé (startup en développement)",

        taglineFr: "Super-plateforme multisectorielle : commerce, santé, services, paiements, confiance & data.",
        overviewFr:
            "TEKPlateform est une super-plateforme modulaire conçue comme une infrastructure du quotidien : marketplace multi-vendeurs, services à la demande, produits encadrés, paiements, système de confiance et intelligence de données.",

        titleEn: "TEKPlateform",
        statusEn: "In progress — flagship",
        codeStatusEn: "Private code (startup in development)",
        taglineEn: "Multi-sector super-platform: commerce, health, services, payments, trust & data.",
        overviewEn:
            "TEKPlateform is a modular super-platform designed as everyday infrastructure: multi-vendor marketplace, on-demand services, regulated products, payments, trust system, and data intelligence.",

        visionFr: [
            "Structurer l’accès à des produits et services fiables via une plateforme unique.",
            "Transformer la confiance (vendeurs/prestataires/produits) en un actif mesurable.",
            "Placer la data et l’IA au cœur : recommandations, matching, alertes, anti-fraude.",
        ],
        architectureFr: [
            "Architecture modulaire par domaines (commerce / services / santé / paiement / confiance / data).",
            "Système d’identité & scoring de confiance (vendeurs, prestataires, produits).",
            "Flux de données : événements → stockage → analytics → recommandations/alertes.",
            "Sécurité : rôles, vérification, traçabilité, paiements sécurisés avec retenue (escrow).",
        ],
        roadmapFr: [
            "MVP : marketplace + vendeurs vérifiés + commandes + paiements + livraison + confiance basique.",
            "V1 : services à la demande + matching + paiement sécurisé + notation post-service.",
            "V2 : produits encadrés + data avancée + diaspora + partenariats (long terme).",
        ],

        visionEn: [
            "Organize access to reliable products and services through a single platform.",
            "Turn trust (vendors/providers/products) into a measurable asset.",
            "Put data & AI at the core: recommendations, matching, alerts, fraud detection.",
        ],
        architectureEn: [
            "Modular architecture by domains (commerce / services / health / payments / trust / data).",
            "Identity & dynamic trust scoring (vendors, providers, products).",
            "Data flow: events → storage → analytics → recommendations/alerts.",
            "Security: roles, verification, traceability, secure payments with escrow.",
        ],
        roadmapEn: [
            "MVP: marketplace + verified sellers + orders + payments + delivery + basic trust.",
            "V1: on-demand services + matching + secure payments + post-service ratings.",
            "V2: regulated products + advanced data + diaspora + partnerships (long-term).",
        ],

        tags: ["Startup", "Infrastructure", "Data", "Fintech"],

        period: "2026 — présent",
        roleFr: "Fondateur / Conception produit & architecture",
        roleEn: "Founder / Product & architecture design",
        stack: ["Next.js", "PostgreSQL", "API", "Auth/RBAC", "Payments", "Data/Analytics"],
        links: {
            docs: "", // tu pourras mettre un Notion / PDF plus tard
        },
        statusKey: "in-progress",

        currentStateFr: [
            "Vision stratégique consolidée et structurée.",
            "Modules principaux définis : commerce, santé, services, paiements, confiance, data.",
            "Réflexion en cours sur l’architecture technique et le découpage du MVP.",
        ],
        currentStateEn: [
            "Strategic vision consolidated and structured.",
            "Core modules defined: commerce, health, services, payments, trust, data.",
            "Technical architecture and MVP scope currently being refined.",
        ],

        engineeringDecisionsFr: [
            "Choix d’une architecture modulaire pour séparer les domaines métiers.",
            "Intégration de la confiance comme système central, pas comme simple fonctionnalité secondaire.",
            "Positionnement du projet comme infrastructure multisectorielle plutôt qu’un simple marketplace.",
        ],
        engineeringDecisionsEn: [
            "Choosing a modular architecture to separate business domains.",
            "Making trust a central system rather than a secondary feature.",
            "Positioning the product as multi-sector infrastructure rather than a simple marketplace.",
        ],

        improvementsFr: [
            "Formaliser l’architecture technique détaillée.",
            "Définir précisément le périmètre MVP et les flux critiques.",
            "Préparer les premières interfaces et prototypes UX.",
        ],
        improvementsEn: [
            "Formalize the detailed technical architecture.",
            "Define the MVP scope and critical workflows precisely.",
            "Prepare the first interfaces and UX prototypes.",
        ],

        lessonsFr: [
            "Un projet multisectoriel demande une forte discipline de cadrage.",
            "La confiance utilisateur doit être pensée dès la base du système.",
            "La valeur d’une plateforme dépend autant de sa structure que de ses fonctionnalités.",
        ],
        lessonsEn: [
            "A multi-sector project requires strong scoping discipline.",
            "User trust must be designed into the system from the start.",
            "A platform’s value depends as much on its structure as on its features.",
        ],

        screenshots: [
            {
                src: "/images/projects/tekplateform/cover.png",
                altFr: "Aperçu TEKPlateform",
                altEn: "TEKPlateform preview",
            },
        ],
    },

    {
        slug: "ecomos-ai",
        cover: "/images/projects/ecomos-ai/cover.jpg",

        titleFr: "EcomOS AI",
        statusFr: "En cours — avancé",
        codeStatusFr: "Code privé (startup en développement)",

        taglineFr: "Aide à la décision e-commerce : scoring, recommandations explicables, rapports.",
        overviewFr:
            "Prototype SaaS visant à analyser les performances d’une boutique e-commerce et produire des recommandations actionnables (ex: produits à pousser/stopper), basées sur des règles explicables et des indicateurs clés.",

        titleEn: "EcomOS AI",
        statusEn: "In progress — advanced",
        codeStatusEn: "Private code (startup in development)",
        taglineEn: "E-commerce decision support: scoring, explainable recommendations, reporting.",
        overviewEn:
            "A SaaS prototype that analyzes e-commerce performance and generates actionable recommendations (e.g., push/stop products) using explainable rules and key KPIs.",

        visionFr: [
            "Rendre la décision quotidienne plus simple : quoi faire aujourd’hui, et pourquoi.",
            "Passer d’un prototype CSV à des données connectées (ex: Shopify) pour un MVP.",
        ],
        architectureFr: [
            "Pipeline : import → transformation → calcul KPIs → scoring → recommandations → rapport.",
            "Moteur de règles explicables + priorisation des actions.",
            "Interface de visualisation et reporting (prototype Streamlit).",
        ],
        roadmapFr: [
            "Stabiliser le moteur de scoring et la qualité des rapports.",
            "Connexion à une source de données réelle (MVP).",
            "Automatisation et personnalisation par boutique (vision long terme).",
        ],

        visionEn: [
            "Make daily decisions simpler: what to do today, and why.",
            "Move from CSV prototype to connected data (e.g., Shopify) for an MVP.",
        ],
        architectureEn: [
            "Pipeline: import → transform → KPI calc → scoring → recommendations → report.",
            "Explainable rule engine + action prioritization.",
            "Visualization/reporting UI (Streamlit prototype).",
        ],
        roadmapEn: [
            "Stabilize scoring and report quality.",
            "Connect to a real data source (MVP).",
            "Automation and per-store personalization (long-term).",
        ],

        tags: ["SaaS", "Data", "Python"],

        period: "2026 — présent",
        roleFr: "Concepteur & développeur (prototype SaaS)",
        roleEn: "Designer & developer (SaaS prototype)",
        stack: ["Python", "Pandas", "SQL", "Streamlit", "Analytics", "Scoring engine"],
        links: {
            github: "", // si tu veux
            demo: "",   // si tu déploies un Streamlit
        },
        statusKey: "in-progress",

        currentStateFr: [
            "Prototype démonstrateur fonctionnel déjà avancé.",
            "Import CSV, scoring, recommandations et génération de rapports déjà explorés.",
            "Transition en cours vers un MVP SaaS connecté à des données réelles.",
        ],
        currentStateEn: [
            "Advanced functional demonstration prototype already built.",
            "CSV import, scoring, recommendations, and reporting already explored.",
            "Currently moving toward a connected SaaS MVP with real data sources.",
        ],

        engineeringDecisionsFr: [
            "Utilisation d’un moteur de règles explicables pour rendre les recommandations compréhensibles.",
            "Choix d’un prototype rapide pour valider la logique métier avant industrialisation.",
            "Organisation en pipeline analytique : import, transformation, scoring, recommandations.",
        ],
        engineeringDecisionsEn: [
            "Using an explainable rule engine so recommendations remain understandable.",
            "Choosing a fast prototype approach to validate business logic before industrialization.",
            "Organizing the solution as an analytical pipeline: import, transform, scoring, recommendations.",
        ],

        improvementsFr: [
            "Connexion à des sources de données réelles comme Shopify.",
            "Amélioration de la qualité des rapports et de la personnalisation.",
            "Évolution vers une couche plus intelligente et automatisée.",
        ],
        improvementsEn: [
            "Connect to real data sources such as Shopify.",
            "Improve report quality and personalization.",
            "Evolve toward a more intelligent and automated layer.",
        ],

        lessonsFr: [
            "La qualité des données influence directement la pertinence des recommandations.",
            "Un prototype rapide permet de valider une logique métier complexe.",
            "L’explicabilité est essentielle pour l’adoption d’un outil d’aide à la décision.",
        ],
        lessonsEn: [
            "Data quality directly impacts recommendation relevance.",
            "A fast prototype helps validate complex business logic.",
            "Explainability is essential for adoption in decision-support tools.",
        ],

        screenshots: [
            {
                src: "/images/projects/ecomos-ai/cover.jpg",
                altFr: "Aperçu EcomOS AI",
                altEn: "EcomOS AI preview",
            },
        ],
    },

    {
        slug: "ops-system",
        cover: "/images/projects/ops-system/cover.jpg",

        titleFr: "Système de gestion des opérations",
        statusFr: "En production",
        codeStatusFr: "code prive ( systeme en production )",

        taglineFr: "Plateforme interne : opérations, employés, rapports, traçabilité, synthèse.",
        overviewFr:
            "Application back-end utilisée en production pour gérer les opérations : envois, retraits, gestion des employés, soumission/validation des rapports, traçabilité et consolidation des indicateurs de l’entreprise.",

        titleEn: "Operations Management System",
        statusEn: "In production",
        codeStatusEn: "Private code (production systeme)",
        taglineEn: "Internal platform: operations, employees, reporting, traceability, consolidation.",
        overviewEn:
            "A production-used backend system to manage operations: transfers, withdrawals, employee management, reporting workflows, full traceability, and consolidated business metrics.",

        visionFr: [
            "Centraliser toutes les opérations et réduire les erreurs manuelles.",
            "Améliorer la traçabilité et la visibilité (situation globale).",
        ],
        architectureFr: [
            "Back-end + base de données relationnelle + reporting.",
            "Gestion des rôles (employés), workflows de rapports, historique des opérations.",
        ],
        roadmapFr: [
            "Améliorer la synthèse (dashboards) et automatiser plus de rapports.",
            "Renforcer l’audit et la sécurité (selon besoins).",
        ],

        visionEn: [
            "Centralize operations and reduce manual errors.",
            "Improve traceability and business visibility (global situation).",
        ],
        architectureEn: [
            "Backend + relational database + reporting.",
            "Role management (employees), reporting workflows, operations history.",
        ],
        roadmapEn: [
            "Improve consolidated reporting (dashboards) and automate more reports.",
            "Strengthen audit and security (as needed).",
        ],

        tags: ["Backend", "ERP", "SQL"],

        period: "2025 — présent",
        roleFr: "Développeur back-end",
        roleEn: "Backend developer",
        stack: ["Java", "PostgreSQL", "SQL", "Auth", "Reporting", "Audit/Traceability"],
        links: {
            // vide si c'est confidentiel
        },
        statusKey: "in-production",

        currentStateFr: [
            "Système actuellement utilisé en production dans l’entreprise.",
            "Fonctionnalités opérationnelles déjà exploitées au quotidien.",
            "Évolutions possibles autour du reporting consolidé et de l’audit.",
        ],
        currentStateEn: [
            "System currently used in production within the company.",
            "Operational features already used in day-to-day workflows.",
            "Possible future improvements around consolidated reporting and audit.",
        ],

        engineeringDecisionsFr: [
            "Centraliser plusieurs flux opérationnels dans une seule plateforme.",
            "Conserver une traçabilité claire pour les opérations et les rapports.",
            "Structurer le système autour des rôles, opérations et validations.",
        ],
        engineeringDecisionsEn: [
            "Centralize multiple operational workflows into one platform.",
            "Maintain clear traceability for operations and reports.",
            "Structure the system around roles, operations, and validations.",
        ],

        improvementsFr: [
            "Ajouter des tableaux de bord plus avancés.",
            "Automatiser davantage la consolidation de rapports.",
            "Renforcer les mécanismes d’audit et de supervision.",
        ],
        improvementsEn: [
            "Add more advanced dashboards.",
            "Automate report consolidation further.",
            "Strengthen audit and supervision mechanisms.",
        ],

        lessonsFr: [
            "La traçabilité devient cruciale dès qu’un système touche aux opérations réelles.",
            "Les workflows métiers évoluent rapidement en contexte entreprise.",
            "Un système interne doit équilibrer contrôle, simplicité et fiabilité.",
        ],
        lessonsEn: [
            "Traceability becomes critical as soon as a system handles real operations.",
            "Business workflows evolve quickly in real company contexts.",
            "An internal system must balance control, simplicity, and reliability.",
        ],

        screenshots: [
            {
                src: "/images/projects/ops-system/cover.jpg",
                altFr: "Aperçu du système de gestion des opérations",
                altEn: "Operations management system preview",
            },
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}