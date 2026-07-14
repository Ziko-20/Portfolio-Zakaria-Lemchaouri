import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        experience: "Expérience",
        contact: "Contact",
        letsTalk: "Discutons"
      },
      hero: {
        available: "Disponible pour de nouvelles opportunités",
        availableBadge: "Disponible",
        title1: "Construire des applications web ",
        title_gradient: "robustes",
        title2: " de la base de données à l'interface.",
        subtitle: "Développeur Fullstack passionné par le web, motivé, curieux et prêt à apprendre rapidement pour contribuer à des projets ambitieux.",
        explore: "Explorer mes projets",
        cv: "Télécharger mon CV",
        scroll: "Défiler"
      },
      about: {
        label: "À propos",
        title1: "Passionné par la ",
        title_gradient: "création",
        title2: " d'applications web.",
        p1: "Développeur Full-Stack Junior et étudiant en Développement Digital à la Cité des Métiers et des Compétences (CMC) Rabat, après avoir effectué ma première année à l'ISTA NTIC Rabat, je suis passionné par la création d'applications web modernes, performantes et intuitives. Mon stage de fin d'études (PFE) m'a permis de développer une application back-office complète en suivant une méthodologie Agile, renforçant ainsi mes compétences en développement Full-Stack, en résolution de problèmes et en travail d'équipe.",
        p2: "Curieux et autodidacte, j'aime apprendre de nouvelles technologies et les mettre en pratique à travers des projets personnels. Je recherche aujourd'hui une opportunité qui me permettra de continuer à développer mes compétences, de contribuer à des projets innovants et d'évoluer dans un environnement stimulant.",
        softSkillsTitle: "Soft Skills",
        softSkills: ["Résolution de problèmes", "Communication", "Travail d'équipe", "Adaptabilité & Apprentissage continu", "Gestion du temps", "Souci du détail", "Auto-apprentissage"],
        passion1: "Développement Web",
        passion2: "Génie Logiciel",
        passion3: "Technologies Modernes"
      },
      skills: {
        label: "Compétences",
        title1: "Expertise ",
        title_gradient: "Technique",
        subtitle: "Outils et technologies que j'utilise au quotidien.",
        learning: "En cours d'apprentissage",
        technologiesLabel: "Technologies",
        toolsLabel: "Outils"
      },
      techstack: {
        label: "Tech Stack",
        title1: "Outils que j'",
        title_gradient: "utilise",
        subtitle: "Technologies et outils dans mon arsenal de développement."
      },
      projects: {
        label: "Projets",
        title1: "Projets ",
        title_gradient: "Récents",
        subtitle: "Un aperçu de mon travail axé sur la gestion de données et la création d'interfaces fluides.",
        viewAll: "Voir tous mes projets sur GitHub",
        watchDemo: "Voir la démo",
        inProgress: "En cours",
        categories: {
          web: "Application Web",
          fullstack: "Full Stack"
        },
        items: {
          p1_title: "Gestion Clients & Abonnements",
          p1_desc: "Application d'administration pour gérer les clients WordPress, suivre les abonnements, enregistrer les paiements et visualiser des statistiques via un dashboard interactif. Inclut un système de rôles et une interface multilingue FR/EN.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Application de productivité pour gérer des tâches au quotidien : suivi de l'accomplissement, édition du contenu et nettoyage de la liste. Inclut un système CRUD complet, la persistance locale (localStorage) et un design minimaliste.",
          p3_title: "SmartShop",
          p3_desc: "Application e-commerce complète de type marketplace, construite avec React (Vite) et Laravel 13 (API REST + Sanctum). Catalogue produits, panier, commandes, suivi des livraisons, paiement simulé et génération de reçus PDF. Espace admin complet avec dashboard analytique, gestion des stocks via triggers MySQL et authentification sécurisée par tokens.",
          p5_title: "Zakaria's Chatbot",
          p5_desc: "Chatbot web IA simple permettant aux utilisateurs de discuter en temps réel avec un LLM via une interface moderne. Utilise un backend Node.js pour gérer les requêtes API et intègre l'API Groq pour générer des réponses intelligentes avec le modèle LLaMA 3.3 70B.",
          p6_title: "Liste de Produits",
          p6_desc: "Application e-commerce débutant-friendly construite avec Next.js 14 et Tailwind CSS, utilisant la FakeStore API pour afficher des produits réels. Inclut un panier persistant via localStorage et une interface moderne.",
          p7_title: "Weather App",
          p7_desc: "Application météo simple et responsive consommant l'API open source Open-Meteo. Géocodage des villes, affichage de la température, ressenti, humidité, précipitations et vitesse du vent. Gestion des états de chargement et des erreurs, déploiement sur Vercel.",
          p8_title: "Let's Meet",
          p8_desc: "Application web de gestion d'événements avec 3 profils : Admin (gestion des utilisateurs, catégories, événements, export CSV), Visiteur (consultation, recherche par titre, filtre par catégorie) et Client (création d'événements, gestion des participants, favoris, participation avec téléchargement d'invitation PDF). Authentification requise pour les actions sensibles et envoi automatique d'emails de confirmation."
        }
      },
      experience: {
        label: "Parcours",
        title1: "Mon ",
        title_gradient: "Parcours",
        subtitle: "Expériences professionnelles et formation académique.",
        present: "Présent",
        professionalTitle: "Expérience Professionnelle",
        academicTitle: "Parcours Académique",
        items: {
          e1_role: "Stagiaire Développeur PHP",
          e1_company: "Wave Rabat",
          e1_type: "Stage PFE",
          e1_period: "Février 2025 – Mars 2025",
          e1_desc: "Stage de fin d'études (PFE) d'un mois au sein de l'entreprise Wave Rabat, spécialisée en développement PHP. Contribution à des projets web réels en environnement professionnel, découverte des bonnes pratiques de développement et renforcement des compétences techniques.",
          e2_role: "Diplôme Technicien Spécialisé — Développement Digital",
          e2_institution: "CMC Rabat",
          e2_period: "2025 – 2026",
          e2_status: "En cours",
          e2_desc: "Formation spécialisée en développement digital : programmation, développement web, technologies modernes. Stage pratique d'un mois prévu en février 2026.",
          e3_role: "1ère Année — Développement Digital",
          e3_institution: "ISTA NTIC Rabat",
          e3_period: "2024 – 2025",
          e3_desc: "Bases solides en algorithmique, développement web, bases de données et POO à travers des projets académiques et pratiques.",
          e4_role: "Baccalauréat Science Physique",
          e4_institution: "Lycée Abi Bakr",
          e4_period: "2024",
          e4_desc: "Baccalauréat en sciences physiques — formation axée sur les mathématiques, la logique et les sciences expérimentales."
        }
      },
      contact: {
        label: "Contact",
        title1: "Créons quelque chose d'",
        title_gradient: "épique",
        title2: ".",
        subtitle: "Ouvert aux nouvelles opportunités, stages et collaborations. N'hésitez pas à me contacter !",
        message: "Envoyer un e-mail",
        location: "Rabat, Maroc",
        sideNote: "Je suis ouvert aux nouvelles opportunités et aux projets freelance. N'hésitez pas à me contacter !",
        formName: "Votre nom",
        formEmail: "Email",
        formSubject: "Sujet",
        formMessage: "Message",
        sendBtn: "Envoyer le message",
        successTitle: "Message envoyé !",
        successMsg: "Je vous réponds dans les plus brefs délais.",
        errorMsg: "Erreur. Veuillez réessayer ou écrire directement par email."
      },
      footer: {
        rights: "Tous droits réservés.",
        location: "Développeur web basé à Rabat, Maroc 🇲🇦",
        navigation: "Navigation",
        connect: "Réseaux",
        backToTop: "Retour en haut",
        madeWith: "Fait avec"
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        letsTalk: "Let's Talk"
      },
      hero: {
        available: "Available for new opportunities",
        availableBadge: "Available",
        title1: "Building ",
        title_gradient: "robust",
        title2: " web applications from database to UI.",
        subtitle: "Passionate Fullstack Developer, motivated and eager to learn — ready to grow fast and contribute to meaningful projects.",
        explore: "Explore Work",
        cv: "Download CV",
        scroll: "Scroll"
      },
      about: {
        label: "About",
        title1: "Passionate about ",
        title_gradient: "creating",
        title2: " web apps.",
        p1: "As a Junior Full-Stack Developer and student in Digital Development at the Cité des Métiers et des Compétences (CMC) Rabat, after completing my first year at ISTA NTIC Rabat, I am passionate about creating modern, high-performance, and intuitive web applications. My end-of-studies internship (PFE) allowed me to develop a complete back-office application using Agile methodology, strengthening my skills in Full-Stack development, problem-solving, and teamwork.",
        p2: "Curious and self-taught, I enjoy learning new technologies and putting them into practice through personal projects. Today, I am looking for an opportunity that will allow me to continue developing my skills, contribute to innovative projects, and grow in a stimulating environment.",
        softSkillsTitle: "Soft Skills",
        softSkills: ["Problem-Solving", "Communication", "Teamwork", "Adaptability & Continuous Learning", "Time Management", "Attention to Detail", "Self-Learning"],
        passion1: "Web Development",
        passion2: "Software Engineering",
        passion3: "Modern Technologies"
      },
      skills: {
        label: "Skills",
        title1: "Technical ",
        title_gradient: "Expertise",
        subtitle: "Tools and technologies I use on a daily basis.",
        learning: "Currently learning",
        technologiesLabel: "Technologies",
        toolsLabel: "Tools"
      },
      techstack: {
        label: "Tech Stack",
        title1: "Tools I ",
        title_gradient: "Work With",
        subtitle: "Technologies and tools in my development arsenal."
      },
      projects: {
        label: "Projects",
        title1: "Recent ",
        title_gradient: "Projects",
        subtitle: "A glimpse of my work focused on data management and creating fluid interfaces.",
        viewAll: "View all projects on GitHub",
        watchDemo: "Watch Demo",
        inProgress: "In Progress",
        categories: {
          web: "Web Application / Back-office",
          fullstack: "Full Stack"
        },
        items: {
          p1_title: "Client & Subscription Management",
          p1_desc: "Admin application to manage WordPress clients, track subscriptions, record payments, and view statistics via an interactive dashboard. Includes a role system and a bilingual FR/EN interface.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Productivity application to manage daily tasks, track completion, edit content, and clear the list via a centralized interface. Includes a complete CRUD operations system, local data storage (localStorage), and a minimalist dark theme design.",
          p3_title: "SmartShop",
          p3_desc: "A complete marketplace-style e-commerce application built with React (Vite) and Laravel 13 (REST API + Sanctum). Product catalog, cart, orders, delivery tracking, simulated payment, and PDF receipt generation. Full admin panel with analytics dashboard, stock management via MySQL triggers, and token-based authentication.",
          p5_title: "Zakaria's Chatbot",
          p5_desc: "A simple AI-powered web chatbot that allows users to chat in real time with an LLM through a clean and modern interface. Uses a Node.js backend to handle API requests and integrates the Groq API to generate intelligent responses using the LLaMA 3.3 70B model.",
          p6_title: "Product List",
          p6_desc: "A beginner-friendly e-commerce app built with Next.js 14 and Tailwind CSS, using the FakeStore API to display real products. Features a persistent cart via localStorage and a clean modern interface.",
          p7_title: "Weather App",
          p7_desc: "A simple and responsive weather application consuming the open-source Open-Meteo API. City geocoding, display of temperature, feels-like, humidity, precipitation, and wind speed. Loading and error state management, deployed on Vercel.",
          p8_title: "Let's Meet",
          p8_desc: "Event management web application with 3 profiles: Admin (user management, categories, events, CSV export), Visitor (browsing, search by title, filter by category) and Client (event creation, participant management, favorites, participation with PDF invitation download). Authentication required for sensitive actions and automatic confirmation email sending."
        }
      },
      experience: {
        label: "Journey",
        title1: "My ",
        title_gradient: "Journey",
        subtitle: "Professional experience and academic background.",
        present: "Present",
        professionalTitle: "Professional Experience",
        academicTitle: "Academic Background",
        items: {
          e1_role: "PHP Developer Intern",
          e1_company: "Wave Rabat",
          e1_type: "PFE Internship",
          e1_period: "February 2025 – March 2025",
          e1_desc: "End-of-studies internship (PFE) at Wave Rabat, a company specializing in PHP development. Contributed to real-world web projects in a professional environment, discovering best development practices and strengthening technical skills.",
          e2_role: "Specialized Technician Diploma — Digital Development",
          e2_institution: "CMC Rabat",
          e2_period: "2025 – 2026",
          e2_status: "In Progress",
          e2_desc: "Specialized training in digital development: programming, web development, modern technologies. One-month practical internship planned for February 2026.",
          e3_role: "1st Year — Digital Development",
          e3_institution: "ISTA NTIC Rabat",
          e3_period: "2024 – 2025",
          e3_desc: "Solid foundations in algorithms, web development, databases, and OOP through academic and practical projects.",
          e4_role: "Baccalaureate in Physical Sciences",
          e4_institution: "Lycée Abi Bakr",
          e4_period: "2024",
          e4_desc: "High school diploma in physical sciences — education focused on mathematics, logic, and experimental sciences."
        }
      },
      contact: {
        label: "Contact",
        title1: "Let's build something ",
        title_gradient: "epic",
        title2: ".",
        subtitle: "I'm currently open for new opportunities, internships and collaborations. Feel free to reach out!",
        message: "Send an email",
        location: "Rabat, Morocco",
        sideNote: "I'm open to new opportunities and freelance projects. Don't hesitate to contact me!",
        formName: "Your name",
        formEmail: "Email",
        formSubject: "Subject",
        formMessage: "Message",
        sendBtn: "Send message",
        successTitle: "Message sent!",
        successMsg: "I'll get back to you as soon as possible.",
        errorMsg: "Error. Please try again or write directly by email."
      },
      footer: {
        rights: "All rights reserved.",
        location: "Web developer based in Rabat, Morocco 🇲🇦",
        navigation: "Navigation",
        connect: "Connect",
        backToTop: "Back to top",
        madeWith: "Made with"
      }
    }
  },
  de: {
    translation: {
      nav: {
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        experience: "Erfahrung",
        contact: "Kontakt",
        letsTalk: "Lass uns reden"
      },
      hero: {
        available: "Offen für neue Möglichkeiten",
        availableBadge: "Verfügbar",
        title1: "Ich baue ",
        title_gradient: "robuste",
        title2: " Webanwendungen von der Datenbank bis zur Benutzeroberfläche.",
        subtitle: "Leidenschaftlicher Fullstack-Entwickler, motiviert und lernbereit — bereit, schnell zu wachsen und an bedeutsamen Projekten mitzuwirken.",
        explore: "Arbeit entdecken",
        cv: "Lebenslauf herunterladen",
        scroll: "Scrollen"
      },
      about: {
        label: "Über mich",
        title1: "Leidenschaft für die ",
        title_gradient: "Erstellung",
        title2: " von Web-Apps.",
        p1: "Als Junior-Full-Stack-Entwickler und Student der digitalen Entwicklung an der Cité des Métiers et des Compétences (CMC) Rabat, nach meinem ersten Jahr am ISTA NTIC Rabat, begeistere ich mich für die Erstellung moderner, leistungsstarker und intuitiver Webanwendungen. Mein Abschlusspraktikum (PFE) ermöglichte es mir, eine komplette Back-Office-Anwendung nach einer agilen Methodik zu entwickeln, was meine Fähigkeiten in der Full-Stack-Entwicklung, Problemlösung und Teamarbeit stärkte.",
        p2: "Neugierig und autodidaktisch lerne ich gerne neue Technologien und setze diese in persönlichen Projekten um. Heute suche ich nach einer Möglichkeit, meine Fähigkeiten weiterzuentwickeln, zu innovativen Projekten beizutragen und mich in einem anregenden Umfeld weiterzuentwickeln.",
        softSkillsTitle: "Soft Skills",
        softSkills: ["Problemlösung", "Kommunikation", "Teamfähigkeit", "Anpassungsfähigkeit & Kontinuierliches Lernen", "Zeitmanagement", "Liebe zum Detail", "Selbstständiges Lernen"],
        passion1: "Webentwicklung",
        passion2: "Software-Engineering",
        passion3: "Moderne Technologien"
      },
      skills: {
        label: "Fähigkeiten",
        title1: "Technische ",
        title_gradient: "Expertise",
        subtitle: "Werkzeuge und Technologien, die ich täglich nutze.",
        learning: "In Ausbildung",
        technologiesLabel: "Technologien",
        toolsLabel: "Werkzeuge"
      },
      techstack: {
        label: "Tech Stack",
        title1: "Werkzeuge mit denen ich ",
        title_gradient: "arbeite",
        subtitle: "Technologien und Werkzeuge in meinem Entwicklungsarsenal."
      },
      projects: {
        label: "Projekte",
        title1: "Aktuelle ",
        title_gradient: "Projekte",
        subtitle: "Ein Einblick in meine Arbeit, konzentriert auf Datenmanagement und die Erstellung flüssiger Benutzeroberflächen.",
        viewAll: "Alle Projekte auf GitHub ansehen",
        watchDemo: "Demo ansehen",
        inProgress: "In Bearbeitung",
        categories: {
          web: "Webanwendung / Back-office",
          fullstack: "Full Stack"
        },
        items: {
          p1_title: "Kunden- & Abonnementverwaltung",
          p1_desc: "Admin-Anwendung zur Verwaltung von WordPress-Kunden, zur Verfolgung von Abonnements, zur Aufzeichnung von Zahlungen und zur Anzeige von Statistiken über ein Dashboard. Enthält ein Rollensystem und eine zweisprachige FR/EN-Oberfläche.",
          p2_title: "Zakaria's To-Do List",
          p2_desc: "Produktivitätsanwendung zur Verwaltung täglicher Aufgaben, Nachverfolgung der Erledigung, Bearbeitung von Inhalten und Bereinigung der Liste über eine zentrale Schnittstelle. Beinhaltet ein komplettes CRUD-Operationssystem, lokale Datenspeicherung (localStorage) und ein minimalistisches, dunkles Design.",
          p3_title: "SmartShop",
          p3_desc: "Eine vollständige Marketplace-E-Commerce-Anwendung mit React (Vite) und Laravel 13 (REST API + Sanctum). Produktkatalog, Warenkorb, Bestellungen, Lieferverfolgung, simuliertes Zahlungssystem und PDF-Belegenerzeugung. Vollständiges Admin-Panel mit Analyse-Dashboard, Lagerverwaltung via MySQL-Trigger und tokenbasierter Authentifizierung.",
          p5_title: "Zakaria's Chatbot",
          p5_desc: "Ein einfacher KI-gestützter Web-Chatbot, der es Nutzern ermöglicht, in Echtzeit mit einem LLM über eine moderne Benutzeroberfläche zu chatten. Verwendet ein Node.js-Backend zur Verwaltung von API-Anfragen und integriert die Groq-API, um intelligente Antworten mit dem LLaMA 3.3 70B-Modell zu generieren.",
          p6_title: "Produktliste",
          p6_desc: "Eine einsteigerfreundliche E-Commerce-App, entwickelt mit Next.js 14 und Tailwind CSS, die die FakeStore API nutzt, um echte Produkte anzuzeigen. Mit persistentem Warenkorb via localStorage und moderner Benutzeroberfläche.",
          p7_title: "Weather App",
          p7_desc: "Eine einfache und responsive Wetter-App, die die Open-Source Open-Meteo API nutzt. Stadtgeokodierung, Anzeige von Temperatur, gefühlter Temperatur, Luftfeuchtigkeit, Niederschlag und Windgeschwindigkeit. Lade- und Fehlerzustandsverwaltung, Deployment auf Vercel.",
          p8_title: "Let's Meet",
          p8_desc: "Webanwendung zur Veranstaltungsverwaltung mit 3 Profilen: Admin (Benutzerverwaltung, Kategorien, Events, CSV-Export), Besucher (Durchsuchen, Suche nach Titel, Filter nach Kategorie) und Kunde (Event-Erstellung, Teilnehmerverwaltung, Favoriten, Teilnahme mit PDF-Einladungsdownload). Authentifizierung für sensible Aktionen erforderlich und automatischer Bestätigungs-E-Mail-Versand."
        }
      },
      experience: {
        label: "Werdegang",
        title1: "Mein ",
        title_gradient: "Werdegang",
        subtitle: "Berufserfahrung und akademischer Hintergrund.",
        present: "Heute",
        professionalTitle: "Berufserfahrung",
        academicTitle: "Akademischer Werdegang",
        items: {
          e1_role: "PHP-Entwickler-Praktikant",
          e1_company: "Wave Rabat",
          e1_type: "PFE-Praktikum",
          e1_period: "Februar 2025 – März 2025",
          e1_desc: "Abschlusspraktikum (PFE) bei Wave Rabat, einem auf PHP-Entwicklung spezialisierten Unternehmen. Mitarbeit an echten Webprojekten in professioneller Umgebung, Kennenlernen bewährter Entwicklungsmethoden und Stärkung technischer Kompetenzen.",
          e2_role: "Diplom Techniker — Digitale Entwicklung",
          e2_institution: "CMC Rabat",
          e2_period: "2025 – 2026",
          e2_status: "Laufend",
          e2_desc: "Fachausbildung in digitaler Entwicklung: Programmierung, Webentwicklung, moderne Technologien. Einmonatiges Praktikum für Februar 2026 geplant.",
          e3_role: "1. Jahr — Digitale Entwicklung",
          e3_institution: "ISTA NTIC Rabat",
          e3_period: "2024 – 2025",
          e3_desc: "Solide Grundlagen in Algorithmen, Webentwicklung, Datenbanken und OOP durch akademische und praktische Projekte.",
          e4_role: "Abitur Naturwissenschaften",
          e4_institution: "Lycée Abi Bakr",
          e4_period: "2024",
          e4_desc: "Hochschulreife in Naturwissenschaften — Ausbildung mit Schwerpunkt Mathematik, Logik und experimentelle Wissenschaften."
        }
      },
      contact: {
        label: "Kontakt",
        title1: "Lass uns etwas ",
        title_gradient: "Großartiges",
        title2: " bauen.",
        subtitle: "Ich bin offen für neue Möglichkeiten, Praktika und Kooperationen. Schreib mir gerne!",
        message: "E-Mail senden",
        location: "Rabat, Marokko",
        sideNote: "Ich bin offen für neue Möglichkeiten und Freelance-Projekte. Zögere nicht, mich zu kontaktieren!",
        formName: "Ihr Name",
        formEmail: "E-Mail",
        formSubject: "Betreff",
        formMessage: "Nachricht",
        sendBtn: "Nachricht senden",
        successTitle: "Nachricht gesendet!",
        successMsg: "Ich melde mich so schnell wie möglich bei Ihnen.",
        errorMsg: "Fehler. Bitte versuche es erneut oder schreibe direkt per E-Mail."
      },
      footer: {
        rights: "Alle Rechte vorbehalten.",
        location: "Webentwickler aus Rabat, Marokko 🇲🇦",
        navigation: "Navigation",
        connect: "Netzwerke",
        backToTop: "Nach oben",
        madeWith: "Erstellt mit"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
