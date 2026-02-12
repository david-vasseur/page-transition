import FaqCta from "@/components/pages/services/FaqCta";
import HeroService from "@/components/pages/services/HeroService";
import Pricing from "@/components/pages/services/Pricing";
import ServiceDescription from "@/components/pages/services/ServiceDescription";
import SocialProof from "@/components/pages/services/SocialProof";
import Story from "@/components/pages/services/Story";
import { serviceDescriptions, services, socialProofData } from "@/data/newService";

export const metadata = {
    title: 'Désinsectisation Professionnelle - Élimination des Insectes | GVS3D',
    description: 'Service de désinsectisation professionnel à Estezargues et ses environs. Élimination efficace et durable des cafards, punaises de lit, fourmis, guêpes et autres insectes. Devis gratuit et intervention rapide.',
    keywords: 'désinsectisation, désinsectiseur, cafards, punaises de lit, fourmis, guêpes, frelons, insectes nuisibles, contrôle nuisibles, GVS3D, Estezargues, Occitanie, anti-nuisibles, traitement insectes',
    openGraph: {
        title: 'Désinsectisation Professionnelle - Élimination des Insectes | GVS3D',
        description: 'Service de désinsectisation professionnel à Estezargues et ses environs. Élimination efficace et durable des cafards, punaises de lit, fourmis, guêpes et autres insectes. Devis gratuit et intervention rapide.',
        url: 'https://gvs3d.fr/logo.webp', 
        type: 'website',
        images: [
            {
                url: 'https://gvs3d.fr/logo.webp',
                width: 1200,
                height: 630,
                alt: 'Désinsectisation professionnelle GVS3D',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Désinsectisation Professionnelle - Élimination des Insectes | GVS3D',
        description: 'Service de désinsectisation professionnel à Estezargues et ses environs. Élimination efficace et durable des cafards, punaises de lit, fourmis, guêpes et autres insectes. Devis gratuit et intervention rapide.',
        images: ['https://gvs3d.fr/logo.webp'], 
    },
    canonical: 'https://gvs3d.fr/services/desinsectisation',
};
    

function page() {
    
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GVS3D - Désinsectisation",
        "description": "Service professionnel de désinsectisation pour l'élimination des insectes nuisibles à Estezargues et dans le Gard.",
        "url": "https://gvs3d.fr/services/desinsectisation", 
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
            {
                "@type": "Place",
                "name": "Estezargues"
            },
            {
                "@type": "Place",
                "name": "Gard"
            },
            {
                "@type": "Place",
                "name": "Nîmes" 
            },
            {
                "@type": "Place",
                "name": "Avignon" 
            }
        ],
        "serviceType": "Désinsectisation",
        "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Désinsectisation",
                "description": "Élimination des cafards, punaises de lit, fourmis, guêpes et autres insectes nuisibles",
                "areaServed": [
                    { "@type": "Place", "name": "Estezargues" },
                    { "@type": "Place", "name": "Gard" }
                ]
            },
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "EUR",
                "minPrice": 120,
                "maxPrice": 600
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
                description="Nos prix varient selon le type d’insectes, la surface à traiter et le niveau d’infestation. Chaque intervention inclut un diagnostic complet et un suivi garanti."
                
                cards={[
                    {
                        id: 1,
                        title: "Particulier",
                        subtitle: "Maisons & Appartements",
                        priceRange: "120€ - 350€",
                        priceNote: "Selon type d’insectes et surface",
                        badge: "Inspection offerte",
                        gradient: "from-orange-600 to-orange-700",
                        bgGradient: "from-orange-600/5 to-orange-700/5",
                        included: [
                            { id: 1, label: "Inspection gratuite et diagnostic", included: true },
                            { id: 2, label: "Déplacement inclus (30km)", included: true },
                            { id: 3, label: "Traitement ciblé et sécurisé", included: true },
                            { id: 4, label: "2 visites de suivi (1 mois)", included: true },
                            { id: 5, label: "Garantie 3 mois", included: true },
                            { id: 6, label: "Contrat de maintenance", included: false },
                        ]
                    },
                    {
                        id: 2,
                        title: "Pro",
                        subtitle: "Commerces & Bureaux",
                        priceRange: "250€ - 600€",
                        priceNote: "Intervention & suivi complet",
                        badge: "Conformité HACCP",
                        gradient: "from-blue-600/80 to-cyan-600/80",
                        bgGradient: "from-blue-600/20 to-cyan-600/10",
                        included: [
                            { id: 1, label: "Inspection gratuite et diagnostic", included: true },
                            { id: 2, label: "Déplacement inclus (50km)", included: true },
                            { id: 3, label: "Traitement insecticide professionnel", included: true },
                            { id: 4, label: "4 visites de suivi (3 mois)", included: true },
                            { id: 5, label: "Garantie 6 mois", included: true },
                            { id: 6, label: "Rapport de conformité", included: true },
                            { id: 7, label: "Contrat maintenance optionnel", included: true },
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
                        question: 'Combien de temps faut-il pour éliminer complètement les insectes ?',
                        answer: 'Selon le type d’insectes (cafards, punaises de lit, guêpes, etc.), l’élimination peut prendre de quelques jours à plusieurs semaines. Nous assurons un suivi régulier pour éviter toute réinfestation.'
                    },
                    {
                        id: 2,
                        question: 'Les produits utilisés sont-ils dangereux pour mes enfants ou mes animaux ?',
                        answer: 'Non. Nous utilisons uniquement des produits certifiés et appliqués selon des protocoles stricts. Les zones traitées sont sécurisées et nous privilégions des solutions respectueuses de l’environnement quand c’est possible.'
                    },
                    {
                        id: 3,
                        question: 'Quel est le coût d’une désinsectisation ?',
                        answer: 'Le tarif dépend du type d’insectes, de la surface à traiter et du niveau d’infestation. Notre inspection gratuite permet d’établir un devis précis et sans engagement. En moyenne, comptez entre 120€ et 450€.'
                    },
                    {
                        id: 4,
                        question: 'Comment éviter une nouvelle infestation d’insectes ?',
                        answer: 'Nous vous fournissons des conseils personnalisés : entretien des locaux, élimination des sources de nourriture, colmatage des fissures, hygiène renforcée. Nos garanties incluent des visites de contrôle.'
                    },
                    {
                        id: 5,
                        question: 'Intervenez-vous pour les professionnels (restaurants, hôtels, bureaux) ?',
                        answer: 'Oui, nous accompagnons régulièrement les professionnels avec des traitements adaptés et des contrats de maintenance préventive pour garantir la conformité aux normes d’hygiène (HACCP).'
                    }
                ]}
                
                ctaTitle="Prêt à éliminer les insectes nuisibles ?"
                ctaSubtitle="Contactez-nous dès maintenant pour une inspection gratuite et un devis personnalisé. Intervention rapide garantie sous 24h."
                ctaButtonText="Inspection gratuite"
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