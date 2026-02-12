import FaqCta from "@/components/pages/services/FaqCta";
import HeroService from "@/components/pages/services/HeroService";
import Pricing from "@/components/pages/services/Pricing";
import ServiceDescription from "@/components/pages/services/ServiceDescription";
import SocialProof from "@/components/pages/services/SocialProof";
import Story from "@/components/pages/services/Story";
import { serviceDescriptions, services, socialProofData } from "@/data/newService";

export const metadata = {
    title: 'Désinfection Professionnelle - Locaux & Logements | GVS3D',
    description: 'Service de désinfection professionnel à Estezargues et ses environs. Élimination des virus, bactéries, moisissures et agents pathogènes. Intervention rapide, produits certifiés et certificat fourni.',
    keywords: 'désinfection, désinfecteur, désinfection professionnelle, désinfection locaux, désinfection logement, bactéries, virus, moisissures, décontamination, hygiène, GVS3D, Estezargues, Occitanie, nettoyage extrême, logement insalubre',
    openGraph: {
        title: 'Désinfection Professionnelle - Locaux & Logements | GVS3D',
        description: 'Service de désinfection professionnel à Estezargues et ses environs. Élimination des virus, bactéries, moisissures et agents pathogènes. Intervention rapide, produits certifiés et certificat fourni.',
        url: 'https://gvs3d.fr/services/desinfection',
        type: 'website',
        images: [
            {
                url: 'https://gvs3d.fr/logo.webp',
                width: 1200,
                height: 630,
                alt: 'Désinfection professionnelle GVS3D',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Désinfection Professionnelle - Locaux & Logements | GVS3D',
        description: 'Service de désinfection professionnel à Estezargues et ses environs. Élimination des virus, bactéries, moisissures et agents pathogènes. Intervention rapide, produits certifiés et certificat fourni.',
        images: ['https://gvs3d.fr/logo.webp'],
    },
    canonical: 'https://gvs3d.fr/services/desinfection',
};

    

function page() {
    
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GVS3D - Désinfection",
        "description": "Service professionnel de désinfection pour l’élimination des virus, bactéries, moisissures et agents pathogènes à Estezargues et dans le Gard.",
        "url": "https://gvs3d.fr/services/desinfection",
        "provider": {
            "@type": "LocalBusiness",
            "name": "GVS3D",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Estezargues",
                "addressLocality": "Estezargues",
                "addressRegion": "Occitanie",
                "postalCode": "30390",
                "addressCountry": "FR"
            },
            "telephone": "06 58 94 20 67",
            "email": "g.v.s.3dpro@gmail.com",
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "18:00"
                }
            ],
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.9056",
                "longitude": "4.6194"
            },
            "priceRange": "€€",
            "hasMap": "https://www.google.com/maps/place/30390+Estezargues",
            "image": "https://gvs3d.fr/logo.webp",
            "sameAs": [
                "https://www.facebook.com/votrepageGVS3D",
                "https://www.linkedin.com/company/votrepageGVS3D"
            ]
        },
        "areaServed": [
            { "@type": "Place", "name": "Estezargues" },
            { "@type": "Place", "name": "Gard" },
            { "@type": "Place", "name": "Nîmes" },
            { "@type": "Place", "name": "Avignon" }
        ],
        "serviceType": "Désinfection",
        "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Désinfection",
                "description": "Désinfection des logements, locaux professionnels, surfaces, air ambiant et zones contaminées",
                "areaServed": [
                    { "@type": "Place", "name": "Estezargues" },
                    { "@type": "Place", "name": "Gard" }
                ]
            },
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "EUR",
                "minPrice": 150,
                "maxPrice": 900
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "42"
        }
    };

    const service = services.find(i => i.hero.header1 === "Désinfection");
    
    const description = serviceDescriptions.find(i => i.title === "Désinfection complète");
    
    const socialProof = socialProofData[0];

    if (!service || !description || !socialProof) return null;

    return (
         <>
            <HeroService 
                header1={service.hero.header1} 
                header2={service.hero.header2} 
                subTitle={service.hero.subTitle} 
            />
            <Story 
                image1={service.story.image1} 
                image2={service.story.image2} 
                image3={service.story.image3} 
                altImage1={service.story.altImage1} 
                altImage2={service.story.altImage2} 
                altImage3={service.story.altImage3} 
                header1_1={service.story.header1_1} 
                header1_2={service.story.header1_2} 
                header2_1={service.story.header2_1} 
                header2_2={service.story.header2_2} 
                header3_1={service.story.header3_1} 
                header3_2={service.story.header3_2} 
                list1={service.story.list1} 
                list2={service.story.list2} 
                list3={service.story.list3} 
                cta={service.story.cta} 
            />
            <ServiceDescription 
                title={description?.title} 
                highlight={description?.highlight} 
                description={description?.description} 
                features={description?.features} 
                processTitle={description?.processTitle} 
                processSteps={description?.processSteps} 
            />
            <Pricing
                sectionTitle="Tarifs"
                sectionHighlight="transparents"
                description="Nos prestations de désinfection varient selon la surface, le niveau de contamination et le type d’intervention (préventive, curative ou après sinistre). Chaque intervention comprend un diagnostic complet et un protocole professionnel certifié."
                
                cards={[
                    {
                        id: 1,
                        title: "Particulier",
                        subtitle: "Maisons & Appartements",
                        priceRange: "150€ - 500€",
                        priceNote: "Selon surface et niveau de contamination",
                        badge: "Diagnostic inclus",
                        gradient: "from-emerald-600 to-green-700",
                        bgGradient: "from-emerald-600/5 to-green-700/5",
                        included: [
                            { id: 1, label: "Diagnostic et évaluation des risques", included: true },
                            { id: 2, label: "Déplacement inclus (30km)", included: true },
                            { id: 3, label: "Désinfection bactéricide & virucide certifiée", included: true },
                            { id: 4, label: "Traitement des surfaces et zones sensibles", included: true },
                            { id: 5, label: "Certificat d’intervention", included: true },
                            { id: 6, label: "Contrat d’entretien préventif", included: false },
                        ]
                    },
                    {
                        id: 2,
                        title: "Pro",
                        subtitle: "Commerces, Bureaux & Locaux sensibles",
                        priceRange: "300€ - 900€",
                        priceNote: "Intervention complète & conformité sanitaire",
                        badge: "Normes sanitaires respectées",
                        gradient: "from-blue-600/80 to-teal-600/80",
                        bgGradient: "from-blue-600/20 to-teal-600/10",
                        included: [
                            { id: 1, label: "Audit sanitaire des locaux", included: true },
                            { id: 2, label: "Déplacement inclus (50km)", included: true },
                            { id: 3, label: "Désinfection professionnelle (normes EN 14476)", included: true },
                            { id: 4, label: "Traitement air & surfaces (nébulisation possible)", included: true },
                            { id: 5, label: "Certificat de conformité sanitaire", included: true },
                            { id: 6, label: "Rapport d’intervention détaillé", included: true },
                            { id: 7, label: "Contrat de désinfection préventive", included: true },
                        ]
                    },
                ]}
                
                ctaText="Besoin d'un devis personnalisé ? Contactez-nous :"
                ctaPhone="06 58 94 20 67"
            />

            <SocialProof 
                title={socialProof.title}
                highlight={socialProof.highlight}
                testimonials={socialProof.testimonials}
                stats={socialProof.stats}
            />

            <FaqCta
                faqTitle="Questions"
                faqHighlight="fréquentes"
                
                faqs={[
                    {
                        id: 1,
                        question: 'Quand faut-il réaliser une désinfection ?',
                        answer: 'Une désinfection est recommandée après un sinistre (dégât des eaux, incendie), en cas de contamination bactérienne ou virale, après un logement insalubre ou dans un cadre préventif pour les locaux professionnels recevant du public.'
                    },
                    {
                        id: 2,
                        question: 'Quels produits utilisez-vous pour la désinfection ?',
                        answer: 'Nous utilisons des produits certifiés bactéricides, virucides et fongicides conformes aux normes européennes (EN 14476, EN 1276). Ils sont appliqués selon des protocoles stricts garantissant efficacité et sécurité.'
                    },
                    {
                        id: 3,
                        question: 'La désinfection est-elle dangereuse pour les occupants ?',
                        answer: 'Non. Nous adaptons nos méthodes (pulvérisation, nébulisation, traitement manuel) et respectons des délais de réintégration sécurisés. Nous vous informons toujours des précautions à suivre.'
                    },
                    {
                        id: 4,
                        question: 'Fournissez-vous un certificat après intervention ?',
                        answer: 'Oui, chaque intervention peut être accompagnée d’un certificat de désinfection attestant du traitement réalisé, utile pour les assurances ou les professionnels soumis à des obligations sanitaires.'
                    },
                    {
                        id: 5,
                        question: 'Intervenez-vous en urgence ?',
                        answer: 'Oui, nous pouvons intervenir rapidement sous 24h selon la situation, notamment après sinistre ou contamination nécessitant une action immédiate.'
                    }
                ]}
                
                ctaTitle="Besoin d’une désinfection professionnelle ?"
                ctaSubtitle="Contactez-nous dès maintenant pour un diagnostic rapide et une intervention certifiée. Service réactif et conforme aux normes sanitaires."
                ctaButtonText="Demander une intervention"
                ctaButtonLink="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
                phone="06 58 94 20 67"
                email="contact@gvs3d.fr"
                address="Estezargues, Occitanie"
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </>
    )
}

export default page;