"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';

function Social() {

    const socialContainerRef = useRef<HTMLDivElement>(null);
    const socialTitleRef = useRef<HTMLHeadingElement>(null);
    const socialGridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (socialTitleRef.current) {
            const split = new SplitText(socialTitleRef.current, {
                type: "chars",
                charsClass: "split-char"
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

        // Animation des cartes sociales
        if (socialGridRef.current) {
            const cards = gsap.utils.toArray('.social-card');
            
            cards.forEach((card: any, index) => {
                // Entrée
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

    })

    return (
        <div ref={socialContainerRef} className="relative mt-15 lg:mt-32">
            {/* Background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-orange-600/20 via-pink-600/20 to-purple-600/20 blur-3xl opacity-30" />
            
            <div className="relative text-center mb-12">
                <h3 
                    ref={socialTitleRef}
                    className="text-3xl lg:text-5xl font-black text-white mb-4 break-keep"
                >
                    REJOIGNEZ-NOUS SUR LES <span className="text-orange-600">RÉSEAUX</span>
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Suivez nos interventions, conseils et actualités
                </p>
            </div>

            <div ref={socialGridRef} className="lg:max-w-2xl grid grid-cols-3 gap-6 lg:gap-8 mx-auto">
                {[{
                    name: "Facebook",
                    url: "https://facebook.com",
                    icon: FaFacebook,
                    color: "text-[#1877F2]",      // Bleu Facebook officiel
                    hoverColor: "#FF6A00" // Orange (ton thème)
                    },
                    {
                    name: "Instagram",
                    url: "https://instagram.com",
                    icon: FaInstagram,
                    color: "text-[#E1306C]",      // Rose Instagram
                    hoverColor: "#F77737" // Orange chaud
                    },
                    {
                    name: "TikTok",
                    url: "https://tiktok.com",
                    icon: FaTiktok,
                    color: "#010101",     // Noir TikTok
                    hoverColor: "#69C9D0" // Cyan TikTok
                    }].map((social, index) => {
                    const Icon = social.icon;
                    
                    return (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card group relative"
                        >
                            <div className="relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:border-orange-600/50 hover:scale-110 hover:-rotate-2">
                                
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-linear-to-br text-${social.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-500 blur-xl`} style={{backgroundImage: `${social.color}`}} />
                                
                                {/* Icon container */}
                                <div className="relative flex flex-col items-center gap-4">
                                    <div className="relative">
                                        
                                        {/* Icon */}
                                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white/5 group-hover:bg-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 overflow-hidden">
                                            <Icon className={`text-4xl lg:text-5xl ${social.color} ${social.hoverColor} transition-all duration-500`} />
                                            <div 
                                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 -translate-x-full group-hover:translate-x-full pointer-events-none" 
                                                style={{ transition: 'transform 1s ease-in-out, opacity 0.5s' }} 
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Name */}
                                    <span className="text-white font-bold text-lg group-hover:text-orange-600 transition-colors duration-300">
                                        {social.name}
                                    </span>
                                    
                                    {/* Follower count (optionnel) */}
                                    <span className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Suivez-nous
                                    </span>
                                </div>

                                {/* Shine effect */}
                                
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
    )
}

export default Social;

