
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
