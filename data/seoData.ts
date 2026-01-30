export interface SeoPageData {
  city: string;
  service: string;
  heroTitle: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroImage: string;
  history: string;
  proofImages: string[];
  ctaLink: string;
}

export const seoData: Record<string, SeoPageData> = {
  // ---------------------
  // Dératisation
  // ---------------------
  "deratisation-sur-aramon": {
    city: "Aramon",
    service: "dératisation",
    heroTitle: "Dératisation",
    heroTitle1: "à",
    heroTitle2: "Aramon",
    heroSubtitle: "Élimination professionnelle des rats et souris. Sécurisé pour enfants et animaux. Devis gratuit.",
    heroImage: "/infestation-dark.png",
    history: "Depuis plus de 10 ans, nous accompagnons les particuliers et professionnels d'Aramon avec des solutions durables contre les nuisibles.",
    proofImages: ["/car.webp", "/car.webp", "/car.webp", "/car.webp"],
    ctaLink: "tel:+33658942067",
  },
  "deratisation-st-bonnet-du-gard": {
    city: "St Bonnet du Gard",
    service: "dératisation",
    heroTitle: "Dératisation",
    heroTitle1: "à",
    heroTitle2: "St Bonnet du Gard",
    heroSubtitle: "Élimination professionnelle des rats et souris. Sécurisé pour enfants et animaux. Devis gratuit.",
    heroImage: "/infestation-dark.png",
    history: "Depuis plus de 10 ans, nous accompagnons les particuliers et professionnels de St Bonnet du Gard avec des solutions durables contre les nuisibles.",
    proofImages: ["/car.webp", "/car.webp", "/car.webp", "/car.webp"],
    ctaLink: "tel:+33658942067",
  },
  "deratisation-a-ledenon": {
    city: "Lédénon",
    service: "dératisation",
    heroTitle: "Dératisation",
    heroTitle1: "à",
    heroTitle2: "Lédénon",
    heroSubtitle: "Élimination professionnelle des rats et souris. Sécurisé pour enfants et animaux. Devis gratuit.",
    heroImage: "/infestation-dark.png",
    history: "Nos experts interviennent à Lédénon pour protéger maisons et entreprises contre les rongeurs.",
    proofImages: ["/car.webp", "/car.webp", "/car.webp", "/car.webp"],
    ctaLink: "tel:+33658942067",
  },

  // ---------------------
  // Désinsectisation
  // ---------------------
  "desinsectisation-garons": {
    city: "Garons",
    service: "désinsectisation",
    heroTitle: "Désinsectisation",
    heroTitle1: "à",
    heroTitle2: "Garons",
    heroSubtitle: "Élimination efficace des cafards, punaises et insectes. Sécurisé pour votre famille. Devis gratuit.",
    heroImage: "/infestation-dark.png",
    history: "Nos experts interviennent à Garons pour protéger votre maison ou entreprise contre tous types d’insectes.",
    proofImages: ["/car.webp", "/car.webp", "/car.webp", "/car.webp"],
    ctaLink: "tel:+33658942067",
  },
  "desinsectisation-bellegarde": {
    city: "Bellegarde",
    service: "désinsectisation",
    heroTitle: "Désinsectisation",
    heroTitle1: "à",
    heroTitle2: "Bellegarde",
    heroSubtitle: "Élimination efficace des cafards, punaises et insectes. Sécurisé pour votre famille. Devis gratuit.",
    heroImage: "/infestation-dark.png",
    history: "Nos experts interviennent à Bellegarde pour protéger maisons et entreprises contre les insectes nuisibles.",
    proofImages: ["/car.webp", "/car.webp", "/car.webp", "/car.webp"],
    ctaLink: "tel:+33658942067",
  },
  "desinsectisation-a-st-anastasie": {
    city: "St Anastasie",
    service: "désinsectisation",
    heroTitle: "Désinsectisation",
    heroTitle1: "à",
    heroTitle2: "St Anastasie",
    heroSubtitle: "Élimination efficace des cafards, punaises et insectes. Sécurisé pour votre famille. Devis gratuit.",
    heroImage: "/infestation-dark.png",
    history: "Depuis plusieurs années, nous intervenons à St Anastasie pour débarrasser maisons et entreprises de tous insectes nuisibles.",
    proofImages: ["/car.webp", "/car.webp", "/car.webp", "/car.webp"],
    ctaLink: "tel:+33658942067",
  },
};
