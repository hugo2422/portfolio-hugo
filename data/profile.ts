export const profile = {
    fr: {
        name: "Hugo Tekeng",
        location: "Trois-Rivières, QC",
        headline:
            "Développeur logiciel & Data | Python • Java • SQL • Android | Bac. Informatique UQTR (été 2026) | Ouvert aux opportunités",
        hero: {
            badge: "Fin de programme été 2026 · À la recherche d'un emploi",
            title: "Science des données & Développement logiciel",
            subtitle:
                "Je conçois des systèmes back-end et des applications orientées données, combinant développement logiciel, analyse de données, machine learning et développement mobile Android.",
            ctas: {
                primary: "Me contacter",
                secondary: "Voir mes projets",
                tertiary: "CV",
            },
        },
        about: {
            title: "À propos",
            paragraphs: [
                "Je suis développeur logiciel spécialisé en science des données, en fin de baccalauréat en informatique à l'UQTR (diplôme prévu à l'été 2026).",
                "Je conçois des systèmes back-end, des API et des outils data pour transformer des besoins concrets en solutions robustes et bien structurées.",
                "À travers mes projets, j'ai développé des systèmes de gestion en production (Spring Boot, Java, PostgreSQL), des applications mobiles Android, des outils d'analyse de données et de machine learning, ainsi qu'un prototype SaaS e-commerce.",
                "J'accorde une attention particulière à la qualité du code, à la clarté des choix techniques et à la maintenabilité des systèmes.",
                "Mon programme se termine à l'été 2026 et je suis activement à la recherche d'un premier emploi en développement logiciel ou en data.",
            ],
        },
        internship: {
            title: "À la recherche d'un emploi",
            intro:
                "Mon baccalauréat en informatique (UQTR) se termine à l'été 2026. Je suis à la recherche d'un premier emploi en développement logiciel, back-end ou data.",
            targetRoles: ["Back-end", "Python", "Java", "Data", "Mobile Android"],
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
            "Software Developer & Data | Python • Java • SQL • Android | B.Sc. Computer Science UQTR (Summer 2026) | Open to opportunities",
        hero: {
            badge: "Graduating Summer 2026 · Open to job opportunities",
            title: "Data Science & Software Developer",
            subtitle:
                "I build backend systems and data-driven applications combining software development, data analysis, machine learning, and Android mobile development.",
            ctas: {
                primary: "Contact",
                secondary: "View projects",
                tertiary: "CV",
            },
        },
        about: {
            title: "About",
            paragraphs: [
                "I am a software developer specializing in data science, finishing my B.Sc. in Computer Science at UQTR (graduating Summer 2026).",
                "I design back-end systems, APIs, and data tools to turn real-world needs into robust and well-structured solutions.",
                "Through my projects, I have built production management systems (Spring Boot, Java, PostgreSQL), Android mobile apps, data analysis and machine learning tools, and an e-commerce SaaS prototype.",
                "I pay close attention to code quality, clarity of technical decisions, and system maintainability.",
                "My program ends in Summer 2026 and I am actively looking for my first job in software development or data engineering.",
            ],
        },
        internship: {
            title: "Open to Job Opportunities",
            intro:
                "My B.Sc. in Computer Science at UQTR concludes in Summer 2026. I am actively seeking my first job in software development, backend, or data.",
            targetRoles: ["Backend", "Python", "Java", "Data", "Android"],
        },
        contact: {
            email: "tekenghugo7750@gmail.com",
            phone: "(819) 266-7890",
        },
    },
} as const;

export type Locale = keyof typeof profile;
