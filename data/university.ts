export type CourseItem = {
    slug: string;
    code: string;
    category: string;
    status?: string;
    titleFr: string;
    titleEn: string;
    sessionFr: string;
    sessionEn: string;
    summaryFr: string;
    summaryEn: string;
    topicsFr: string[];
    topicsEn: string[];
    workFr: string[];
    workEn: string[];

    technologies: string[];


    screenshots?: {
        src: string;
        altFr: string;
        altEn: string;
    }[];



};

export const courses: CourseItem[] = [
    {
        slug: "inf1001-programmation-web",
        code: "INF1001",
        titleFr: "Programmation Web",
        category: "Web",
        titleEn: "Web Programming",
        sessionFr: "Automne 2023",
        sessionEn: "Fall 2023",
        summaryFr:
            "Cours d’introduction au développement Web centré sur les concepts fondamentaux du Web, la création de pages et sites Web, et l’apprentissage des principales technologies front-end et back-end. Le cours m’a permis de comprendre le fonctionnement du Web, le modèle client-serveur, la structuration HTML, la mise en forme CSS, l’interactivité avec JavaScript et les bases du développement côté serveur avec PHP.",
        summaryEn:
            "Introductory web development course focused on core web concepts, website creation, and the main front-end and back-end technologies. The course helped me understand how the web works, the client-server model, HTML structuring, CSS styling, interactivity with JavaScript, and server-side basics with PHP.",

        topicsFr: [
            "Historique et éléments du Web : Internet, IP, DNS, Web, HTTP, navigateurs, Web 2.0, HTML5",
            "Structure et spécifications HTML5 : balises, hyperliens, classes, identifiants, tableaux, blocs",
            "Conception de documents et pages Web selon les normes du W3C",
            "CSS3 : cascade, sélecteurs, mécanismes de style et mise en forme",
            "JavaScript : syntaxe, logique de base et interactivité côté client",
            "Modèle client-serveur et fonctionnement HTTP",
            "PHP : structures, GET/POST, boucles, tableaux, portée des variables",
            "Concepts PHP avancés : cookies, sessions, fonctions et bibliothèques",
            "Introduction aux requêtes Web asynchrones",
        ],
        topicsEn: [
            "Web foundations: Internet, IP, DNS, Web, HTTP, browsers, Web 2.0, HTML5",
            "HTML5 structure and specifications: tags, hyperlinks, classes, ids, tables, blocks",
            "Web document design based on W3C standards",
            "CSS3: cascade, selectors, styling mechanisms and layout",
            "JavaScript: syntax, basic logic, and client-side interactivity",
            "Client-server model and HTTP fundamentals",
            "PHP: structures, GET/POST, loops, arrays, variable scope",
            "Advanced PHP concepts: cookies, sessions, functions, and libraries",
            "Introduction to asynchronous web requests",
        ],

        workFr: [
            "TP1 en laboratoire autour des bases HTML/CSS",
            "TP2 en laboratoire lié à JavaScript",
            "TP3 en laboratoire autour de PHP",
            "Travaux d’équipe liés aux différentes étapes du cours",
            "Examen intra",
            "Examen final",
        ],
        workEn: [
            "Lab 1 focused on HTML/CSS fundamentals",
            "Lab 2 related to JavaScript",
            "Lab 3 focused on PHP",
            "Team assignments tied to the different stages of the course",
            "Midterm exam",
            "Final exam",
        ],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "PHP",
            "HTTP",
            "DOM",
            "XML",
        ],



        screenshots: [],
    },
    {
        slug: "inf1002-introduction-programmation-objet",
        code: "INF1002",
        category: "Programmation objet",

        titleFr: "Introduction à la programmation objet",
        titleEn: "Introduction to Object-Oriented Programming",

        sessionFr: "Automne 2023",
        sessionEn: "Fall 2023",

        summaryFr:
            "Cours d’introduction à la programmation et au paradigme orienté objet. Le cours m’a permis d’apprendre à concevoir des algorithmes, à les traduire en programmes Java et à structurer des applications en utilisant les principes fondamentaux de la programmation orientée objet.",

        summaryEn:
            "Introductory course to programming and object-oriented design. The course focused on designing algorithms, implementing them in Java, and structuring applications using fundamental object-oriented programming principles.",

        technologies: [
            "Java",
            "Eclipse",
            "Programmation orientée objet",
            "Algorithmique",
        ],

        topicsFr: [
            "Introduction à l’informatique et à la programmation",
            "Syntaxe et sémantique d’un langage de programmation",
            "Variables, types de données et expressions",
            "Structures de contrôle : conditions et boucles",
            "Entrées et sorties dans un programme",
            "Sous-programmes et passage de paramètres",
            "Concepts fondamentaux de la programmation orientée objet",
            "Classes et objets",
            "Attributs et méthodes",
            "Héritage et polymorphisme",
            "Structures de données de base : tableaux et chaînes de caractères",
            "Conception d’algorithmes et résolution de problèmes",
            "Compilation, exécution et débogage d’un programme",
            "Développement d’applications en Java avec l’environnement Eclipse"
        ],

        topicsEn: [
            "Introduction to computer science and programming",
            "Syntax and semantics of a programming language",
            "Variables, data types, and expressions",
            "Control structures: conditions and loops",
            "Program input and output",
            "Subprograms and parameter passing",
            "Fundamental concepts of object-oriented programming",
            "Classes and objects",
            "Attributes and methods",
            "Inheritance and polymorphism",
            "Basic data structures: arrays and strings",
            "Algorithm design and problem solving",
            "Compilation, execution, and debugging",
            "Application development in Java using the Eclipse environment"
        ],

        workFr: [
            "5 devoirs pratiques en programmation Java",
            "Implémentation d’algorithmes et de structures de contrôle",
            "Développement de classes et d’objets",
            "Examen intra",
            "Examen final"
        ],

        workEn: [
            "5 programming assignments in Java",
            "Implementation of algorithms and control structures",
            "Development of classes and objects",
            "Midterm exam",
            "Final exam"
        ],

        screenshots: [],
    },
    {
        slug: "sif1053-architecture-ordinateurs",
        code: "SIF1053",
        category: "Systèmes",

        titleFr: "Architecture des ordinateurs",
        titleEn: "Computer Architecture",

        sessionFr: "Automne 2023",
        sessionEn: "Fall 2023",

        summaryFr:
            "Cours introduisant l’architecture interne des ordinateurs modernes et les interactions entre matériel et logiciel. Le cours explore les composantes fondamentales d’un ordinateur, la représentation de l’information numérique, ainsi que les principes permettant de concevoir des logiciels efficaces en tenant compte de l’architecture matérielle.",

        summaryEn:
            "Course introducing the internal architecture of modern computers and the interactions between hardware and software. It explores the fundamental components of computer systems, the representation of digital information, and the architectural principles that influence software performance.",

        technologies: [
            "Architecture des ordinateurs",
            "Systèmes numériques",
            "Python",
            "Logique booléenne"
        ],

        topicsFr: [
            "Architecture générale des ordinateurs modernes",
            "Interactions entre logiciel et matériel",
            "Architectures ARM, x86 et x86-64",
            "Représentation numérique de l’information",
            "Représentation des nombres entiers et réels",
            "Fonctions logiques et valeurs booléennes",
            "Circuits logiques et circuits arithmétiques",
            "Organisation de la mémoire",
            "Structure interne d’un ordinateur",
            "Unité de commande et unité arithmétique et logique (ALU)",
            "Communication série et parallèle",
            "Communication homme-machine et machine-machine",
            "Introduction à la programmation Python dans le contexte système"
        ],

        topicsEn: [
            "General architecture of modern computer systems",
            "Hardware–software interaction",
            "ARM, x86, and x86-64 architectures",
            "Digital information representation",
            "Representation of integer and floating-point numbers",
            "Boolean logic and logical functions",
            "Logic circuits and arithmetic circuits",
            "Memory organization",
            "Internal structure of a computer",
            "Control unit and arithmetic logic unit (ALU)",
            "Serial and parallel communication",
            "Human–machine and machine–machine communication",
            "Introduction to Python programming in a systems context"
        ],

        workFr: [
            "Travaux pratiques sur la représentation de l’information numérique",
            "Analyse de circuits logiques et arithmétiques",
            "Exploration des mécanismes internes des ordinateurs",
            "Deux minitests durant la session",
            "Examen final"
        ],

        workEn: [
            "Practical assignments on digital information representation",
            "Analysis of logic and arithmetic circuits",
            "Exploration of internal computer mechanisms",
            "Two mid-session mini-tests",
            "Final exam"
        ],

        screenshots: [],
    },
    {
        slug: "stt1001-probabilites-statistiques",
        code: "STT1001",
        category: "Maths",

        titleFr: "Probabilités et statistiques",
        titleEn: "Probability and Statistics",

        sessionFr: "Automne 2023",
        sessionEn: "Fall 2023",

        summaryFr:
            "Cours d’introduction aux probabilités et à la statistique appliquée, orienté vers la compréhension des modèles probabilistes, de la statistique descriptive et des bases de l’inférence statistique. Ce cours m’a permis de développer une base solide pour l’analyse de données, l’échantillonnage et l’interprétation de résultats statistiques.",

        summaryEn:
            "Introductory course in probability and applied statistics focused on probabilistic models, descriptive statistics, and the foundations of statistical inference. The course provided a strong basis for data analysis, sampling, and the interpretation of statistical results.",

        technologies: [
            "Probabilités",
            "Statistique descriptive",
            "Inférence statistique",
            "Tests d’hypothèses",
        ],

        topicsFr: [
            "Statistique descriptive",
            "Séries statistiques, histogrammes et polygones",
            "Mesures de tendance centrale",
            "Mesures de dispersion",
            "Moments statistiques",
            "Probabilités et probabilité conditionnelle",
            "Événements simultanés et loi de multiplication",
            "Indépendance et loi de probabilité totale",
            "Formule de Bayes",
            "Variables aléatoires discrètes et continues",
            "Lois discrètes : binomiale, géométrique, binomiale négative, hypergéométrique, Poisson",
            "Lois continues : uniforme, exponentielle, gamma, normale",
            "Approximation de la binomiale par la loi normale",
            "Théorème de la limite centrale",
            "Échantillonnage et estimation de paramètres",
            "Estimation ponctuelle et qualité d’un estimateur",
            "Estimateur sans biais et efficacité",
            "Intervalles de confiance",
            "Loi du khi-deux, loi de Student, loi de Fisher",
            "Tests d’hypothèses sur une moyenne, une proportion, une variance",
            "Tests sur deux moyennes, deux variances et deux proportions",
        ],

        topicsEn: [
            "Descriptive statistics",
            "Statistical series, histograms, and polygons",
            "Measures of central tendency",
            "Measures of dispersion",
            "Statistical moments",
            "Probability and conditional probability",
            "Simultaneous events and multiplication rule",
            "Independence and total probability rule",
            "Bayes’ formula",
            "Discrete and continuous random variables",
            "Discrete distributions: binomial, geometric, negative binomial, hypergeometric, Poisson",
            "Continuous distributions: uniform, exponential, gamma, normal",
            "Binomial approximation by the normal distribution",
            "Central limit theorem",
            "Sampling and parameter estimation",
            "Point estimation and estimator quality",
            "Unbiased estimators and efficiency",
            "Confidence intervals",
            "Chi-square, Student’s t, and Fisher distributions",
            "Hypothesis tests on a mean, proportion, and variance",
            "Tests on two means, two variances, and two proportions",
        ],

        workFr: [
            "Exercices de statistique descriptive",
            "Applications sur les probabilités et les lois de distribution",
            "Analyse de variables aléatoires discrètes et continues",
            "Examen partiel",
            "Examen final",
        ],

        workEn: [
            "Exercises in descriptive statistics",
            "Applications on probability and probability distributions",
            "Analysis of discrete and continuous random variables",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1004-structures-donnees-algorithmes",
        code: "INF1004",
        category: "Algorithmique",

        titleFr: "Structures de données et algorithmes",
        titleEn: "Data Structures and Algorithms",

        sessionFr: "Hiver 2024",
        sessionEn: "Winter 2024",

        summaryFr:
            "Cours fondamental sur l’organisation, la manipulation et la recherche des données à l’aide de structures de données classiques et des algorithmes associés. Le cours m’a permis d’apprendre à choisir des structures adaptées à un problème donné, à comparer différentes approches algorithmiques et à analyser leur efficacité en temps et en mémoire.",

        summaryEn:
            "Core course on organizing, manipulating, and searching data using classical data structures and their associated algorithms. The course helped me learn how to choose the right structure for a given problem, compare algorithmic approaches, and analyze their efficiency in terms of time and memory.",

        technologies: [
            "Java",
            "Eclipse",
            "Structures de données",
            "Algorithmique",
            "Analyse de complexité",
        ],

        topicsFr: [
            "Révision de Java et des bases de la programmation orientée objet",
            "Encapsulation, héritage, polymorphisme et composition",
            "Analyse de la complexité spatiale et temporelle",
            "Notation grand O : meilleur cas, cas moyen, pire cas",
            "Tableaux et opérations associées",
            "Piles et files",
            "Récursivité et comparaison avec l’itération",
            "Algorithmes de tri simples : bulles, sélection, insertion",
            "Algorithmes de tri avancés : rapide, fusion, Shell",
            "Listes chaînées : simples, doubles, circulaires et triées",
            "Types abstraits de données et itérateurs",
            "Arbres binaires et arbres binaires de recherche",
            "Tas",
            "Tables de hachage",
            "Fonctions de hachage et résolution de collisions",
            "Choix d’une structure de données et d’un algorithme adaptés à un problème",
        ],

        topicsEn: [
            "Review of Java and object-oriented programming fundamentals",
            "Encapsulation, inheritance, polymorphism, and composition",
            "Time and space complexity analysis",
            "Big-O notation: best case, average case, worst case",
            "Arrays and related operations",
            "Stacks and queues",
            "Recursion and comparison with iteration",
            "Simple sorting algorithms: bubble, selection, insertion",
            "Advanced sorting algorithms: quicksort, merge sort, Shell sort",
            "Linked lists: singly, doubly, circular, and sorted",
            "Abstract data types and iterators",
            "Binary trees and binary search trees",
            "Heaps",
            "Hash tables",
            "Hash functions and collision handling strategies",
            "Choosing the right data structure and algorithm for a given problem",
        ],

        workFr: [
            "Travail 1 sur les concepts fondamentaux et l’analyse d’algorithmes",
            "Travail 2 sur les structures de données et les algorithmes associés",
            "Implémentations en Java dans Eclipse",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Assignment 1 on core concepts and algorithm analysis",
            "Assignment 2 on data structures and associated algorithms",
            "Java implementations in Eclipse",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1034-introduction-interfaces-utilisateur",
        code: "INF1034",
        category: "Interfaces",

        titleFr: "Introduction aux interfaces utilisateur",
        titleEn: "Introduction to User Interfaces",

        sessionFr: "Hiver 2024",
        sessionEn: "Winter 2024",

        summaryFr:
            "Cours d’introduction à la conception et à l’évaluation des interfaces utilisateur. Le cours m’a permis de comprendre les bases de l’ergonomie logicielle, de la conception centrée utilisateur et de la programmation d’interfaces graphiques en JavaFX, tout en appliquant des principes de qualité, d’accessibilité et d’organisation des interfaces.",

        summaryEn:
            "Introductory course on the design and evaluation of user interfaces. The course helped me understand the foundations of software ergonomics, user-centered design, and graphical interface programming with JavaFX, while applying principles related to quality, accessibility, and interface organization.",

        technologies: [
            "Java",
            "JavaFX",
            "UI/UX",
            "MVC",
            "SQLite",
        ],

        topicsFr: [
            "Ergonomie des logiciels et interactions personne-machine",
            "Comportement humain dans l’interaction avec un système logiciel",
            "Conception centrée sur l’utilisateur",
            "Principes de conception d’interfaces utilisateur",
            "Artefacts de design d’interface",
            "Programmation événementielle",
            "Développement d’interfaces graphiques avec JavaFX",
            "Contrôles de base, formulaires et scènes JavaFX",
            "Layout et organisation de la page",
            "Architecture modèle-vue-contrôleur (MVC)",
            "Applications multi-fenêtres",
            "Accessibilité et navigation",
            "Patron observateur et liaison de propriétés",
            "Réutilisation de contrôleurs",
            "Gestion de listes et tableaux de données",
            "Intégration SQLite dans une interface utilisateur",
            "Contrôle de la qualité des interfaces utilisateur",
            "Évaluation d’interfaces : tests, enquêtes et expérimentation",
        ],

        topicsEn: [
            "Software ergonomics and human-computer interaction",
            "Human behavior in interaction with software systems",
            "User-centered design",
            "User interface design principles",
            "Interface design artifacts",
            "Event-driven programming",
            "Graphical user interface development with JavaFX",
            "Basic controls, forms, and JavaFX scenes",
            "Layout and page organization",
            "Model-View-Controller (MVC) architecture",
            "Multi-window applications",
            "Accessibility and navigation",
            "Observer pattern and property binding",
            "Controller reuse",
            "Handling lists and tabular data",
            "SQLite integration in user interfaces",
            "User interface quality control",
            "Interface evaluation: testing, surveys, and experimentation",
        ],

        workFr: [
            "Exercices en Java sur les interfaces graphiques",
            "Travail de session — conception d’une interface utilisateur",
            "Travail de session — implémentation d’une interface en JavaFX",
            "Examen intra",
            "Examen final ou projet final",
        ],

        workEn: [
            "Java exercises focused on graphical interfaces",
            "Session project — user interface design",
            "Session project — implementation of a JavaFX interface",
            "Midterm exam",
            "Final exam or final project",
        ],

        screenshots: [],
    },
    {
        slug: "pif1005-mathematiques-pour-informaticiens-1",
        code: "PIF1005",
        category: "Maths",

        titleFr: "Mathématiques pour informaticiens I",
        titleEn: "Mathematics for Computer Scientists I",

        sessionFr: "Hiver 2024",
        sessionEn: "Winter 2024",

        summaryFr:
            "Cours de mathématiques discrètes et logiques appliquées à l’informatique. Le cours m’a permis d’acquérir les outils mathématiques de base nécessaires pour modéliser des problèmes informatiques, raisonner de manière rigoureuse et comprendre des concepts fondamentaux comme la logique, les ensembles, les graphes et l’algèbre booléenne.",

        summaryEn:
            "Course in discrete mathematics and logic applied to computer science. It provided the foundational mathematical tools needed to model computing problems, reason rigorously, and understand core concepts such as logic, sets, graphs, and Boolean algebra.",

        technologies: [
            "Logique",
            "Mathématiques discrètes",
            "Graphes",
            "Algèbre booléenne",
        ],

        topicsFr: [
            "Logique propositionnelle",
            "Logique des prédicats",
            "Ensembles et fonctions",
            "Relations et relations d’ordre",
            "Preuves et raisonnement mathématique",
            "Introduction à l’algorithmique",
            "Graphes, réseaux, arbres et arborescences",
            "Algèbre booléenne",
            "Circuits logiques",
            "Simplification de circuits logiques",
            "Modélisation de situations réelles en vue d’une implantation informatique",
        ],

        topicsEn: [
            "Propositional logic",
            "Predicate logic",
            "Sets and functions",
            "Relations and order relations",
            "Mathematical proofs and reasoning",
            "Introduction to algorithms",
            "Graphs, networks, trees, and arborescences",
            "Boolean algebra",
            "Logic circuits",
            "Simplification of logic circuits",
            "Modeling real-world situations for computing implementations",
        ],

        workFr: [
            "Devoir 1",
            "Devoir 2",
            "Examen intra",
            "Examen final",
            "Exercices sur la logique, les ensembles, les graphes et les preuves",
        ],

        workEn: [
            "Assignment 1",
            "Assignment 2",
            "Midterm exam",
            "Final exam",
            "Exercises on logic, sets, graphs, and proofs",
        ],

        screenshots: [],
    },
    {
        slug: "smi1001-bases-de-donnees-1",
        code: "SMI1001",
        category: "Bases de données",

        titleFr: "Bases de données I",
        titleEn: "Databases I",

        sessionFr: "Hiver 2024",
        sessionEn: "Winter 2024",

        summaryFr:
            "Cours d’introduction aux bases de données relationnelles, couvrant à la fois les fondements théoriques et les aspects pratiques. Le cours m’a permis d’apprendre à modéliser des données, concevoir des schémas relationnels, utiliser SQL pour manipuler les données, et comprendre les principes de normalisation et d’intégrité dans un système de gestion de bases de données.",

        summaryEn:
            "Introductory course on relational databases covering both theoretical foundations and practical aspects. It helped me learn how to model data, design relational schemas, use SQL to manipulate data, and understand normalization and integrity principles in a database management system.",

        technologies: [
            "SQL",
            "Oracle",
            "PL/SQL",
            "TOAD",
            "Modélisation relationnelle",
        ],

        topicsFr: [
            "Introduction aux bases de données et aux SGBD",
            "Utilisateurs des bases de données et leurs besoins",
            "Architecture des systèmes de gestion de bases de données",
            "Conception de bases de données",
            "Modèle Entité-Relation",
            "Modélisation UML appliquée aux données",
            "Modèle relationnel",
            "Algèbre relationnelle et calcul relationnel",
            "Notion de vue",
            "Langage SQL : manipulation des données (LMD)",
            "Langage SQL : définition des données (LDD)",
            "Contraintes d’intégrité",
            "Valeurs nulles et données manquantes",
            "Dépendances fonctionnelles",
            "Normalisation des bases de données",
            "Formes normales : 1FN, 2FN, 3FN, FNBC, 4FN, 5FN",
            "Dépendances multivaluées et dépendances de jointure",
            "Introduction aux bases relationnelles-objets et multidimensionnelles",
            "Introduction aux données multimédias et XML",
        ],

        topicsEn: [
            "Introduction to databases and DBMS",
            "Database users and their needs",
            "Database management system architecture",
            "Database design",
            "Entity-Relationship model",
            "UML modeling applied to data",
            "Relational model",
            "Relational algebra and relational calculus",
            "View concept",
            "SQL: data manipulation language (DML)",
            "SQL: data definition language (DDL)",
            "Integrity constraints",
            "Null values and missing data",
            "Functional dependencies",
            "Database normalization",
            "Normal forms: 1NF, 2NF, 3NF, BCNF, 4NF, 5NF",
            "Multivalued dependencies and join dependencies",
            "Introduction to object-relational and multidimensional databases",
            "Introduction to multimedia data and XML",
        ],

        workFr: [
            "Exercices de conception et de modélisation de bases de données",
            "Manipulation de données avec SQL",
            "Travaux pratiques sur Oracle, PL/SQL et TOAD",
            "Travail d’équipe sur l’application des notions du cours",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Database design and modeling exercises",
            "Data manipulation with SQL",
            "Practical work using Oracle, PL/SQL, and TOAD",
            "Team assignment applying course concepts",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1006-analyse-modelisation",
        code: "INF1006",
        category: "Logiciel",

        titleFr: "Analyse et modélisation",
        titleEn: "Analysis and Modeling",

        sessionFr: "Automne 2024",
        sessionEn: "Fall 2024",

        summaryFr:
            "Cours centré sur les phases initiales du développement logiciel, notamment l’analyse des besoins, la modélisation orientée objet et la production de spécifications. Le cours m’a permis de comprendre comment transformer des besoins métier en modèles structurés, utilisables dans la conception et le développement d’un système logiciel.",

        summaryEn:
            "Course focused on the early phases of software development, especially requirements analysis, object-oriented modeling, and software specifications. It helped me understand how to transform business needs into structured models that support software design and implementation.",

        technologies: [
            "UML",
            "Cas d’utilisation",
            "Analyse orientée objet",
            "Modélisation",
            "Spécifications logicielles",
        ],

        topicsFr: [
            "Introduction à l’analyse et à la modélisation des systèmes",
            "Processus de développement logiciel",
            "Étapes et modèles de processus de développement",
            "Analyse des besoins et spécifications",
            "Importance de l’analyse dans le cycle de développement",
            "Technique des cas d’utilisation",
            "Identification des besoins fonctionnels et non fonctionnels",
            "Paradigme objet et concepts fondamentaux",
            "Analyse et modélisation orientées objet",
            "Modèle du domaine",
            "Associations, attributs et généralisation",
            "Affinement du modèle du domaine",
            "Modélisation du comportement",
            "UML comme langage de modélisation",
            "Processus unifié et processus agiles",
            "Outils de modélisation assistée par ordinateur (CASE / GLAO)",
            "Dossier de spécifications et exigences logicielles",
            "Normes, critères de qualité, revue technique et validation",
            "Études de cas et ateliers de modélisation",
        ],

        topicsEn: [
            "Introduction to systems analysis and modeling",
            "Software development process",
            "Development process stages and models",
            "Requirements analysis and specifications",
            "Importance of analysis in the software lifecycle",
            "Use case technique",
            "Identification of functional and non-functional requirements",
            "Object paradigm and fundamental concepts",
            "Object-oriented analysis and modeling",
            "Domain model",
            "Associations, attributes, and generalization",
            "Refinement of the domain model",
            "Behavior modeling",
            "UML as a modeling language",
            "Unified process and agile processes",
            "Computer-aided software engineering tools (CASE)",
            "Software specifications and requirements document",
            "Standards, quality criteria, technical review, and validation",
            "Case studies and modeling workshops",
        ],

        workFr: [
            "Devoir 1 sur l’analyse des besoins et/ou les cas d’utilisation",
            "Devoir 2 sur la modélisation orientée objet",
            "Devoir 3 sur le dossier de spécifications et des exigences",
            "Ateliers de modélisation",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Assignment 1 on requirements analysis and/or use cases",
            "Assignment 2 on object-oriented modeling",
            "Assignment 3 on the software specification and requirements document",
            "Modeling workshops",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1035-concepts-avances-objet",
        code: "INF1035",
        category: "Programmation objet",

        titleFr: "Concepts avancés en objet",
        titleEn: "Advanced Object-Oriented Concepts",

        sessionFr: "Automne 2024",
        sessionEn: "Fall 2024",

        summaryFr:
            "Cours d’approfondissement de la programmation orientée objet, centré sur les mécanismes avancés de conception et de développement logiciel. Le cours m’a permis d’aller au-delà des bases de la POO en étudiant la généricité, les patrons de conception, la robustesse des applications, la programmation événementielle et certains concepts avancés comme la programmation par contrat et la programmation orientée aspect.",

        summaryEn:
            "Advanced object-oriented programming course focused on higher-level software design and development mechanisms. It allowed me to go beyond core OOP concepts by studying generics, design patterns, application robustness, event-driven programming, and advanced concepts such as design by contract and aspect-oriented programming.",

        technologies: [
            "Java",
            "C#",
            "AspectJ",
            "Eclipse",
            "Visual C#",
            "Spring Boot",
        ],

        topicsFr: [
            "Rappels avancés sur les concepts orientés objet",
            "Héritage simple et multiple",
            "Hiérarchies de classes",
            "Polymorphisme",
            "Liaison statique et liaison dynamique",
            "Classes abstraites et interfaces",
            "Extensions de classes et structures partielles",
            "Généricité",
            "Collections et structures de données",
            "Fonctions déléguées et expressions lambda en Java et C#",
            "Programmation événementielle",
            "Gestion des exceptions",
            "Refactoring",
            "Patrons de conception GoF",
            "Inversion de contrôle et injection de dépendances",
            "Persistance avec JPA et Spring Data",
            "Méta-programmation : annotations et attributs",
            "Gestion de mémoire : GC et ARC",
            "Programmation par contrat",
            "Programmation orientée aspect : aspects, interception, limites de la POO",
            "Robustesse, extensibilité et maintenabilité des applications",
        ],

        topicsEn: [
            "Advanced review of object-oriented concepts",
            "Single and multiple inheritance",
            "Class hierarchies",
            "Polymorphism",
            "Static and dynamic binding",
            "Abstract classes and interfaces",
            "Class extensions and partial structures",
            "Generics",
            "Collections and data structures",
            "Delegates and lambda expressions in Java and C#",
            "Event-driven programming",
            "Exception handling",
            "Refactoring",
            "GoF design patterns",
            "Inversion of control and dependency injection",
            "Persistence with JPA and Spring Data",
            "Metaprogramming: annotations and attributes",
            "Memory management: GC and ARC",
            "Design by contract",
            "Aspect-oriented programming: aspects, interception, and OOP limits",
            "Robustness, extensibility, and maintainability of applications",
        ],

        workFr: [
            "TP1 sur les concepts avancés objet",
            "TP2 sur la mise en pratique de concepts avancés et/ou frameworks",
            "Exercices en Java et C#",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Lab 1 on advanced object-oriented concepts",
            "Lab 2 applying advanced concepts and/or frameworks",
            "Exercises in Java and C#",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "pif1006-mathematiques-pour-informaticiens-2",
        code: "PIF1006",
        category: "Maths",

        titleFr: "Mathématiques pour informaticiens II",
        titleEn: "Mathematics for Computer Scientists II",

        sessionFr: "Automne 2024",
        sessionEn: "Fall 2024",

        summaryFr:
            "Cours de mathématiques appliquées à l’informatique couvrant des notions avancées utiles à plusieurs domaines, notamment les langages formels, les automates, l’algèbre matricielle, l’analyse numérique, la cryptographie et la compression de données. Le cours m’a permis de relier des concepts mathématiques à des problématiques concrètes d’implantation informatique.",

        summaryEn:
            "Applied mathematics course for computer science covering advanced topics useful in several domains, including formal languages, automata, matrix algebra, numerical analysis, cryptography, and data compression. It helped me connect mathematical concepts to concrete computing implementation problems.",

        technologies: [
            "Matlab",
            "Langages formels",
            "Automates",
            "Cryptographie",
            "Analyse numérique",
        ],

        topicsFr: [
            "Langages formels et grammaires",
            "Automates finis avec et sans sorties",
            "Équivalence d’automates",
            "Automates finis non déterministes",
            "Expressions régulières",
            "Machines de Turing",
            "Algèbre matricielle : opérations, déterminant, matrice inverse",
            "Algèbre matricielle avancée",
            "Éléments d’analyse numérique",
            "Représentation des nombres et erreurs",
            "Interpolation et approximation",
            "Introduction à la cryptographie",
            "Schémas de chiffrement",
            "Authentification et identification",
            "Cryptographie à clé secrète",
            "Cryptographie à clé publique",
            "Codage et compression de données",
            "Compression sans perte",
            "Code de Huffman",
            "Compression avec perte",
            "Compression JPEG",
            "Modélisation de situations réelles en vue d’une implantation informatique",
        ],

        topicsEn: [
            "Formal languages and grammars",
            "Finite-state machines with and without outputs",
            "Automata equivalence",
            "Nondeterministic finite automata",
            "Regular expressions",
            "Turing machines",
            "Matrix algebra: operations, determinant, inverse matrix",
            "Advanced matrix algebra",
            "Elements of numerical analysis",
            "Number representation and numerical errors",
            "Interpolation and approximation",
            "Introduction to cryptography",
            "Encryption schemes",
            "Authentication and identification",
            "Secret-key cryptography",
            "Public-key cryptography",
            "Data coding and compression",
            "Lossless compression",
            "Huffman coding",
            "Lossy compression",
            "JPEG compression",
            "Modeling real-world situations for computing implementations",
        ],

        workFr: [
            "Travail de session sur les grammaires et/ou les outils mathématiques du cours",
            "Exercices sur les automates et les machines de Turing",
            "Applications en algèbre matricielle et analyse numérique avec Matlab",
            "Exercices sur la cryptographie et la compression de données",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Session project on grammars and/or mathematical tools from the course",
            "Exercises on automata and Turing machines",
            "Applications in matrix algebra and numerical analysis using Matlab",
            "Exercises on cryptography and data compression",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "sdd1001-introduction-science-donnees",
        code: "SDD1001",
        category: "Data",

        titleFr: "Introduction à la science des données",
        titleEn: "Introduction to Data Science",

        sessionFr: "Automne 2024",
        sessionEn: "Fall 2024",

        summaryFr:
            "Cours d’introduction à la science des données centré sur l’utilisation de langages et bibliothèques modernes pour manipuler, analyser et visualiser les données. Le cours m’a permis de développer des bases pratiques en Python et en R, de manipuler des structures de données, d’utiliser des bibliothèques spécialisées, et d’aborder des tâches de prétraitement et d’analyse comme la régression linéaire.",

        summaryEn:
            "Introductory data science course focused on the use of modern languages and libraries to manipulate, analyze, and visualize data. It helped me build practical foundations in Python and R, work with data structures, use specialized libraries, and approach preprocessing and analysis tasks such as linear regression.",

        technologies: [
            "Python",
            "Pandas",
            "Tkinter",
            "PyCharm",
            "R",
            "RStudio",
            "Orange",
        ],

        topicsFr: [
            "Introduction à Python",
            "Variables, transtypage et structures de contrôle en Python",
            "Gestion des exceptions et docstrings",
            "Structures de données en Python",
            "Fonctions et objets",
            "Paradigmes fonctionnel et orienté objet",
            "Développement avec PyCharm",
            "Interfaces avec Tkinter",
            "Bibliothèques graphiques",
            "Manipulation des données avec Pandas",
            "Utilisation de bibliothèques complémentaires pour l’analyse",
            "Introduction à Orange",
            "Introduction à R et RStudio",
            "Structures de contrôle et structures de données en R",
            "Graphiques en R",
            "Prétraitement des données",
            "Régression linéaire",
        ],

        topicsEn: [
            "Introduction to Python",
            "Variables, type casting, and control structures in Python",
            "Exception handling and docstrings",
            "Data structures in Python",
            "Functions and objects",
            "Functional and object-oriented paradigms",
            "Development with PyCharm",
            "User interfaces with Tkinter",
            "Graphical libraries",
            "Data manipulation with Pandas",
            "Use of complementary analysis libraries",
            "Introduction to Orange",
            "Introduction to R and RStudio",
            "Control structures and data structures in R",
            "Data visualization in R",
            "Data preprocessing",
            "Linear regression",
        ],

        workFr: [
            "TP1 sur Python et/ou l’environnement de développement",
            "TP2 sur la manipulation, l’analyse ou la visualisation de données",
            "Exercices pratiques en Python, Pandas, R et RStudio",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Lab 1 on Python and/or the development environment",
            "Lab 2 on data manipulation, analysis, or visualization",
            "Practical exercises in Python, Pandas, R, and RStudio",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "sif1015-systemes-exploitation",
        code: "SIF1015",
        category: "Systèmes",

        titleFr: "Systèmes d’exploitation",
        titleEn: "Operating Systems",

        sessionFr: "Automne 2024",
        sessionEn: "Fall 2024",

        summaryFr:
            "Cours d’introduction aux concepts fondamentaux des systèmes d’exploitation, avec un accent sur la programmation système et l’expérimentation sous des environnements ouverts comme UNIX et Linux. Le cours m’a permis de comprendre comment un système d’exploitation gère les processus, les threads, la mémoire, les fichiers, les entrées/sorties et la communication réseau, tout en développant des utilitaires système concrets.",

        summaryEn:
            "Introductory course on the fundamental concepts of operating systems, with a strong focus on systems programming and experimentation under open environments such as UNIX and Linux. It helped me understand how an operating system manages processes, threads, memory, files, I/O, and network communication, while developing concrete system utilities.",

        technologies: [
            "UNIX",
            "Linux",
            "Sockets",
            "IPC",
            "Programmation système",
        ],

        topicsFr: [
            "Introduction aux systèmes d’exploitation",
            "Comparaison de plateformes : Linux, Unix, Windows, iOS, Android",
            "Gestion des processus",
            "Gestion des threads",
            "Séquencement et changement de contexte",
            "Coordination et synchronisation",
            "Communication inter-processus (IPC)",
            "Tubes anonymes et nommés",
            "Files de messages",
            "Signaux",
            "Sockets",
            "Communication réseau par sockets",
            "Architecture client/serveur",
            "Serveurs itératifs et concurrents",
            "Entrées / sorties système",
            "Interfaces et dispositifs sous environnement système",
            "Systèmes de fichiers",
            "Gestion de la mémoire",
            "Notions de virtualisation",
            "Développement d’utilitaires système sous UNIX/Linux",
        ],

        topicsEn: [
            "Introduction to operating systems",
            "Platform comparison: Linux, Unix, Windows, iOS, Android",
            "Process management",
            "Thread management",
            "Scheduling and context switching",
            "Coordination and synchronization",
            "Inter-process communication (IPC)",
            "Anonymous and named pipes",
            "Message queues",
            "Signals",
            "Sockets",
            "Network communication through sockets",
            "Client/server architecture",
            "Iterative and concurrent servers",
            "System input/output",
            "Interfaces and devices in system environments",
            "File systems",
            "Memory management",
            "Virtualization concepts",
            "Development of system utilities under UNIX/Linux",
        ],

        workFr: [
            "TP1 sur les processus, les threads ou la synchronisation",
            "TP2 sur les entrées/sorties, IPC ou sockets",
            "TP3 sur la communication réseau, les fichiers ou la mémoire",
            "Développement d’utilitaires système en environnement UNIX/Linux",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Lab 1 on processes, threads, or synchronization",
            "Lab 2 on I/O, IPC, or sockets",
            "Lab 3 on network communication, files, or memory",
            "Development of system utilities in a UNIX/Linux environment",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1007-conception-logiciels",
        code: "INF1007",
        category: "Logiciel",

        titleFr: "Conception de logiciels",
        titleEn: "Software Design",

        sessionFr: "Hiver 2025",
        sessionEn: "Winter 2025",

        summaryFr:
            "Cours centré sur la conception de logiciels de qualité, en continuité avec l’analyse et la modélisation. Le cours m’a permis d’approfondir le processus de conception, d’utiliser des techniques modernes comme UML, les patterns de conception et les styles d’architecture logicielle, tout en réalisant un projet d’équipe couvrant plusieurs étapes du développement logiciel.",

        summaryEn:
            "Course focused on the design of high-quality software, as a continuation of analysis and modeling. It helped me deepen my understanding of the design process, use modern techniques such as UML, design patterns, and software architecture styles, and complete a team project covering multiple stages of software development.",

        technologies: [
            "UML",
            "GRASP",
            "Design Patterns",
            "Architecture logicielle",
            "Conception orientée objet",
        ],

        topicsFr: [
            "Place de la conception dans le processus de développement logiciel",
            "Processus de conception logicielle",
            "Planification itérative",
            "Processus agiles (Scrum, XP)",
            "Conception orientée objet",
            "Diagrammes d’interaction",
            "Responsabilités des objets",
            "Patterns GRASP",
            "Réalisation des cas d’utilisation à l’aide de patterns",
            "Détermination de la visibilité entre objets",
            "Création de diagrammes de classes de conception",
            "Passage de la conception à l’implémentation",
            "Styles de programmation orientée objet",
            "Autres patterns de conception",
            "Conception système",
            "Architecture logique",
            "Organisation des packages",
            "Analyse architecturale",
            "Description de l’architecture logicielle",
            "Processus de test et aperçu de l’intégration",
            "Qualité de la conception : modularité, abstraction, cohésion, couplage",
            "Documentation de la conception",
            "Revue technique et validation",
            "Travail en équipe sur un projet logiciel complet",
        ],

        topicsEn: [
            "Role of design in the software development process",
            "Software design process",
            "Iterative planning",
            "Agile processes (Scrum, XP)",
            "Object-oriented design",
            "Interaction diagrams",
            "Object responsibilities",
            "GRASP patterns",
            "Use case realization using patterns",
            "Determining visibility between objects",
            "Creating design class diagrams",
            "From design to implementation",
            "Object-oriented programming styles",
            "Additional design patterns",
            "System design",
            "Logical architecture",
            "Package organization",
            "Architectural analysis",
            "Software architecture description",
            "Testing process and overview of integration",
            "Design quality: modularity, abstraction, cohesion, coupling",
            "Design documentation",
            "Technical review and validation",
            "Teamwork on a complete software project",
        ],

        workFr: [
            "Projet – Partie 1 : conception",
            "Projet – Partie 2 : implémentation",
            "Analyse et documentation de la solution retenue",
            "Conception orientée objet et architecture logicielle",
            "Examen intra",
            "Examen final",
            "Présentation du projet en équipe",
        ],

        workEn: [
            "Project – Part 1: design",
            "Project – Part 2: implementation",
            "Analysis and documentation of the selected solution",
            "Object-oriented design and software architecture",
            "Midterm exam",
            "Final exam",
            "Team project presentation",
        ],

        screenshots: [],
    },
    {
        slug: "inf1008-analyse-conception-algorithmes",
        code: "INF1008",
        category: "Algorithmique",

        titleFr: "Analyse et conception d’algorithmes",
        titleEn: "Algorithm Analysis and Design",

        sessionFr: "Hiver 2025",
        sessionEn: "Winter 2025",

        summaryFr:
            "Cours centré sur l’analyse théorique et la conception d’algorithmes efficaces. Le cours m’a permis d’approfondir l’étude de la complexité, de comparer plusieurs stratégies algorithmiques et de choisir les méthodes les plus adaptées selon le problème à résoudre, en tenant compte de la correction, de l’efficacité et du contexte d’application.",

        summaryEn:
            "Course focused on the theoretical analysis and design of efficient algorithms. It helped me deepen my understanding of complexity, compare several algorithmic strategies, and choose the most appropriate methods depending on the problem, while considering correctness, efficiency, and application context.",

        technologies: [
            "Python",
            "Algorithmique",
            "Complexité",
            "Graphes",
            "Programmation dynamique",
        ],

        topicsFr: [
            "Définition d’un algorithme",
            "Analyse de la complexité spatiale et temporelle",
            "Notations asymptotiques",
            "Analyse de l’efficacité d’un algorithme",
            "Résolution de récurrences",
            "Étude des algorithmes de tri",
            "Conception d’algorithmes corrects et efficaces",
            "Stratégies voraces",
            "Diviser pour régner",
            "Programmation dynamique",
            "Algorithmes probabilistes",
            "Exploration de graphes",
            "Exploration d’arbres",
            "Automates et automates cellulaires",
            "Algorithmes génétiques",
            "Réseaux bayésiens naïfs",
            "Classification de problèmes",
            "Introduction aux algorithmes quantiques",
            "Études de cas appliquées",
            "Choix du bon type d’algorithme selon le problème",
        ],

        topicsEn: [
            "Definition of an algorithm",
            "Time and space complexity analysis",
            "Asymptotic notation",
            "Analysis of algorithm efficiency",
            "Solving recurrences",
            "Study of sorting algorithms",
            "Design of correct and efficient algorithms",
            "Greedy strategies",
            "Divide and conquer",
            "Dynamic programming",
            "Probabilistic algorithms",
            "Graph exploration",
            "Tree exploration",
            "Automata and cellular automata",
            "Genetic algorithms",
            "Naive Bayesian networks",
            "Problem classification",
            "Introduction to quantum algorithms",
            "Applied case studies",
            "Choosing the right type of algorithm for a given problem",
        ],

        workFr: [
            "Travail 1 sur une première famille d’algorithmes ou d’études de cas",
            "Travail 2 sur l’analyse ou la conception de stratégies algorithmiques avancées",
            "Exercices pratiques en Python",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Assignment 1 on an initial family of algorithms or case studies",
            "Assignment 2 on the analysis or design of advanced algorithmic strategies",
            "Practical exercises in Python",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1009-reseaux-ordinateurs-1",
        code: "INF1009",
        category: "Réseaux",

        titleFr: "Réseaux d’ordinateurs I",
        titleEn: "Computer Networks I",

        sessionFr: "Hiver 2025",
        sessionEn: "Winter 2025",

        summaryFr:
            "Cours d’introduction aux architectures des réseaux informatiques, axé sur les mécanismes qui permettent l’échange de données entre ordinateurs. Le cours m’a permis de comprendre l’architecture en couches, les protocoles de communication, les réseaux locaux, les circuits virtuels et les bases du fonctionnement des réseaux IP.",

        summaryEn:
            "Introductory course on computer network architectures, focused on the mechanisms that enable data exchange between computers. The course helped me understand layered architectures, communication protocols, local area networks, virtual circuits, and the fundamentals of IP networking.",

        technologies: [
            "OSI",
            "IP",
            "ICMP",
            "X.25",
            "Ethernet",
            "Réseaux locaux",
        ],

        topicsFr: [
            "Introduction aux réseaux informatiques",
            "Architecture en couches",
            "Vocabulaire fondamental des réseaux",
            "Transmission de l’information",
            "Circuits de données",
            "Circuit physique",
            "Techniques de transmission de données",
            "Transmission synchrone et asynchrone",
            "Multiplexage",
            "Interface ETTD-ETCD",
            "Protocoles de liaison de données",
            "Protection contre les erreurs",
            "Procédures d’échange de données",
            "Protocole LAP-B",
            "Techniques de commutation : circuits, messages, paquets, cellules",
            "Routage",
            "Multiplexage des voies logiques",
            "Circuits virtuels",
            "Contrôle de congestion",
            "Administration de réseaux",
            "Modèle OSI à sept couches",
            "Concepts fondamentaux d’une architecture réseau en couches",
            "Réseaux locaux",
            "Exemples de réseaux locaux : Ethernet, Token Ring, sans fil",
            "Interconnexion de réseaux locaux",
            "Introduction au réseau IP",
            "Adressage IP",
            "Protocoles IP et ICMP",
            "Interconnexion de réseaux hétérogènes",
        ],

        topicsEn: [
            "Introduction to computer networks",
            "Layered architecture",
            "Fundamental networking vocabulary",
            "Information transmission",
            "Data circuits",
            "Physical circuit",
            "Data transmission techniques",
            "Synchronous and asynchronous transmission",
            "Multiplexing",
            "DTE-DCE interface",
            "Data link protocols",
            "Error protection",
            "Data exchange procedures",
            "LAP-B protocol",
            "Switching techniques: circuits, messages, packets, cells",
            "Routing",
            "Logical channel multiplexing",
            "Virtual circuits",
            "Congestion control",
            "Network administration",
            "OSI seven-layer model",
            "Fundamental concepts of layered network architecture",
            "Local area networks",
            "Examples of LANs: Ethernet, Token Ring, wireless",
            "Interconnection of local networks",
            "Introduction to IP networking",
            "IP addressing",
            "IP and ICMP protocols",
            "Interconnection of heterogeneous networks",
        ],

        workFr: [
            "Séries d’exercices sur la transmission et les protocoles",
            "Travail de session sur l’analyse et/ou l’implémentation d’un aspect réseau",
            "Études de cas liées au modèle OSI, aux réseaux locaux ou au réseau IP",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Exercise sets on transmission and protocols",
            "Session project on the analysis and/or implementation of a networking aspect",
            "Case studies related to the OSI model, LANs, or IP networking",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "sdd1002-modelisation-simulation",
        code: "SDD1002",
        category: "Data",

        titleFr: "Modélisation et simulation",
        titleEn: "Modeling and Simulation",

        sessionFr: "Hiver 2025",
        sessionEn: "Winter 2025",

        summaryFr:
            "Cours orienté vers les techniques théoriques et pratiques de modélisation, de simulation et d’analyse de données. Le cours m’a permis de travailler sur plusieurs étapes d’un pipeline de science des données : collecte, nettoyage, préparation, visualisation, réduction de dimension, modélisation et application d’algorithmes d’apprentissage automatique sur des jeux de données réels.",

        summaryEn:
            "Course focused on theoretical and practical techniques for modeling, simulation, and data analysis. It allowed me to work across several stages of a data science pipeline: data collection, cleaning, preparation, visualization, dimensionality reduction, modeling, and the application of machine learning algorithms on real datasets.",

        technologies: [
            "Python",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "Matplotlib",
            "Kaggle",
        ],

        topicsFr: [
            "Rappel du langage Python",
            "Web scraping",
            "Recherche et sélection de jeux de données pertinents",
            "Nettoyage et préparation des données",
            "Visualisation des données",
            "Utilisation de NumPy",
            "Opérations matricielles",
            "Produit scalaire et produit croisé",
            "Déterminant, matrice inverse, systèmes d’équations linéaires",
            "Valeurs propres et vecteurs propres",
            "Méthode de Monte-Carlo par chaînes de Markov (MCMC)",
            "Maximum de vraisemblance",
            "Algorithme espérance-maximisation",
            "Visualisation avec Matplotlib et boxplots",
            "Processus gaussiens",
            "Utilisation de Pandas pour la manipulation et le nettoyage des données",
            "Introduction à Scikit-learn",
            "Réduction de dimension",
            "Analyse en composantes principales (ACP)",
            "t-SNE",
            "Validation croisée",
            "Régression linéaire",
            "Clustering",
            "Classification",
            "Tests statistiques : p-value, test t, chi carré, ANOVA (selon le temps disponible)",
            "Réalisation de projets réels en science des données",
        ],

        topicsEn: [
            "Python review",
            "Web scraping",
            "Finding and selecting relevant datasets",
            "Data cleaning and preparation",
            "Data visualization",
            "Using NumPy",
            "Matrix operations",
            "Dot product and cross product",
            "Determinant, inverse matrix, and systems of linear equations",
            "Eigenvalues and eigenvectors",
            "Markov Chain Monte Carlo (MCMC)",
            "Maximum likelihood",
            "Expectation-maximization algorithm",
            "Visualization with Matplotlib and boxplots",
            "Gaussian processes",
            "Using Pandas for data manipulation and cleaning",
            "Introduction to Scikit-learn",
            "Dimensionality reduction",
            "Principal Component Analysis (PCA)",
            "t-SNE",
            "Cross-validation",
            "Linear regression",
            "Clustering",
            "Classification",
            "Statistical tests: p-value, t-test, chi-square, ANOVA (if time allows)",
            "Real-world data science projects",
        ],

        workFr: [
            "TP1 avec présentation et rapport sur un jeu de données sélectionné",
            "Examen intra incluant un mini-projet",
            "Projet final avec présentation orale",
            "Nettoyage, préparation, analyse et visualisation de données",
            "Application d’algorithmes de modélisation et d’apprentissage automatique",
        ],

        workEn: [
            "Lab 1 with presentation and report on a selected dataset",
            "Midterm exam including a mini-project",
            "Final project with oral presentation",
            "Data cleaning, preparation, analysis, and visualization",
            "Application of modeling and machine learning algorithms",
        ],

        screenshots: [],
    },
    {
        slug: "smi1002-bases-de-donnees-2",
        code: "SMI1002",
        category: "Bases de données",

        titleFr: "Bases de données II",
        titleEn: "Databases II",

        sessionFr: "Hiver 2025",
        sessionEn: "Winter 2025",

        summaryFr:
            "Cours d’approfondissement sur les bases de données, centré sur les aspects techniques et internes des systèmes de gestion de bases de données. Le cours m’a permis de mieux comprendre le stockage, l’indexation, le traitement des requêtes, la gestion des transactions, la concurrence, la sécurité, ainsi que les liens entre bases de données, applications Web et analyse de données.",

        summaryEn:
            "Advanced database course focused on the technical and internal aspects of database management systems. It helped me better understand storage, indexing, query processing, transaction management, concurrency, security, and the links between databases, web applications, and data analysis.",

        technologies: [
            "Oracle",
            "SQL",
            "PL/SQL",
            "JSP",
            "Data Warehousing",
        ],

        topicsFr: [
            "Organisation des données et structures de fichiers",
            "Stockage de l’information dans un SGBD",
            "Indexation",
            "Fonctions de hachage",
            "Traitement des requêtes",
            "Optimisation des requêtes",
            "Traitement des transactions",
            "Contrôle de la concurrence",
            "Systèmes de recouvrement",
            "Sécurité des bases de données",
            "Contrôle des accès",
            "Chiffrement et protection des données",
            "Architectures des SGBD",
            "Bases de données parallèles et distribuées",
            "Bases de données et applications Web",
            "Modèles client-serveur et architectures multitiers",
            "Bases de données relationnelles-objet",
            "XML et exploitation des données",
            "Analyse des données",
            "OLAP",
            "Entreposage de données (data warehousing)",
            "Forage de données (data mining)",
            "Conception et réalisation d’une application Oracle multi-utilisateurs",
        ],

        topicsEn: [
            "Data organization and file structures",
            "Information storage in a DBMS",
            "Indexing",
            "Hash functions",
            "Query processing",
            "Query optimization",
            "Transaction processing",
            "Concurrency control",
            "Recovery systems",
            "Database security",
            "Access control",
            "Data encryption and protection",
            "DBMS architectures",
            "Parallel and distributed databases",
            "Databases and web applications",
            "Client-server and multi-tier architectures",
            "Object-relational databases",
            "XML and data exploitation",
            "Data analysis",
            "OLAP",
            "Data warehousing",
            "Data mining",
            "Design and implementation of a multi-user Oracle application",
        ],

        workFr: [
            "Projet de session en équipe sur une base de données relationnelle avec Oracle",
            "Analyse et conception préliminaire du projet",
            "Réalisation d’une application multi-utilisateurs",
            "Utilisation de SQL, PL/SQL et éventuellement d’outils complémentaires",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Team session project on a relational database using Oracle",
            "Preliminary analysis and design of the project",
            "Implementation of a multi-user application",
            "Use of SQL, PL/SQL, and possibly complementary tools",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1022-projet-synthese",
        code: "INF1022",
        category: "Projet",

        titleFr: "Projet de synthèse",
        titleEn: "Capstone Project",

        sessionFr: "Été 2025",
        sessionEn: "Summer 2025",

        summaryFr:
            "Cours-projet de synthèse permettant de mettre en application les connaissances acquises durant la formation dans le cadre d’un projet concret en informatique. Ce cours m’a permis de travailler sur une problématique réelle, d’approfondir certaines notions théoriques ou techniques, et de développer mes compétences en gestion de projet, communication et travail en équipe.",

        summaryEn:
            "Capstone project course designed to apply the knowledge acquired throughout the program to a concrete computing project. It allowed me to work on a real-world problem, deepen selected theoretical or technical topics, and strengthen my skills in project management, communication, and teamwork.",

        technologies: [
            "Gestion de projet",
            "Communication technique",
            "Documentation",
            "Travail en équipe",
            "Conception de solution",
        ],

        topicsFr: [
            "Application des connaissances acquises dans un projet concret",
            "Résolution d’une problématique en informatique",
            "Approfondissement de notions théoriques ou techniques selon le projet",
            "Méthodes de travail propres à l’informatique",
            "Organisation et planification d’un projet",
            "Suivi régulier avec un professeur superviseur",
            "Rapports intermédiaires",
            "Conception d’une solution",
            "Présentation d’une problématique et de sa solution",
            "Rédaction d’un rapport final",
            "Communication écrite et orale",
            "Travail d’équipe",
            "Évaluation des réalisations et atteinte des objectifs fonctionnels",
            "Qualité de la documentation",
            "Qualité du code et conduite des tests",
        ],

        topicsEn: [
            "Applying acquired knowledge in a concrete project",
            "Solving a computing-related problem",
            "Deepening theoretical or technical topics depending on the project",
            "Work methods specific to computer science",
            "Project organization and planning",
            "Regular follow-up with a supervising professor",
            "Intermediate reports",
            "Solution design",
            "Presenting a problem and its solution",
            "Writing a final report",
            "Written and oral communication",
            "Teamwork",
            "Evaluation of deliverables and achievement of functional goals",
            "Documentation quality",
            "Code quality and testing practices",
        ],

        workFr: [
            "Rencontres de suivi avec le professeur superviseur",
            "Rapports intermédiaires sur l’avancement du projet",
            "Présentation sous forme d’affiche",
            "Rapport final",
            "Évaluation des réalisations du projet",
        ],

        workEn: [
            "Follow-up meetings with the supervising professor",
            "Intermediate progress reports",
            "Poster presentation",
            "Final report",
            "Evaluation of project deliverables",
        ],

        screenshots: [],
    },
    {
        slug: "inf1010-reseaux-ordinateurs-2",
        code: "INF1010",
        category: "Réseaux",

        titleFr: "Réseaux d’ordinateurs II",
        titleEn: "Computer Networks II",

        sessionFr: "Automne 2025",
        sessionEn: "Fall 2025",

        summaryFr:
            "Cours d’approfondissement en réseaux informatiques, orienté vers les technologies Internet, les architectures client/serveur, l’administration réseau et la sécurité. Le cours m’a permis d’étudier le modèle TCP/IP, le routage, les sockets, les VLANs, ainsi que les principes de sécurisation de l’information et la conception de réseaux d’entreprise.",

        summaryEn:
            "Advanced computer networks course focused on Internet technologies, client/server architectures, network administration, and security. It helped me study the TCP/IP model, routing, sockets, VLANs, as well as information security principles and enterprise network design.",

        technologies: [
            "TCP/IP",
            "Sockets",
            "VLAN",
            "Packet Tracer",
            "DHCP",
            "DNS",
        ],

        topicsFr: [
            "Rappel sur le modèle OSI",
            "Rappel sur les réseaux informatiques",
            "Présentation du modèle TCP/IP",
            "Gestion des adresses IP",
            "Routage statique et routage dynamique",
            "Fonctionnement du protocole TCP",
            "Sockets BSD et/ou WinSocket",
            "Multicast",
            "Ethernet commuté",
            "Gestion des VLANs",
            "Applications client/serveur sur Internet",
            "RMI (Remote Method Invocation)",
            "Protocoles Internet et services réseau",
            "Administration de services TCP/IP",
            "DHCP et DNS",
            "Sécurité informatique",
            "Gestion sécurisée de l’information",
            "Norme ISO 27002",
            "Chiffrement, certification et authentification",
            "Coupe-feu",
            "VPN",
            "Intranet et Extranet",
            "Conception de réseaux d’entreprise",
            "Mise en place d’une DMZ",
            "Architecture et sécurité d’un projet multisites",
            "Introduction aux réseaux téléphoniques",
            "Utilisation d’outils réseau comme switchs et routeurs",
        ],

        topicsEn: [
            "Review of the OSI model",
            "Review of computer networking basics",
            "Presentation of the TCP/IP model",
            "IP address management",
            "Static and dynamic routing",
            "TCP protocol operation",
            "BSD and/or WinSocket sockets",
            "Multicast",
            "Switched Ethernet",
            "VLAN management",
            "Client/server applications on the Internet",
            "RMI (Remote Method Invocation)",
            "Internet protocols and network services",
            "Administration of TCP/IP services",
            "DHCP and DNS",
            "Computer security",
            "Secure information management",
            "ISO 27002 standard",
            "Encryption, certification, and authentication",
            "Firewalls",
            "VPN",
            "Intranet and Extranet",
            "Enterprise network design",
            "DMZ deployment",
            "Architecture and security for a multi-site project",
            "Introduction to telephone networks",
            "Use of network tools such as switches and routers",
        ],

        workFr: [
            "TP1 sur les bases TCP/IP, l’adressage ou le routage",
            "TP2 sur les protocoles réseau",
            "TP3 sur une application client/serveur ou un aspect d’administration réseau",
            "Laboratoires avec Packet Tracer",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Lab 1 on TCP/IP basics, addressing, or routing",
            "Lab 2 on network protocols",
            "Lab 3 on a client/server application or a network administration topic",
            "Labs using Packet Tracer",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1014-aspects-juridiques-informatique",
        code: "INF1014",
        category: "Droit",

        titleFr: "Aspects juridiques de l’informatique",
        titleEn: "Legal Aspects of Computing",

        sessionFr: "Automne 2025",
        sessionEn: "Fall 2025",

        summaryFr:
            "Cours d’introduction aux dimensions juridiques de l’informatique, du logiciel et d’Internet. Le cours m’a permis de comprendre les principales lois et problématiques liées à la propriété intellectuelle, aux contrats, à la protection des données personnelles, aux licences logicielles, aux noms de domaine et au commerce électronique.",

        summaryEn:
            "Introductory course on the legal dimensions of computing, software, and the Internet. It helped me understand the main laws and issues related to intellectual property, contracts, personal data protection, software licensing, domain names, and electronic commerce.",

        technologies: [
            "Propriété intellectuelle",
            "Protection des données",
            "Licences logicielles",
            "Commerce électronique",
            "Droit du numérique",
        ],

        topicsFr: [
            "Impact de l’informatique sur le droit",
            "Notions juridiques de base",
            "Juridiction et territorialité",
            "Droit civil et droit pénal",
            "Propriété intellectuelle en informatique",
            "Droit d’auteur",
            "Brevets",
            "Marques de commerce",
            "Noms de domaine",
            "Contrats liés à l’informatique",
            "Responsabilité dans un contexte informatique",
            "Cadre juridique des technologies de l’information",
            "Protection des renseignements personnels",
            "Vie privée dans les secteurs public et privé",
            "Accès à l’information",
            "Licences de produits informatiques",
            "Aspects légaux particuliers à Internet",
            "Enjeux juridiques du commerce électronique",
            "Analyse de situations de travail pour prévenir les risques juridiques",
        ],

        topicsEn: [
            "Impact of computing on law",
            "Basic legal concepts",
            "Jurisdiction and territoriality",
            "Civil law and criminal law",
            "Intellectual property in computing",
            "Copyright",
            "Patents",
            "Trademarks",
            "Domain names",
            "Contracts related to computing",
            "Liability in a computing context",
            "Legal framework of information technologies",
            "Protection of personal information",
            "Privacy in public and private sectors",
            "Access to information",
            "Software licensing",
            "Legal issues specific to the Internet",
            "Legal issues in electronic commerce",
            "Analyzing workplace situations to prevent legal risks",
        ],

        workFr: [
            "Travail de session en équipe sur la protection d’un produit informatique",
            "Analyse et documentation d’une démarche liée à une marque, un produit logiciel ou Internet",
            "Lectures et études de cas juridiques",
            "Examen final avec documentation permise",
        ],

        workEn: [
            "Team session project on the protection of a computing product",
            "Analysis and documentation of an approach related to a trademark, software product, or Internet context",
            "Readings and legal case studies",
            "Final exam with permitted documentation",
        ],

        screenshots: [],
    },
    {
        slug: "sdd1003-gestion-entrepots-donnees",
        code: "SDD1003",
        category: "Data",

        titleFr: "Gestion des entrepôts des données et programmation mobile",
        titleEn: "Data Warehouse Management and Mobile Programming",

        sessionFr: "Automne 2025",
        sessionEn: "Fall 2025",

        summaryFr:
            "Cours portant sur les bases de données non relationnelles, la modélisation de données massives et leur exploitation dans des applications Web ou mobiles. Le cours m’a permis de comprendre les différences entre bases relationnelles et NoSQL, d’utiliser MongoDB, de modéliser des schémas non normalisés, et de manipuler des données à grande échelle dans une perspective orientée data.",

        summaryEn:
            "Course focused on non-relational databases, large-scale data modeling, and their use in web or mobile applications. It helped me understand the differences between relational and NoSQL databases, use MongoDB, model non-normalized schemas, and manipulate large-scale data from a data-oriented perspective.",

        technologies: [
            "MongoDB",
            "NoSQL",
            "NewSQL",
            "MongoDB Atlas",
            "Data Modeling",
        ],

        topicsFr: [
            "Différences entre bases de données relationnelles et non relationnelles",
            "Introduction aux bases de données NoSQL",
            "Introduction à MongoDB",
            "Manipulation de données non normalisées",
            "Conception de bases de données non relationnelles",
            "Modélisation des données et conception de schémas",
            "Bases de données orientées documents",
            "Bases de données clé-valeur",
            "Bases de données à larges colonnes",
            "Architecture des données",
            "Optimisation des requêtes",
            "Sharding",
            "Concepts d’agrégation",
            "Visualisation des données avec MongoDB Atlas",
            "Sélection et description de jeux de données",
            "Requêtes sur des données massives",
            "Simulation de données avec MongoDB",
            "Utilisation des données NoSQL dans des applications Web ou mobiles",
            "Projet final orienté données et présentation orale",
        ],

        topicsEn: [
            "Differences between relational and non-relational databases",
            "Introduction to NoSQL databases",
            "Introduction to MongoDB",
            "Manipulation of non-normalized data",
            "Design of non-relational databases",
            "Data modeling and schema design",
            "Document-oriented databases",
            "Key-value databases",
            "Wide-column databases",
            "Data architecture",
            "Query optimization",
            "Sharding",
            "Aggregation concepts",
            "Data visualization with MongoDB Atlas",
            "Selection and description of datasets",
            "Queries on large-scale data",
            "Data simulation with MongoDB",
            "Using NoSQL data in web or mobile applications",
            "Final data-oriented project and oral presentation",
        ],

        workFr: [
            "TP1 avec présentation et rapport préliminaire",
            "Examen intra et/ou présentation sur la visualisation et les requêtes",
            "Projet final avec présentation orale et rapport",
            "Manipulation de données avec MongoDB et Atlas",
            "Analyse d’une problématique orientée données",
        ],

        workEn: [
            "Lab 1 with presentation and preliminary report",
            "Midterm exam and/or presentation on visualization and queries",
            "Final project with oral presentation and report",
            "Data manipulation with MongoDB and Atlas",
            "Analysis of a data-oriented problem",
        ],

        screenshots: [],
    },
    {
        slug: "tin1003-science-technologie-societe",
        code: "TIN1003",
        category: "Société",

        titleFr: "Science, technologie et société",
        titleEn: "Science, Technology and Society",

        sessionFr: "Automne 2025",
        sessionEn: "Fall 2025",

        summaryFr:
            "Cours de réflexion critique sur les rapports entre science, technologie et société. Le cours m’a permis d’examiner les impacts sociaux, éthiques et philosophiques des innovations scientifiques et technologiques, d’analyser des enjeux comme la responsabilité sociale, la viabilité des technologies nouvelles, et de développer une pensée structurée sur les dilemmes contemporains liés aux STIM et à l’intelligence artificielle.",

        summaryEn:
            "Critical thinking course on the relationships between science, technology, and society. It helped me examine the social, ethical, and philosophical impacts of scientific and technological innovation, analyze issues such as social responsibility and the viability of new technologies, and develop structured thinking on contemporary dilemmas related to STEM and artificial intelligence.",

        technologies: [
            "Éthique",
            "Philosophie de la technique",
            "Responsabilité sociale",
            "Analyse de risque",
            "IA et société",
        ],

        topicsFr: [
            "Éthique et science",
            "Fondements de l’éthique en STIM",
            "Théories éthiques normatives",
            "Utilitarisme",
            "Déontologie",
            "Perspectives globales sur l’éthique",
            "Philosophie de la technique",
            "Qualité de vie et technologie",
            "Éthique professionnelle",
            "Réflexion critique sur la viabilité sociale des technologies",
            "Normativité de la technologie",
            "Méthodologies d’analyse de risque",
            "Formes de risques : physiques, personnels et sociaux",
            "Modèles de prise de décision",
            "Allocation de ressources technologiques",
            "Implantation éthique de nouvelles technologies",
            "Responsabilité sociale des professionnels des STIM",
            "Impacts inducteurs et destructeurs des innovations",
            "Enjeux éthiques de l’intelligence artificielle",
            "Débats sur les dilemmes contemporains liés à la science et à la technologie",
            "Analyse d’exemples concrets reliant technologie et société",
            "Pratique réflexive et synthèse critique des apprentissages",
        ],

        topicsEn: [
            "Ethics and science",
            "Foundations of ethics in STEM",
            "Normative ethical theories",
            "Utilitarianism",
            "Deontology",
            "Global perspectives on ethics",
            "Philosophy of technology",
            "Quality of life and technology",
            "Professional ethics",
            "Critical reflection on the social viability of technologies",
            "Normativity of technology",
            "Risk analysis methodologies",
            "Forms of risk: physical, personal, and social",
            "Decision-making models",
            "Allocation of technological resources",
            "Ethical implementation of new technologies",
            "Social responsibility of STEM professionals",
            "Constructive and destructive impacts of innovation",
            "Ethical issues in artificial intelligence",
            "Debates on contemporary dilemmas related to science and technology",
            "Analysis of concrete examples linking technology and society",
            "Reflective practice and critical synthesis of learning",
        ],

        workFr: [
            "Exercices méthodologiques préparatoires",
            "Activités notées en classe et à la maison",
            "Lectures critiques et analyses philosophiques",
            "Travaux individuels et quelques activités en équipe",
            "Examen final sur table",
            "Bilan réflexif des apprentissages",
        ],

        workEn: [
            "Preparatory methodological exercises",
            "Graded in-class and take-home activities",
            "Critical readings and philosophical analyses",
            "Individual work and some team activities",
            "Final in-class exam",
            "Reflective learning synthesis",
        ],

        screenshots: [],
    },
    {
        slug: "inf1011-genie-logiciel",
        code: "INF1011",
        category: "Logiciel",

        titleFr: "Génie logiciel",
        titleEn: "Software Engineering",

        sessionFr: "Automne 2025",
        sessionEn: "Fall 2025",

        summaryFr:
            "Cours centré sur les principes fondamentaux du génie logiciel et sur la production de logiciels de qualité. Le cours m’a permis d’approfondir les notions de conception réutilisable et maintenable, d’assurance qualité, de tests, de gestion de projet logiciel et d’évolution du logiciel, tout en appliquant des patrons et principes de conception dans un projet de session.",

        summaryEn:
            "Course focused on the fundamental principles of software engineering and the production of quality software. It helped me deepen my understanding of reusable and maintainable design, quality assurance, testing, software project management, and software evolution, while applying design patterns and design principles in a session project.",

        technologies: [
            "UML",
            "GRASP",
            "SOLID",
            "Design Patterns",
            "Tests unitaires",
        ],

        topicsFr: [
            "Principes et concepts fondamentaux du génie logiciel",
            "Produit logiciel et caractéristiques de qualité",
            "Processus de génie logiciel",
            "Modèles de cycle de vie",
            "Prototypage",
            "Normes et maturité des processus",
            "Processus léger et méthodes agiles",
            "Encapsulation, types et interfaces",
            "Composition versus héritage",
            "Tests unitaires",
            "Inversion de dépendance",
            "Principes de conception GRASP",
            "Principes de conception SOLID",
            "Réutilisation de logiciel",
            "Patrons de conception",
            "Programmation orientée objet",
            "Autres paradigmes de programmation",
            "Validation et vérification",
            "Processus de test : techniques, stratégies, planification et réalisation",
            "Qualité logicielle et métriques",
            "Contrôle de la qualité",
            "Gestion de projets logiciels",
            "Maintenance et évolution du logiciel",
            "Réingénierie",
            "Documentation technique",
            "Travail d’équipe sur un projet logiciel",
        ],

        topicsEn: [
            "Fundamental principles and concepts of software engineering",
            "Software product and quality characteristics",
            "Software engineering processes",
            "Lifecycle models",
            "Prototyping",
            "Standards and process maturity",
            "Lightweight processes and agile methods",
            "Encapsulation, types, and interfaces",
            "Composition versus inheritance",
            "Unit testing",
            "Dependency inversion",
            "GRASP design principles",
            "SOLID design principles",
            "Software reuse",
            "Design patterns",
            "Object-oriented programming",
            "Other programming paradigms",
            "Validation and verification",
            "Testing process: techniques, strategies, planning, and execution",
            "Software quality and metrics",
            "Quality control",
            "Software project management",
            "Software maintenance and evolution",
            "Reengineering",
            "Technical documentation",
            "Teamwork on a software project",
        ],

        workFr: [
            "Projet de session en équipe",
            "Phase 1 du projet avec présentation",
            "Phase 2 du projet avec présentation finale",
            "Études de cas et exercices sur les principes de conception",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Team session project",
            "Project phase 1 with presentation",
            "Project phase 2 with final presentation",
            "Case studies and exercises on design principles",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "sdd1004-apprentissage-automatique-applications",
        code: "SDD1004",
        category: "Data",
        status: "Prévu 2026",

        titleFr: "Apprentissage automatique et applications",
        titleEn: "Machine Learning and Applications",

        sessionFr: "Hiver 2026",
        sessionEn: "Winter 2026",

        summaryFr:
            "Cours d’introduction avancée à l’apprentissage automatique, couvrant à la fois des approches causales et non causales ainsi que les bases de l’apprentissage profond. Le cours vise à appliquer des algorithmes de machine learning à différents types de données, à comprendre les enjeux d’entraînement et de validation des modèles, et à explorer des méthodes modernes orientées données.",

        summaryEn:
            "Advanced introductory course in machine learning covering both causal and non-causal approaches as well as the foundations of deep learning. The course aims to apply machine learning algorithms to different types of data, understand model training and validation issues, and explore modern data-driven methods.",

        technologies: [
            "Machine Learning",
            "Causal Inference",
            "Deep Learning",
            "KNN",
            "SVM",
            "Gaussian Processes",
        ],

        topicsFr: [
            "Cadre théorique et pratique de l’apprentissage automatique",
            "Historique des probabilités",
            "Introduction au raisonnement causal",
            "Découverte causale",
            "Utilisation de modèles causaux sur les données",
            "Apprentissage automatique non causal",
            "Apprentissage automatique causal",
            "Entraînement et validation de modèles",
            "Méthodes basées sur les données",
            "K plus proches voisins (KNN)",
            "Régression linéaire",
            "Régression linéaire généralisée",
            "Machines à vecteurs de support (SVM)",
            "Mixtures de gaussiennes",
            "Processus gaussiens",
            "Méthodes à noyaux",
            "Application de modèles à différents types de données",
            "Introduction aux algorithmes d’apprentissage profond",
            "Projet final appliqué sur données réelles",
        ],

        topicsEn: [
            "Theoretical and practical framework for machine learning",
            "History of probability",
            "Introduction to causal reasoning",
            "Causal discovery",
            "Use of causal models on data",
            "Non-causal machine learning",
            "Causal machine learning",
            "Model training and validation",
            "Data-driven methods",
            "K-nearest neighbors (KNN)",
            "Linear regression",
            "Generalized linear regression",
            "Support Vector Machines (SVM)",
            "Gaussian mixtures",
            "Gaussian processes",
            "Kernel methods",
            "Applying models to different types of data",
            "Introduction to deep learning algorithms",
            "Final project applied to real-world data",
        ],

        workFr: [
            "TP1 sur une problématique orientée causalité",
            "Sélection et description d’un jeu de données",
            "Présentation d’une méthode causale",
            "Examen intra",
            "Projet final avec présentation",
        ],

        workEn: [
            "Lab 1 on a causality-oriented problem",
            "Selection and description of a dataset",
            "Presentation of a causal method",
            "Midterm exam",
            "Final project with presentation",
        ],

        screenshots: [],
    },
    {
        slug: "inf1020-commerce-electronique",
        code: "INF1020",
        category: "Web",
        status: "Prévu 2026",

        titleFr: "Commerce électronique",
        titleEn: "Electronic Commerce",

        sessionFr: "Hiver 2026",
        sessionEn: "Winter 2026",

        summaryFr:
            "Cours d’introduction au commerce électronique, centré sur les concepts de base des affaires numériques et leur mise en pratique dans la réalisation d’un projet de site transactionnel. Le cours vise à intégrer plusieurs acquis techniques et fonctionnels pour concevoir une solution e-commerce performante, incluant modélisation, interface, paiement en ligne, marketing et gestion de projet.",

        summaryEn:
            "Introductory electronic commerce course focused on core digital business concepts and their practical application through the development of a transactional website project. The course aims to integrate several technical and functional skills to design an effective e-commerce solution, including data modeling, interface design, online payment, marketing, and project management.",

        technologies: [
            "E-commerce",
            "Web",
            "Paiement en ligne",
            "Marketing digital",
            "Site transactionnel",
        ],

        topicsFr: [
            "Historique et concepts du commerce électronique",
            "Digitalisation des affaires",
            "Modèles d’affaires numériques",
            "Processus et stratégies B2B",
            "Rôle des intermédiaires indépendants",
            "Environnement régulateur du commerce électronique",
            "EDI, e-commerce et Internet",
            "Normes, protocoles et langages Internet",
            "Risques des systèmes non sécurisés",
            "Risques de gestion",
            "Cryptographie et authentification",
            "Murs coupe-feu",
            "Mécanismes de paiement en ligne",
            "Agents intelligents",
            "Marketing sur le Web",
            "Créativité et élaboration d’un concept d’affaires",
            "Développement d’un site transactionnel",
            "Modélisation de données pour le e-commerce",
            "Développement des formulaires et interfaces",
            "Conception d’interfaces Web ou mobile liées à une solution e-commerce",
            "Gestion d’un projet d’équipe en informatique",
            "Réalisation par phases d’un projet de commerce électronique",
        ],

        topicsEn: [
            "History and concepts of electronic commerce",
            "Digital transformation of business",
            "Digital business models",
            "B2B processes and strategies",
            "Role of independent intermediaries",
            "Regulatory environment of e-commerce",
            "EDI, e-commerce, and the Internet",
            "Internet standards, protocols, and languages",
            "Risks of insecure systems",
            "Management risks",
            "Cryptography and authentication",
            "Firewalls",
            "Online payment mechanisms",
            "Intelligent agents",
            "Web marketing",
            "Creativity techniques and business idea development",
            "Development of a transactional website",
            "Data modeling for e-commerce",
            "Development of forms and interfaces",
            "Design of web or mobile interfaces connected to an e-commerce solution",
            "Managing a team project in computing",
            "Phased delivery of an e-commerce project",
        ],

        workFr: [
            "Projet de session en équipe subdivisé en trois phases",
            "Phase 1 : modélisation et/ou marketing",
            "Phase 2 : développement des formulaires et premières interfaces",
            "Phase 3 : développement avancé et présentation finale",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Team session project divided into three phases",
            "Phase 1: modeling and/or marketing",
            "Phase 2: development of forms and first interfaces",
            "Phase 3: advanced development and final presentation",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1030-developpement-applications-mobiles",
        code: "INF1030",
        category: "Mobile",
        status: "Prévu 2026",

        titleFr: "Introduction au développement d’applications mobiles (Android)",
        titleEn: "Introduction to Mobile Application Development (Android)",

        sessionFr: "Hiver 2026",
        sessionEn: "Winter 2026",

        summaryFr:
            "Cours d’introduction au développement d’applications mobiles Android, centré sur les bonnes pratiques de conception, le cycle de vie des applications, les interfaces mobiles et les communications client-serveur. Le cours vise à me permettre de concevoir des applications Android fonctionnelles, structurées et collaboratives, en utilisant Java, Android Studio et Git.",

        summaryEn:
            "Introductory course on Android mobile application development focused on best practices, application lifecycle, mobile interfaces, and client-server communication. The course aims to help me design functional, structured, and collaborative Android applications using Java, Android Studio, and Git.",

        technologies: [
            "Android",
            "Java",
            "Android Studio",
            "Git",
            "GitLab",
            "MVC",
        ],

        topicsFr: [
            "Cycle de développement d’applications mobiles",
            "Développement Android avec Java",
            "Android Studio",
            "Travail collaboratif avec Git et GitLab",
            "Activités et fragments",
            "Menus et dialogues",
            "Interfaces utilisateur mobiles",
            "Data binding",
            "Interfaces dynamiques",
            "Sheets et composants d’interface",
            "Préférences",
            "Internationalisation (i18n)",
            "Thèmes Android",
            "Caméra, photos et fichiers",
            "Cycle de vie des activités",
            "Architecture App / ViewModel",
            "Traitement asynchrone de l’information",
            "Threads",
            "Room",
            "Transactions client-serveur",
            "Communication avec un Web Service de manière asynchrone et sécuritaire",
            "Localisation et cartes",
            "Services Android",
            "Notifications FCM",
            "Principes de conception et design patterns",
            "Projet mobile fonctionnel en équipe",
        ],

        topicsEn: [
            "Mobile application development lifecycle",
            "Android development with Java",
            "Android Studio",
            "Collaborative work with Git and GitLab",
            "Activities and fragments",
            "Menus and dialogs",
            "Mobile user interfaces",
            "Data binding",
            "Dynamic interfaces",
            "Sheets and UI components",
            "Preferences",
            "Internationalization (i18n)",
            "Android themes",
            "Camera, photos, and files",
            "Activity lifecycle",
            "App / ViewModel architecture",
            "Asynchronous information processing",
            "Threads",
            "Room",
            "Client-server transactions",
            "Asynchronous and secure communication with a Web Service",
            "Localization and maps",
            "Android services",
            "FCM notifications",
            "Design principles and design patterns",
            "Functional team-based mobile project",
        ],

        workFr: [
            "Travail 1 / livrable 1 en équipe",
            "Travail 2 / livrable 2 en équipe",
            "Projet de session mobile avec jalons",
            "Démonstrations et présentations de projet",
            "Examen intra",
            "Examen final",
        ],

        workEn: [
            "Assignment 1 / deliverable 1 in team",
            "Assignment 2 / deliverable 2 in team",
            "Mobile session project with milestones",
            "Project demos and presentations",
            "Midterm exam",
            "Final exam",
        ],

        screenshots: [],
    },
    {
        slug: "inf1016-stage-informatique-2",
        code: "INF1016",
        status: "Prévu 2026",
        category: "Stage",
        technologies: [],
        titleFr: "Stage d’informatique II",
        titleEn: "Computer Science Internship II",
        sessionFr: "Été 2026",
        sessionEn: "Summer 2026",
        summaryFr: "Résumé global à compléter .",
        summaryEn: "Global summary to be completed .",
        topicsFr: [],
        topicsEn: [],
        workFr: [],
        workEn: [],
        screenshots: [],
    },



];

export type PriorDegree = {
    slug: string;
    schoolFr: string;
    schoolEn: string;
    countryFr: string;
    countryEn: string;
    degreeFr: string;
    degreeEn: string;
    fieldFr: string;
    fieldEn: string;
    periodFr: string;
    periodEn: string;
    summaryFr: string;
    summaryEn: string;
    wesFr?: string;
    wesEn?: string;
    years: {
        yearFr: string;
        yearEn: string;
        semesters: {
            semesterFr: string;
            semesterEn: string;
            courses: {
                code: string;
                titleFr: string;
                titleEn: string;
            }[];
            topicsFr: string[];
            topicsEn: string[];
        }[];
    }[];

};

export const priorDegrees: PriorDegree[] = [
    {
        slug: "uds-licence-mathematiques-appliquees",
        schoolFr: "Université de Dschang",
        schoolEn: "University of Dschang",
        countryFr: "Cameroun",
        countryEn: "Cameroon",

        degreeFr: "Licence",
        degreeEn: "Bachelor’s Degree",

        fieldFr: "Mathématiques appliquées",
        fieldEn: "Applied Mathematics",

        periodFr: "2019 — 2023",
        periodEn: "2019 — 2023",

        summaryFr:
            "Formation complète en mathématiques appliquées couvrant l’algèbre, l’analyse, les probabilités, les statistiques, les équations différentielles, l’analyse numérique, la topologie, la géométrie, l’informatique et plusieurs applications scientifiques. Ce parcours m’a donné une base théorique rigoureuse, une forte capacité d’abstraction et une solide aptitude à la modélisation mathématique, au calcul scientifique et à l’analyse quantitative.",

        summaryEn:
            "Complete training in applied mathematics covering algebra, analysis, probability, statistics, differential equations, numerical analysis, topology, geometry, computing, and several scientific applications. This program gave me a rigorous theoretical foundation, strong abstraction skills, and solid abilities in mathematical modeling, scientific computing, and quantitative analysis.",

        wesFr:
            "Évaluation WES : équivalence canadienne reconnue comme Bachelor’s degree (four years).",

        wesEn:
            "WES evaluation: Canadian equivalency recognized as a Bachelor’s degree (four years).",

        years: [
            {
                yearFr: "Licence 1",
                yearEn: "Year 1",
                semesters: [
                    {
                        semesterFr: "Semestre LMD 1",
                        semesterEn: "LMD Semester 1",
                        courses: [
                            {
                                code: "MAT111",
                                titleFr: "Algèbre I : Concepts algébriques fondamentaux",
                                titleEn: "Algebra I: Fundamental Algebraic Concepts",
                            },
                            {
                                code: "MAT121",
                                titleFr: "Analyse I : Analyse de la droite vectorielle réelle",
                                titleEn: "Analysis I: Analysis of the Real Vector Line",
                            },
                            {
                                code: "MAT131",
                                titleFr: "Introduction à l’informatique",
                                titleEn: "Introduction to Computer Science",
                            },
                            {
                                code: "MAT141",
                                titleFr: "Analyse vectorielle",
                                titleEn: "Vector Analysis",
                            },
                            {
                                code: "MAT151a",
                                titleFr: "Langue anglaise I",
                                titleEn: "English Language I",
                            },
                            {
                                code: "MAT161",
                                titleFr: "Mécanique I",
                                titleEn: "Mechanics I",
                            },
                        ],
                        topicsFr: [
                            "Fondements de l’algèbre et du raisonnement mathématique : ensembles, relations, applications, opérations et premières structures algébriques.",
                            "Étude des fonctions réelles d’une variable réelle : limites, continuité, variations et lecture analytique des comportements des fonctions.",
                            "Premiers outils de géométrie et d’analyse vectorielle : vecteurs, opérations vectorielles, interprétation géométrique dans le plan et l’espace.",
                            "Introduction aux concepts informatiques : représentation de l’information, logique de traitement, bases de l’algorithmique et de la programmation.",
                            "Applications mathématiques à la mécanique classique : cinématique, dynamique et modélisation de phénomènes physiques simples.",
                            "Développement d’un vocabulaire scientifique en anglais utile à la lecture et à la communication académique.",
                        ],
                        topicsEn: [
                            "Foundations of algebra and mathematical reasoning: sets, relations, mappings, operations, and first algebraic structures.",
                            "Study of real-valued functions of one real variable: limits, continuity, variations, and analytical reading of function behavior.",
                            "First tools in geometry and vector analysis: vectors, vector operations, and geometric interpretation in the plane and space.",
                            "Introduction to computing concepts: information representation, processing logic, and fundamentals of algorithms and programming.",
                            "Mathematical applications to classical mechanics: kinematics, dynamics, and modeling of simple physical phenomena.",
                            "Development of scientific English vocabulary for academic reading and communication.",
                        ],
                    },
                    {
                        semesterFr: "Semestre LMD 2",
                        semesterEn: "LMD Semester 2",
                        courses: [
                            {
                                code: "MAT112",
                                titleFr: "Algèbre II : Algèbre linéaire",
                                titleEn: "Algebra II: Linear Algebra",
                            },
                            {
                                code: "MAT122",
                                titleFr: "Analyse II : Calcul différentiel",
                                titleEn: "Analysis II: Differential Calculus",
                            },
                            {
                                code: "MAT132",
                                titleFr: "Calcul intégral et équations différentielles ordinaires",
                                titleEn: "Integral Calculus and Ordinary Differential Equations",
                            },
                            {
                                code: "MAT142",
                                titleFr: "Statistiques I",
                                titleEn: "Statistics I",
                            },
                            {
                                code: "MAT152",
                                titleFr: "Introduction à l’algorithmique et programmation",
                                titleEn: "Introduction to Algorithms and Programming",
                            },
                            {
                                code: "MAT162",
                                titleFr: "Électrostatique",
                                titleEn: "Electrostatics",
                            },
                        ],
                        topicsFr: [
                            "Algèbre linéaire : matrices, déterminants, systèmes linéaires, espaces vectoriels, bases, dimension et applications linéaires.",
                            "Calcul différentiel : dérivation, théorèmes fondamentaux, étude locale et globale des fonctions, optimisation élémentaire.",
                            "Calcul intégral : primitives, intégrales définies, techniques d’intégration et interprétations géométriques et physiques.",
                            "Équations différentielles ordinaires : résolution d’équations du premier ordre et de certains modèles linéaires simples.",
                            "Statistiques descriptives : organisation, synthèse et interprétation de données quantitatives à l’aide d’indicateurs fondamentaux.",
                            "Algorithmique et programmation : variables, structures de contrôle, tableaux, fonctions, décomposition logique d’un problème et écriture de programmes simples.",
                            "Applications physiques via l’électrostatique et modélisation mathématique de phénomènes électriques élémentaires.",
                        ],
                        topicsEn: [
                            "Linear algebra: matrices, determinants, linear systems, vector spaces, bases, dimension, and linear mappings.",
                            "Differential calculus: differentiation, fundamental theorems, local and global study of functions, and elementary optimization.",
                            "Integral calculus: antiderivatives, definite integrals, integration techniques, and geometric and physical interpretations.",
                            "Ordinary differential equations: solving first-order equations and selected simple linear models.",
                            "Descriptive statistics: organizing, summarizing, and interpreting quantitative data using core indicators.",
                            "Algorithms and programming: variables, control structures, arrays, functions, logical problem decomposition, and writing simple programs.",
                            "Physical applications through electrostatics and mathematical modeling of elementary electrical phenomena.",
                        ],
                    },
                ],
            },
            {
                yearFr: "Licence 2",
                yearEn: "Year 2",
                semesters: [
                    {
                        semesterFr: "Semestre LMD 3",
                        semesterEn: "LMD Semester 3",
                        courses: [
                            {
                                code: "MAT211",
                                titleFr: "Algèbre linéaire II",
                                titleEn: "Linear Algebra II",
                            },
                            {
                                code: "MAT221",
                                titleFr: "Analyse III : Espaces métriques et séries",
                                titleEn: "Analysis III: Metric Spaces and Series",
                            },
                            {
                                code: "MAT231",
                                titleFr: "Calcul différentiel sur ℝn",
                                titleEn: "Differential Calculus on ℝn",
                            },
                            {
                                code: "MAT241",
                                titleFr: "Calcul des probabilités",
                                titleEn: "Probability Calculation",
                            },
                            {
                                code: "MAT261",
                                titleFr: "Théorie des comportements",
                                titleEn: "Theory of Behavior",
                            },
                            {
                                code: "MAT251a",
                                titleFr: "Langue anglaise II",
                                titleEn: "English Language II",
                            },
                        ],
                        topicsFr: [
                            "Approfondissement de l’algèbre linéaire : réduction d’endomorphismes, valeurs propres, vecteurs propres et structure des transformations linéaires.",
                            "Espaces métriques et convergence : distance, voisinages, suites, complétude et premiers cadres abstraits de l’analyse moderne.",
                            "Séries numériques et comportements asymptotiques utiles à l’analyse et aux approximations.",
                            "Calcul différentiel sur ℝn : fonctions de plusieurs variables, dérivées partielles, gradient, différentielle et extrema.",
                            "Probabilités : espaces probabilisés, variables aléatoires, lois usuelles, espérance, variance et indépendance.",
                            "Approche analytique ou modélisatrice de comportements selon le contenu local du programme.",
                            "Consolidation de l’anglais scientifique et académique.",
                        ],
                        topicsEn: [
                            "Advanced linear algebra: reduction of endomorphisms, eigenvalues, eigenvectors, and the structure of linear transformations.",
                            "Metric spaces and convergence: distance, neighborhoods, sequences, completeness, and the first abstract frameworks of modern analysis.",
                            "Numerical series and asymptotic behavior useful in analysis and approximation.",
                            "Differential calculus on ℝn: multivariable functions, partial derivatives, gradient, differential, and extrema.",
                            "Probability: probability spaces, random variables, common distributions, expectation, variance, and independence.",
                            "Analytical or modeling-oriented study of behavior depending on the local program content.",
                            "Strengthening scientific and academic English.",
                        ],
                    },
                    {
                        semesterFr: "Semestre LMD 4",
                        semesterEn: "LMD Semester 4",
                        courses: [
                            {
                                code: "MAT212",
                                titleFr: "Algèbre linéaire III",
                                titleEn: "Linear Algebra III",
                            },
                            {
                                code: "MAT222",
                                titleFr: "Analyse IV : Calcul intégral sur ℝn",
                                titleEn: "Analysis IV: Integral Calculus on ℝn",
                            },
                            {
                                code: "MAT232",
                                titleFr: "Calcul scientifique",
                                titleEn: "Scientific Computation",
                            },
                            {
                                code: "MAT242",
                                titleFr: "Architectures des ordinateurs",
                                titleEn: "Computer Architectures",
                            },
                            {
                                code: "MAT252",
                                titleFr: "Statistiques II",
                                titleEn: "Statistics II",
                            },
                            {
                                code: "MAT272",
                                titleFr: "Théorie des marchés",
                                titleEn: "Market Theory",
                            },
                        ],
                        topicsFr: [
                            "Algèbre linéaire avancée : structures vectorielles plus poussées, réduction, interprétation matricielle et outils de calcul abstrait.",
                            "Calcul intégral sur ℝn : intégrales multiples, domaines d’intégration, changements de variables et interprétations géométriques.",
                            "Calcul scientifique et méthodes numériques : approximation, résolution numérique d’équations, stabilité et erreur.",
                            "Architecture des ordinateurs : représentation de l’information, mémoire, processeur, organisation matérielle et logique machine.",
                            "Statistiques II : approfondissement de l’inférence, de l’estimation et de l’analyse quantitative des données.",
                            "Théorie des marchés : lecture quantitative et modélisation de mécanismes économiques ou décisionnels selon le programme suivi.",
                        ],
                        topicsEn: [
                            "Advanced linear algebra: deeper vector structures, reduction, matrix interpretation, and abstract computational tools.",
                            "Integral calculus on ℝn: multiple integrals, integration domains, change of variables, and geometric interpretations.",
                            "Scientific computing and numerical methods: approximation, numerical equation solving, stability, and error.",
                            "Computer architecture: information representation, memory, processor, hardware organization, and machine logic.",
                            "Statistics II: deeper inference, estimation, and quantitative data analysis.",
                            "Market theory: quantitative reading and modeling of economic or decision mechanisms depending on the track followed.",
                        ],
                    },
                ],
            },
            {
                yearFr: "Licence 3",
                yearEn: "Year 3",
                semesters: [
                    {
                        semesterFr: "Semestre LMD 5",
                        semesterEn: "LMD Semester 5",
                        courses: [
                            {
                                code: "MAT311",
                                titleFr: "Topologie générale",
                                titleEn: "General Topology",
                            },
                            {
                                code: "MAT321",
                                titleFr: "Groupes et anneaux",
                                titleEn: "Groups and Rings",
                            },
                            {
                                code: "MAT331",
                                titleFr: "Géométrie affine et projective",
                                titleEn: "Affine and Projective Geometry",
                            },
                            {
                                code: "MAT341",
                                titleFr: "Mesures et intégration",
                                titleEn: "Measure and Integration",
                            },
                            {
                                code: "MAT351",
                                titleFr: "Équations différentielles",
                                titleEn: "Differential Equations",
                            },
                            {
                                code: "MAT361a",
                                titleFr: "Langue anglaise III",
                                titleEn: "English Language III",
                            },
                        ],
                        topicsFr: [
                            "Topologie générale : ouverts, fermés, continuité, compacité, connexité et langage abstrait de l’analyse moderne.",
                            "Algèbre abstraite : groupes, anneaux, morphismes et structures fondamentales de l’algèbre moderne.",
                            "Géométrie affine et projective : transformations, invariants et modélisation géométrique structurée.",
                            "Mesure et intégration : fonctions mesurables, cadre de l’intégration moderne et outils avancés utiles à l’analyse et aux probabilités.",
                            "Équations différentielles avancées : systèmes, comportements qualitatifs et modélisation continue.",
                            "Anglais scientifique avancé pour la lecture et la communication de contenus académiques.",
                        ],
                        topicsEn: [
                            "General topology: open and closed sets, continuity, compactness, connectedness, and the abstract language of modern analysis.",
                            "Abstract algebra: groups, rings, morphisms, and the core structures of modern algebra.",
                            "Affine and projective geometry: transformations, invariants, and structured geometric modeling.",
                            "Measure and integration: measurable functions, the framework of modern integration, and advanced tools useful in analysis and probability.",
                            "Advanced differential equations: systems, qualitative behavior, and continuous modeling.",
                            "Advanced scientific English for reading and communicating academic content.",
                        ],
                    },
                    {
                        semesterFr: "Semestre LMD 6",
                        semesterEn: "LMD Semester 6",
                        courses: [
                            {
                                code: "MAT312",
                                titleFr: "Calcul différentiel",
                                titleEn: "Differential Calculus",
                            },
                            {
                                code: "MAT322",
                                titleFr: "Variables complexes",
                                titleEn: "Complex Variables",
                            },
                            {
                                code: "MAT332",
                                titleFr: "Introduction à la géométrie différentielle",
                                titleEn: "Introduction to Differential Geometry",
                            },
                            {
                                code: "MAT342",
                                titleFr: "Analyse numérique",
                                titleEn: "Numerical Analysis",
                            },
                            {
                                code: "MAT352",
                                titleFr: "Théorie des ensembles",
                                titleEn: "Set Theory",
                            },
                            {
                                code: "MAT362",
                                titleFr: "Mathématiques financières",
                                titleEn: "Financial Mathematics",
                            },
                        ],
                        topicsFr: [
                            "Calcul différentiel avancé et approfondissement des outils analytiques utiles à la modélisation et à l’optimisation.",
                            "Variables complexes : nombres complexes, fonctions holomorphes et bases de l’analyse complexe.",
                            "Géométrie différentielle : étude locale des courbes, surfaces et objets différentiables.",
                            "Analyse numérique : discrétisation, approximation, résolution numérique, convergence et stabilité des méthodes.",
                            "Théorie des ensembles : fondements formels des mathématiques, relations, fonctions et structures ensemblistes.",
                            "Mathématiques financières : actualisation, intérêts, annuités, valorisation et modélisation quantitative en finance.",
                        ],
                        topicsEn: [
                            "Advanced differential calculus and deeper analytical tools useful for modeling and optimization.",
                            "Complex variables: complex numbers, holomorphic functions, and the foundations of complex analysis.",
                            "Differential geometry: local study of curves, surfaces, and differentiable objects.",
                            "Numerical analysis: discretization, approximation, numerical solving, convergence, and stability of methods.",
                            "Set theory: formal foundations of mathematics, relations, functions, and set-based structures.",
                            "Financial mathematics: discounting, interest, annuities, valuation, and quantitative financial modeling.",
                        ],
                    },
                ],
            },
        ],
    },
];
