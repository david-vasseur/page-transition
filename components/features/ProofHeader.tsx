"use client"

import React, { useRef } from 'react'
import Forward from '../ui/Forward'
import { FaBug, FaBuilding, FaStar } from 'react-icons/fa6'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionTitle from '../ui/SectionTitle';

function ProofHeader() {

    const glowRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const finalRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: glowRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
            }
        });

        if (glowRef.current) {
            tl.to(glowRef.current, {
            x: "100%",
            }, 0);
        }

        if (subtitleRef.current) {
            tl.from(subtitleRef.current, {
            opacity: 0,
            y: 30,
            }, ">"); 
        }

        if (finalRef.current) {
            tl.from(finalRef.current, {
                scaleX: 0
            }, ">")
        }

    }, []);


    return (
        <div className="relative text-center mb-12 lg:mb-16 mx-auto">
            <SectionTitle title="UN SAVOIR FAIRE" span="RECONNU" />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto my-14">

                {/* Colonne gauche : badges (map uniquement ici) */}
                <div className="relative grid grid-cols-3 lg:grid-row-3 bg-linear-to-br from-gray-500/40 via-black/40 to-gray-400/40 gap-8 px-8 py-6 border border-gray-500 rounded-xl overflow-hidden">
                    <div ref={glowRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
                    {[
                        {
                            icon: FaStar,
                            label: "Note",
                            label2: "Google",
                            title: "5/5",
                        },
                        {
                            icon: FaBuilding,
                            label: "Années",
                            label2: "D'experience",
                            title: "3+",
                        },
                        {
                            icon: FaBug,
                            label: "Nombre",
                            label2: "D'intervention",
                            title: "500+",
                        }
                    ].map((proof, index) => (
                            <Forward
                                key={index}
                                label={proof.label}
                                label2={proof.label2}
                                title={proof.title}
                                textColor="text-orange-500"
                            />
                        ))
                    }
                </div>

                {/* Colonne droite : contenu (hors map) */}
                <div ref={subtitleRef} className="max-w-md text-center lg:text-left will-change-transform">
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Nous intervenons pour des particuliers, des communes et des entreprises nationales, 
                        avec un haut niveau d’exigence, de réactivité et de fiabilité.
                    </p>
                </div>
            </div>
            <div ref={finalRef} className="absolute bottom-0 lg:-bottom-6 w-full h-px bg-linear-to-r from-transparent via-orange-500 to-transparent" />
        </div>
    )
}

export default ProofHeader;