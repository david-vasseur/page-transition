"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BeneficeMobile() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const titlesRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !imagesRef.current || !titlesRef.current) return;

        const images = Array.from(imagesRef.current.children) as HTMLElement[];
        const titles = Array.from(titlesRef.current.children) as HTMLElement[];

        // Initial state
        gsap.set(images, { yPercent: 0 });
        gsap.set(images[1], { yPercent: 100 });
        gsap.set(images[2], { yPercent: 100 });
        gsap.set(titles, { opacity: 0 });
        gsap.set(titles[0], { opacity: 1 });

        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%",
            scrub: true,
            pin: true,
            },
        });
        tl.to(images[1], { yPercent: 0, ease: "none" });
        tl.to(titles[0], { opacity: 0, ease: "none" }, "<");
        tl.to(titles[1], { opacity: 1, ease: "none" }, "<+=0.33");
        tl.to(images[2], { yPercent: 0, ease: "none" });
        tl.to(titles[1], { opacity: 0, ease: "none" }, "<");
        tl.to(titles[2], { opacity: 1, ease: "none" }, "<+=0.33");
    });


    return (
        <section ref={containerRef} className="relative h-svh w-full overflow-hidden">
            
        {/* Images stack */}
            <div ref={imagesRef} className="absolute h-full inset-0">
                <div className="absolute h-full inset-0">
                    <div className="absolute z-1 h-full w-full blur-sm bg-black/60" />
                    <Image src="/close-up-pest.png" alt="" fill className="object-cover h-svh" />
                </div>
                <div className="absolute z-2 h-full inset-0">
                    <div className="absolute inset-0 z-2 h-full w-full blur-sm bg-black/70" />
                    <Image src="/precision-method.png" alt="" fill className="object-cover h-svh" />
                </div>
                <div className="absolute z-4 h-full inset-0">
                    <div className="absolute inset-0 z-4 h-full w-full blur-sm bg-black/70" />
                    <Image src="/security-professional.png" alt="" fill className="object-cover h-svh" />
                </div>
            </div>

            {/* Titles overlay */}
            <div
                ref={titlesRef}
                className="absolute inset-0 flex items-center justify-center text-center pointer-events-none"
            >
                <div className="absolute z-1">
                    <h2 className="text-4xl font-black text-white">
                    DES RONGEURS<br />
                    <span className="text-orange-500">CHEZ VOUS ?</span>
                    </h2>
                    <div className="psb-text space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            Les rats et souris représentent un danger réel pour votre santé, vos biens et votre réputation :
                        </p>
                        <ul className="space-y-4 ml-8">
                            {[
                                '- Risques sanitaires graves : maladies transmissibles, contamination alimentaire',
                                '- Dégâts matériels coûteux : câbles rongés, risques d\'incendie',
                                '- Impact sur votre image : perte de clientèle, amendes réglementaires',
                                '- Prolifération rapide : jusqu\'à 50 excréments par jour et par rongeur'
                            ].map((item, idx) => {
                                const [title, description] = item.split(':');

                                return (
                                <li key={idx} className="text-lg text-gray-300 text-left leading-relaxed">
                                    <span className="font-semibold text-orange-500">
                                    {title.trim()} :
                                    </span>{' '}
                                    <span>{description.trim()}</span>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="absolute z-3">
                    <h2 className="text-4xl font-black text-white">
                    INTERVENTION<br />
                    <span className="text-orange-500">PROFESSIONNELLE</span>
                    </h2>
                    <div className="psb-text space-y-6">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Une approche méthodique et certifiée pour éliminer durablement les rongeurs :
                        </p>
                        <ul className="space-y-4 ml-8">
                            {[
                                '- Diagnostic précis : identification des espèces et zones infestées',
                                '- Plan d\'action sur-mesure : adapté à votre situation et activité',
                                '- Traitement professionnel : rodenticides certifiés AMM, postes sécurisés',
                                '- Suivi rigoureux : contrôles périodiques jusqu\'à éradication complète',
                            ].map((item, idx) => {
                                const [title, description] = item.split(':');
                                return (
                                <li key={idx} className="text-lg text-gray-300 text-left leading-relaxed">
                                    <span className="font-semibold text-orange-500">
                                    {title.trim()} :
                                    </span>{' '}
                                    <span>{description.trim()}</span>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="absolute z-5">
                    <h2 className="text-4xl font-black text-white">
                    TRANQUILLITÉ<br />
                    <span className="text-green-500">GARANTIE</span>
                    </h2>
                    <div className="psb-text space-y-6">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Retrouvez la sérénité avec une protection complète et durable :
                        </p>
                        <ul className="space-y-4 ml-8">
                            {[
                                '- Hygiène irréprochable : conformité sanitaire totale',
                                '- Économies garanties : évitez les dégâts matériels coûteux',
                                '- Approche responsable : protection de l\'environnement et biodiversité',
                                '- Réactivité 24/7 : intervention rapide en cas d\'urgence'
                            ].map((item, idx) => {
                                const [title, description] = item.split(':');
                                return (
                                <li key={idx} className="text-lg text-gray-300 text-left leading-relaxed">
                                    <span className="font-semibold text-orange-500">
                                    {title.trim()} :
                                    </span>{' '}
                                    <span>{description.trim()}</span>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
