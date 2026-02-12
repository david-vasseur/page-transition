import { services, serviceDescriptions, socialProofData } from "@/data/newService"
import HeroService from '@/components/pages/services/HeroService';
import Story from '@/components/pages/services/Story';
import ServiceDescription from '@/components/pages/services/ServiceDescription';
import SocialProof from '@/components/pages/services/SocialProof';
import FaqCta from '@/components/pages/services/FaqCta';
import Pricing from '@/components/pages/services/Pricing';

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
    canonical: 'https://gvs3d.fr/desinsectisation',
};

export default function DesinsectisationPage() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GVS3D - Désinsectisation",
        "description": "Service professionnel de désinsectisation pour l'élimination des insectes nuisibles à Estezargues et dans le Gard.",
        "url": "https://gvs3d.fr/desinsectisation", 
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

    console.log(services);
    
    const service = services.find(i => i.hero.header1 === "Désinsectisation");
    
    const description = serviceDescriptions.find(i => i.title === "Désinsectisation complète");
    console.log(socialProofData);
    
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
    );
}





// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import SectionTitle from '@/components/ui/SectionTitle';
// import Image from 'next/image';
// import Benefice from '@/components/pages/services/Benefice';
// import BeneficeMobile from '@/components/pages/services/Test';

// gsap.registerPlugin(ScrollTrigger);

// export default function DératisationPage() {
// 	const heroRef = useRef<HTMLDivElement>(null);
// 	const psbRef = useRef<HTMLDivElement>(null);
// 	const serviceRef = useRef<HTMLDivElement>(null);
// 	const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
// 	const imgWrapperRef = useRef<HTMLDivElement>(null);

// 	useGSAP(() => {
// 		// Hero animations
// 		gsap.from('.hero-title', {
// 			opacity: 0,
// 			y: 100,
// 			duration: 1.2,
// 			ease: 'power4.out',
// 		});

// 		gsap.from('.hero-subtitle', {
// 			opacity: 0,
// 			y: 50,
// 			duration: 1,
// 			delay: 0.3,
// 			ease: 'power3.out',
// 		});

// 		gsap.from('.hero-cta', {
// 			opacity: 0,
// 			scale: 0.8,
// 			duration: 0.8,
// 			delay: 0.6,
// 			ease: 'back.out(1.7)',
// 		});

// 		// Stats counter
// 		gsap.from('.stat-number', {
// 			scrollTrigger: {
// 			trigger: '.stats-section',
// 			start: 'top 80%',
// 			},
// 			textContent: 0,
// 			duration: 2,
// 			ease: 'power1.inOut',
// 			snap: { textContent: 1 },
// 			stagger: 0.2,
// 		});
// 	});

// 	useGSAP(() => {

// 		if (imgWrapperRef.current) {

// 			gsap.to(imgWrapperRef.current, {
// 				scrollTrigger: {
// 					trigger: psbRef.current,
// 					start: "top 10%",
// 					end: "bottom bottom",
// 					pin: imgWrapperRef.current
// 				}
// 			})

// 		}

// 	})

// 	useGSAP(() => {

// 		if (imgWrapperRef.current) {

// 			gsap.to(imgWrapperRef.current.children[1], {
// 				scrollTrigger: {
// 					trigger: psbRef.current,
// 					start: "5% top",
// 					end: "25% top",
// 					scrub: 1
// 				},
// 				scale: 1.05,
// 				yPercent: -100
// 			})
// 		}

// 	})

// 	useGSAP(() => {

// 		if (imgWrapperRef.current) {

// 			gsap.to(imgWrapperRef.current.children[2], {
// 				scrollTrigger: {
// 					trigger: psbRef.current,
// 					start: "30% top",
// 					end: "50% top",
// 					scrub: 1
// 				},
// 				scale: 1.05,
// 				yPercent: -200
// 			})
// 		}

// 	})

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Hero Section */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-linear-to-br from-orange-900/20 via-black to-black" />
        
//         {/* Animated grid background */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)',
//             backgroundSize: '50px 50px'
//           }} />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
//           <div className="floating-badge mb-8 inline-block">
//             <div className="px-6 py-2 bg-orange-500/20 border border-orange-500 rounded-full">
//               <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
//                 ⚡ Intervention 24/7
//               </span>
//             </div>
//           </div>

//           <h1 className="hero-title text-7xl md:text-9xl font-black mb-8 leading-none">
//             <span className="block text-white">ÉLIMINEZ LES</span>
//             <span className="block text-orange-500 italic -mt-2">RONGEURS</span>
//           </h1>
          
//           <p className="hero-subtitle text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
//             Des rats dans vos locaux ? Une odeur suspecte ? 
//             <span className="block mt-2 text-orange-500 font-semibold">
//               Nos experts certifiés interviennent rapidement pour protéger votre santé et vos biens
//             </span>
//           </p>

//           <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="group relative px-10 py-5 bg-orange-500 text-black font-black text-lg rounded-full hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-2xl shadow-orange-500/50">
//               <span className="relative z-10">DEVIS GRATUIT IMMÉDIAT</span>
//               <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//             <button className="px-10 py-5 border-2 border-orange-500 text-orange-500 font-bold text-lg rounded-full hover:bg-orange-500/10 transition-all duration-300">
//               06 XX XX XX XX
//             </button>
//           </div>

//           <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400">
//             <div className="flex items-center gap-2">
//               <span className="text-orange-500">✓</span> Certifié & Agréé
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-orange-500">✓</span> Garantie Résultats
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-orange-500">✓</span> Éco-responsable
//             </div>
//           </div>
//         </div>
//       </section>

// 		{/* Problem → Solution → Benefit Section with Sticky Image */}
// 		{/* <Benefice /> */}
//           <BeneficeMobile />
//       {/* Service Description with GSAP */}
//       <section ref={serviceRef} className="relative py-32 bg-linear-to-b from-black to-orange-950/10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="text-6xl md:text-8xl font-black mb-6">
//               <span className="text-white">NOTRE</span>
//               <span className="text-orange-500 block mt-2">MÉTHODE</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Un protocole éprouvé pour une dératisation efficace et durable
//             </p>
//           </div>

//           <div className="space-y-8">
//             {[
//               {
//                 number: '01',
//                 title: 'Évaluation & Diagnostic',
//                 description: 'Inspection complète de vos locaux, identification des espèces présentes et analyse du niveau d\'infestation',
//                 icon: '🔬'
//               },
//               {
//                 number: '02',
//                 title: 'Plan d\'Action Personnalisé',
//                 description: 'Stratégie adaptée à votre environnement : choix des rodenticides, positionnement des postes, fréquence d\'intervention',
//                 icon: '📋'
//               },
//               {
//                 number: '03',
//                 title: 'Traitement Professionnel',
//                 description: 'Mise en place de postes sécurisés avec rodenticides certifiés et substance amérisante Bitrex',
//                 icon: '🎯'
//               },
//               {
//                 number: '04',
//                 title: 'Contrôles Réguliers',
//                 description: 'Visites périodiques : vérification, réapprovisionnement des appâts, ajustement de la stratégie',
//                 icon: '🔄'
//               },
//               {
//                 number: '05',
//                 title: 'Prévention Continue',
//                 description: 'Conseils d\'amélioration, détection précoce, protection contre les réinfestations',
//                 icon: '🛡️'
//               }
//             ].map((item, idx) => (
//               <div key={idx} ref={el => {featuresRef.current[idx] = el}} className="service-item group">
//                 <div className="relative bg-gradient-to-r from-gray-900 to-black p-8 lg:p-12 rounded-3xl border border-orange-500/20 hover:border-orange-500 transition-all duration-500 overflow-hidden">
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all duration-500" />
                  
//                   <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6">
//                     <div className="flex items-center gap-6">
//                       <div className="text-7xl">{item.icon}</div>
//                       <div className="text-8xl font-black text-orange-500/20 group-hover:text-orange-500/30 transition-colors duration-500">
//                         {item.number}
//                       </div>
//                     </div>
                    
//                     <div className="flex-1">
//                       <h3 className="text-3xl font-black break-keep text-orange-500 mb-3">{item.title}</h3>
//                       <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
//                     </div>

//                     <div className="lg:ml-auto">
//                       <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
//                         <span className="text-orange-500 group-hover:text-black text-2xl">→</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Social Proof / Testimonials */}
//       <section className="relative py-32">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="text-6xl md:text-8xl font-black mb-6">
//               <span className="text-white">ILS NOUS</span>
//               <span className="text-orange-500 block mt-2">FONT CONFIANCE</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Découvrez les témoignages de nos clients satisfaits
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="stats-section grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//             {[
//               { number: 500, suffix: '+', label: 'Clients Satisfaits' },
//               { number: 98, suffix: '%', label: 'Taux de Réussite' },
//               { number: 24, suffix: 'h', label: 'Délai d\'Intervention' },
//               { number: 15, suffix: 'ans', label: 'D\'Expérience' }
//             ].map((stat, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="relative inline-block">
//                   <div className="absolute -inset-4 bg-orange-500/10 rounded-xl blur-xl" />
//                   <div className="relative bg-gradient-to-br from-orange-500/20 to-orange-900/20 p-8 rounded-2xl border border-orange-500/30">
//                     <div className="flex items-baseline justify-center">
//                       <span className="stat-number text-5xl lg:text-6xl font-black text-orange-500">
//                         {stat.number}
//                       </span>
//                       <span className="text-3xl font-black text-orange-500 ml-1">{stat.suffix}</span>
//                     </div>
//                     <div className="text-sm lg:text-base text-gray-400 font-medium uppercase tracking-wider mt-3">
//                       {stat.label}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonials Grid */}
//           <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Marie L.',
//                 role: 'Restauratrice, Paris',
//                 text: 'Intervention rapide et efficace. Plus aucune trace de rongeurs depuis 6 mois. Je recommande vivement !',
//                 rating: 5
//               },
//               {
//                 name: 'Jean-Pierre M.',
//                 role: 'Gérant d\'immeuble',
//                 text: 'Professionnalisme exemplaire. L\'équipe a résolu notre problème en quelques semaines avec un suivi impeccable.',
//                 rating: 5
//               },
//               {
//                 name: 'Sophie D.',
//                 role: 'Boulangerie artisanale',
//                 text: 'Enfin une entreprise qui respecte ses engagements ! Conformité sanitaire retrouvée, équipe réactive et discrète.',
//                 rating: 5
//               },
//               {
//                 name: 'Thomas B.',
//                 role: 'Hôtel 3 étoiles',
//                 text: 'Service irréprochable, intervention nocturne pour ne pas déranger nos clients. Problème résolu définitivement.',
//                 rating: 5
//               },
//               {
//                 name: 'Isabelle R.',
//                 role: 'Copropriété 45 lots',
//                 text: 'Excellent rapport qualité-prix. Devis clair, intervention programmée, résultats au rendez-vous.',
//                 rating: 5
//               },
//               {
//                 name: 'Marc V.',
//                 role: 'Entrepôt logistique',
//                 text: 'Ils ont sauvé notre certification ! Intervention d\'urgence en 24h, suivi rigoureux, équipe compétente.',
//                 rating: 5
//               }
//             ].map((testimonial, idx) => (
//               <div key={idx} className="testimonial-card group">
//                 <div className="relative h-full bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500 transition-all duration-500">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-500" />
                  
//                   <div className="relative">
//                     <div className="flex gap-1 mb-4">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <span key={i} className="text-orange-500 text-xl">★</span>
//                       ))}
//                     </div>
                    
//                     <p className="text-gray-300 mb-6 leading-relaxed italic">
//                       "{testimonial.text}"
//                     </p>
                    
//                     <div>
//                       <div className="font-bold text-white">{testimonial.name}</div>
//                       <div className="text-sm text-gray-500">{testimonial.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="relative py-32 bg-gradient-to-t from-black via-orange-950/10 to-black">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-12 lg:p-20 rounded-3xl border-2 border-orange-500/30 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            
//             <div className="relative">
//               <h2 className="text-5xl md:text-7xl font-black mb-6">
//                 <span className="text-white">PROTÉGEZ VOS LOCAUX</span>
//                 <span className="text-orange-500 block mt-2">DÈS AUJOURD'HUI</span>
//               </h2>
              
//               <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
//                 Ne laissez pas les rongeurs menacer votre santé et votre activité.
//                 <span className="block mt-2 text-orange-500 font-semibold">
//                   Obtenez votre devis gratuit en 30 secondes.
//                 </span>
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//                 <button className="group relative px-12 py-6 bg-orange-500 text-black font-black text-xl rounded-full hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-2xl shadow-orange-500/50">
//                   <span className="relative z-10">DEVIS GRATUIT</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </button>
//                 <button className="px-12 py-6 border-2 border-orange-500 text-orange-500 font-bold text-xl rounded-full hover:bg-orange-500/10 transition-all duration-300">
//                   06 XX XX XX XX
//                 </button>
//               </div>

//               <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">✓</span> Devis gratuit sous 1h
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">✓</span> Intervention sous 24h
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">✓</span> Garantie résultats
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">✓</span> Paiement facilité
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }