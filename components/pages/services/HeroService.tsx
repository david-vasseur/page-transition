"use client"

import { ArrowRight } from 'lucide-react';

interface IHeroService {
    header1: string;
    header2: string;
    subTitle: string;
}

function HeroService({ header1, header2, subTitle }: IHeroService) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-900/20 via-black to-black" />

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
                        // onClick={() => openModal(<EstimateForm />)}
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
                <div className="mt-12 flex flex-col sm:flex-row text-left lg:items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-400">
                    <div className="flex lg:items-center gap-2">
                        <span className="text-orange-500">✓</span> Certifié & Agréé
                    </div>
                    <div className="flex lg:items-center gap-2">
                        <span className="text-orange-500">✓</span> Garantie Résultats
                    </div>
                    <div className="flex lg:items-center gap-2">
                        <span className="text-orange-500">✓</span> Éco-responsable
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroService