export const profile = {
  "fr": {
    "name": "Armel Hugo Tekeng",
    "location": "Trois-Rivières, QC",
    "headline": "Science des données & IA appliquée | Python · SQL · Machine learning | Diplômé de l’UQTR",
    "hero": {
      "badge": "Diplômé en 2026 · À la recherche d’un emploi junior",
      "title": "Science des données & IA appliquée",
      "subtitle": "Diplômé du baccalauréat en informatique de l’UQTR, concentration en science des données, je combine mathématiques appliquées, analyse de données et apprentissage automatique pour éclairer les décisions.",
      "ctas": {
        "primary": "Me contacter",
        "secondary": "Voir mes projets",
        "tertiary": "Mes deux CV"
      }
    },
    "about": {
      "title": "À propos",
      "paragraphs": [
        "Diplômé du baccalauréat en informatique de l’UQTR en 2026, concentration en science des données, je suis également titulaire d’une licence en mathématiques appliquées de l’Université de Dschang (2023).",
        "Mon domaine principal est la science des données : préparation et exploration des données, modélisation statistique, apprentissage automatique, inférence causale et visualisation. Le développement Python et Java soutient la mise en œuvre de mes analyses et applications.",
        "Mon intérêt pour l’intelligence artificielle se concrétise dans des projets d’apprentissage automatique, d’apprentissage profond et de recherche sémantique. Je m’attache à comparer les modèles, à documenter leurs limites et à relier leurs résultats à un besoin réel.",
        "Mon expérience freelance chez Lucatex comprend la conception et le déploiement d’un système de gestion utilisé quotidiennement en production. Mes projets universitaires et personnels comprennent une application Android, une application Flask/MongoDB, une étude EEG et le prototype e-commerce EcomOS AI.",
        "J’aime comprendre les besoins des utilisateurs, construire des solutions utiles et expliquer ce que les données permettent réellement de conclure, y compris leurs limites.",
        "Je recherche en priorité un poste junior en science des données, en modélisation ou en analyse de données/BI. Mes compétences en développement logiciel complètent ce profil pour construire des solutions exploitables."
      ]
    },
    "contact": {
      "email": "tekenghugo7750@gmail.com",
      "phone": "(819) 266-7890"
    }
  },
  "en": {
    "name": "Armel Hugo Tekeng",
    "location": "Trois-Rivières, QC",
    "headline": "Data science & applied AI | Python · SQL · Machine learning | UQTR graduate",
    "hero": {
      "badge": "2026 graduate · Seeking junior opportunities",
      "title": "Data science & applied AI",
      "subtitle": "A UQTR Computer Science graduate with a concentration in Data Science, I combine applied mathematics, data analysis and machine learning to inform decisions.",
      "ctas": {
        "primary": "Contact me",
        "secondary": "View projects",
        "tertiary": "My resumes"
      }
    },
    "about": {
      "title": "About",
      "paragraphs": [
        "I graduated from UQTR in 2026 with a bachelor’s degree in Computer Science, concentration in Data Science. I also hold a degree in Applied Mathematics from the University of Dschang (2023).",
        "My primary field is data science: data preparation and exploration, statistical modeling, machine learning, causal inference and visualization. Python and Java development support the implementation of my analyses and applications.",
        "My interest in artificial intelligence takes shape in machine learning, deep learning and semantic search projects. I focus on comparing models, documenting their limitations and connecting their outputs to a real need.",
        "My freelance experience at Lucatex includes designing and deploying a management system used daily in production. My academic and personal projects include an Android app, a Flask/MongoDB application, an EEG study and the EcomOS AI e-commerce prototype.",
        "I enjoy understanding user needs, building useful applications and explaining what data can support, including the limits of the results.",
        "My priority is a junior role in data science, modeling or data/BI analysis. My software development skills complement this focus by helping me build usable solutions."
      ]
    },
    "contact": {
      "email": "tekenghugo7750@gmail.com",
      "phone": "(819) 266-7890"
    }
  }
} as const;
export type Locale = keyof typeof profile;
