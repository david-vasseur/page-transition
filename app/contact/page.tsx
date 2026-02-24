
import ContactPage from "@/components/pages/contact/contactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contactez GVS 3D - Dératisation & Désinsectisation Urgence 24/7 Remoulins",
    description: "Contactez GVS 3D à Remoulins pour la dératisation, désinsectisation et désinfection. Intervention d'urgence 24/7. Devis gratuit et réponse rapide. Experts certifiés Certibiocide.",
    keywords: [
        "contact dératisation Remoulins",
        "dératisation urgence Remoulins",
        "désinsectisation Remoulins contact",
        "désinfection Remoulins",
        "exterminateur nuisibles Remoulins",
        "entreprise dératisation Gard",
        "éradication rats Remoulins",
        "traitement cafards Remoulins",
        "pièges souris Remoulins",
        "devis dératisation Remoulins",
        "numéro urgence nuisibles Remoulins",
        "GVS 3D contact",
        "dératiseur Remoulins",
        "dépigeonnisation Remoulins",
        "destruction nids guêpes Remoulins",
        "traitement punaises de lit Remoulins"
    ],
    alternates: {
        canonical: 'https://gvs3d.fr/contact', 
    },
    openGraph: {
        title: "Contact GVS 3D - Dératisation & Désinsectisation Urgence 24/7 Remoulins",
        description: "Besoin d'une intervention rapide contre les nuisibles à Remoulins ou ses environs ? Contactez GVS 3D pour un devis gratuit en dératisation, désinsectisation, désinfection. Urgence 24/7.",
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
        title: "Contact GVS 3D - Dératisation & Désinsectisation Urgence 24/7 Remoulins",
        description: "Besoin d'une intervention rapide contre les nuisibles à Remoulins ou ses environs ? Contactez GVS 3D pour un devis gratuit en dératisation, désinsectisation, désinfection. Urgence 24/7.",
        images: ['https:/gvs3d.fr/logo.webp'], 
    },
};

const Contact = () => {

    return <ContactPage />

};

export default Contact;