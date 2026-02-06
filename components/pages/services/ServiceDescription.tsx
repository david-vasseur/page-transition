// "use client"

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Check, Shield, Clock, Award } from 'lucide-react';
// import { useRef } from 'react';

// interface IFeature {
//     id: string | number;
//     icon: 'check' | 'shield' | 'clock' | 'award';
//     title: string;
//     description: string;
// }

// interface IServiceDescription {
//     title: string;
//     highlight: string;
//     description: string;
//     features: IFeature[];
//     processTitle: string;
//     processSteps: {
//         id: string | number;
//         number: string;
//         title: string;
//         description: string;
//     }[];
// }

// const iconMap = {
//     check: Check,
//     shield: Shield,
//     clock: Clock,
//     award: Award,
// };

// function ServiceDescription({
//     title,
//     highlight,
//     description,
//     features,
//     processTitle,
//     processSteps
// }: IServiceDescription) {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const titleRef = useRef<HTMLHeadingElement>(null);
//     const descRef = useRef<HTMLParagraphElement>(null);

//     useGSAP(() => {
//         const titleChars = gsap.utils.toArray<HTMLElement>(".desc-title-char");
//         const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
//         const processCards = gsap.utils.toArray<HTMLElement>(".process-card");

//         // Animation du titre
//         gsap.fromTo(titleChars,
//             { opacity: 0, y: 80, rotationX: -90 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 rotationX: 0,
//                 stagger: 0.03,
//                 ease: "back.out(1.7)",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: titleRef.current,
//                     start: "top 80%",
//                     end: "top 40%",
//                     scrub: 1,
//                 }
//             }
//         );

//         // Animation de la description
//         gsap.fromTo(descRef.current,
//             { opacity: 0, y: 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: descRef.current,
//                     start: "top 85%",
//                     end: "top 60%",
//                     scrub: 1,
//                 }
//             }
//         );

//         // Animation des feature cards
//         featureCards.forEach((card, i) => {
//             gsap.fromTo(card,
//                 { opacity: 0, y: 60, scale: 0.9 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     scale: 1,
//                     ease: "back.out(1.2)",
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "top 90%",
//                         end: "top 60%",
//                         scrub: 1,
//                     }
//                 }
//             );
//         });

//         // Animation des process cards
//         processCards.forEach((card, i) => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: card,
//                     start: "top 85%",
//                     end: "top 50%",
//                     scrub: 1,
//                 }
//             });

//             tl.fromTo(card,
//                 { opacity: 0, x: i % 2 === 0 ? -60 : 60, rotationY: i % 2 === 0 ? -20 : 20 },
//                 { opacity: 1, x: 0, rotationY: 0, ease: "power3.out" }
//             );

//             // Animation du numéro
//             const number = card.querySelector('.process-number');
//             if (number) {
//                 tl.fromTo(number,
//                     { scale: 0, rotation: -180 },
//                     { scale: 1, rotation: 0, ease: "back.out(2)" },
//                     "<+=0.1"
//                 );
//             }
//         });

//     }, { scope: sectionRef });

//     return (
//         <section ref={sectionRef} className="relative py-20 lg:py-32 bg-black overflow-hidden">
//             {/* Background pattern */}
//             <div className="absolute inset-0 opacity-5">
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         backgroundImage:
//                             'radial-gradient(circle, rgba(249,115,22,0.3) 1px, transparent 1px)',
//                         backgroundSize: '30px 30px',
//                     }}
//                 />
//             </div>

//             <div className="relative z-10 max-w-7xl mx-auto px-6">
//                 {/* Title Section */}
//                 <div className="text-center mb-16 lg:mb-24">
//                     <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl whitespace-pre-line font-black text-white mb-6">
//                         {title.split('').map((char, i) => (
//                             <span key={i} className="desc-title-char inline-block">
//                                 {char === ' ' ? '\u00A0' : char}
//                             </span>
//                         ))}
//                         {' '}
//                         <span className="text-orange-600 whitespace-nowrap">
//                             {highlight.split('').map((char, i) => (
//                                 <span key={i} className="desc-title-char inline-block">
//                                     {char === ' ' ? '\u00A0' : char}
//                                 </span>
//                             ))}
//                         </span>
//                     </h2>
//                     <p ref={descRef} className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                         {description}
//                     </p>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 lg:mb-32">
//                     {features.map((feature) => {
//                         const Icon = iconMap[feature.icon];
//                         return (
//                             <div
//                                 key={feature.id}
//                                 className="feature-card group relative bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-600 transition-all duration-300"
//                             >
//                                 <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300" />
//                                 <div className="relative gap-5 flex-row flex lg:flex-col">
//                                     <div className="w-12 h-12 bg-orange-600/10 rounded-xl shrink-0 flex items-center justify-center mb-4 group-hover:bg-orange-600/20 transition-all duration-300">
//                                         <Icon className="w-6 h-6 text-orange-600" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
//                                         <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Process Section */}
//                 <div>
//                     <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-white mb-12 lg:mb-16">
//                         {processTitle}
//                     </h3>
//                     <div className="space-y-8">
//                         {processSteps.map((step, index) => (
//                             <div
//                                 key={step.id}
//                                 className="process-card relative"
//                             >
//                                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-linear-to-r from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-orange-600/50 transition-all duration-300">
//                                     <div className="process-number shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg shadow-orange-600/20">
//                                         <span className="text-2xl sm:text-3xl font-black text-white">{step.number}</span>
//                                     </div>
//                                     <div className="flex-1">
//                                         <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h4>
//                                         <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{step.description}</p>
//                                     </div>
//                                 </div>
//                                 {/* Connecting line */}
//                                 {index < processSteps.length - 1 && (
//                                     <div className="hidden sm:block absolute left-10 top-full w-0.5 h-8 bg-linear-to-b from-orange-600/50 to-transparent" />
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ServiceDescription;

"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Shield, Clock, Award } from 'lucide-react';
import { useRef } from 'react';

// Enregistrement du plugin (nécessaire pour ScrollTrigger)
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface IFeature {
    id: string | number;
    icon: 'check' | 'shield' | 'clock' | 'award';
    title: string;
    description: string;
}

interface IProcessStep {
    id: string | number;
    number: string;
    title: string;
    description: string;
    image: string; // Ajout de l'image obligatoire pour l'effet
}

interface IServiceDescription {
    title: string;
    highlight: string;
    description: string;
    features: IFeature[];
    processTitle: string;
    processSteps: IProcessStep[];
}

const iconMap = {
    check: Check,
    shield: Shield,
    clock: Clock,
    award: Award,
};

function ServiceDescription({
    title,
    highlight,
    description,
    features,
    processTitle,
    processSteps
}: IServiceDescription) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    
    // Refs pour la nouvelle section process
    const processContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const titleChars = gsap.utils.toArray<HTMLElement>(".desc-title-char");
        const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
        
        // --- ANIMATIONS EXISTANTES (Conservées) ---

        // Animation du titre
        gsap.fromTo(titleChars,
            { opacity: 0, y: 80, rotationX: -90 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                stagger: 0.03,
                ease: "back.out(1.7)",
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: 1,
                }
            }
        );

        // Animation de la description
        gsap.fromTo(descRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 85%",
                    end: "top 60%",
                    scrub: 1,
                }
            }
        );

        // Animation des feature cards
        featureCards.forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0, y: 60, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1,
                    }
                }
            );
        });

        // --- NOUVELLE ANIMATION PROCESS (Sticky Reveal) ---
        
        // Configuration Desktop
        const mm = gsap.matchMedia();
        
        mm.add("(min-width: 1024px)", () => {
            const steps = gsap.utils.toArray<HTMLElement>(".process-step-trigger");
            const images = gsap.utils.toArray<HTMLElement>(".process-image");

            // Pin de la section gauche
            ScrollTrigger.create({
                trigger: processContainerRef.current,
                start: "top top+=100", // Commence un peu plus bas que le top
                end: "bottom bottom",
                pin: ".process-images-pin",
                pinSpacing: false, // Important pour l'alignement
            });

            // Animation des images (Reveal Left to Right)
            steps.forEach((step, i) => {
                if (i === 0) return; // La première image est déjà visible

                gsap.fromTo(images[i], 
                    { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }, // Fermé à gauche
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // Ouvert
                        ease: "none",
                        scrollTrigger: {
                            trigger: step,
                            start: "top center", // Quand l'étape arrive au milieu
                            end: "top center-=100",
                            scrub: true, // Lié au scroll pour l'effet "wipe"
                        }
                    }
                );
            });

            // Animation simple d'apparition des textes (Steps)
            steps.forEach((step) => {
                 gsap.fromTo(step,
                    { opacity: 0.3, x: 50 },
                    { opacity: 1, x: 0, duration: 0.5, scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play reverse play reverse"
                    }}
                );
            });
        });

        // Animation Mobile (Simple Fade Up)
        mm.add("(max-width: 1023px)", () => {
            const mobileCards = gsap.utils.toArray<HTMLElement>(".process-step-trigger");
            mobileCards.forEach((card) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: card, start: "top 85%" } }
                );
            });
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 bg-black overflow-hidden selection:bg-orange-600/30">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.3) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* --- HEADER SECTION --- */}
                <div className="text-center mb-16 lg:mb-32">
                    <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl whitespace-pre-line font-black text-white mb-6">
                        {title.split('').map((char, i) => (
                            <span key={i} className="desc-title-char inline-block">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                        {' '}
                        <span className="text-orange-600 whitespace-nowrap">
                            {highlight.split('').map((char, i) => (
                                <span key={i} className="desc-title-char inline-block">
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </span>
                    </h2>
                    <p ref={descRef} className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* --- FEATURES GRID --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <div
                                key={feature.id}
                                className="feature-card group relative bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-600 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300" />
                                <div className="relative gap-5 flex-row flex lg:flex-col">
                                    <div className="w-12 h-12 bg-orange-600/10 rounded-xl shrink-0 flex items-center justify-center mb-4 group-hover:bg-orange-600/20 transition-all duration-300">
                                        <Icon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- NEW PROCESS SECTION --- */}
                <div className="relative">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center lg:text-left text-white mb-16 lg:mb-24 lg:pl-10">
                        {processTitle}
                    </h3>
                    
                    {/* Container GRID pour Desktop */}
                    <div ref={processContainerRef} className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        
                        {/* COLONNE GAUCHE (Images Sticky) - Desktop Only */}
                        <div className="process-images-pin hidden lg:block w-1/2 h-[500px] sticky top-32 rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
                            <div className="relative w-full h-full">
                                {processSteps.map((step, index) => (
                                    <div 
                                        key={step.id} 
                                        className="process-image absolute inset-0 w-full h-full"
                                        style={{ zIndex: index + 1 }} // Empilement : 1, 2, 3...
                                    >
                                        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay sombre pour lisibilité */}
                                        <img 
                                            src={step.image} 
                                            alt={step.title} 
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Label flottant sur l'image */}
                                        <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                                            <span className="text-white font-bold text-sm tracking-wider uppercase">
                                                {step.title}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Éléments décoratifs autour du cadre image */}
                            <div className="absolute -inset-1 rounded-3xl bg-linear-to-b from-orange-600/20 to-transparent blur-lg -z-10" />
                        </div>

                        {/* COLONNE DROITE (Scrollable Steps) */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-[40vh] pb-20"> 
                            {/* gap-[40vh] crée l'espace nécessaire pour scroller et déclencher les anims */}
                            
                            {processSteps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className="process-step-trigger relative group"
                                >
                                    {/* Mobile Image (Visible uniquement sur mobile) */}
                                    <div className="lg:hidden w-full h-48 rounded-t-2xl overflow-hidden mb-0 relative">
                                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                                    </div>

                                    {/* Carte Contenu */}
                                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 lg:bg-transparent lg:border-l-2 lg:border-y-0 lg:border-r-0 lg:border-gray-800 lg:pl-8 lg:rounded-none rounded-b-2xl rounded-t-none lg:hover:border-orange-600 transition-all duration-300 p-6 sm:p-8">
                                        
                                        {/* Numéro */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-600/20">
                                                {step.number}
                                            </div>
                                            <h4 className="text-2xl font-bold text-white lg:text-3xl">{step.title}</h4>
                                        </div>
                                        
                                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                                            {step.description}
                                        </p>

                                        {/* Bouton/Lien factice pour ajouter du détail */}
                                        <div className="mt-6 flex items-center text-orange-500 text-sm font-semibold cursor-pointer group-hover:text-orange-400 transition-colors">
                                            En savoir plus <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceDescription;
