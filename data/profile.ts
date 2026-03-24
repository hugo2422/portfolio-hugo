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
                "Je conçois des systèmes data et des applications intelligentes combinant back-end, analyse de données et machine learning pour aider à la prise de décision.",
            ctas: {
                primary: "Me contacter",
                secondary: "Voir mes projets",
                tertiary: "CV",

            },
        },
        about: {
            title: "À propos",
            paragraphs: [
                "Je suis étudiant en informatique à l’UQTR, spécialisé en développement logiciel et en science des données.",
                "Je conçois des systèmes back-end, des API et des outils data pour transformer des besoins concrets en solutions robustes et bien structurées.",
                "À travers mes projets, j’ai développé des systèmes de gestion et des applications data-driven, incluant un prototype SaaS e-commerce et un projet d’analyse de données et machine learning autour de la dépression (classification, régression, clustering, visualisation).",
                "J’accorde une attention particulière à la qualité du code, à la clarté des choix techniques et à la maintenabilité des systèmes.",
                "Actuellement en dernière session, je recherche un stage pour l’été 2026 en développement logiciel ou en data, afin de contribuer à des projets concrets au sein d’une équipe.",
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
                "I build data systems and intelligent applications combining back-end, data analysis, and machine learning to drive better decision-making.",
            ctas: {
                primary: "Contact",
                secondary: "View projects",
                tertiary: "CV",


            },
        },
        about: {
            title: "About",
            paragraphs: [
                "I am a Computer Science student at UQTR, specializing in software development and data science.",
                "I design back-end systems, APIs, and data tools to turn real-world needs into robust and well-structured solutions.",
                "Through my projects, I have developed management systems and data-driven applications, including an e-commerce SaaS prototype and a data analysis & machine learning project focused on depression (classification, regression, clustering, and visualization).",
                "I pay close attention to code quality, clarity of technical decisions, and system maintainability.",
                "Currently in my final semester, I am seeking an internship for Summer 2026 in software development or data, where I can contribute to real-world projects within a team.",
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