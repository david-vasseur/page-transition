import React, { useRef } from 'react';
import Image from 'next/image';
import { CheckCircle, Target } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface IFeatures {
    label: string;
    text: string;
}

interface ISection {
    tag: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: IFeatures[]; 
    imageSrc: string; 
    imageAlt: string;
    floatingTitle: string;
    floatingSub: string;
    isReversed: boolean; 
}

const StorySection = ({ 
  tag, 
  title, 
  titleHighlight, 
  description, 
  features = [], 
  imageSrc, 
  imageAlt,
  floatingTitle,
  floatingSub,
  isReversed = false 
}: ISection) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const floatingUIRef = useRef(null);

useGSAP(() => {
  const isMobile = window.innerWidth < 1024;
  const xOffset = isReversed ? (isMobile ? -50 : -120) : (isMobile ? 50 : 120);

  /* ------------------------------------------
     SETUP — états initiaux (anti-flash)
  ------------------------------------------ */
  if (titleRef.current) {
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 40,
      clipPath: "inset(100% 0% 0% 0%)",
    });
  }

  if (contentRef.current) {
    gsap.set(contentRef.current, {
      opacity: 0,
      x: xOffset,
      y: 30,
      rotationY: isReversed ? 8 : -8,
      scale: 0.95,
    });
  }

  const validFeatures = featuresRef.current.filter(Boolean);
  if (validFeatures.length > 0) {
    gsap.set(validFeatures, {
      opacity: 0,
      x: isReversed ? 20 : -20,
      scale: 0.9,
    });
  }

  if (floatingUIRef.current) {
    gsap.set(floatingUIRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      rotate: -5,
    });
  }

  /* ------------------------------------------
     TIMELINE 1 — PIN + SORTIE
  ------------------------------------------ */
  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      anticipatePin: 1,
    }
  });

  mainTimeline.to(
    contentRef.current,
    {
      opacity: 0,
      scale: 1.1,
      x: -xOffset * 0.6,
      y: -20,
      rotationY: isReversed ? -5 : 5,
      filter: "blur(10px)",
      duration: 1.2,
      ease: "power2.in",
    },
    "+=0.4"
  );

  /* ------------------------------------------
     TIMELINE 2 — ENTRÉE + CONTENU
  ------------------------------------------ */
  const contentTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top center",
      end: "+=60%",
      scrub: 1,
    }
  });

  // Titre
  if (titleRef.current) {
    contentTimeline.to(titleRef.current, {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.8,
      ease: "power3.out",
    });
  }

  // Contenu principal
  contentTimeline.to(
    contentRef.current,
    {
      opacity: 1,
      x: 0,
      y: 0,
      rotationY: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    },
    "<"
  );

  // Features
  if (validFeatures.length > 0) {
    contentTimeline.to(
      validFeatures,
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
      },
      "+=0.4"
    );
  }

  // UI flottante
  if (floatingUIRef.current) {
    contentTimeline.to(
      floatingUIRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "+=0.6"
    );
  }

  /* ------------------------------------------
     PARALLAXE IMAGE
  ------------------------------------------ */
  if (imageContainerRef.current) {
    gsap.to(imageContainerRef.current, {
      y: isMobile ? -30 : -80,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }

}, { scope: containerRef, dependencies: [isReversed] });




  return (
    <section ref={containerRef} className="story-panel relative bg-gray-950 h-svh flex items-center overflow-hidden px-6 py-24 will-change-transform">
      
      {/* Décor d'arrière-plan dynamique selon isReversed */}
      <div className={`absolute top-0 ${isReversed ? 'right-0 bg-linear-to-l' : 'left-0 bg-linear-to-r'} w-2/3 h-full from-gray-900 to-transparent opacity-40 z-0`} />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* --- COLONNE TEXTE --- */}
          <div 
            ref={contentRef}
            className={`col-span-1 lg:col-span-5 relative z-20 content-container will-change-transform 
              ${isReversed ? 'lg:order-2 lg:-ml-24' : 'lg:order-1 lg:-mr-24'}`}
          >
            <div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8">
              <div ref={titleRef} className="story-text-anim will-change-transform">
                <h2 className="text-orange-500 font-medium tracking-[0.2em] uppercase mb-2 flex items-center">
                  <span className="w-6 h-0.5 bg-orange-500 mr-3 inline-block" />
                  {tag}
                </h2>
                <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  {title} <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                    {titleHighlight}
                  </span>
                </h3>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                {description}
              </p>

              {/* Liste des features */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {features.map((item, index) => (
                  <div 
                    key={index} 
                    ref={el => {featuresRef.current[index] = el}}
                    className="flex items-start text-gray-300 will-change-transform"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" />
                    <p><span className="text-white font-bold">{item.label} :</span> {item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- COLONNE IMAGE --- */}
          <div 
            ref={imageContainerRef}
            className={`hidden lg:block col-span-1 lg:col-span-7 relative h-150 lg:h-187.5 group rounded-3xl overflow-hidden shadow-2xl border-b border-white/10 will-change-transform 
            ${isReversed ? 'lg:order-1 border-r' : 'lg:order-2 border-l'}`}
          >
            
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover scale-110 transition-transform duration-700 group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/30 to-transparent opacity-60" />

            {/* UI flottante */}
            <div 
              ref={floatingUIRef}
              className={`absolute bottom-10 ${isReversed ? 'left-10' : 'right-10'} bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl items-center gap-4 hidden lg:flex will-change-transform`}
            >
              <div className="bg-orange-500/20 p-2 rounded-full">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wider">{floatingTitle}</p>
                <p className="text-gray-300 text-xs">{floatingSub}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;