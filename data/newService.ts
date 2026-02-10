interface IFeature {
    id: string | number;
    icon: 'check' | 'shield' | 'clock' | 'award';
    title: string;
    description: string;
}

interface IServiceDescription {
    title: string;
    highlight: string;
    description: string;
    features: IFeature[];
    processTitle: string;
    processSteps: {
        id: string | number;
        number: string;
        title: string;
        description: string;
        image:string;
    }[];
}

interface ITestimonial {
    id: string | number;
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
    avatar?: string;
}

interface IStat {
    id: string | number;
    value: string;
    label: string;
    suffix?: string;
}

interface ISocialProof {
    title: string;
    highlight: string;
    testimonials: ITestimonial[];
    stats: IStat[];
}

interface IHeroService {
  header1: string;
  header2: string;
  subTitle: string;
}

interface IListItem {
    id: string | number;
    text: string;
}

interface IStory {
    image1: string;
    altImage1: string;
    image2: string;
    altImage2: string;
    image3: string;
    altImage3: string;

    header1_1: string;
    header1_2: string;
    header2_1: string;
    header2_2: string;
    header3_1: string;
    header3_2: string;

    list1: IListItem[];
    list2: IListItem[];
    list3: IListItem[];

    cta: string;
}

export interface IServicePage {
  hero: IHeroService;
  story: IStory;
}

export const services: IServicePage[] = [
  {
    hero: {
        header1: "Dératisation",
        header2: "Professionnelle",
        subTitle: "Éliminez les rongeurs de manière sûre et efficace."
    },
    story: {
        image1: "/close-up-pest.png",
        altImage1: "Dératisation - Image 1",
        image2: "/piegeur.webp",
        altImage2: "Dératisation - Image 2",
        image3: "/thanks.webp",
        altImage3: "Dératisation - Image 3",

        header1_1: "Vous avez un problème avec",
        header1_2: "des rongeurs ?",

        header2_1: "Nous avons la",
        header2_2: "solution",

        header3_1: "Retrouvez un environnement",
        header3_2: "sain et sécurisé",

        list1: [
          { id: 1, text: "Présence de rats ou de souris dans votre maison ou local ?" },
          { id: 2, text: "Bruits, dégradations, câbles rongés, excréments ?" },
          { id: 3, text: "Risques sanitaires pour votre famille ou vos clients ?" }
        ],

        list2: [
          { id: 1, text: "Diagnostic précis et repérage des zones infestées" },
          { id: 2, text: "Méthodes professionnelles adaptées à chaque situation" },
          { id: 3, text: "Intervention rapide et discrète, conforme aux normes sanitaires" }
        ],

        list3: [
          { id: 1, text: "Élimination durable des rongeurs" },
          { id: 2, text: "Prévention des nouvelles infestations" },
          { id: 3, text: "Tranquillité et sécurité retrouvées" }
        ],

        cta: "Contactez nos experts pour un devis gratuit"
    }
  },
  {
    hero: {
      header1: "Désinsectisation",
      header2: "Professionnelle",
      subTitle: "Éliminez les insectes nuisibles rapidement et efficacement."
    },
    story: {
      image1: "/service/desinsectisation/story1.webp",
      altImage1: "Désinsectisation - Image 1",
      image2: "/service/desinsectisation/story2.png",
      altImage2: "Désinsectisation - Image 2",
      image3: "/service/desinsectisation/story3.png",
      altImage3: "Désinsectisation - Image 3",

      header1_1: "Vous avez un problème avec",
      header1_2: "des insectes ?",
      header2_1: "Nous avons la",
      header2_2: "solution",
      header3_1: "Retrouvez la paix",
      header3_2: "et la sécurité",

      list1: [
        { id: 1, text: "Infestation de fourmis, blattes ou moustiques ?" },
        { id: 2, text: "Frelons, Frelons asiatiques, guepes ?" },
        { id: 3, text: "chenilles processionaires, punaises de lit ?" }
      ],
      list2: [
        { id: 1, text: "Perche de 24 mètres pour atteindre les nids en hauteur" },
        { id: 2, text: "Billes de paintball biocides pour sécuriser les interventions" },
        { id: 3, text: "Intervention rapide et professionnelle pour neutraliser les nuisibles" }
      ],
      list3: [
        { id: 1, text: "Neutralisation des nids sans risque pour vous et votre famille" },
        { id: 2, text: "Maison et jardin protégés" },
        { id: 3, text: "Tranquillité retrouvée et interventions durables" }
      ],

      cta: "Appelez-nous pour une désinsectisation rapide"
    }
  },
  {
    hero: {
      header1: "Désinfection",
      header2: "Professionnelle",
      subTitle: "Assurez un environnement sain et exempt de bactéries et virus."
    },
    story: {
      image1: "/images/desinfection1.jpg",
      altImage1: "Désinfection - Image 1",
      image2: "/images/desinfection2.jpg",
      altImage2: "Désinfection - Image 2",
      image3: "/images/desinfection3.jpg",
      altImage3: "Désinfection - Image 3",

      header1_1: "Vous avez besoin d’une",
  header1_2: "désinfection ?",

  header2_1: "Nous avons la",
  header2_2: "solution",

  header3_1: "Un environnement",
  header3_2: "propre et sain",

  list1: [
    { id: 1, text: "Locaux, logements ou véhicules contaminés ?" },
    { id: 2, text: "Présence de bactéries, virus, moisissures ou mauvaises odeurs ?" },
    { id: 3, text: "Besoin d’un assainissement après sinistre ou infestation ?" }
  ],

  list2: [
    { id: 1, text: "Protocoles de désinfection certifiés et efficaces" },
    { id: 2, text: "Produits professionnels respectueux des normes sanitaires" },
    { id: 3, text: "Intervention rapide et adaptée à chaque environnement" }
  ],

  list3: [
    { id: 1, text: "Élimination des bactéries, virus et agents pathogènes" },
    { id: 2, text: "Espaces sains, sécurisés et sans odeurs" },
    { id: 3, text: "Sérénité retrouvée pour occupants et professionnels" }
  ],
      cta: "Planifiez votre désinfection dès aujourd'hui"
    }
  }
];

export const serviceDescriptions: IServiceDescription[] = [
  {
    title: "Dératisation professionnelle",
    highlight: "100% efficace",
    description: "Nous éliminons tous types de rongeurs rapidement et durablement pour protéger votre habitat ou votre entreprise.",
    features: [
      { id: 1, icon: "check", title: "Intervention rapide", description: "Nos experts interviennent sous 24h pour traiter votre problème." },
      { id: 2, icon: "shield", title: "Garantie résultat", description: "Nos interventions sont garanties et suivies d’un contrôle post-traitement." },
      { id: 3, icon: "clock", title: "Disponibilité 7j/7", description: "Nous sommes disponibles tous les jours pour vos urgences rongeurs." },
      { id: 4, icon: "award", title: "Certifié & agréé", description: "Nos techniciens sont formés et agréés pour vos interventions." },
    ],
    processTitle: "Notre intervention en 3 étapes",
    processSteps: [
      { 
        id: 1, 
        number: "01", 
        title: "Détection avancée", 
        description: "Localisation précise des nuisibles grâce à des caméras thermiques et équipements de détection professionnels.", 
        image: "/service/thermal.jpg" 
      },
      { 
        id: 2, 
        number: "02", 
        title: "Matériel homologué", 
        description: "Utilisation de pièges certifiés et de solutions efficaces, sûres pour les occupants et conformes aux normes.", 
        image: "/service/trap.jpg" 
      },
      { 
        id: 3, 
        number: "03", 
        title: "Certification d’État", 
        description: "Interventions réalisées par des techniciens certifiés avec suivi et prévention contre toute récidive.", 
        image: "/service/certif.webp" 
      },
    ]
  },
  {
    title: "Désinsectisation complète",
    highlight: "sans danger",
    description: "Élimination efficace de tous types d’insectes nuisibles, pour un environnement sain et sécurisé.",
    features: [
      { id: 1, icon: "check", title: "Action ciblée", description: "Traitement spécifique selon le type d’insecte." },
      { id: 2, icon: "shield", title: "Produits sécurisés", description: "Utilisation de produits respectueux de l’environnement et sans risque pour vos animaux." },
      { id: 3, icon: "clock", title: "Intervention rapide", description: "Nos experts interviennent dans les plus brefs délais." },
      { id: 4, icon: "award", title: "Suivi personnalisé", description: "Plan de prévention et suivi après intervention." },
    ],
    processTitle: "Notre processus de désinsectisation",
    processSteps: [
      { id: 1, number: "01", title: "Inspection des lieux", description: "Identification des zones infestées et type d’insectes.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      { id: 2, number: "02", title: "Traitement adapté", description: "Application des produits et méthodes sécurisés.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      { id: 3, number: "03", title: "Prévention", description: "Recommandations pour éviter toute réinfestation.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      { id: 4, number: "04", title: "Contrôle final", description: "Vérification post-intervention et ajustements si nécessaire.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
    ],
  },
  {
    title: "Désinfection complète",
    highlight: "professionnelle",
    description: "Assainissement et désinfection de vos locaux pour éliminer virus, bactéries et agents pathogènes.",
    features: [
      { id: 1, icon: "check", title: "Normes professionnelles", description: "Respect strict des normes sanitaires en vigueur." },
      { id: 2, icon: "shield", title: "Produits certifiés", description: "Utilisation de produits homologués et efficaces." },
      { id: 3, icon: "clock", title: "Rapide & efficace", description: "Intervention rapide pour un lieu immédiatement désinfecté." },
      { id: 4, icon: "award", title: "Équipe formée", description: "Techniciens spécialisés et certifiés." },
    ],
    processTitle: "Notre processus de désinfection",
    processSteps: [
      { id: 1, number: "01", title: "Analyse du site", description: "Évaluation des surfaces et risques sanitaires.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      { id: 2, number: "02", title: "Application des produits", description: "Désinfection ciblée avec produits certifiés.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      { id: 3, number: "03", title: "Contrôle qualité", description: "Vérification des zones traitées pour assurer l’efficacité.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
      // { id: 4, number: "04", title: "Conseils & prévention", description: "Recommandations pour maintenir un environnement sain." },
    ],
  },
];

export const socialProofData: ISocialProof[] = [{
  title: "La confiance se mérite",
  highlight: "Chaque jour",
  testimonials: [
    {
      id: 1,
      name: "Marie Dupont",
      location: "Paris",
      rating: 5,
      text: "Service impeccable ! L'équipe est très professionnelle et a réglé notre problème rapidement.",
      date: "2025-11-10",
      avatar: "/avatars/marie.jpg",
    },
    {
      id: 2,
      name: "Jean Martin",
      location: "Lyon",
      rating: 4,
      text: "Intervention rapide et efficace. Je recommande vivement pour la dératisation et la désinsectisation.",
      date: "2025-10-22",
      avatar: "/avatars/jean.jpg",
    },
    {
      id: 3,
      name: "Sophie Bernard",
      location: "Marseille",
      rating: 5,
      text: "Très satisfait du service. Les explications étaient claires et le suivi après l'intervention parfait.",
      date: "2025-09-15",
      avatar: "/avatars/sophie.jpg",
    }
  ],
  stats: [
    { id: 1, value: "500+", label: "Interventions réalisées", suffix: "+" },
    { id: 2, value: "98%", label: "Clients satisfaits", suffix: "%" },
  ],
}]

