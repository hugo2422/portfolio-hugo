export const profile = {
    fr: {
        name: "Hugo Tekeng",
        location: "Trois-Rivières, QC",
        headline:
            "Développeur logiciel spécialisé en science des données | Python · Java · Spring Boot · React | Bac. Informatique UQTR — Septembre 2026",
        hero: {
            badge: "Fin de programme sept. 2026 · À la recherche d'un emploi",
            title: "Développeur logiciel & Data Scientist",
            subtitle:
                "Je conçois des systèmes back-end robustes et des solutions orientées données — du développement fullstack et mobile jusqu'au machine learning et à l'inférence causale.",
            ctas: {
                primary: "Me contacter",
                secondary: "Voir mes projets",
                tertiary: "CV",
            },
        },
        about: {
            title: "À propos",
            paragraphs: [
                "Je suis étudiant finissant en informatique à l'UQTR (diplôme prévu en septembre 2026), avec une spécialisation en science des données et de solides compétences en développement logiciel.",
                "Je conçois des systèmes back-end, des API REST, des applications mobiles Android et des pipelines de données pour transformer des besoins concrets en solutions robustes et maintenables.",
                "Mes projets couvrent un spectre large : système ERP en production réelle (Spring Boot, PostgreSQL), application mobile Android (MVVM, Firebase, Google Maps), modèles de machine learning (classification, régression, clustering, PCA, embeddings) et inférence causale avancée (Double Machine Learning, DAG, critère backdoor).",
                "Titulaire d'une Licence en Mathématiques Appliquées (Université de Dschang, reconnue équivalente à un Baccalauréat canadien), je combine rigueur analytique et pragmatisme en développement logiciel.",
                "J'accorde une attention particulière à la qualité du code, à la rigueur méthodologique et à la documentation technique.",
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
            "Software Developer specialized in Data Science | Python · Java · Spring Boot · React | B.Sc. Computer Science UQTR — September 2026",
        hero: {
            badge: "Graduating September 2026 · Open to job opportunities",
            title: "Software Developer & Data Scientist",
            subtitle:
                "I build robust backend systems and data-driven solutions — from fullstack and Android development to machine learning and causal inference.",
            ctas: {
                primary: "Contact me",
                secondary: "View projects",
                tertiary: "Resume",
            },
        },
        about: {
            title: "About",
            paragraphs: [
                "I am a finishing student in Computer Science at UQTR (graduating September 2026), specializing in data science with strong software development skills.",
                "I design backend systems, REST APIs, Android mobile applications, and data pipelines to turn real-world needs into robust and maintainable solutions.",
                "My projects span a wide spectrum: a production ERP system (Spring Boot, PostgreSQL), an Android mobile app (MVVM, Firebase, Google Maps), machine learning models (classification, regression, clustering, PCA, embeddings), and advanced causal inference (Double Machine Learning, DAG, backdoor criterion).",
                "Holding a degree in Applied Mathematics (Université de Dschang, recognized as equivalent to a Canadian B.Sc.), I combine analytical rigor with practical software engineering.",
                "I pay close attention to code quality, methodological rigor, and technical documentation.",
            ],
        },
        contact: {
            email: "tekenghugo7750@gmail.com",
            phone: "(819) 266-7890",
        },
    },
} as const;

export type Locale = keyof typeof profile;
