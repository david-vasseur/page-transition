"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

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
    suffix?: string;
}

interface ISocialProof {
    title: string;
    highlight: string;
    testimonials: ITestimonial[];
    stats: IStat[];
}

function SocialProof({ title, highlight, testimonials, stats }: ISocialProof) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const titleWords = gsap.utils.toArray<HTMLElement>(".social-title-word");
        const statCards = gsap.utils.toArray<HTMLElement>(".stat-card");
        const testimonialCards = gsap.utils.toArray<HTMLElement>(".testimonial-card");

        // Animation du titre
        gsap.fromTo(titleWords,
            { opacity: 0, y: 60, rotationX: -45 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                }
            }
        );

        // Animation des statistiques avec compteur
        statCards.forEach((card) => {
            const valueElement = card.querySelector('.stat-value');
            const value = valueElement?.textContent || '0';
            const numericValue = parseInt(value.replace(/\D/g, ''));
            
            gsap.fromTo(card,
                { opacity: 0, scale: 0.8, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 60%",
                        scrub: 1,
                    }
                }
            );

            // Animation du compteur
            if (valueElement && numericValue > 0) {
                const counterObj = { value: 0 }; 

                gsap.fromTo(
                    counterObj,
                    { value: 0 },
                    {
                    value: numericValue,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    onUpdate: function () {
                        const suffix = value.match(/[+%]/)?.[0] || '';
                        valueElement.textContent = Math.floor(counterObj.value) + suffix;
                    },
                    }
                );
            }
        });

        // Animation des témoignages
        testimonialCards.forEach((card, i) => {
            const quote = card.querySelector('.testimonial-quote');
            const stars = card.querySelectorAll('.testimonial-star');
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 55%",
                    scrub: 1,
                }
            });

            tl.fromTo(card,
                { opacity: 0, y: 60, rotationY: i % 2 === 0 ? 15 : -15 },
                { opacity: 1, y: 0, rotationY: 0, ease: "power2.out" }
            );

            if (quote) {
                tl.fromTo(quote,
                    { scale: 0, rotation: -180 },
                    { scale: 1, rotation: 0, ease: "back.out(2)" },
                    "<+=0.1"
                );
            }

            tl.fromTo(stars,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, stagger: 0.05, ease: "back.out(2)" },
                "<+=0.2"
            );
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Title */}
                <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-center text-white mb-6">
                    {title.split(' ').map((word, i) => (
                        <span key={i} className="social-title-word inline-block mr-3">
                            {word}
                        </span>
                    ))}
                    <span className="social-title-word inline-block text-orange-600">{highlight}</span>
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-16 lg:mb-24">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="stat-card w-full h-auto aspect-square relative group"
                        >
                            <div className="bg-linear-to-br aspect-square from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-600 transition-all duration-300">
                                <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300" />
                                <div className="relative">
                                    <div className="stat-value text-3xl sm:text-4xl lg:text-5xl font-black text-orange-600 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card relative group"
                        >
                            <div className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-600/50 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300" />
                                
                                <div className="relative h-full flex flex-col">
                                    {/* Quote icon */}
                                    <div className="testimonial-quote w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center mb-4">
                                        <Quote className="w-5 h-5 text-orange-600" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`testimonial-star w-4 h-4 ${
                                                    i < testimonial.rating
                                                        ? 'fill-orange-600 text-orange-600'
                                                        : 'text-gray-700'
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 flex-1">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{testimonial.name}</div>
                                            <div className="text-xs text-gray-500">{testimonial.location}</div>
                                        </div>
                                        <div className="ml-auto text-xs text-gray-600">{testimonial.date}</div>
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
