"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, Navigation, Clock, CheckCircle, Phone, Zap, Award, Users } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const InterventionZone = () => {
    const root = useRef(null);
    const mapRef = useRef(null);
    const pulseRef = useRef(null);
    const [hoveredCity, setHoveredCity] = useState(null);

    const cities = [
    { name: "Rémoulins", x: 45, y: 45, isMain: true },
    { name: "Avignon", x: 60, y: 40 },
    { name: "Nîmes", x: 15, y: 55 },
    { name: "Uzès", x: 20, y: 30 },
    { name: "Beaucaire", x: 40, y: 55 },
    { name: "Arles", x: 40, y: 70 },
    { name: "Alès", x: 0, y: 10 },
    { name: "Bagnols-sur-Cèze", x: 40, y: 10 },
];

    const stats = [
        { icon: MapPin, value: "50km", label: "Rayon d'action" },
        { icon: Clock, value: "< 2h", label: "Temps de réponse" },
        { icon: Users, value: "+500", label: "Clients satisfaits" },
        { icon: Award, value: "100%", label: "Garantie qualité" }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // tl.from(".zone-badge", { y: 20, opacity: 0, duration: 0.6 })
            // .from(".zone-title span", { y: 30, opacity: 0, stagger: 0.15 }, "-=0.3")
            // .from(".zone-subtitle", { y: 20, opacity: 0 }, "-=0.2")
            // .from(".map-container", { scale: 0.9, opacity: 0, duration: 0.8 }, "-=0.3")
            // .from(".city-marker", { scale: 0, opacity: 0, stagger: 0.08 }, "-=0.4")
            // .from(".stat-card", { y: 30, opacity: 0, stagger: 0.1 }, "-=0.3")
            // .from(".info-card", { x: -30, opacity: 0, stagger: 0.1 }, "-=0.2");

        // Animation pulsation continue pour le centre
        gsap.to(pulseRef.current, {
            scale: 1.5,
            opacity: 0,
            duration: 2,
            repeat: -1,
            ease: "power1.out"
        });

        // Animation des marqueurs
        const markers = document.querySelectorAll(".city-marker");
        markers.forEach((marker, i) => {
            gsap.to(marker, {
                y: -5,
                duration: 2 + i * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });

        // Animation des cercles de couverture
        gsap.to(".coverage-circle", {
            scale: 1.05,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.5
        });

    }, { scope: root });

    return (
        <section ref={root} className="relative min-h-screen bg-black text-white overflow-hidden py-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-black to-black z-0" />
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '50px 50px'
                 }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="zone-badge inline-flex items-center bg-orange-600/20 border border-orange-600/30 rounded-full px-6 py-3 mb-6">
                        <Navigation className="w-5 h-5 mr-2 text-orange-500" />
                        <span className="text-orange-500 font-bold">Couverture Régionale</span>
                    </div>
                    
                    <h2 className="zone-title text-4xl md:text-7xl font-black mb-6 text-center">
                        <span className="block">ZONE</span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600">
                            D'INTERVENTION
                        </span>
                    </h2>
                    <p className="zone-subtitle text-xl text-gray-300 max-w-3xl mx-auto">
                        Service professionnel dans un rayon de 50km autour de Narbonne. 
                        Intervention rapide garantie.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
                    {/* Map Container */}
                    <div className="map-container relative">
                        <div 
                            ref={mapRef}
                            className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-3xl p-8 overflow-hidden aspect-square z-2"
                            style={{
                                clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
                            }}
                        >
                            <Image fill src={'/map.png'} alt="zone d'intervention" className="inset-0 " />
                            {/* Map background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0"
                                     style={{
                                         backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                                         backgroundSize: '30px 30px'
                                     }}
                                />
                            </div>

                            {/* Coverage circles */}
                            {/* <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="coverage-circle absolute w-32 h-32 border-2 border-orange-600/30 rounded-full" />
                                <div className="coverage-circle absolute w-48 h-48 border-2 border-orange-600/20 rounded-full" />
                                <div className="coverage-circle absolute w-64 h-64 border-2 border-orange-600/10 rounded-full" />
                                <div className="coverage-circle absolute w-80 h-80 border border-orange-600/5 rounded-full" />
                            </div> */}

                            {/* Pulsing center */}
                            <div className="absolute left-[45%] top-[45%] flex items-center justify-center">
                                <div 
                                    ref={pulseRef}
                                    className="absolute w-20 h-20 bg-orange-600/30 rounded-full"
                                />
                            </div>

                            {/* Cities markers */}
                            {cities.map((city, index) => (
                                <div
                                    key={index}
                                    className="city-marker absolute cursor-pointer group"
                                    style={{
                                        left: `${city.x}%`,
                                        top: `${city.y}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    // onMouseEnter={() => setHoveredCity(city.name)}
                                    onMouseLeave={() => setHoveredCity(null)}
                                >
                                    {/* Marker pin */}
                                    <div className={`relative ${city.isMain ? 'w-16 h-16' : 'w-12 h-12'}`}>
                                        <div className={`absolute inset-0 ${city.isMain ? 'bg-gradient-to-br from-orange-600 to-red-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} rounded-full shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center`}>
                                            <MapPin className={`${city.isMain ? 'w-8 h-8' : 'w-6 h-6'} text-white`} />
                                        </div>
                                        
                                        {/* Ripple effect */}
                                        {city.isMain && (
                                            <div className="absolute inset-0 bg-orange-600/30 rounded-full animate-ping" />
                                        )}
                                    </div>

                                    {/* City label */}
                                    <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all ${hoveredCity === city.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                                        <div className="bg-black/90 backdrop-blur-sm border border-orange-600/50 rounded-lg px-3 py-1.5 shadow-xl">
                                            <p className={`${city.isMain ? 'font-black text-orange-500' : 'font-bold text-white'} text-sm`}>
                                                {city.name}
                                            </p>
                                            {city.isMain && (
                                                <p className="text-xs text-gray-400">Centre d'opération</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Legend */}
                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-zinc-700 rounded-xl p-4">
                                <div className="flex items-center mb-2">
                                    <div className="w-3 h-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-full mr-2" />
                                    <span className="text-xs text-gray-300">Centre principal</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mr-2" />
                                    <span className="text-xs text-gray-300">Zone couverte</span>
                                </div>
                            </div>

                            {/* Radius indicator */}
                            <div className="absolute top-4 right-4 bg-orange-600/20 backdrop-blur-sm border border-orange-600/30 rounded-xl px-4 py-2">
                                <div className="flex items-center">
                                    <Navigation className="w-4 h-4 text-orange-500 mr-2" />
                                    <span className="text-orange-500 font-bold text-sm">Rayon 50km</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute z-15 -bottom-4 -right-4 bg-gradient-to-br from-orange-600 to-red-600 text-white font-black px-6 py-4 rounded-2xl shadow-2xl">
                            <div className="text-3xl">24/7</div>
                            <div className="text-xs opacity-90">Disponible</div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="stat-card relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 hover:border-orange-600/50 transition-all group cursor-pointer overflow-hidden"
                                >
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    
                                    <div className="relative z-10">
                                        <div className="bg-orange-600/20 p-3 rounded-xl inline-flex mb-3">
                                            <stat.icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Coverage Info */}
                        <div className="info-card relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 overflow-hidden"
                            //  style={{
                            //      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)'
                            //  }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-600/20 to-transparent" />
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-4 flex items-center">
                                    <MapPin className="w-6 h-6 mr-2 text-orange-500" />
                                    Villes Principales
                                </h3>
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {cities.slice(0, 6).map((city, index) => (
                                        <div key={index} className="flex items-center text-gray-300">
                                            <CheckCircle className="w-4 h-4 mr-2 text-orange-500 shrink-0" />
                                            <span className={city.isMain ? "font-bold text-orange-500" : ""}>{city.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400 italic">
                                    + toutes les communes dans un rayon de 50km
                                </p>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="info-card relative bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 overflow-hidden"
                             style={{
                                 clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 30px)'
                             }}
                        >
                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0"
                                     style={{
                                         backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 11px)`,
                                     }}
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-3">
                                    Votre ville n'apparaît pas ?
                                </h3>
                                <p className="text-white/90 mb-6">
                                    Contactez-nous ! Nous étudions chaque demande et pouvons intervenir dans toute la région.
                                </p>
                                <a
                                    href="tel:+33658942067"
                                    className="inline-flex items-center bg-white text-orange-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    06 58 94 20 67
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InterventionZone;