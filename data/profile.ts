export const profile = {
  "fr": {
    "name": "Armel Hugo Tekeng",
    "location": "Trois-Rivières, QC",
    "headline": "Développement logiciel & science des données | Java · Python · SQL | Diplômé de l’UQTR",
    "hero": {
      "badge": "Diplômé en 2026 · À la recherche d’un emploi junior",
      "title": "Développement logiciel & science des données",
      "subtitle": "Je développe des applications utiles aux équipes et des analyses pour éclairer leurs décisions. Mon parcours associe informatique, mathématiques appliquées et réalisations concrètes.",
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
        "Je développe des applications Java et Python et je travaille sur la préparation de données, les tableaux de bord, la modélisation et l’inférence causale.",
        "Mon intérêt pour l’intelligence artificielle se concrétise dans des projets d’apprentissage automatique, d’apprentissage profond et de recherche sémantique. Je m’attache à comparer les modèles, à documenter leurs limites et à relier leurs résultats à un besoin réel.",
        "Mon expérience freelance chez Lucatex comprend la conception et le déploiement d’un système de gestion utilisé quotidiennement en production. Mes projets universitaires et personnels comprennent une application Android, une application Flask/MongoDB, une étude EEG et le prototype e-commerce EcomOS AI.",
        "J’aime comprendre les besoins des utilisateurs, construire des solutions utiles et expliquer ce que les données permettent réellement de conclure, y compris leurs limites.",
        "Je recherche un poste junior en développement logiciel, comme analyste-programmeur, en analyse de données/BI ou en science des données/modélisation. Ces quatre orientations m’intéressent au même degré."
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
    "headline": "Software development & data science | Java · Python · SQL | UQTR graduate",
    "hero": {
      "badge": "2026 graduate · Seeking junior opportunities",
      "title": "Software development & data science",
      "subtitle": "I build applications that support teams and analyses that inform decisions. My background combines computer science, applied mathematics and practical projects.",
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
        "I develop Java and Python applications and work on data preparation, dashboards, modeling and causal inference.",
        "My interest in artificial intelligence takes shape in machine learning, deep learning and semantic search projects. I focus on comparing models, documenting their limitations and connecting their outputs to a real need.",
        "My freelance experience at Lucatex includes designing and deploying a management system used daily in production. My academic and personal projects include an Android app, a Flask/MongoDB application, an EEG study and the EcomOS AI e-commerce prototype.",
        "I enjoy understanding user needs, building useful applications and explaining what data can support, including the limits of the results.",
        "I am equally interested in junior software developer, programmer analyst, data/BI analyst and data science/modeling roles."
      ]
    },
    "contact": {
      "email": "tekenghugo7750@gmail.com",
      "phone": "(819) 266-7890"
    }
  }
} as const;
export type Locale = keyof typeof profile;
