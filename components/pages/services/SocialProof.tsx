"use client"

import IReview from '@/type/review';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

interface IStat {
    id: string | number;
    value: string;
    label: string;
}

interface ISocialProof {
    title: string;
    highlight: string;
    description?: string; 
    imageUrl?: string;   
    testimonials: IReview[];
    stats: IStat[];
}

function SocialProof({ 
    title, 
    highlight, 
    description = "Découvrez pourquoi des dizaines de clients nous font confiance.",
    imageUrl = "/service/confiance.png", 
    testimonials, 
    stats 
}: ISocialProof) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (linkRef.current) {
            gsap.from(linkRef.current, {
                scrollTrigger: {
                    trigger: linkRef.current,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: 1
                },
                opacity: 0,
                scale: 0.8
            })
        }

    })

    useGSAP(() => {

        if (glowRef.current) {
            gsap.to(glowRef.current, {
                scrollTrigger: {
                    trigger: glowRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1,
                },
                x: "100%",
            });
        }

    });

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
            <div className="absolute top-0 right-0 w-125 h-125 bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* TOP SECTION: Split Layout (Text/Stats Left, Image Right) */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    
                    {/* Left Column: Title & Stats */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
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
                    <div ref={imageRef} className="relative hidden lg:block h-full min-h-100">
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
                            <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 max-w-65">
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
                <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {testimonials.map((review, index) => (
                        <div
                            key={index}
                            className={`
                                testimonial-card h-full
                                lg:col-span-2
                                ${index === 3 ? "lg:col-start-2" : ""}
                            `}
                        >
                            <div className="h-full flex flex-col bg-gray-950/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 hover:bg-gray-900/80 transition-all duration-300 group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-900 rounded-xl group-hover:bg-orange-500/10 transition-colors duration-300">
                                        <Quote className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < review.rating
                                                        ? 'fill-orange-500 text-orange-500'
                                                        : 'fill-gray-800 text-gray-800'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-8 min-h-20">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-900 mt-auto">
                                    {review.profile_photo_url ? (
                                        <img
                                            src={review.profile_photo_url}
                                            alt={review.author_name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 bg-linear-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {review.author_name.charAt(0)}
                                        </div>
                                    )}

                                    <div>
                                    <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                                        {review.author_name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {review.relative_time_description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className='flex items-center justify-center mt-10'>
                    <a  
                        ref={linkRef}
                        href="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
                        target='_blank'
                        className='relative overflow-hidden bg-linear-to-br from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold'
                    >
                        Voir plus d&apos;avis
                        <div ref={glowRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SocialProof;
