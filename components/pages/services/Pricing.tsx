"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Phone, Star, Shield } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface IPricingItem {
    id: string | number;
    label: string;
    included: boolean;
}

interface IPricingCard {
    id: string | number;
    title: string;
    subtitle: string;
    priceRange: string;
    priceNote: string;
    included: IPricingItem[];
    badge?: string;
    gradient: string;
    bgGradient: string;
    isPopular?: boolean;
}

interface IPricing {
    sectionTitle: string;
    sectionHighlight: string;
    description: string;
    cards: IPricingCard[];
    ctaText: string;
    ctaPhone: string;
}

function Pricing({
    sectionTitle,
    sectionHighlight,
    description,
    cards,
    ctaText,
    ctaPhone
}: IPricing) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const titleChars = gsap.utils.toArray<HTMLElement>(".pricing-title-char");
        const pricingCards = gsap.utils.toArray<HTMLElement>(".pricing-card");

        // Animation du titre
        gsap.fromTo(titleChars,
            { opacity: 0, y: 80, rotationX: -90 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                stagger: 0.03,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 50%",
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
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top 85%",
                    end: "top 65%",
                    scrub: 1,
                }
            }
        );

        // Animation des cartes de prix
        pricingCards.forEach((card, i) => {
            const shine = card.querySelector('.pricing-shine');
            const glow = card.querySelector('.pricing-glow');
            const checkmarks = card.querySelectorAll('.pricing-check');

            gsap.fromTo(card,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "top 65%",
                        scrub: 1,
                    }
                }
            );

            // Shine effect
            if (shine) {
                gsap.fromTo(shine,
                    { x: "-120%" },
                    {
                        x: "120%",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "top 50%",
                            scrub: 1,
                        }
                    }
                );
            }

            // Glow on CTA
            if (glow) {
                gsap.to(glow, {
                    x: "100%",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 55%",
                        scrub: 1,
                    }
                });
            }

            // Checkmarks animation
            if (checkmarks.length) {
                gsap.fromTo(checkmarks,
                    { opacity: 0, x: -20, scale: 0 },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        stagger: 0.05,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "top 60%",
                            scrub: 1,
                        }
                    }
                );
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 bg-linear-to-b from-black via-gray-950 to-black overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(249,115,22,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Decorative blurs */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Title Section */}
                <div className="text-center mb-16 lg:mb-20">
                    <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                        {sectionTitle.split('').map((char, i) => (
                            <span key={i} className="pricing-title-char inline-block">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                        {' '}
                        <span className="text-orange-600">
                            {sectionHighlight.split('').map((char, i) => (
                                <span key={i} className="pricing-title-char inline-block">
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </span>
                    </h2>
                    <p ref={descRef} className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`pricing-card relative group will-change-transform ${
                                card.isPopular ? 'lg:scale-105' : ''
                            }`}
                            style={{ perspective: '1000px' }}
                        >
                            {/* Popular Badge */}
                            {card.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-linear-to-r from-orange-600 to-orange-700 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                                        <Star className="w-4 h-4 fill-white" />
                                        Le plus populaire
                                    </div>
                                </div>
                            )}

                            <div
                                className={`relative bg-linear-to-br from-zinc-900 to-black border ${
                                    card.isPopular ? 'border-orange-600/50' : 'border-zinc-800'
                                } rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-orange-600/50 h-full`}
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)'
                                }}
                            >
                                {/* Shine effect */}
                                <div className="pricing-shine absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full" />
                                
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-linear-to-br ${card.bgGradient} opacity-30`} />
                                
                                {/* Corner accent */}
                                <div
                                    className={`absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl ${card.gradient} opacity-20`}
                                    style={{
                                        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Badge */}
                                    {card.badge && (
                                        <div className={`inline-flex items-center gap-2 self-start bg-linear-to-r ${card.gradient} text-white text-xs font-bold px-4 py-2 rounded-full mb-6`}>
                                            <Shield className="w-4 h-4" />
                                            {card.badge}
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{card.title}</h3>
                                    
                                    {/* Subtitle */}
                                    <p className="text-sm text-gray-400 mb-6">{card.subtitle}</p>

                                    {/* Price */}
                                    <div className="mb-2">
                                        <div className={`text-4xl sm:text-5xl font-black bg-linear-to-r ${card.gradient} bg-clip-text text-transparent`}>
                                            {card.priceRange}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">{card.priceNote}</p>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent my-6" />

                                    {/* Included items */}
                                    <ul className="space-y-4 flex-1 mb-8">
                                        {card.included.map((item) => (
                                            <li key={item.id} className="flex items-start gap-3">
                                                <div className={`pricing-check shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                                                    item.included
                                                        ? `bg-linear-to-br ${card.gradient}`
                                                        : 'bg-zinc-800'
                                                }`}>
                                                    <Check className={`w-4 h-4 ${
                                                        item.included ? 'text-white' : 'text-zinc-600'
                                                    }`} />
                                                </div>
                                                <span className={`text-sm ${
                                                    item.included ? 'text-gray-300' : 'text-gray-600'
                                                }`}>
                                                    {item.label}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <a
                                        href={`tel:${ctaPhone.replace(/\s/g, '')}`}
                                        className={`relative w-full bg-linear-to-r ${card.gradient} hover:shadow-lg hover:shadow-orange-600/30 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center group overflow-hidden`}
                                    >
                                        <Phone className="w-5 h-5 mr-2" />
                                        Demander un devis
                                        <div className="pricing-glow absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full will-change-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* 24/7 Badge */}
                            <div className={`absolute -top-3 -right-3 bg-linear-to-br ${card.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                                24/7
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-4">{ctaText}</p>
                    <a
                        href={`tel:${ctaPhone.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-500 font-bold text-lg transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        {ctaPhone}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
