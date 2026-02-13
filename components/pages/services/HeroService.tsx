"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface IHeroService {
    header1: string;
    header2: string;
    subTitle: string;
}

function HeroService({ header1, header2, subTitle }: IHeroService) {

    const heroRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
  const titles = gsap.utils.toArray<HTMLElement>(".hero-title span");
  const subtitle = heroRef.current?.querySelector<HTMLElement>(".hero-subtitle");
  const actions = gsap.utils.toArray<HTMLElement>(".hero-actions > *");
  const certifs = gsap.utils.toArray<HTMLElement>(".hero-certif");

  if (!subtitle || !titles.length || !actions.length || !certifs.length) return;

  // --------------------
  // Timeline d'entrée
  // --------------------
  const tl = gsap.timeline({ delay: 0.3, onComplete: startScrollAnimations });

  titles.forEach((el, i) => {
    tl.fromTo(el, { y: 120, opacity: 0 }, { y: 0, opacity: 1, ease: "power4.out", duration: 1 }, i * 0.1);
  });

  tl.fromTo(subtitle, { y: 60, opacity: 0 }, { y: 0, opacity: 1, ease: "power3.out", duration: 1 }, "-=0.5");

  actions.forEach((el, i) => {
    tl.fromTo(el, { y: 40, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, ease: "back.out(1.7)", duration: 0.8 }, i * 0.15 + 0.6);
  });

  certifs.forEach((el, i) => {
    tl.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out", duration: 0.6 }, i * 0.15 + 1);
  });

  // --------------------
  // Fonction déclenchée quand la timeline est finie
  // --------------------
  function startScrollAnimations() {
    const scrollConfig = {
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    };

    if (!subtitle || !titles.length || !actions.length || !certifs.length) return;

    titles.forEach((el, i) => {
      gsap.fromTo(el, { y: 0, opacity: 1 }, { scrollTrigger: scrollConfig, y: -140, opacity: 0, delay: i * 0.1 });
    });

    gsap.fromTo(subtitle, { y: 0, opacity: 1 }, { scrollTrigger: scrollConfig, y: -80, opacity: 0 });

    actions.forEach((el, i) => {
      gsap.fromTo(el, { y: 0, opacity: 1, scale: 1 }, { scrollTrigger: scrollConfig, y: 80, opacity: 0, scale: 0.85, delay: (i+1) * 0.5 });
    });

    certifs.forEach((el, i) => {
      gsap.fromTo(el, { y: 0, opacity: 1 }, { scrollTrigger: scrollConfig, y: 60, opacity: 0, delay: i * 0.2 });
    });
  }

}, { scope: heroRef });







    return (
        <section ref={heroRef} className="relative min-h-screen flex items-end justify-center overflow-hidden bg-black">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-900/20 via-black to-black" />
            <div className="absolute w-[120%] origin-center border-4 border-orange-600/70 -translate-y-[115%] aspect-square bg-linear-to-tl from-orange-600/50 via-black/20 to-black z-10 rotate-45" />

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(249,115,22,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center">
                <Image src={"/service/deratisation/hero_svg.svg"} alt='' width={150} height={150} />

                {/* Title */}
                <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                    <span className="block text-white">{header1}</span>
                    <span className="block text-orange-600 italic -mt-2">{header2}</span>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                    {subTitle}
                </p>

                {/* CTA Buttons */}
                <div className="hero-actions flex flex-col sm:flex-row gap-4">
                    <button
                        aria-label="Demande de devis"
                        className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-base 2xl:text-lg flex items-center justify-center"
                    >
                        Inspection gratuite
                        <div className="ml-2">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </button>

                    <a
                        href="tel:+33658942067"
                        className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-base 2xl:text-lg text-center"
                    >
                        Appelez le 06 58 94 20 67
                    </a>
                </div>

                {/* Certifications */}
                <div className="hero-certif mt-12 flex sm:flex-row text-left items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500 ml-6">✓</span> Certifié & Agréé
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500 ml-6">✓</span> Garantie Résultats
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500 ml-6">✓</span> Éco-responsable
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroService;