export type Project = {
    slug: string;
    cover: string;

    titleFr: string;
    statusFr: string;
    taglineFr: string;
    overviewFr: string;
    codeStatusFr: string;

    titleEn: string;
    statusEn: string;
    taglineEn: string;
    overviewEn: string;
    codeStatusEn: string;

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
    period: string;
    roleFr: string;
    roleEn: string;
    stack: string[];
    links?: {
        github?: string;
        demo?: string;
        docs?: string;
    };
    statusKey: "in-progress" | "in-production" | "completed";
};

export const projects: Project[] = [

    // ── CITOYEN ACTIF ─────────────────────────────────────────────
    {
        slug: "citoyen-actif",
        cover: "/images/projects/citoyen-actif/cover.png",

        titleFr: "Citoyen Actif",
        statusFr: "Projet académique — Application mobile Android",
        codeStatusFr: "Développement collaboratif (GitLab)",

        taglineFr:
            "Application mobile Android de signalement de bris d'infrastructures urbaines avec géolocalisation, photos et gestion municipale.",
        overviewFr:
            "Application mobile développée en équipe permettant aux citoyens de Trois-Rivières de signaler des bris d'infrastructures (routes, trottoirs, éclairage) directement aux services municipaux, via des rapports géolocalisés et illustrés par photos.",

        titleEn: "Citoyen Actif",
        statusEn: "Academic project — Android Mobile App",
        codeStatusEn: "Collaborative development (GitLab)",

        taglineEn:
            "Android mobile app for reporting urban infrastructure issues with geolocation, photos, and municipal management dashboard.",
        overviewEn:
            "A mobile app developed collaboratively allowing Trois-Rivières citizens to report infrastructure issues (roads, sidewalks, lighting) to municipal services via geolocated and photo-documented reports.",

        visionFr: [
            "Faciliter la communication entre citoyens et services municipaux via une application simple et accessible.",
            "Permettre un suivi transparent de l'état des signalements en temps réel.",
            "Rendre le processus de gestion des infrastructures plus efficace pour les employés municipaux.",
        ],
        architectureFr: [
            "Architecture MVVM (ViewModel, LiveData, Navigation Component) avec séparation claire des responsabilités.",
            "Gestion complète des rapports : création, consultation, modification et suppression avec photo (caméra) et localisation GPS.",
            "Deux profils utilisateurs distincts (citoyen et employé municipal) avec authentification sécurisée.",
            "Persistance locale des données avec Room Database et synchronisation avec Firebase Firestore.",
            "Visualisation des rapports sur carte interactive (Google Maps) avec géolocalisation en temps réel.",
            "Notifications push via Firebase Cloud Messaging (FCM) pour les mises à jour de statut.",
        ],
        roadmapFr: [
            "Phase 1 : architecture MVVM, authentification et gestion des profils utilisateurs.",
            "Phase 2 : modules de signalement avec caméra, GPS et persistance locale (Room).",
            "Phase 3 : synchronisation Firestore, carte interactive et notifications push FCM.",
            "Phase 4 : tests, débogage et documentation technique.",
        ],

        visionEn: [
            "Simplify communication between citizens and municipal services through an accessible mobile app.",
            "Enable transparent real-time tracking of report statuses.",
            "Improve infrastructure management efficiency for municipal employees.",
        ],
        architectureEn: [
            "MVVM architecture (ViewModel, LiveData, Navigation Component) with clear separation of concerns.",
            "Full report management: create, read, update, delete with camera photos and GPS location.",
            "Two distinct user profiles (citizen and municipal employee) with secure authentication.",
            "Local data persistence with Room Database and Firebase Firestore synchronization.",
            "Interactive map visualization (Google Maps) with real-time geolocation.",
            "Push notifications via Firebase Cloud Messaging (FCM) for status updates.",
        ],
        roadmapEn: [
            "Phase 1: MVVM architecture, authentication, and user profile management.",
            "Phase 2: reporting modules with camera, GPS, and local persistence (Room).",
            "Phase 3: Firestore sync, interactive map, and FCM push notifications.",
            "Phase 4: testing, debugging, and technical documentation.",
        ],

        tags: ["Android", "Mobile", "Firebase", "Java"],
        period: "2026",
        roleFr: "Développeur Android (équipe)",
        roleEn: "Android developer (team)",
        stack: ["Java", "Android", "Firebase (Firestore, FCM, Analytics)", "Room", "Google Maps", "Git"],
        links: {},
        statusKey: "completed",

        currentStateFr: [
            "Application mobile fonctionnelle développée en équipe avec Git (GitLab).",
            "Modules de signalement, carte interactive et notifications push opérationnels.",
            "Deux profils utilisateurs (citoyen / employé municipal) avec authentification Firebase.",
            "Persistance locale Room combinée à la synchronisation Firestore.",
        ],
        currentStateEn: [
            "Functional mobile app developed collaboratively with Git (GitLab).",
            "Reporting modules, interactive map, and push notifications operational.",
            "Two user profiles (citizen / municipal employee) with Firebase authentication.",
            "Local Room persistence combined with Firestore synchronization.",
        ],

        engineeringDecisionsFr: [
            "MVVM choisi pour garantir une séparation claire et une testabilité maximale.",
            "Room + Firestore pour combiner persistance locale hors-ligne et synchronisation cloud.",
            "Firebase FCM pour les notifications push sans infrastructure serveur dédiée.",
            "Google Maps pour une visualisation géographique native et fluide.",
        ],
        engineeringDecisionsEn: [
            "MVVM chosen to ensure clear separation and maximum testability.",
            "Room + Firestore to combine offline local persistence with cloud synchronization.",
            "Firebase FCM for push notifications without a dedicated server infrastructure.",
            "Google Maps for native, smooth geographic visualization.",
        ],

        improvementsFr: [
            "Ajouter des filtres de recherche et tri des signalements par catégorie.",
            "Statistiques et tableaux de bord pour les employés municipaux.",
            "Améliorer l'accessibilité et les performances de l'interface.",
        ],
        improvementsEn: [
            "Add search filters and sorting by report category.",
            "Statistics and dashboards for municipal employees.",
            "Improve UI accessibility and performance.",
        ],

        lessonsFr: [
            "Le développement collaboratif avec Git demande discipline et communication constante.",
            "L'architecture MVVM facilite la répartition des tâches dans une équipe.",
            "Combiner Room et Firestore garantit une expérience fluide même hors connexion.",
        ],
        lessonsEn: [
            "Collaborative development with Git requires constant discipline and communication.",
            "MVVM architecture facilitates task distribution in a team.",
            "Combining Room and Firestore ensures a smooth experience even offline.",
        ],

        screenshots: [],
    },

    // ── SYSTÈME LUCATEX (ops-system) ──────────────────────────────
    {
        slug: "ops-system",
        cover: "/images/projects/ops-system/cover.jpg",

        titleFr: "Système de gestion d'entreprise — Lucatex SARL",
        statusFr: "En production",
        codeStatusFr: "Code privé (système en production)",

        taglineFr: "ERP complet en production : opérations, employés, finances, rapports, traçabilité.",
        overviewFr:
            "Application back-end conçue et développée en production pour Lucatex SARL, couvrant l'ensemble des opérations métier : envois d'argent, gestion des employés, modules financiers, rapports journaliers, archivage sécurisé et forum interne.",

        titleEn: "Business Management System — Lucatex SARL",
        statusEn: "In production",
        codeStatusEn: "Private code (production system)",

        taglineEn: "Full ERP in production: operations, employees, finance, reporting, traceability.",
        overviewEn:
            "A backend application designed and developed in production for Lucatex SARL, covering all business operations: money transfers, employee management, financial modules, daily reports, secure archiving, and internal communication.",

        visionFr: [
            "Centraliser toutes les opérations de l'entreprise pour réduire les erreurs manuelles.",
            "Améliorer la traçabilité et la visibilité sur la situation globale en temps réel.",
            "Fournir des tableaux de bord dédiés par rôle pour une gestion plus efficace.",
        ],
        architectureFr: [
            "Architecture Spring Boot MVC avec gestion multi-rôles (employé, patron, administrateur) et authentification sécurisée.",
            "Gestion des envois d'argent classiques et Xpress avec contrôle des limites et archivage mensuel automatique.",
            "Modules financiers : rapports journaliers, transferts de caisse, prêts, primes, retraits et gestion des manquants banque.",
            "Suivi des performances employés, calcul automatique des primes et tableau de bord dédié par rôle.",
            "Gestion clientèle avec autocomplétion, historique des transactions et profils clients.",
            "Verrouillage des journées comptables, génération de rapports globaux et archivage sécurisé.",
            "Forum interne de communication entre employés et gestion des soldes téléphoniques.",
        ],
        roadmapFr: [
            "Améliorer les dashboards et automatiser davantage la consolidation des rapports.",
            "Renforcer les mécanismes d'audit et de supervision.",
        ],

        visionEn: [
            "Centralize all company operations to reduce manual errors.",
            "Improve real-time traceability and visibility of the overall business situation.",
            "Provide role-specific dashboards for more efficient management.",
        ],
        architectureEn: [
            "Spring Boot MVC architecture with multi-role management (employee, manager, admin) and secure authentication.",
            "Money transfer management (standard and Xpress) with limit controls and automatic monthly archiving.",
            "Financial modules: daily reports, cash transfers, loans, bonuses, withdrawals, and bank discrepancy management.",
            "Employee performance tracking, automatic bonus calculation, and role-specific dashboards.",
            "Client management with autocomplete search, transaction history, and client profiles.",
            "Accounting day lock, global report generation, and secure data archiving.",
            "Internal employee communication forum and phone credit management.",
        ],
        roadmapEn: [
            "Improve dashboards and automate report consolidation further.",
            "Strengthen audit and supervision mechanisms.",
        ],

        tags: ["Backend", "ERP", "Spring Boot", "Java", "SQL"],
        period: "2026",
        roleFr: "Concepteur & développeur back-end",
        roleEn: "Designer & backend developer",
        stack: ["Java", "Spring Boot", "PostgreSQL", "SQL", "HTML/CSS", "Thymeleaf"],
        links: {},
        statusKey: "in-production",

        currentStateFr: [
            "Système utilisé quotidiennement en production par l'équipe opérationnelle de Lucatex SARL.",
            "Tous les modules opérationnels (envois, finances, employés, rapports) déployés.",
            "Évolutions possibles autour du reporting consolidé et de l'audit avancé.",
        ],
        currentStateEn: [
            "System used daily in production by Lucatex SARL's operational team.",
            "All operational modules (transfers, finance, employees, reporting) deployed.",
            "Possible improvements around consolidated reporting and advanced audit.",
        ],

        engineeringDecisionsFr: [
            "Spring Boot MVC pour une architecture robuste, testable et maintenable.",
            "Gestion multi-rôles dès la conception pour une sécurité et une flexibilité maximales.",
            "Archivage mensuel automatique pour préserver l'historique sans alourdir les performances.",
            "Tableau de bord dédié par rôle pour une expérience utilisateur adaptée.",
        ],
        engineeringDecisionsEn: [
            "Spring Boot MVC for a robust, testable, and maintainable architecture.",
            "Multi-role management from the start for maximum security and flexibility.",
            "Automatic monthly archiving to preserve history without impacting performance.",
            "Role-specific dashboards for an adapted user experience.",
        ],

        improvementsFr: [
            "Ajouter des tableaux de bord analytiques plus avancés.",
            "Automatiser davantage la consolidation des rapports.",
            "Renforcer les mécanismes d'audit et de supervision.",
        ],
        improvementsEn: [
            "Add more advanced analytical dashboards.",
            "Further automate report consolidation.",
            "Strengthen audit and supervision mechanisms.",
        ],

        lessonsFr: [
            "Un système en production demande une rigueur absolue sur la traçabilité et la sécurité.",
            "La gestion multi-rôles doit être pensée dès le début pour éviter la dette technique.",
            "Un ERP interne équilibre contrôle, simplicité et fiabilité.",
        ],
        lessonsEn: [
            "A production system demands absolute rigor on traceability and security.",
            "Multi-role management must be designed from the start to avoid technical debt.",
            "An internal ERP balances control, simplicity, and reliability.",
        ],

        screenshots: [
            {
                src: "/images/projects/ops-system/cover.jpg",
                altFr: "Aperçu du système de gestion Lucatex",
                altEn: "Lucatex management system preview",
            },
        ],
    },

    // ── PROJET DÉPRESSION ─────────────────────────────────────────
    {
        slug: "projet-depression",
        cover: "/images/projects/projet-depression/cover.jpg",

        titleFr: "Projet dépression",
        statusFr: "Projet académique — Data & Machine Learning",
        codeStatusFr: "Code privé (projet académique)",

        taglineFr:
            "Application web d'analyse combinant machine learning, statistiques avancées et visualisation pour identifier des facteurs de risque liés à la dépression.",
        overviewFr:
            "Projet d'analyse de données et de machine learning centré sur l'étude de variables sociodémographiques et comportementales liées à la dépression. L'application combine gestion de données CRUD, modélisation, visualisation analytique et recherche sémantique.",

        titleEn: "Depression Project",
        statusEn: "Academic project — Data & Machine Learning",
        codeStatusEn: "Private code (academic project)",

        taglineEn:
            "Web application combining data analysis, machine learning, advanced statistics and visualization to identify depression-related risk factors.",
        overviewEn:
            "A data analysis and machine learning project focused on studying sociodemographic and behavioral variables related to depression. The app combines CRUD data management, modeling, analytical visualization, and semantic search.",

        visionFr: [
            "Créer une plateforme unifiée pour explorer et analyser des données liées à la dépression.",
            "Mettre en évidence des relations entre variables comportementales, sociodémographiques et indicateurs de risque.",
            "Combiner exploration statistique, modèles de machine learning et visualisation dans une interface web.",
        ],
        architectureFr: [
            "Application web Flask avec gestion de données sociodémographiques en mode CRUD.",
            "Pipelines de traitement et de stockage des données avec MongoDB Atlas.",
            "Modules analytiques : classification, régression, clustering et réduction de dimension (PCA).",
            "Visualisation des résultats : graphiques analytiques, matrices de confusion, exploration statistique.",
            "Recherche sémantique basée sur embeddings pour enrichir l'exploration des données.",
        ],
        roadmapFr: [
            "Phase 1 : gestion et structuration des données sociodémographiques.",
            "Phase 2 : analyses statistiques, corrélations et exploration PCA.",
            "Phase 3 : implémentation des modèles de machine learning et visualisation.",
            "Phase 4 : enrichissement par recherche sémantique et amélioration de l'interface.",
        ],

        visionEn: [
            "Build a unified platform to explore and analyze depression-related data.",
            "Highlight relationships between behavioral, sociodemographic, and risk variables.",
            "Combine statistical exploration, machine learning models, and visualization in a usable web interface.",
        ],
        architectureEn: [
            "Flask web application with CRUD management of sociodemographic data.",
            "Data processing and storage pipelines using MongoDB Atlas.",
            "Analytical modules: classification, regression, clustering, and dimensionality reduction (PCA).",
            "Result visualization: analytical charts, confusion matrices, statistical exploration.",
            "Embedding-based semantic search to enrich data exploration.",
        ],
        roadmapEn: [
            "Phase 1: structuring and managing sociodemographic data.",
            "Phase 2: statistical analysis, correlations, and PCA exploration.",
            "Phase 3: machine learning implementation and result visualization.",
            "Phase 4: semantic search integration and analytical interface improvement.",
        ],

        tags: ["Data Science", "Machine Learning", "Flask", "MongoDB"],
        period: "2025",
        roleFr: "Conception, développement web, analyse de données et modélisation",
        roleEn: "Design, web development, data analysis, and modeling",
        stack: ["Python", "Flask", "Pandas", "Scikit-learn", "MongoDB", "HTML/CSS"],
        links: {},
        statusKey: "completed",

        currentStateFr: [
            "Application web développée avec gestion de données et interface d'analyse.",
            "Modèles de classification, régression et clustering implémentés.",
            "Visualisations analytiques et exploration statistique intégrées.",
            "Recherche sémantique basée sur embeddings ajoutée.",
        ],
        currentStateEn: [
            "Web application developed with data management and analytical interface.",
            "Classification, regression, and clustering models implemented.",
            "Analytical visualizations and statistical exploration integrated.",
            "Embedding-based semantic search added.",
        ],

        engineeringDecisionsFr: [
            "Flask pour une architecture légère et adaptée à un projet analytique web.",
            "MongoDB Atlas pour la flexibilité de stockage et l'intégration simple avec les pipelines.",
            "Séparation claire entre gestion des données, analyse statistique, modélisation et visualisation.",
            "Recherche sémantique pour aller au-delà d'une simple interface de consultation.",
        ],
        engineeringDecisionsEn: [
            "Flask for a lightweight architecture suited to a web analytical project.",
            "MongoDB Atlas for storage flexibility and easy pipeline integration.",
            "Clear separation between data management, statistical analysis, modeling, and visualization.",
            "Semantic search to go beyond a simple data viewing interface.",
        ],

        improvementsFr: [
            "Améliorer l'interface pour rendre l'exploration plus intuitive.",
            "Renforcer la comparaison entre modèles de machine learning.",
            "Documenter davantage les pipelines et hypothèses analytiques.",
        ],
        improvementsEn: [
            "Improve the UI to make exploration more intuitive.",
            "Strengthen comparison between machine learning models.",
            "Further document pipelines and analytical assumptions.",
        ],

        lessonsFr: [
            "Un projet data pertinent demande autant de rigueur en gestion des données qu'en modélisation.",
            "La visualisation joue un rôle clé pour rendre les résultats interprétables.",
            "Une interface web analytique rend un projet scientifique beaucoup plus exploitable.",
        ],
        lessonsEn: [
            "A relevant data project requires as much rigor in data management as in modeling.",
            "Visualization plays a key role in making results interpretable.",
            "An analytical web interface makes a scientific project far more usable.",
        ],

        screenshots: [
            {
                src: "/images/projects/projet-depression/cover.jpg",
                altFr: "Aperçu du projet dépression",
                altEn: "Depression project preview",
            },
        ],
    },

    // ── ECOMOS AI ─────────────────────────────────────────────────
    {
        slug: "ecomos-ai",
        cover: "/images/projects/ecomos-ai/cover.jpg",

        titleFr: "EcomOS AI",
        statusFr: "En cours — avancé",
        codeStatusFr: "Code privé (startup en développement)",

        taglineFr: "Aide à la décision e-commerce : scoring, recommandations explicables, rapports PDF.",
        overviewFr:
            "Prototype SaaS analysant les performances d'une boutique e-commerce et produisant des recommandations actionnables (produits à pousser/stopper) basées sur un moteur de règles explicables et des indicateurs clés calculés automatiquement.",

        titleEn: "EcomOS AI",
        statusEn: "In progress — advanced",
        codeStatusEn: "Private code (startup in development)",

        taglineEn: "E-commerce decision support: scoring, explainable recommendations, PDF reports.",
        overviewEn:
            "A SaaS prototype analyzing e-commerce store performance and generating actionable recommendations (push/stop products) using an explainable rule engine and automatically calculated KPIs.",

        visionFr: [
            "Rendre la décision quotidienne plus simple : quoi faire aujourd'hui, et pourquoi.",
            "Passer d'un prototype CSV à des données connectées (ex: Shopify) pour un MVP.",
        ],
        architectureFr: [
            "Pipeline : import CSV → validation de schéma → nettoyage → calcul KPIs (ROAS, marge, CTR) → scoring → recommandations → rapport PDF.",
            "Moteur de scoring multi-critères pondéré (marge, volume, rentabilité publicitaire, risque).",
            "Moteur de règles décisionnelles YAML : conditions imbriquées AND/OR, niveaux de priorité (SURVIE, CROISSANCE).",
            "Génération automatique de recommandations contextualisées et de rapports PDF (ReportLab).",
            "Interface interactive Streamlit pour l'exploration des données et la visualisation des décisions.",
        ],
        roadmapFr: [
            "Stabiliser le moteur de scoring et la qualité des rapports.",
            "Connexion à une source de données réelle comme Shopify (MVP).",
            "Automatisation et personnalisation par boutique (vision long terme).",
        ],

        visionEn: [
            "Make daily decisions simpler: what to do today, and why.",
            "Move from CSV prototype to connected data (e.g., Shopify) for an MVP.",
        ],
        architectureEn: [
            "Pipeline: CSV import → schema validation → cleaning → KPI calculation (ROAS, margin, CTR) → scoring → recommendations → PDF report.",
            "Weighted multi-criteria scoring engine (margin, volume, ad profitability, risk).",
            "YAML-based decision rule engine: nested AND/OR conditions, priority levels (SURVIVAL, GROWTH).",
            "Automatic generation of contextualized recommendations and PDF reports (ReportLab).",
            "Streamlit interactive UI for data exploration and decision visualization.",
        ],
        roadmapEn: [
            "Stabilize scoring engine and report quality.",
            "Connect to a real data source like Shopify (MVP).",
            "Automation and per-store personalization (long-term).",
        ],

        tags: ["SaaS", "Data", "Python"],
        period: "2025 — présent",
        roleFr: "Concepteur & développeur (prototype SaaS)",
        roleEn: "Designer & developer (SaaS prototype)",
        stack: ["Python", "Pandas", "Streamlit", "ReportLab", "YAML", "Jupyter"],
        links: {},
        statusKey: "in-progress",

        currentStateFr: [
            "Prototype démonstrateur fonctionnel avancé.",
            "Pipeline complet : import, scoring, recommandations et génération de rapports PDF.",
            "Moteur de règles YAML opérationnel avec niveaux de priorité.",
            "Transition en cours vers un MVP SaaS connecté à des données réelles.",
        ],
        currentStateEn: [
            "Advanced functional demonstration prototype built.",
            "Full pipeline: import, scoring, recommendations, and PDF report generation.",
            "YAML rule engine operational with priority levels.",
            "Currently moving toward a connected SaaS MVP with real data sources.",
        ],

        engineeringDecisionsFr: [
            "Moteur de règles YAML pour des recommandations compréhensibles et configurables.",
            "Prototype rapide pour valider la logique métier avant industrialisation.",
            "ReportLab pour la génération de rapports PDF professionnels sans dépendance externe.",
        ],
        engineeringDecisionsEn: [
            "YAML rule engine for understandable and configurable recommendations.",
            "Fast prototype to validate business logic before industrialization.",
            "ReportLab for professional PDF report generation without external dependency.",
        ],

        improvementsFr: [
            "Connexion à Shopify ou d'autres sources de données réelles.",
            "Amélioration de la qualité et personnalisation des rapports.",
            "Couche plus intelligente et automatisée (ML).",
        ],
        improvementsEn: [
            "Connect to Shopify or other real data sources.",
            "Improve report quality and personalization.",
            "More intelligent and automated layer (ML).",
        ],

        lessonsFr: [
            "La qualité des données influence directement la pertinence des recommandations.",
            "L'explicabilité est essentielle pour l'adoption d'un outil d'aide à la décision.",
            "Un prototype rapide permet de valider une logique métier complexe.",
        ],
        lessonsEn: [
            "Data quality directly impacts recommendation relevance.",
            "Explainability is essential for adoption in decision-support tools.",
            "A fast prototype helps validate complex business logic.",
        ],

        screenshots: [
            {
                src: "/images/projects/ecomos-ai/cover.jpg",
                altFr: "Aperçu EcomOS AI",
                altEn: "EcomOS AI preview",
            },
        ],
    },

    // ── BIBLIOTHÈQUE UNIVERSITAIRE ────────────────────────────────
    {
        slug: "bibliotheque-universitaire",
        cover: "/images/projects/projet-depression/cover.jpg",

        titleFr: "Application de gestion de bibliothèque universitaire",
        statusFr: "Projet académique — Back-end & Base de données",
        codeStatusFr: "Code privé (projet académique)",

        taglineFr: "Système de gestion des prêts et retours d'une bibliothèque universitaire avec gestion des pénalités.",
        overviewFr:
            "Conception et développement d'un système complet de gestion des prêts et retours pour une bibliothèque universitaire, incluant la gestion des utilisateurs, le suivi des emprunts, les retards et le calcul des pénalités.",

        titleEn: "University Library Management System",
        statusEn: "Academic project — Backend & Database",
        codeStatusEn: "Private code (academic project)",

        taglineEn: "Library loan and return management system with user management and penalty tracking.",
        overviewEn:
            "Design and development of a complete loan and return management system for a university library, including user management, borrowing tracking, overdue tracking, and penalty calculation.",

        visionFr: [
            "Automatiser et fiabiliser la gestion des prêts et retours de livres.",
            "Assurer un suivi rigoureux des retards et des pénalités.",
            "Produire un schéma relationnel solide et des requêtes SQL optimisées.",
        ],
        architectureFr: [
            "Modules utilisateurs : inscription, authentification, gestion des profils.",
            "Gestion des emprunts : création, consultation, retour et historique.",
            "Calcul automatique des retards et des pénalités selon les règles métier.",
            "Schéma relationnel normalisé et requêtes SQL avancées pour les rapports.",
            "Application des principes de conception orientée objet.",
        ],
        roadmapFr: [
            "Phase 1 : conception du schéma relationnel et modélisation UML.",
            "Phase 2 : développement des modules utilisateurs et emprunts.",
            "Phase 3 : implémentation des règles de retard et de pénalités.",
            "Phase 4 : tests, validation et documentation technique.",
        ],

        visionEn: [
            "Automate and secure book loan and return management.",
            "Ensure rigorous overdue and penalty tracking.",
            "Produce a solid relational schema and optimized SQL queries.",
        ],
        architectureEn: [
            "User modules: registration, authentication, profile management.",
            "Loan management: creation, consultation, return, and history.",
            "Automatic overdue and penalty calculation based on business rules.",
            "Normalized relational schema and advanced SQL queries for reporting.",
            "Application of object-oriented design principles.",
        ],
        roadmapEn: [
            "Phase 1: relational schema design and UML modeling.",
            "Phase 2: user and loan module development.",
            "Phase 3: overdue and penalty rule implementation.",
            "Phase 4: testing, validation, and technical documentation.",
        ],

        tags: ["Backend", "SQL", "Python", "Base de données"],
        period: "2025",
        roleFr: "Conception, développement back-end et modélisation base de données",
        roleEn: "Design, backend development, and database modeling",
        stack: ["Python", "SQL", "PostgreSQL", "UML"],
        links: {},
        statusKey: "completed",

        currentStateFr: [
            "Application fonctionnelle avec modules utilisateurs, emprunts et pénalités.",
            "Schéma relationnel normalisé et requêtes SQL avancées.",
            "Tests et validation des fonctionnalités réalisés.",
            "Documentation technique produite.",
        ],
        currentStateEn: [
            "Functional application with user, loan, and penalty modules.",
            "Normalized relational schema and advanced SQL queries.",
            "Feature testing and validation completed.",
            "Technical documentation produced.",
        ],

        engineeringDecisionsFr: [
            "PostgreSQL pour la robustesse relationnelle et la gestion avancée des requêtes.",
            "Normalisation du schéma pour éviter la redondance et garantir l'intégrité des données.",
            "Conception orientée objet pour une architecture claire et maintenable.",
        ],
        engineeringDecisionsEn: [
            "PostgreSQL for relational robustness and advanced query management.",
            "Schema normalization to avoid redundancy and ensure data integrity.",
            "Object-oriented design for a clear and maintainable architecture.",
        ],

        improvementsFr: [
            "Ajouter une interface graphique pour les bibliothécaires.",
            "Intégrer des recherches avancées par auteur, genre ou disponibilité.",
            "Générer des rapports statistiques sur les emprunts.",
        ],
        improvementsEn: [
            "Add a graphical interface for librarians.",
            "Integrate advanced search by author, genre, or availability.",
            "Generate statistical reports on borrowings.",
        ],

        lessonsFr: [
            "La conception du schéma relationnel en amont est cruciale pour la cohérence des données.",
            "Les requêtes SQL avancées (jointures, agrégats) sont essentielles pour des rapports pertinents.",
            "La documentation technique facilite la maintenance et l'évolution du système.",
        ],
        lessonsEn: [
            "Upfront relational schema design is crucial for data consistency.",
            "Advanced SQL queries (joins, aggregates) are essential for meaningful reports.",
            "Technical documentation facilitates system maintenance and evolution.",
        ],

        screenshots: [],
    },

    // ── CHANTIER DE CONSTRUCTION ──────────────────────────────────
    {
        slug: "gestion-chantier",
        cover: "/images/projects/ops-system/cover.jpg",

        titleFr: "Système de gestion de chantier de construction",
        statusFr: "Projet académique — Back-end Java",
        codeStatusFr: "Code privé (projet académique)",

        taglineFr: "Application de gestion des approvisionnements et des stocks pour chantier, déployée en .jar.",
        overviewFr:
            "Développement d'une application desktop de gestion des approvisionnements et des stocks pour un chantier de construction, avec suivi des commandes, planning et traçabilité complète. Déployée sous forme de fichiers .jar sur Windows.",

        titleEn: "Construction Site Management System",
        statusEn: "Academic project — Java Backend",
        codeStatusEn: "Private code (academic project)",

        taglineEn: "Supply and inventory management app for construction sites, deployed as .jar files.",
        overviewEn:
            "Development of a desktop application for managing supplies and inventory on a construction site, with order tracking, planning, and full traceability. Deployed as .jar files on Windows.",

        visionFr: [
            "Centraliser la gestion des approvisionnements et des stocks du chantier.",
            "Assurer une traçabilité complète des commandes et mouvements de stock.",
            "Fournir un planning clair et des alertes sur les ruptures de stock.",
        ],
        architectureFr: [
            "Analyse fonctionnelle des besoins du chantier de construction.",
            "Développement back-end et interfaces utilisateur en Java avec JavaFX.",
            "Gestion des commandes, stocks entrants/sortants, planning et traçabilité.",
            "Conception orientée objet, tests et débogage.",
            "Base de données PostgreSQL pour la persistance des données.",
            "Déploiement de l'application sous forme de fichiers .jar sur Windows.",
        ],
        roadmapFr: [
            "Phase 1 : analyse fonctionnelle et conception de l'architecture.",
            "Phase 2 : développement des modules stock et commandes.",
            "Phase 3 : planning, traçabilité et génération de rapports.",
            "Phase 4 : tests, débogage et déploiement .jar.",
        ],

        visionEn: [
            "Centralize supply and inventory management for the construction site.",
            "Ensure full traceability of orders and stock movements.",
            "Provide clear planning and low-stock alerts.",
        ],
        architectureEn: [
            "Functional analysis of construction site needs.",
            "Backend development and Java UI with JavaFX.",
            "Order management, inbound/outbound stock, planning, and traceability.",
            "Object-oriented design, testing, and debugging.",
            "PostgreSQL database for data persistence.",
            "Application deployed as .jar files on Windows.",
        ],
        roadmapEn: [
            "Phase 1: functional analysis and architecture design.",
            "Phase 2: inventory and order module development.",
            "Phase 3: planning, traceability, and report generation.",
            "Phase 4: testing, debugging, and .jar deployment.",
        ],

        tags: ["Java", "JavaFX", "SQL", "Desktop"],
        period: "2025",
        roleFr: "Conception, développement back-end et déploiement",
        roleEn: "Design, backend development, and deployment",
        stack: ["Java", "JavaFX", "SQL", "PostgreSQL"],
        links: {},
        statusKey: "completed",

        currentStateFr: [
            "Application desktop fonctionnelle déployée en .jar sur Windows.",
            "Modules de gestion des stocks, commandes et planning opérationnels.",
            "Traçabilité complète des mouvements de stock.",
            "Tests et débogage réalisés.",
        ],
        currentStateEn: [
            "Functional desktop application deployed as .jar on Windows.",
            "Inventory, order, and planning modules operational.",
            "Full stock movement traceability.",
            "Testing and debugging completed.",
        ],

        engineeringDecisionsFr: [
            "JavaFX pour une interface graphique native et riche sans dépendances web.",
            "PostgreSQL pour la robustesse relationnelle et la gestion des requêtes complexes.",
            "Déploiement en .jar pour une installation simple sur Windows sans serveur.",
        ],
        engineeringDecisionsEn: [
            "JavaFX for a native, rich GUI without web dependencies.",
            "PostgreSQL for relational robustness and complex query management.",
            ".jar deployment for simple Windows installation without a server.",
        ],

        improvementsFr: [
            "Ajouter des alertes automatiques sur les ruptures de stock.",
            "Générer des rapports PDF d'approvisionnement.",
            "Migrer vers une application web pour un accès multi-utilisateur.",
        ],
        improvementsEn: [
            "Add automatic low-stock alerts.",
            "Generate PDF supply reports.",
            "Migrate to a web app for multi-user access.",
        ],

        lessonsFr: [
            "L'analyse fonctionnelle en amont évite les mauvaises surprises en développement.",
            "JavaFX offre une bonne richesse graphique pour des applications desktop métier.",
            "Le déploiement .jar simplifie la distribution sans infrastructure serveur.",
        ],
        lessonsEn: [
            "Upfront functional analysis avoids surprises during development.",
            "JavaFX offers good graphical richness for business desktop apps.",
            ".jar deployment simplifies distribution without server infrastructure.",
        ],

        screenshots: [],
    },

    // ── TEKPLATEFORM ──────────────────────────────────────────────
    {
        slug: "tekplateform",
        cover: "/images/projects/tekplateform/cover.png",

        titleFr: "TEKPlateform",
        statusFr: "En cours — Flagship",
        codeStatusFr: "Code privé (startup en développement)",

        taglineFr: "Super-plateforme multisectorielle : commerce, santé, services, paiements, confiance & data.",
        overviewFr:
            "TEKPlateform est une super-plateforme modulaire conçue comme une infrastructure du quotidien : marketplace multi-vendeurs, services à la demande, paiements sécurisés, système de confiance et intelligence de données.",

        titleEn: "TEKPlateform",
        statusEn: "In progress — flagship",
        codeStatusEn: "Private code (startup in development)",

        taglineEn: "Multi-sector super-platform: commerce, health, services, payments, trust & data.",
        overviewEn:
            "TEKPlateform is a modular super-platform designed as everyday infrastructure: multi-vendor marketplace, on-demand services, secure payments, trust system, and data intelligence.",

        visionFr: [
            "Structurer l'accès à des produits et services fiables via une plateforme unique.",
            "Transformer la confiance (vendeurs/prestataires/produits) en un actif mesurable.",
            "Placer la data et l'IA au cœur : recommandations, matching, alertes, anti-fraude.",
        ],
        architectureFr: [
            "Architecture modulaire par domaines (commerce / services / santé / paiement / confiance / data).",
            "Système d'identité & scoring de confiance dynamique (vendeurs, prestataires, produits).",
            "Flux de données : événements → stockage → analytics → recommandations/alertes.",
            "Sécurité : rôles, vérification, traçabilité, paiements sécurisés avec retenue (escrow).",
        ],
        roadmapFr: [
            "MVP : marketplace + vendeurs vérifiés + commandes + paiements + confiance basique.",
            "V1 : services à la demande + matching + paiement sécurisé + notation post-service.",
            "V2 : produits encadrés + data avancée + diaspora + partenariats.",
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
            "MVP: marketplace + verified sellers + orders + payments + basic trust.",
            "V1: on-demand services + matching + secure payments + post-service ratings.",
            "V2: regulated products + advanced data + diaspora + partnerships.",
        ],

        tags: ["Startup", "Infrastructure", "Data", "Fintech"],
        period: "2026 — présent",
        roleFr: "Fondateur / Conception produit & architecture",
        roleEn: "Founder / Product & architecture design",
        stack: ["Next.js", "PostgreSQL", "API", "Auth/RBAC", "Payments", "Data/Analytics"],
        links: {},
        statusKey: "in-progress",

        currentStateFr: [
            "Vision stratégique consolidée et structurée.",
            "Modules principaux définis : commerce, santé, services, paiements, confiance, data.",
            "Architecture technique et découpage MVP en cours de finalisation.",
        ],
        currentStateEn: [
            "Strategic vision consolidated and structured.",
            "Core modules defined: commerce, health, services, payments, trust, data.",
            "Technical architecture and MVP scope being finalized.",
        ],

        engineeringDecisionsFr: [
            "Architecture modulaire pour séparer clairement les domaines métiers.",
            "La confiance comme système central, pas une fonctionnalité secondaire.",
            "Positionnement comme infrastructure multisectorielle plutôt qu'un simple marketplace.",
        ],
        engineeringDecisionsEn: [
            "Modular architecture to clearly separate business domains.",
            "Trust as a central system rather than a secondary feature.",
            "Positioning as multi-sector infrastructure rather than a simple marketplace.",
        ],

        improvementsFr: [
            "Formaliser l'architecture technique détaillée.",
            "Définir le périmètre MVP et les flux critiques.",
            "Préparer les premières interfaces et prototypes UX.",
        ],
        improvementsEn: [
            "Formalize the detailed technical architecture.",
            "Define the MVP scope and critical workflows.",
            "Prepare the first interfaces and UX prototypes.",
        ],

        lessonsFr: [
            "Un projet multisectoriel demande une forte discipline de cadrage.",
            "La confiance utilisateur doit être pensée dès la base du système.",
            "La valeur d'une plateforme dépend autant de sa structure que de ses fonctionnalités.",
        ],
        lessonsEn: [
            "A multi-sector project requires strong scoping discipline.",
            "User trust must be designed into the system from the start.",
            "A platform's value depends as much on its structure as on its features.",
        ],

        screenshots: [
            {
                src: "/images/projects/tekplateform/cover.png",
                altFr: "Aperçu TEKPlateform",
                altEn: "TEKPlateform preview",
            },
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
