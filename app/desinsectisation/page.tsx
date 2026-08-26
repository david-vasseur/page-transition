import { services, serviceDescriptions, socialProofData } from "@/data/newService"
import HeroService from '@/components/pages/services/HeroService';
import Story from '@/components/pages/services/Story';
import ServiceDescription from '@/components/pages/services/ServiceDescription';
import SocialProof from '@/components/pages/services/SocialProof';
import FaqCta from '@/components/pages/services/FaqCta';
import Pricing from '@/components/pages/services/Pricing';
import { insectReviews } from "@/data/reviews";

export const metadata = {
    title: 'Désinsectisation Professionnelle - Élimination des Insectes | GVS3D',
    description: 'Service de désinsectisation professionnel à Manduel et ses environs. Élimination efficace et durable des cafards, punaises de lit, fourmis, guêpes et autres insectes. Devis gratuit et intervention rapide.',
    keywords: 'désinsectisation, désinsectiseur, cafards, punaises de lit, fourmis, guêpes, frelons, insectes nuisibles, contrôle nuisibles, GVS3D, Manduel, Beaucaire, Nîmes, Gard, Occitanie, anti-nuisibles, traitement insectes',
    openGraph: {
        title: 'Désinsectisation Professionnelle - Élimination des Insectes | GVS3D',
        description: 'Service de désinsectisation professionnel à Manduel et ses environs. Élimination efficace et durable des cafards, punaises de lit, fourmis, guêpes et autres insectes. Devis gratuit et intervention rapide.',
        url: 'https://gvs3d.fr/desinsectisation',
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
        description: 'Service de désinsectisation professionnel à Manduel et ses environs. Élimination efficace et durable des cafards, punaises de lit, fourmis, guêpes et autres insectes. Devis gratuit et intervention rapide.',
        images: ['https://gvs3d.fr/logo.webp'],
    },
    canonical: 'https://gvs3d.fr/desinsectisation',
};

export default function DesinsectisationPage() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GVS3D - Désinsectisation",
        "description": "Service professionnel de désinsectisation pour l'élimination des insectes nuisibles à Manduel et dans le Gard.",
        "url": "https://gvs3d.fr/desinsectisation",
        "provider": {
            "@type": "LocalBusiness",
            "name": "GVS3D",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "41 Rue du Roitelet",
                "addressLocality": "Manduel",
                "addressRegion": "Occitanie",
                "postalCode": "30129",
                "addressCountry": "FR"
            },
            "telephone": "06 58 94 20 67",
            "email": "g.v.s.3dpro@gmail.com",
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "18:00"
                }
            ],
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.81366",
                "longitude": "4.47284"
            },
            "priceRange": "€€",
            "hasMap": "https://www.google.com/maps/place/41+Rue+du+Roitelet,+30129+Manduel",
            "image": "https://gvs3d.fr/logo.webp",
            "sameAs": [
                /* TODO Changer les pages */
                "https://www.facebook.com/votrepageGVS3D",
                "https://www.linkedin.com/company/votrepageGVS3D"
            ]
        },
        "areaServed": [
            { "@type": "Place", "name": "Manduel" },
            { "@type": "Place", "name": "Nîmes" },
            { "@type": "Place", "name": "Beaucaire" },
            { "@type": "Place", "name": "Avignon" },
            { "@type": "Place", "name": "Gard" }
        ],
        "serviceType": "Désinsectisation",
        "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Désinsectisation",
                "description": "Élimination des cafards, punaises de lit, fourmis, guêpes et autres insectes nuisibles",
                "areaServed": [
                    { "@type": "Place", "name": "Manduel" },
                    { "@type": "Place", "name": "Nîmes" },
                    { "@type": "Place", "name": "Beaucaire" },
                    { "@type": "Place", "name": "Avignon" },
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
            "reviewCount": "73"
        }
    };

    
    const service = services.find(i => i.hero.header1 === "Désinsectisation");
    
    const description = serviceDescriptions.find(i => i.title === "Désinsectisation complète");
    
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
                        priceNote: "Selon type d’insectes, surface et accessibilité",
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
                testimonials={insectReviews}
                stats={socialProof.stats}
            />
            <FaqCta
                faqTitle="Questions"
                faqHighlight="fréquentes"
                
                faqs={[
                    {
                        id: 1,
                        question: 'Combien de temps faut-il pour éliminer complètement les insectes ?',
                        answer: 'La durée dépend du type d’insectes (cafards, punaises de lit, guêpes, fourmis...) et du niveau d’infestation. En général, une ou plusieurs interventions suffisent. Nous assurons un suivi afin de garantir une élimination durable lors de nos interventions à Manduel, Nîmes, Beaucaire et dans tout le Gard.'
                    },
                    {
                        id: 2,
                        question: 'Les produits utilisés sont-ils dangereux pour mes enfants ou mes animaux ?',
                        answer: 'Non. Nous utilisons uniquement des produits homologués et appliqués selon des protocoles stricts. Les zones traitées sont sécurisées et nous privilégions des solutions efficaces tout en limitant l’impact sur votre environnement. Nous vous expliquons également les précautions à respecter après chaque intervention.'
                    },
                    {
                        id: 3,
                        question: 'Quel est le coût d’une désinsectisation ?',
                        answer: 'Le tarif dépend du type d’insectes, de la surface à traiter et du niveau d’infestation. Nous proposons un diagnostic et un devis gratuits pour toute intervention à Manduel, Nîmes, Beaucaire, Avignon et dans le Gard. En moyenne, comptez entre 120 € et 450 € selon la prestation.'
                    },
                    {
                        id: 4,
                        question: 'Comment éviter une nouvelle infestation d’insectes ?',
                        answer: 'À l’issue de notre intervention, nous vous donnons des conseils personnalisés : suppression des sources de nourriture, colmatage des points d’entrée, entretien des locaux et bonnes pratiques d’hygiène. Ces recommandations permettent de limiter durablement les risques de réinfestation.'
                    },
                    {
                        id: 5,
                        question: 'Intervenez-vous pour les professionnels (restaurants, hôtels, bureaux) ?',
                        answer: 'Oui. Nous intervenons auprès des restaurants, hôtels, commerces, bureaux, collectivités et syndics à Manduel, Nîmes, Beaucaire, Avignon et dans l’ensemble du Gard. Nos prestations peuvent inclure des contrats de maintenance préventive afin de répondre aux exigences des normes d’hygiène, notamment HACCP.'
                    }
                ]}
                
                ctaTitle="Prêt à éliminer les insectes nuisibles ?"
                ctaSubtitle="Contactez-nous dès maintenant pour une inspection gratuite et un devis personnalisé. Intervention rapide garantie sous 24h."
                ctaButtonText="Inspection gratuite"
                ctaButtonLink="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
                phone="06 58 94 20 67"
                email="g.v.s.3dpro@gmail.com"
                address="Manduel, Occitanie"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </>
    );
}