"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Shield, Clock, Award } from 'lucide-react';
import { useRef } from 'react';

interface IFeature {
    id: string | number;
    icon: 'check' | 'shield' | 'clock' | 'award';
    title: string;
    description: string;
}

interface IServiceDescription {
    title: string;
    highlight: string;
    description: string;
    features: IFeature[];
    processTitle: string;
    processSteps: {
        id: string | number;
        number: string;
        title: string;
        description: string;
    }[];
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

    useGSAP(() => {
        const titleChars = gsap.utils.toArray<HTMLElement>(".desc-title-char");
        const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
        const processCards = gsap.utils.toArray<HTMLElement>(".process-card");

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
        featureCards.forEach((card, i) => {
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

        // Animation des process cards
        processCards.forEach((card, i) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1,
                }
            });

            tl.fromTo(card,
                { opacity: 0, x: i % 2 === 0 ? -60 : 60, rotationY: i % 2 === 0 ? -20 : 20 },
                { opacity: 1, x: 0, rotationY: 0, ease: "power3.out" }
            );

            // Animation du numéro
            const number = card.querySelector('.process-number');
            if (number) {
                tl.fromTo(number,
                    { scale: 0, rotation: -180 },
                    { scale: 1, rotation: 0, ease: "back.out(2)" },
                    "<+=0.1"
                );
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(249,115,22,0.3) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Title Section */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                        {title.split('').map((char, i) => (
                            <span key={i} className="desc-title-char inline-block">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                        {' '}
                        <span className="text-orange-600">
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

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 lg:mb-32">
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <div
                                key={feature.id}
                                className="feature-card group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-600 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300" />
                                <div className="relative">
                                    <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600/20 transition-all duration-300">
                                        <Icon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Process Section */}
                <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-white mb-12 lg:mb-16">
                        {processTitle}
                    </h3>
                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className="process-card relative"
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-orange-600/50 transition-all duration-300">
                                    <div className="process-number shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg shadow-orange-600/20">
                                        <span className="text-2xl sm:text-3xl font-black text-white">{step.number}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h4>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                                {/* Connecting line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden sm:block absolute left-10 top-full w-0.5 h-8 bg-gradient-to-b from-orange-600/50 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceDescription;
