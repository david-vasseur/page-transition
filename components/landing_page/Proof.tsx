"use client"

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { FaShieldAlt, FaCertificate, FaAward, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';


// Logos des partenaires (blasons de villes)
const partners = [
    { name: "Aramon", logo: "🏛️", image: "/aramon.png" },
    { name: "Garons", logo: "⚜️", image: "/garons.png" },
    { name: "Bellegarde", logo: "🏰", image: "/bellegarde.png" },
    { name: "Ledenon", logo: "🦁", image: "/ledenon.png" },
    { name: "St Anastasie", logo: "👑", image: "/stanastasie.png" },
    { name: "St Bonnet du Gard", logo: "👑", image: "/stbonnet.svg" },
];

// Images pour la galerie (remplacer par vos vraies images)
const galleryImages = [
    { id: 1, src: "/toit.webp", alt: "Certification professionnelle" },
    { id: 2, src: "/piegeur.webp", alt: "Équipement moderne" },
    { id: 3, src: "/thanks.webp", alt: "Intervention terrain" },
    { id: 4, src: "/car.webp", alt: "Garantie qualité" },
];

// Points clés de confiance
const trustPoints = [
    {
        icon: FaShieldAlt,
        title: "Certifié & Agréé",
        description: "Certifications professionnelles reconnues et conformité aux normes sanitaires en vigueur"
    },
    {
        icon: FaCertificate,
        title: "Expertise Locale",
        description: "Plus de 5 ans d'expérience sur le territoire avec des partenariats municipaux actifs"
    },
    {
        icon: FaAward,
        title: "Résultats Garantis",
        description: "Engagement de résultats avec suivi post-intervention et garantie satisfaction client"
    },
    {
        icon: FaCheckCircle,
        title: "Intervention Rapide",
        description: "Disponibilité 7j/7 avec intervention sous 24h pour les urgences sanitaires"
    },
];

function SocialProof() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const partnersRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const pointsRef = useRef<HTMLDivElement>(null);
    
    const [activePoint, setActivePoint] = useState(0);

    useGSAP(() => {
        // Animation du titre
        if (titleRef.current) {
        const split = new SplitText(titleRef.current, {
            type: "chars,words",
            charsClass: "split-char"
        });

        gsap.from(split.chars, {
            scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            },
            opacity: 0,
            y: 50,
            rotationX: -90,
            stagger: 0.02,
            ease: "back.out(1.7)",
        });
        }

        // Animation des logos partenaires
        if (partnersRef.current) {
        const logos = gsap.utils.toArray('.partner-logo');
        
        gsap.from(logos, {
            scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
            },
            scale: 0.7,
            opacity: 0,
            yPercent: 100,
            stagger: 0.1,
            ease: "elastic.out(0.8, 0.8)",
        });
        }

        // Animation des images de galerie
        if (galleryRef.current) {
        const images = gsap.utils.toArray('.gallery-image');
        
        images.forEach((img: any, index) => {
            gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
                onEnter: () => setActivePoint(index),
                onEnterBack: () => setActivePoint(index),
            },
            x: -100,
            opacity: 0,
            scale: 0.8,
            ease: "power3.out",
            });

            // Effet de parallaxe sur les images
            gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            },
            y: -50,
            ease: "none",
            });
        });
        }

        // Animation des points de confiance
        if (pointsRef.current) {
        const points = gsap.utils.toArray('.trust-point');
        
        points.forEach((point: any, index) => {
            gsap.from(point, {
            scrollTrigger: {
                trigger: point,
                start: "top 75%",
                end: "top 50%",
                scrub: 1,
            },
            x: 100,
            opacity: 0,
            ease: "power2.out",
            });
        });
        }

    }, { scope: containerRef });

    return (
        <section 
            ref={containerRef}
            className="relative bg-black py-16 lg:py-24 overflow-hidden"
        >
            {/* Gradient d'ambiance */}
            <div className="absolute inset-0 bg-linear-to-b from-orange-600/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                
                {/* Titre principal */}
                <div className="text-center mb-12 lg:mb-16">
                <h2 
                    ref={titleRef}
                    className="text-5xl lg:text-7xl font-black text-white mb-4"
                >
                    ILS NOUS FONT <span className="text-orange-600">CONFIANCE</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Nous travaillons en étroite collaboration avec ces communes
                </p>
                </div>

                {/* Logos partenaires */}
                <div 
                ref={partnersRef}
                className="mb-20 lg:mb-32"
                >
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="partner-logo group relative w-40 cursor-pointer"
                    >
                        <div className="relative  aspect-square backdrop-blur-sm  rounded-2xl p-6 lg:p-8 hover:border-orange-600/50 transition-all duration-500 hover:scale-110">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 rounded-2xl transition-all duration-500 blur-xl" />
                        <Image width={160} height={160} src={partner.image} alt='' className='absolute opacity-25 lg:opacity-100 rounded-2xl inset-0 group-hover:opacity-10 transition-all duration-500 grayscale-75' />
                        
                        <div className="relative flex flex-col items-center gap-3">
                            {/* <div className="text-5xl lg:text-6xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                            {partner.logo}
                            </div> */}
                            <p className="text-orange-600 group-hover:text-gray-200 font-bold uppercase text-lg text-center transition-colors duration-300">
                            {partner.name}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Section Galerie + Points de confiance */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                {/* Galerie d'images (gauche sur desktop) */}
                <div ref={galleryRef} className="space-y-6">
                    {galleryImages.map((image, index) => (
                    <div
                        key={image.id}
                        className="gallery-image relative group"
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
                        
                        {/* Image */}
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                            {/* TEST */}
                        <div className="absolute top-1/2 left-1/2 w-full -translate-1/2 origin-center lg:hidden">
                            {trustPoints[index] && (() => {
                            const point = trustPoints[index];
                            const Icon = point.icon;
                            const isActive = activePoint === index;

                            return (
                                <div
                                className={`trust-point relative group transition-all duration-500 ${
                                    isActive ? 'scale-105' : 'scale-100'
                                }`}
                                >
                                <div className={`relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border rounded-2xl p-6 lg:p-8 transition-all duration-500 ${
                                    isActive 
                                    ? 'border-orange-600 shadow-2xl shadow-orange-600/20' 
                                    : 'border-white/10 hover:border-orange-600/30'
                                }`}>
                                    
                                    {isActive && (
                                    <div className="absolute inset-0 bg-orange-600/10 rounded-2xl blur-xl -z-10" />
                                    )}

                                    <div className="flex items-start gap-4">
                                    <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                        isActive 
                                        ? 'bg-orange-600 scale-110' 
                                        : 'bg-white/5 group-hover:bg-orange-600/20'
                                    }`}>
                                        <Icon className={`text-2xl transition-colors duration-500 ${
                                        isActive ? 'text-white' : 'text-orange-600'
                                        }`} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className={`text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300 ${
                                        isActive ? 'text-orange-600' : 'text-white'
                                        }`}>
                                        {point.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                        {point.description}
                                        </p>
                                    </div>
                                    </div>

                                    <div className="absolute right-4 top-4">
                                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                        isActive ? 'bg-orange-600 scale-150' : 'bg-white/20'
                                    }`} />
                                    </div>
                                </div>
                                </div>
                            );
                            })()}
                        </div>
                        
                        {/* Badge numéro */}
                        <div className="hidden lg:block absolute top-4 left-4 z-20">
                            <div className="bg-orange-600 text-white font-black text-xl w-12 h-12 rounded-full flex items-center justify-center">
                            {index + 1}
                            </div>
                        </div>

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-all duration-500 rounded-2xl" />
                        </div>
                    </div>
                    ))}
                </div>

                    {/* Points de confiance (droite sur desktop) */}
                    <div ref={pointsRef} className="hidden lg:block lg:sticky lg:top-24 space-y-6">
                        {trustPoints.map((point, index) => {
                        const Icon = point.icon;
                        const isActive = activePoint === index;
                        
                        return (
                            <div
                                key={index}
                                className={`trust-point relative group transition-all duration-500 ${
                                    isActive ? 'scale-105' : 'scale-100'
                                }`}
                            >
                                <div className={`relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border rounded-2xl p-6 lg:p-8 transition-all duration-500 ${
                                    isActive 
                                    ? 'border-orange-600 shadow-2xl shadow-orange-600/20' 
                                    : 'border-white/10 hover:border-orange-600/30'
                                }`}>
                                    
                                    {/* Background glow pour l'élément actif */}
                                    {isActive && (
                                    <div className="absolute inset-0 bg-orange-600/10 rounded-2xl blur-xl -z-10" />
                                    )}

                                    <div className="flex items-start gap-4">
                                    {/* Icône */}
                                    <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                        isActive 
                                        ? 'bg-orange-600 scale-110' 
                                        : 'bg-white/5 group-hover:bg-orange-600/20'
                                    }`}>
                                        <Icon className={`text-2xl transition-colors duration-500 ${
                                        isActive ? 'text-white' : 'text-orange-600'
                                        }`} />
                                    </div>

                                    {/* Contenu */}
                                    <div className="flex-1">
                                        <h3 className={`text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300 ${
                                        isActive ? 'text-orange-600' : 'text-white'
                                        }`}>
                                        {point.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                        {point.description}
                                        </p>
                                    </div>
                                    </div>

                                    {/* Indicateur de position */}
                                    <div className="absolute right-4 top-4">
                                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                        isActive ? 'bg-orange-600 scale-150' : 'bg-white/20'
                                    }`} />
                                    </div>
                                </div>
                            </div>
                        );
                        })}
                    </div>
                </div>

                {/* CTA Final */}
                <div className="mt-16 lg:mt-24 text-center">
                    <div className="inline-block relative group">
                        <div className="absolute inset-0 bg-orange-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                        <button className="relative bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform group-hover:scale-105">
                            Demander une intervention
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialProof;