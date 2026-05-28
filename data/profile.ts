export const profile = {
    fr: {
        name: "Hugo Tekeng",
        location: "Trois-Rivières, QC",
        headline:
            "Développeur logiciel & Data | Python • Java • Spring Boot • React | Bac. Informatique UQTR (septembre 2026) | Ouvert aux opportunités",
        hero: {
            badge: "Diplômé septembre 2026 · Ouvert aux opportunités",
            title: "Développement logiciel & Science des données",
            subtitle:
                "Je conçois des systèmes back-end robustes et des applications orientées données — du développement fullstack jusqu'au machine learning et à l'inférence causale.",
            ctas: {
                primary: "Me contacter",
                secondary: "Voir mes projets",
                tertiary: "CV",
            },
        },
        about: {
            title: "À propos",
            paragraphs: [
                "Je suis étudiant finissant en informatique à l'UQTR (diplôme prévu en septembre 2026), spécialisé en développement logiciel et en science des données.",
                "Je conçois des systèmes back-end, des API REST et des outils data pour transformer des besoins concrets en solutions robustes, bien structurées et maintenables.",
                "À travers mes projets, j'ai livré des systèmes en production (Spring Boot, Java, PostgreSQL), développé des applications mobiles Android, construit des modèles de machine learning et d'inférence causale, et conçu des outils d'analyse de données.",
                "J'accorde une attention particulière à la qualité du code, à la rigueur méthodologique et à la clarté des choix techniques.",
                "Ouvert aux opportunités en développement logiciel ou en science des données dès septembre 2026.",
            ],
        },

        contact: {
            email: "tekenghugo7750@gmail.com",
            phone: "(819) 266-7890",
        },
    },

    en: {
        name: "Hugo Tekeng",
        location: "Trois-Rivières, QC",
        headline:
            "Software Developer & Data Scientist | Python • Java • Spring Boot • React | B.Sc. Computer Science UQTR (September 2026) | Open to opportunities",
        hero: {
            badge: "Graduating September 2026 · Open to opportunities",
            title: "Software Development & Data Science",
            subtitle:
                "I build robust backend systems and data-driven applications — from fullstack development to machine learning and causal inference.",
            ctas: {
                primary: "Contact",
                secondary: "View projects",
                tertiary: "CV",
            },
        },
        about: {
            title: "About",
            paragraphs: [
                "I am a finishing student in Computer Science at UQTR (graduating September 2026), specializing in software development and data science.",
                "I design backend systems, REST APIs, and data tools to turn real-world needs into robust, well-structured, and maintainable solutions.",
                "Through my projects, I have delivered production systems (Spring Boot, Java, PostgreSQL), built Android mobile apps, developed machine learning and causal inference models, and designed data analysis tools.",
                "I pay close attention to code quality, methodological rigor, and clarity of technical decisions.",
                "Open to opportunities in software development or data science from September 2026.",
            ],
        },

        contact: {
            email: "tekenghugo7750@gmail.com",
            phone: "(819) 266-7890",
        },
    },
} as const;

export type Locale = keyof typeof profile;
