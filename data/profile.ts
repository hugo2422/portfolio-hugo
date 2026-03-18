export const profile = {
    fr: {
        name: "Hugo Tekeng",
        location: "Trois-Rivières, QC",
        headline:
            "Étudiant Bac Info (UQTR) | Python • Java • SQL | Back-end & Data | Recherche stage été 2026",
        hero: {
            badge: "Dernière session à l’UQTR • Recherche stage été 2026",
            title: " Science de donnees & Développeur logiciel ",
            subtitle:
                "Je construis des systèmes back-end robustes et des outils data utiles à la prise de décision.",
            ctas: {
                primary: "Me contacter",
                secondary: "Voir mes projets",
                tertiary: "CV",

            },
        },
        about: {
            title: "À propos",
            paragraphs: [
                "Je suis étudiant en baccalauréat en informatique à l’UQTR, avec un intérêt particulier pour le développement logiciel et la science des données. J’aime transformer des besoins concrets en solutions techniques simples, robustes et bien structurées, en concevant des back-ends, des API, des bases de données relationnelles et des outils d’automatisation en Python.",
                "Au cours de mes projets, j’ai travaillé sur plusieurs systèmes de gestion ainsi que sur un prototype SaaS orienté e-commerce, intégrant l’analyse d’indicateurs, le scoring de données et des mécanismes de recommandation. J’accorde une attention particulière à la qualité du code, la clarté des choix techniques et la documentation, afin de construire des systèmes fiables et maintenables.",
                "Actuellement dans ma dernière session à l’UQTR, je suis à la recherche d’un stage pour l’été 2026 en développement logiciel ou en data. Je suis motivé à apprendre rapidement au sein d’une équipe, à recevoir des retours constructifs et à contribuer à des projets concrets.",
            ],
        },
        internship: {
            title: "Stage été 2026",
            intro:
                "Je suis dans ma dernière session au baccalauréat en informatique (UQTR) et je recherche un stage pour l’été 2026.",
            targetRoles: ["Back-end", "Python", "Data"],
        },
        contact: {
            email: "tekenghugo7750@gmail.com",
        },
    },

    en: {
        name: "Hugo Tekeng",
        location: "Trois-Rivières, QC",
        headline:
            "Computer Science Student (UQTR) | Python • Java • SQL | Backend & Data | Seeking Summer 2026 Internship",
        hero: {
            badge: "Final term at UQTR • Seeking Summer 2026 internship",
            title: "Data Developer & Software ",
            subtitle:
                "I build robust backend systems and practical data tools that support decision-making.",
            ctas: {
                primary: "Contact",
                secondary: "View projects",
                tertiary: "CV",


            },
        },
        about: {
            title: "About",
            paragraphs: [
                "I’m a Computer Science student at UQTR focused on software development and data. I enjoy turning real needs into simple, robust, well-structured solutions: backend/APIs, relational databases, and Python automation.",
                "I’ve worked on management systems and I’m building a SaaS prototype for e-commerce decision support (KPI analysis, scoring, and explainable recommendations). I care about code quality, clear technical decisions, and solid documentation.",
                "I’m currently in my final term and seeking a Summer 2026 internship. I welcome constructive feedback and I’m eager to learn fast within a strong team.",
            ],
        },
        internship: {
            title: "Summer 2026 Internship",
            intro:
                "I’m in my final term in Computer Science at UQTR and I’m seeking a Summer 2026 internship.",
            targetRoles: ["Backend", "Python", "Data"],
        },
        contact: {
            email: "tekenghugo7750@gmail.com",
        },
    },
} as const;

export type Locale = keyof typeof profile;