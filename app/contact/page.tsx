
import ContactPage from "@/components/pages/contact/contactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contactez GVS 3D - Dératisation & Désinsectisation Urgence 24/7 Manduel",
    description: "Contactez GVS 3D à Manduel pour la dératisation, désinsectisation et désinfection. Intervention d'urgence 24/7. Devis gratuit et réponse rapide. Experts certifiés Certibiocide.",
    keywords: [
        "contact dératisation Manduel",
        "dératisation urgence Manduel",
        "désinsectisation Manduel contact",
        "désinfection Manduel",
        "exterminateur nuisibles Manduel",
        "entreprise dératisation Gard",
        "éradication rats Manduel",
        "traitement cafards Manduel",
        "pièges souris Manduel",
        "devis dératisation Manduel",
        "numéro urgence nuisibles Manduel",
        "GVS 3D contact",
        "dératiseur Manduel",
        "dépigeonnisation Manduel",
        "destruction nids guêpes Manduel",
        "traitement punaises de lit Manduel"
    ],
    alternates: {
        canonical: 'https://gvs3d.fr/contact', 
    },
    openGraph: {
        title: "Contact GVS 3D - Dératisation & Désinsectisation Urgence 24/7 Manduel",
        description: "Besoin d'une intervention rapide contre les nuisibles à Manduel ou ses environs ? Contactez GVS 3D pour un devis gratuit en dératisation, désinsectisation, désinfection. Urgence 24/7.",
        url: 'https://gvs3d.fr/contact', 
        siteName: 'GVS 3D - Dératisation, Désinsectisation, Désinfection',
        images: [
            {
                url: 'https:/gvs3d.fr/logo.webp',
                width: 1200,
                height: 630,
                alt: 'Contact GVS 3D - Experts en dératisation et désinsectisation',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact GVS 3D - Dératisation & Désinsectisation Urgence 24/7 Manduel",
        description: "Besoin d'une intervention rapide contre les nuisibles à Manduel ou ses environs ? Contactez GVS 3D pour un devis gratuit en dératisation, désinsectisation, désinfection. Urgence 24/7.",
        images: ['https:/gvs3d.fr/logo.webp'], 
    },
};

const Contact = () => {

    return <ContactPage />

};

export default Contact;