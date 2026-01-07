"use client"

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaTiktok } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import Image from 'next/image';
import { SplitText } from 'gsap/SplitText';

function Presentation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const imageMRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const text2Ref = useRef<HTMLParagraphElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLDivElement>(null);
    const title2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
    if (!textRef.current) return;

    /* SplitText */
    const split = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "split-line"
    });

    /* IMAGE DESKTOP */
    gsap.timeline({
        scrollTrigger: {
        trigger: imageRef.current,
        start: "center bottom",
        end: "center center",
        scrub: 2,
        }
    }).fromTo(
        imageRef.current,
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1.5, duration: 30, ease: "power3.out" }
    );

    /* IMAGE MOBILE */
    gsap.timeline({
        scrollTrigger: {
        trigger: imageMRef.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 0.5,
        }
    }).fromTo(
        imageMRef.current,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1.5, ease: "bounce.out" }
    );

    /* TEXTE SPLIT */
    gsap.from(split.lines, {
        scrollTrigger: {
        trigger: textRef.current,
        start: "center bottom",
        end: "center center",
        scrub: 2,
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
    });

    /* TITRE 1 */
    gsap.from(title1Ref.current, {
        scrollTrigger: {
        trigger: title1Ref.current,
        start: "center bottom",
        end: "center center",
        scrub: 3,
        },
        x: -400,
        opacity: 0,
    });

    /* TITRE 2 */
    gsap.from(title2Ref.current, {
        scrollTrigger: {
        trigger: title2Ref.current,
        start: "center bottom",
        end: "center center",
        scrub: 3,
        },
        x: 300,
        y: 50,
        opacity: 0,
    });

    /* SOCIAL */
    const q = gsap.utils.selector(socialRef);

    gsap.from(socialRef.current, {
        scrollTrigger: {
        trigger: socialRef.current,
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: 1,
        },
        y: 50,
        opacity: 0,
    });

    gsap.fromTo(
        q(".social-icon"),
        { scale: 0, rotation: 180 },
        {
        scale: 1,
        rotation: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "center bottom",
            end: "bottom bottom",
            scrub: 0.1,
        },
        }
    );

    /* CLEANUP */
    return () => {
        split.revert();
    };
    }, { scope: containerRef });

useGSAP(() => {
  if (!text2Ref.current) return;

  const split2 = new SplitText(text2Ref.current, {
    type: "lines",
    linesClass: "split-line"
  });

  gsap.from(split2.lines, {
    scrollTrigger: {
      trigger: text2Ref.current,
      start: "center bottom",
      end: "center center",
      scrub: 2,
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });

  return () => split2.revert();
}, { scope: text2Ref });

    return (
        <section 
            ref={containerRef}
            className="bg-black py-20 px-6 lg:py-32 lg:px-8 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-5 items-center">
                    <div className="mb-4">
                        <h2 
                            ref={title1Ref} 
                            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                        >
                            Votre Partenaire Contre <span ref={title2Ref} className="text-orange-600 font-black block">LES NUISIBLES</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:overflow-hidden gap-5 items-center justify-between lg:justify-evenly">
                        {/* Mobile Image Section */}
                        <div 
                            
                            className="relative lg:hidden group flex-2 z-5"
                        >
                            <div className="relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 w-full h-full bg-radial from-orange-600 from-20% to-70% to-black z-0"/>
                                <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black from-20% to-70% to-transparent z-2"/>
                    
                            <Image
                                ref={imageMRef}
                                src="/profil.webp"              
                                alt="Présentation professionnelle"
                                width={397}                     // largeur affichée
                                height={500}                    // hauteur affichée
                                className="w-full h-125 scale-150 origin-top object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                priority={true}                 // précharge pour LCP
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="relative z-6 space-y-6 max-w-175">           
                            <p 
                                ref={textRef} 
                                className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                            >
                                Je suis spécialisé dans le contrôle et la prévention des rongeurs. J&apos;utilise des technologies de pointe et des protocoles d&apos;intervention précis pour identifier l&apos;origine du problème et mettre en place un plan d&apos;action efficace et ciblé, du diagnostic initial à l&apos;éradication complète.
                            </p>
                            <p 
                                ref={text2Ref} 
                                className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                            >
                                Chaque intervention est une mission que je mène avec la plus grande rigueur, en m&apos;assurant que les résultats sont non seulement immédiats, mais aussi durables. Ma priorité est de protéger votre santé et vos biens en éliminant les menaces de manière définitive. Pour une tranquillité d&apos;esprit totale, je propose un service de suivi personnalisé, incluant des visites de contrôle post-intervention afin de vérifier l&apos;efficacité du traitement et de s&apos;assurer qu&apos;aucune nouvelle infestation ne se déclare.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div 
                            ref={imageRef}
                            className="relative hidden lg:flex items-center justify-center group flex-2 z-5"
                        >
                            <div className="relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black from-20% to-70% to-transparent z-2"/>
                                <img
                                    src="/profil.webp"
                                    alt="Présentation professionnelle"
                                    className="w-100 h-100 translate-y-10 origin-top object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="text-center ">
                            <div className="text-3xl lg:text-6xl font-bold text-orange-600">5+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wide">Années d&apos;expérience</div>
                        </div>
                        <div className="text-center ">
                            <div className="text-3xl lg:text-6xl font-bold text-orange-600">100+</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wide">Projets réalisés</div>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="space-y-8">
                        <div ref={socialRef} className="pt-8 mx-auto">
                            <p className="text-orange-600 text-sm text-center uppercase tracking-wide mb-6 font-black">
                                Suivez-moi
                            </p>
                            <div className="flex gap-4">
                                
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon group relative p-4 bg-white/5 hover:bg-orange-600/20 border border-white/10 hover:border-orange-600/50 rounded-2xl transition-all duration-300 hover:scale-110"
                                >
                                    <FaFacebookF 
                                        size={24} 
                                        className="text-gray-400 group-hover:text-orange-600 transition-colors duration-300" 
                                />
                                    <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </a>
                                
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon group relative p-4 bg-white/5 hover:bg-orange-600/20 border border-white/10 hover:border-orange-600/50 rounded-2xl transition-all duration-300 hover:scale-110"
                                >
                                    <FaTiktok 
                                        size={24} 
                                        className="text-gray-400 group-hover:text-orange-600 transition-colors duration-300" 
                                />
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </a>
                                
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation;