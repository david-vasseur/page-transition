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

        header1_1: "Problème",
        header1_2: "Rongeurs",
        header2_1: "Solution",
        header2_2: "Expertise",
        header3_1: "Bénéfice",
        header3_2: "Sécurité",

        list1: [
            { id: 1, text: "Infestation dans vos locaux" },
            { id: 2, text: "Risques sanitaires et dommages matériels" },
            { id: 3, text: "Propagation rapide" }
        ],
        list2: [
            { id: 1, text: "Intervention rapide et ciblée" },
            { id: 2, text: "Utilisation de produits certifiés" },
            { id: 3, text: "Suivi et prévention" }
        ],
        list3: [
            { id: 1, text: "Local sain et sécurisé" },
            { id: 2, text: "Tranquillité d'esprit" },
            { id: 3, text: "Protection durable contre les rongeurs" }
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
      image1: "/images/desinsectisation1.jpg",
      altImage1: "Désinsectisation - Image 1",
      image2: "/images/desinsectisation2.jpg",
      altImage2: "Désinsectisation - Image 2",
      image3: "/images/desinsectisation3.jpg",
      altImage3: "Désinsectisation - Image 3",

      header1_1: "Problème",
      header1_2: "Insectes",
      header2_1: "Solution",
      header2_2: "Professionnelle",
      header3_1: "Bénéfice",
      header3_2: "Confort",

      list1: [
        { id: 1, text: "Infestation de fourmis, blattes ou moustiques" },
        { id: 2, text: "Risques pour la santé et l'hygiène" },
        { id: 3, text: "Difficulté à se débarrasser seul" }
      ],
      list2: [
        { id: 1, text: "Traitements efficaces et ciblés" },
        { id: 2, text: "Produits sécurisés pour humains et animaux" },
        { id: 3, text: "Conseils de prévention" }
      ],
      list3: [
        { id: 1, text: "Habitat sain et protégé" },
        { id: 2, text: "Moins de nuisances" },
        { id: 3, text: "Interventions durables" }
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

      header1_1: "Problème",
      header1_2: "Contamination",
      header2_1: "Solution",
      header2_2: "Professionnelle",
      header3_1: "Bénéfice",
      header3_2: "Santé",

      list1: [
        { id: 1, text: "Présence de virus et bactéries" },
        { id: 2, text: "Risques pour vos employés et clients" },
        { id: 3, text: "Normes sanitaires strictes à respecter" }
      ],
      list2: [
        { id: 1, text: "Désinfection complète des surfaces" },
        { id: 2, text: "Produits certifiés et sécurisés" },
        { id: 3, text: "Intervention rapide et efficace" }
      ],
      list3: [
        { id: 1, text: "Environnement sain et sûr" },
        { id: 2, text: "Confiance et sérénité" },
        { id: 3, text: "Respect des normes sanitaires" }
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

