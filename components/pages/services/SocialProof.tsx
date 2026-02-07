// "use client"

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { Star, Quote } from 'lucide-react';
// import { useRef } from 'react';

// interface ITestimonial {
//     id: string | number;
//     name: string;
//     location: string;
//     rating: number;
//     text: string;
//     date: string;
//     avatar?: string;
// }

// interface IStat {
//     id: string | number;
//     value: string;
//     label: string;
//     suffix?: string;
// }

// interface ISocialProof {
//     title: string;
//     highlight: string;
//     testimonials: ITestimonial[];
//     stats: IStat[];
// }

// function SocialProof({ title, highlight, testimonials, stats }: ISocialProof) {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const titleRef = useRef<HTMLHeadingElement>(null);

//     useGSAP(() => {
//         const titleWords = gsap.utils.toArray<HTMLElement>(".social-title-word");
//         const statCards = gsap.utils.toArray<HTMLElement>(".stat-card");
//         const testimonialCards = gsap.utils.toArray<HTMLElement>(".testimonial-card");

//         // Animation du titre
//         gsap.fromTo(titleWords,
//             { opacity: 0, y: 60, rotationX: -45 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 rotationX: 0,
//                 stagger: 0.08,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: titleRef.current,
//                     start: "top 80%",
//                     end: "top 50%",
//                     scrub: 1,
//                 }
//             }
//         );

//         // Animation des statistiques avec compteur
//         statCards.forEach((card) => {
//             const valueElement = card.querySelector('.stat-value');
//             const value = valueElement?.textContent || '0';
//             const numericValue = parseInt(value.replace(/\D/g, ''));
            
//             gsap.fromTo(card,
//                 { opacity: 0, scale: 0.8, y: 40 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     y: 0,
//                     ease: "back.out(1.5)",
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "top 85%",
//                         end: "top 60%",
//                         scrub: 1,
//                     }
//                 }
//             );

//             // Animation du compteur
//             if (valueElement && numericValue > 0) {
//                 const counterObj = { value: 0 }; 

//                 gsap.fromTo(
//                     counterObj,
//                     { value: 0 },
//                     {
//                     value: numericValue,
//                     duration: 2,
//                     ease: "power2.out",
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "top 80%",
//                         toggleActions: "play none none none",
//                     },
//                     onUpdate: function () {
//                         const suffix = value.match(/[+%]/)?.[0] || '';
//                         valueElement.textContent = Math.floor(counterObj.value) + suffix;
//                     },
//                     }
//                 );
//             }
//         });

//         // Animation des témoignages
//         testimonialCards.forEach((card, i) => {
//             const quote = card.querySelector('.testimonial-quote');
//             const stars = card.querySelectorAll('.testimonial-star');
            
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: card,
//                     start: "top 85%",
//                     end: "top 55%",
//                     scrub: 1,
//                 }
//             });

//             tl.fromTo(card,
//                 { opacity: 0, y: 60, rotationY: i % 2 === 0 ? 15 : -15 },
//                 { opacity: 1, y: 0, rotationY: 0, ease: "power2.out" }
//             );

//             if (quote) {
//                 tl.fromTo(quote,
//                     { scale: 0, rotation: -180 },
//                     { scale: 1, rotation: 0, ease: "back.out(2)" },
//                     "<+=0.1"
//                 );
//             }

//             tl.fromTo(stars,
//                 { opacity: 0, scale: 0 },
//                 { opacity: 1, scale: 1, stagger: 0.05, ease: "back.out(2)" },
//                 "<+=0.2"
//             );
//         });

//     }, { scope: sectionRef });

//     return (
//         <section ref={sectionRef} className="relative py-20 lg:py-32 bg-linear-to-b from-black via-gray-950 to-black overflow-hidden">
//             {/* Background decoration */}
//             <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
//             </div>

//             <div className="relative z-10 max-w-7xl mx-auto px-6">
//                 {/* Title */}
//                 <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-center text-white mb-6">
//                     {title.split(' ').map((word, i) => (
//                         <span key={i} className="social-title-word inline-block mr-3">
//                             {word}
//                         </span>
//                     ))}
//                     <span className="social-title-word inline-block text-orange-600">{highlight}</span>
//                 </h2>

//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-16 lg:mb-24">
//                     {stats.map((stat) => (
//                         <div
//                             key={stat.id}
//                             className="stat-card mx-auto max-w-2xs h-full relative group"
//                         >
//                             <div className="bg-linear-to-br max-w-2xs h-full items-center aspect-square from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-600 transition-all duration-300">
//                                 <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300" />
//                                 <div className="relative h-full flex flex-col items-center justify-center">
//                                     <div className="stat-value text-3xl sm:text-4xl lg:text-5xl font-black text-orange-600 mb-2">
//                                         {stat.value}
//                                     </div>
//                                     <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
//                                         {stat.label}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Testimonials */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {testimonials.map((testimonial) => (
//                         <div
//                             key={testimonial.id}
//                             className="testimonial-card relative group"
//                         >
//                             <div className="h-full bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-600/50 transition-all duration-300">
//                                 <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300" />
                                
//                                 <div className="relative h-full flex flex-col">
//                                     {/* Quote icon */}
//                                     <div className="testimonial-quote w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center mb-4">
//                                         <Quote className="w-5 h-5 text-orange-600" />
//                                     </div>

//                                     {/* Stars */}
//                                     <div className="flex gap-1 mb-4">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star
//                                                 key={i}
//                                                 className={`testimonial-star w-4 h-4 ${
//                                                     i < testimonial.rating
//                                                         ? 'fill-orange-600 text-orange-600'
//                                                         : 'text-gray-700'
//                                                 }`}
//                                             />
//                                         ))}
//                                     </div>

//                                     {/* Text */}
//                                     <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 flex-1">
//                                         "{testimonial.text}"
//                                     </p>

//                                     {/* Author */}
//                                     <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
//                                         <div className="w-10 h-10 bg-linear-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold">
//                                             {testimonial.name.charAt(0)}
//                                         </div>
//                                         <div>
//                                             <div className="text-sm font-bold text-white">{testimonial.name}</div>
//                                             <div className="text-xs text-gray-500">{testimonial.location}</div>
//                                         </div>
//                                         <div className="ml-auto text-xs text-gray-600">{testimonial.date}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default SocialProof;

"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star, Quote, ArrowUpRight } from 'lucide-react'; // J'ai ajouté une icône
import { useRef } from 'react';
import Image from 'next/image'; // Assure-toi d'utiliser next/image ou une balise img standard

interface ITestimonial {
    id: string | number;
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
    avatar?: string;
}

interface IStat {
    id: string | number;
    value: string;
    label: string;
}

interface ISocialProof {
    title: string;
    highlight: string;
    description?: string; // Ajout optionnel pour plus de contexte
    imageUrl?: string;    // Nouvelle prop pour l'image
    testimonials: ITestimonial[];
    stats: IStat[];
}

function SocialProof({ 
    title, 
    highlight, 
    description = "Découvrez pourquoi des dizaines de clients nous font confiance.",
    imageUrl = "/service/confiance.png", // Image par défaut
    testimonials, 
    stats 
}: ISocialProof) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const titleWords = gsap.utils.toArray<HTMLElement>(".social-title-word");
        const statCards = gsap.utils.toArray<HTMLElement>(".stat-card");
        const testimonialCards = gsap.utils.toArray<HTMLElement>(".testimonial-card");

        // Timeline principale
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "bottom bottom",
                toggleActions: "play none none reverse"
            }
        });

        // 1. Animation de l'image (Reveal effect)
        tl.fromTo(imageRef.current, 
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", opacity: 1, duration: 1.2, ease: "power4.out" }
        );

        // 2. Animation du titre (en parallèle)
        tl.fromTo(titleWords,
            { opacity: 0, y: 40, rotationX: -45 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                stagger: 0.05,
                ease: "power3.out",
                duration: 0.8
            },
            "<+=0.2" // Commence un peu après le début de l'image
        );

        // 3. Apparition du texte de description
        tl.fromTo(".social-desc", 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.5 }, 
            "<+=0.3"
        );

        // 4. Animation des statistiques (Pop effect)
        statCards.forEach((card, i) => {
            const valueElement = card.querySelector('.stat-value');
            const valueText = valueElement?.textContent || '0';
            const numericValue = parseInt(valueText.replace(/\D/g, ''));

            // Animation d'apparition de la carte
            gsap.fromTo(card,
                { opacity: 0, scale: 0.8, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    ease: "back.out(1.7)",
                    duration: 0.6,
                    delay: i * 0.1, // Petit décalage entre les stats
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    }
                }
            );

            // Compteur numérique
            if (valueElement && numericValue > 0) {
                const counterObj = { value: 0 };
                gsap.to(counterObj, {
                    value: numericValue,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    onUpdate: () => {
                        const suffix = valueText.match(/[+%kM]/)?.[0] || '';
                        valueElement.textContent = Math.floor(counterObj.value) + suffix;
                    }
                });
            }
        });

        // 5. Animation des témoignages (Staggered Grid)
        gsap.fromTo(testimonialCards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".testimonials-grid",
                    start: "top 80%",
                }
            }
        );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-28 bg-black overflow-hidden selection:bg-orange-600/30">
            {/* Background elements */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* TOP SECTION: Split Layout (Text/Stats Left, Image Right) */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    
                    {/* Left Column: Title & Stats */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/30 border border-orange-900/50 text-orange-500 text-xs font-semibold tracking-wider uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            Social Proof
                        </div> */}

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className="social-title-word inline-block mr-3">
                                    {word}
                                </span>
                            ))}
                            <span className="social-title-word inline-block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                                {highlight}
                            </span>
                        </h2>

                        <p className="social-desc text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                            {description}
                        </p>

                        {/* STATS: Flex container (Solving the spacing issue) */}
                        <div className="flex flex-wrap justify-center items-center lg:justify-start gap-6 w-full">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="stat-card group relative min-w-35"
                                >
                                    <div className="relative flex items-center justify-center overflow-hidden w-36 sm:w-40 md:w-44 aspect-square bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-5 transition-all duration-300">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
                                        <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500" />
                                        
                                        <div className="relative z-10">
                                            <div className="stat-value text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight text-center">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider flex items-center gap-1 text-center">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: The Image */}
                    <div ref={imageRef} className="relative hidden lg:block h-full min-h-[400px]">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl shadow-black/50 rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                            
                            {/* Generic Image or passed prop */}
                            <img 
                                src={imageUrl} 
                                alt="Team success" 
                                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                            />

                            {/* Floating Badge on Image */}
                            <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 max-w-[260px]">
                                <div className="bg-orange-600 p-2.5 rounded-lg text-white">
                                    <ArrowUpRight size={20} />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">Croissance Rapide</p>
                                    <p className="text-gray-300 text-xs">Rejoignez le mouvement</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative elements behind image */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-gray-800 rounded-3xl opacity-40"></div>
                    </div>
                </div>

                {/* BOTTOM SECTION: Testimonials */}
                <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card h-full"
                        >
                            <div className="h-full bg-gray-950/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 hover:bg-gray-900/80 transition-all duration-300 group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-900 rounded-xl group-hover:bg-orange-500/10 transition-colors duration-300">
                                        <Quote className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < testimonial.rating
                                                        ? 'fill-orange-500 text-orange-500'
                                                        : 'fill-gray-800 text-gray-800'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-8 min-h-[80px]">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-900">
                                    {testimonial.avatar ? (
                                         <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                                    ) : (
                                        <div className="w-10 h-10 bg-linear-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    )}
                                    
                                    <div>
                                        <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-xs text-gray-500">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SocialProof;
