import { IItem } from "@/app/components/feature/QualityCard";

export const qualities: IItem[] = [
  {
    id: 1,
    title: "Expertise Certifiée",
    short: "Nous sommes formés et certifiés pour intervenir.",
    pins: [
      "Certibiocide officiel",
      "Formation continue",
      "Conformité CEPA EN 16636",
      "Expérience de terrain",
      "Matériel professionnel",
      "Procédures strictes",
      "Contrôles qualité",
      "Documentation complète",
    ],
    img: "/quality.png",
  },
  {
    id: 2,
    title: "Intervention Rapide 24/7",
    short: "Nous répondons à vos urgences 24h/24 et 7j/7.",
    pins: [
      "Disponibilité immédiate",
      "Zones couvertes larges",
      "Équipe dédiée aux urgences",
      "Déplacement rapide",
      "Communication en temps réel",
      "Rapport après intervention",
      "Suivi post-traitement",
      "Satisfaction garantie",
    ],
    img: "/rapide.png",
  },
  {
    id: 3,
    title: "Méthodes Respectueuses",
    short: "Nous utilisons des techniques sécurisées et écologiques.",
    pins: [
      "Produits homologués",
      "Impact réduit sur l’environnement",
      "Protection des animaux domestiques",
      "Traitement ciblé",
      "Utilisation raisonnée",
      "Prévention avant éradication",
      "Technologies innovantes",
      "Suivi durable",
    ],
    img: "/respect.png",
  },
];