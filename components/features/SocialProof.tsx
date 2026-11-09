"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const SOCIAL_LINKS = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/people/GVS-3D/100082197788579/",
        icon: FaFacebook,
        iconColor: "text-[#1877F2]",
        hoverColor: "group-hover:text-[#FF6A00]",
        glowColor: "from-[#1877F2] to-[#FF6A00]",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/g.v.s_3d",
        icon: FaInstagram,
        iconColor: "text-[#E1306C]",
        hoverColor: "group-hover:text-[#F77737]",
        glowColor: "from-[#E1306C] to-[#F77737]",
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@g.v.s.3d",
        icon: FaTiktok,
        iconColor: "text-white",
        hoverColor: "group-hover:text-[#69C9D0]",
        glowColor: "from-[#FE2C55] to-[#69C9D0]",
    },
];

function Social() {
    const socialContainerRef = useRef<HTMLDivElement>(null);
    const socialTitleRef = useRef<HTMLHeadingElement>(null);
    const socialGridRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (socialTitleRef.current) {
                const split = new SplitText(socialTitleRef.current, {
                    type: "words,chars",
                    wordsClass: "split-word whitespace-nowrap inline-block",
                    charsClass: "split-char",
                });

                gsap.from(split.chars, {
                    scrollTrigger: {
                        trigger: socialTitleRef.current,
                        start: "top 80%",
                        end: "top 60%",
                        scrub: 1,
                    },
                    opacity: 0,
                    scale: 0,
                    rotation: 180,
                    stagger: 0.03,
                    ease: "back.out(2)",
                });
            }

            if (socialGridRef.current) {
                const cards = gsap.utils.toArray<HTMLElement>(".social-card");

                cards.forEach((card, index) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 60%",
                            scrub: 1,
                        },
                        y: 100,
                        opacity: 0,
                        scale: 0.8,
                        rotation: index % 2 === 0 ? -15 : 15,
                        ease: "back.out(1.7)",
                    });
                });
            }
        },
        { scope: socialContainerRef }
    );

    return (
        <div ref={socialContainerRef} className="relative mt-15 lg:mt-32">
            {/* Background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-orange-600/20 via-pink-600/20 to-purple-600/20 blur-3xl opacity-30 pointer-events-none" />

            <div className="relative text-center mb-12">
                <h3
                    ref={socialTitleRef}
                    className="text-3xl lg:text-5xl font-black text-white mb-4"
                >
                    REJOIGNEZ-NOUS SUR LES{" "}
                    <span className="text-orange-600">RÉSEAUX</span>
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Suivez nos interventions, conseils et actualités
                </p>
            </div>

            <div
                ref={socialGridRef}
                className="lg:max-w-2xl grid grid-cols-3 gap-6 lg:gap-8 mx-auto"
            >
                {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card group relative block"
                        >
                            <div className="relative rounded-3xl p-6 lg:p-10 transition-all duration-500 hover:border-orange-600/50 hover:scale-110 hover:-rotate-2">
                                {/* Gradient background on hover */}
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${social.glowColor} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 blur-xl pointer-events-none`}
                                />

                                {/* Icon container */}
                                <div className="relative flex flex-col items-center gap-4">
                                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white/5 group-hover:bg-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 overflow-hidden">
                                        <Icon
                                            className={`text-4xl lg:text-5xl ${social.iconColor} ${social.hoverColor} transition-colors duration-500`}
                                        />
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none" />
                                    </div>

                                    {/* Name */}
                                    <span className="text-white font-bold text-base lg:text-lg group-hover:text-orange-600 transition-colors duration-300">
                                        {social.name}
                                    </span>

                                    {/* Call to action */}
                                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Suivez-nous
                                    </span>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" />
            <div
                className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none"
                style={{ animationDelay: "1s" }}
            />
        </div>
    );
}

export default Social;
