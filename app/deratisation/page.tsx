import { services, serviceDescriptions, socialProofData } from "@/data/newService"
import HeroService from '@/components/pages/services/HeroService';
import Story from '@/components/pages/services/Story';
import ServiceDescription from '@/components/pages/services/ServiceDescription';
import SocialProof from '@/components/pages/services/SocialProof';
import FaqCta from '@/components/pages/services/FaqCta';
import Pricing from '@/components/pages/services/Pricing';
import { ratReviews } from "@/data/reviews";

export const metadata = {

    title: 'Dératisation Professionnelle - Élimination de Rongeurs | GVS3D',
    description: 'Service de dératisation professionnel à Manduel et ses environs. Élimination efficace et durable des rats, souris et autres rongeurs. Devis gratuit et intervention rapide.',
    keywords: 'dératisation, dératiseur, rats, souris, rongeurs, élimination rongeurs, contrôle nuisibles, GVS3D, Manduel, Occitanie, anti-nuisibles, pièges rongeurs, produits dératisation',
    openGraph: {
        title: 'Dératisation Professionnelle - Élimination de Rongeurs | GVS3D',
        description: 'Service de dératisation professionnel à Manduel et ses environs. Élimination efficace et durable des rats, souris et autres rongeurs. Devis gratuit et intervention rapide.',
        url: 'https://gvs3d.fr/logo.webp', 
        type: 'website',
        images: [
            {
                url: 'https://gvs3d.fr/logo.webp',
                width: 1200,
                height: 630,
                alt: 'Dératisation professionnelle GVS3D',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dératisation Professionnelle - Élimination de Rongeurs | GVS3D',
        description: 'Service de dératisation professionnel à Manduel et ses environs. Élimination efficace et durable des rats, souris et autres rongeurs. Devis gratuit et intervention rapide.',
        images: ['https://gvs3d.fr/logo.webp'], 
    },
    canonical: 'https://gvs3d.fr/deratisation',
};


export default function DératisationPage() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GVS3D - Dératisation",
        "description": "Service professionnel de dératisation pour l'élimination de rats, souris et rongeurs à Manduel et dans le Gard.",
        "url": "https://gvs3d.fr/deratisation", 
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
                        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
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
                /* TODO => mettre les vrais pages */
                "https://www.facebook.com/votrepageGVS3D", 
                "https://www.linkedin.com/company/votrepageGVS3D"
            ]
        },
        "areaServed": [
            {
                "@type": "Place",
                "name": "Manduel"
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
        "serviceType": "Dératisation",
        "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Dératisation",
                "description": "Élimination de rats, souris, et autres rongeurs",
                "areaServed": [
                    { "@type": "Place", "name": "Manduel" },
                    { "@type": "Place", "name": "Nîmes" },
                    { "@type": "Place", "name": "Gard" },
                    { "@type": "Place", "name": "Avignon" }
                ]
            },
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "EUR",
                "minPrice": 150,
                "maxPrice": 500
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "42"  
        }
    };

    const service = services.find(i => i.hero.header1 === "Dératisation");
    const description = serviceDescriptions.find(i => i.title === "Dératisation professionnelle");
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
                description="Nos prix varient selon la surface à traiter et le niveau d'infestation. Chaque intervention inclut un diagnostic complet et un suivi garanti."
                
                cards={[
                    {
                        id: 1,
                        title: "Particulier",
                        subtitle: "Maisons & Appartements",
                        priceRange: "150€ - 300€",
                        priceNote: "Selon surface et infestation",
                        badge: "Inspection offerte",
                        gradient: "from-orange-600 to-orange-700",
                        bgGradient: "from-orange-600/5 to-orange-700/5",
                        included: [
                            { id: 1, label: "Inspection gratuite et diagnostic", included: true },
                            { id: 2, label: "Déplacement inclus (30km)", included: true },
                            { id: 3, label: "Mise en place du traitement", included: true },
                            { id: 4, label: "2 visites de suivi (1 mois)", included: true },
                            { id: 5, label: "Garantie 3 mois", included: true },
                            { id: 6, label: "Contrat de maintenance", included: false },
                        ]
                    },
                    {
                        id: 2,
                        title: "Pro",
                        subtitle: "Commerces & Bureaux",
                        priceRange: "250€ - 500€",
                        priceNote: "Intervention & suivi complet",
                        badge: "Conformité HACCP",
                        gradient: "from-blue-600/80 to-cyan-600/80",
                        bgGradient: "from-blue-600/20 to-cyan-600/10",
                        included: [
                            { id: 1, label: "Inspection gratuite et diagnostic", included: true },
                            { id: 2, label: "Déplacement inclus (50km)", included: true },
                            { id: 3, label: "Mise en place du traitement", included: true },
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
                testimonials={ratReviews}
                stats={socialProof.stats}
            />
            <FaqCta
                faqTitle="Questions"
                faqHighlight="fréquentes"
                
                faqs={[
                    {
                        id: 1,
                        question: 'Combien de temps faut-il pour éliminer complètement les rongeurs ?',
                        answer: 'En moyenne, il faut 2 à 3 semaines pour une élimination complète. La durée dépend du niveau d\'infestation et de l\'espèce de rongeur. Nous effectuons un suivi régulier pendant 6 mois pour garantir qu\'il n\'y ait pas de réinfestation.'
                    },
                    {
                        id: 2,
                        question: 'Les produits utilisés sont-ils dangereux pour mes animaux domestiques ?',
                        answer: 'Tous nos produits sont certifiés et appliqués selon les normes strictes de sécurité. Nous utilisons des boîtes sécurisées pour les appâts, inaccessibles aux animaux domestiques et aux enfants. Nous privilégions également des méthodes écologiques quand c\'est possible.'
                    },
                    {
                        id: 3,
                        question: 'Quel est le coût d\'une intervention de dératisation ?',
                        answer: 'Le prix varie selon la surface à traiter, le niveau d\'infestation et le type de bien (maison, appartement, local commercial). Notre inspection gratuite nous permet d\'établir un devis précis et sans engagement. En moyenne, comptez entre 150€ et 400€ pour une intervention complète avec suivi.'
                    },
                    {
                        id: 4,
                        question: 'Comment puis-je éviter une nouvelle infestation ?',
                        answer: 'Nous vous fournirons des conseils personnalisés lors de notre intervention : boucher les points d\'entrée, stocker la nourriture dans des contenants hermétiques, maintenir une bonne hygiène, éliminer les sources d\'eau stagnante. Notre garantie 6 mois inclut des visites de contrôle pour prévenir tout retour.'
                    },
                    {
                        id: 5,
                        question: 'Intervenez-vous aussi pour les professionnels (restaurants, hôtels) ?',
                        answer: 'Oui, nous intervenons régulièrement pour des professionnels de la restauration, de l\'hôtellerie et du commerce. Nous proposons des contrats de maintenance préventive pour garantir votre conformité aux normes d\'hygiène HACCP et éviter les amendes.'
                    }
                ]}
                
                ctaTitle="Prêt à vous débarrasser des rongeurs ?"
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
