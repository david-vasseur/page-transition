import { services, serviceDescriptions, socialProofData } from "@/data/newService"
import HeroService from '@/components/pages/services/HeroService';
import Story from '@/components/pages/services/Story';
import ServiceDescription from '@/components/pages/services/ServiceDescription';
import SocialProof from '@/components/pages/services/SocialProof';
import FaqCta from '@/components/pages/services/FaqCta';
import Pricing from '@/components/pages/services/Pricing';

export const metadata = {

    title: 'Dératisation Professionnelle - Élimination de Rongeurs | GVS3D',
    description: 'Service de dératisation professionnel à Estezargues et ses environs. Élimination efficace et durable des rats, souris et autres rongeurs. Devis gratuit et intervention rapide.',
    keywords: 'dératisation, dératiseur, rats, souris, rongeurs, élimination rongeurs, contrôle nuisibles, GVS3D, Estezargues, Occitanie, anti-nuisibles, pièges rongeurs, produits dératisation',
    openGraph: {
        title: 'Dératisation Professionnelle - Élimination de Rongeurs | GVS3D',
        description: 'Service de dératisation professionnel à Estezargues et ses environs. Élimination efficace et durable des rats, souris et autres rongeurs. Devis gratuit et intervention rapide.',
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
        description: 'Service de dératisation professionnel à Estezargues et ses environs. Élimination efficace et durable des rats, souris et autres rongeurs. Devis gratuit et intervention rapide.',
        images: ['https://gvs3d.fr/logo.webp'], 
    },
    canonical: 'https://gvs3d.fr/deratisation',
};


export default function DératisationPage() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GVS3D - Dératisation",
        "description": "Service professionnel de dératisation pour l'élimination de rats, souris et rongeurs à Estezargues et dans le Gard.",
        "url": "https://gvs3d.fr/deratisation", 
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
        "serviceType": "Dératisation",
        "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Dératisation",
                "description": "Élimination de rats, souris, et autres rongeurs",
                "areaServed": [
                    { "@type": "Place", "name": "Estezargues" },
                    { "@type": "Place", "name": "Gard" }
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
                testimonials={socialProof.testimonials}
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
                address="Estezargues, Occitanie"
            />
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </>
    // <div className="min-h-screen bg-black text-white overflow-hidden">
    //   {/* Hero Section */}
    //   <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
    //     {/* Image de fond hero */}
    //     <img
    //       src="https://images.unsplash.com/photo-1589927986089-35812388d1f4"
    //       alt="Dératisation professionnelle"
    //       className="absolute inset-0 w-full h-full object-cover opacity-30"
    //     />

    //     {/* Animated background particles */}
    //     <div className="absolute inset-0 overflow-hidden">
    //       {[...Array(15)].map((_, i) => (
    //         <div
    //           key={i}
    //           className="particle absolute w-2 h-2 bg-orange-500 rounded-full opacity-20"
    //           style={{
    //             left: `${Math.random() * 100}%`,
    //             top: `${Math.random() * 100}%`,
    //           }}
    //         />
    //       ))}
    //     </div>

    //     {/* Gradient overlay */}
    //     <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-black to-orange-950/50" />

    //     <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    //       <div className="text-center">
    //         <h1 className="hero-title text-8xl md:text-9xl font-black mb-6 leading-none">
    //           <span className="block text-white">GESTION</span>
    //           <span className="block text-orange-500 italic -mt-4">RONGEURS</span>
    //         </h1>
    //         <div className="hero-accent h-1 w-64 bg-orange-500 mx-auto mb-8" />
    //         <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
    //           Protection professionnelle contre les nuisances · Interventions certifiées · Respect de l'environnement
    //         </p>
    //       </div>

    //       {/* Rotating badge */}
    //       <div className="absolute top-10 right-10 w-32 h-32 hidden lg:block">
    //         <div className="relative w-full h-full animate-spin-slow">
    //           <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-dashed" />
    //           <div className="absolute inset-4 rounded-full bg-orange-500 flex items-center justify-center">
    //             <span className="text-black font-bold text-sm text-center">24/7<br/>SERVICE</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Scroll indicator */}
    //     <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    //       <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center pt-2">
    //         <div className="w-1 h-3 bg-orange-500 rounded-full" />
    //       </div>
    //     </div>
    //   </section>

    //   {/* Stats Section */}
    //   <section ref={statsRef} className="relative py-32 bg-gradient-to-b from-black via-orange-950/10 to-black">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="relative grid grid-cols-3 lg:grid-row-3 bg-linear-to-br from-gray-500/40 via-black/40 to-gray-400/40 gap-8 px-8 py-6 border border-gray-500 rounded-xl overflow-hidden">
    //         <div ref={glowRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
    //         {[
    //           { icon: FaStar, label: "Note", label2: "Google", title: "5/5" },
    //           { icon: FaBuilding, label: "Années", label2: "D'experience", title: "3+" },
    //           { icon: FaBug, label: "Nombre", label2: "D'intervention", title: "500+" },
    //         ].map((proof, index) => (
    //           <Forward
    //             key={index}
    //             label={proof.label}
    //             label2={proof.label2}
    //             title={proof.title}
    //             textColor="text-orange-500"
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Indices de présence */}
    //   <section ref={paralRef} className="relative py-32 text-center parallax-slow">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <SectionTitle title='INDICES DE' span='PRÉSENCE' />

    //       {/* Image illustrative */}
    //       <div className="reveal mt-12 mb-16 flex justify-center">
    //         <img
    //           src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
    //           alt="Traces de rongeurs"
    //           className="w-full max-w-4xl rounded-3xl border border-orange-500/30 shadow-lg"
    //         />
    //       </div>

    //       <div className="cards-container mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {[
    //           { icon: '💩', title: 'Excréments', desc: 'Taille grain de riz (souris) ou noyau d\'olive (rat brun)' },
    //           { icon: '🍕', title: 'Dégâts alimentaires', desc: 'Traces sur céréales, biscuits, produits carnés, fruits...' },
    //           { icon: '⚡', title: 'Rongements', desc: 'Câbles électriques, tuyaux, bois, plâtre, cartons, tissus' },
    //           { icon: '👣', title: 'Empreintes', desc: 'Traces de pattes visibles dans la poussière' },
    //           { icon: '🌑', title: 'Traces noirâtres', desc: 'Suint déposé sur les passages fréquents' },
    //         ].map((item, idx) => (
    //           <div
    //             key={idx}
    //             className="info-card group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500 transition-all duration-500 cursor-pointer overflow-hidden"
    //           >
    //             <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-all duration-500" />
    //             <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all duration-500" />
    //             <div className="relative">
    //               <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
    //                 {item.icon}
    //               </div>
    //               <h3 className="text-2xl font-black text-orange-500 mb-3">{item.title}</h3>
    //               <p className="text-gray-400 leading-relaxed">{item.desc}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Prévention */}
    //   <section ref={paraRef} className="relative py-32 bg-linear-to-b from-black to-orange-950/20 parallax-fast">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="grid lg:grid-cols-2 gap-16 items-center">
    //         <div className="reveal text-center">
    //           <SectionTitle title='PRÉVENTION' span='& PROTECTION' />
    //           <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
    //             <p>
    //               La protection contre les rongeurs repose sur plusieurs actions essentielles coordonnées et professionnelles.
    //             </p>
    //             <ul className="space-y-4 text-left">
    //               <li className="flex items-start gap-3">
    //                 <span className="text-orange-500 text-2xl">→</span>
    //                 <span>Prévenir et évaluer les risques d'infestation</span>
    //               </li>
    //               <li className="flex items-start gap-3">
    //                 <span className="text-orange-500 text-2xl">→</span>
    //                 <span>Identifier les espèces et analyser les populations</span>
    //               </li>
    //               <li className="flex items-start gap-3">
    //                 <span className="text-orange-500 text-2xl">→</span>
    //                 <span>Réguler et maîtriser leur prolifération</span>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>

    //         {/* Image prévention */}
    //         <div className="reveal">
    //           <img
    //             src="https://images.unsplash.com/photo-1600573472560-8f7c3a2e50ad"
    //             alt="Prévention des rongeurs"
    //             className="rounded-3xl border border-orange-500/30 shadow-xl"
    //           />
    //         </div>
    //       </div>

    //       {/* Image + Mesures clés */}
    //       <div className="reveal mt-24 grid lg:grid-cols-2 gap-16 items-center">
    //         <div>
    //           <img
    //             src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
    //             alt="Inspection technique"
    //             className="rounded-3xl border border-orange-500/30 shadow-xl"
    //           />
    //         </div>

    //         <div className="relative">
    //           <div className="absolute -inset-8 bg-orange-500/20 rounded-3xl blur-3xl" />
    //           <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-10 rounded-3xl border-2 border-orange-500/30">
    //             <h3 className="text-3xl font-black text-orange-500 mb-6">Mesures Clés</h3>
    //             <div className="space-y-6">
    //               <div className="flex items-start gap-4">
    //                 <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
    //                   🏠
    //                 </div>
    //                 <div>
    //                   <h4 className="font-bold text-white mb-1">Réduire les refuges</h4>
    //                   <p className="text-gray-400 text-sm">Éliminer abris, végétation dense, accumulations</p>
    //                 </div>
    //               </div>
    //               <div className="flex items-start gap-4">
    //                 <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
    //                   🚪
    //                 </div>
    //                 <div>
    //                   <h4 className="font-bold text-white mb-1">Bloquer les accès</h4>
    //                   <p className="text-gray-400 text-sm">Sceller ouvertures, installer grilles, vérifier l'étanchéité</p>
    //                 </div>
    //               </div>
    //               <div className="flex items-start gap-4">
    //                 <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
    //                   🔍
    //                 </div>
    //                 <div>
    //                   <h4 className="font-bold text-white mb-1">Surveiller en continu</h4>
    //                   <p className="text-gray-400 text-sm">Contrôles périodiques et dispositifs de détection</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Rodenticides */}
    //   <section className="relative py-32">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <div className="reveal text-center mb-20">
    //         <SectionTitle title='TRAITEMENT' span='PRO' />
    //         <p className="text-xl text-gray-400 max-w-3xl mx-auto">
    //           Rodenticides certifiés avec substance amérisante (Bitrex) pour limiter les risques d'ingestion accidentelle
    //         </p>
    //       </div>

    //       {/* Image traitement */}
    //       <div className="reveal mb-16 flex justify-center">
    //         <img
    //           src="https://images.unsplash.com/photo-1611078489935-0cb964de46a2"
    //           alt="Postes d'appâtage sécurisés"
    //           className="w-full max-w-4xl rounded-3xl border border-orange-500/30 shadow-lg"
    //         />
    //       </div>

    //       <div className="grid md:grid-cols-3 gap-8">
    //         {[
    //           { title: 'Postes Sécurisés', desc: 'Fixés et étiquetés conformément à la réglementation', icon: '🔒' },
    //           { title: 'Contrôles Périodiques', desc: 'Surveillance continue selon exigences réglementaires', icon: '📋' },
    //           { title: 'Gestion Écologique', desc: 'Élimination des cadavres et appâts selon normes en vigueur', icon: '♻️' },
    //         ].map((item, idx) => (
    //           <div key={idx} className="reveal group">
    //             <div className="relative h-full bg-gradient-to-b from-orange-500/10 to-black p-8 rounded-3xl border border-orange-500/30 hover:border-orange-500 transition-all duration-500">
    //               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-500" />
    //               <div className="text-7xl mb-6">{item.icon}</div>
    //               <h3 className="text-2xl font-black text-orange-500 mb-4">{item.title}</h3>
    //               <p className="text-gray-400 leading-relaxed">{item.desc}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Réglementation */}
    //   <section className="relative py-32 bg-gradient-to-t from-black via-orange-950/10 to-black">
    //     <div className="max-w-5xl mx-auto px-6">
    //       {/* Image réglementation */}
    //       <div className="reveal mb-16 flex justify-center">
    //         <img
    //           src="https://images.unsplash.com/photo-1581091215367-59ab6b99d1c4"
    //           alt="Conformité et réglementation"
    //           className="w-full max-w-4xl rounded-3xl border border-orange-500/30 shadow-lg"
    //         />
    //       </div>

    //       <div className="reveal bg-gradient-to-br from-gray-900 to-black p-12 md:p-16 rounded-3xl border-2 border-orange-500/30 relative overflow-hidden">
    //         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
    //         <div className="relative">
    //           <div className="text-5xl mb-6">⚖️</div>
    //           <h2 className="text-4xl md:text-5xl font-black text-orange-500 mb-8">Réglementation</h2>
    //           <div className="space-y-6 text-gray-300 leading-relaxed">
    //             <p className="text-lg">
    //               <strong className="text-white">Article 119-1:</strong> Les propriétaires d'immeubles doivent prendre toutes mesures pour éviter l'introduction des rongeurs et assurer leur destruction en cas de présence constatée.
    //             </p>
    //             <p className="text-lg">
    //               <strong className="text-white">Article 130-5:</strong> Protection contre les nuisibles obligatoire pour la préparation des aliments.
    //             </p>
    //             <p className="text-lg">
    //               <strong className="text-white">Règlements CE 852/2004 et 853/2004:</strong> Obligation de mettre en œuvre des méthodes de lutte contre les organismes nuisibles dans les établissements alimentaires.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA Final */}
    //   <section className="relative py-32">
    //     <div className="max-w-4xl mx-auto px-6 text-center">
    //       <div className="reveal">
    //         <SectionTitle title="N'ATTENDEZ" span="PLUS" />
    //         <div className="faq-cta flex flex-col gap-10 items-center justify-center mt-10">
    //           <p className="max-w-2xs text-xl font-extrabold">Une infestation n’attend pas. Appelez-nous dès maintenant.</p>
    //           <a  
    //             href="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
    //             target='_blank'
    //             className='relative text-2xl shrink-0 overflow-hidden bg-linear-to-br from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold'
    //           >
    //             Appellez nous
    //             <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
