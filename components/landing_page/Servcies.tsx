"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Bug, Droplet, Rat, AlertCircle, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP);

const Services = () => {
    const root = useRef(null);
    const emergencyRef = useRef(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
    const lumRef = useRef<(HTMLDivElement)>(null);

    useGSAP(() => {

         if (titleRef.current) {
            const split = new SplitText(titleRef.current, {
                type: "chars,words",
                charsClass: "split-char"
            });

            gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: 1,
                },
                opacity: 0,
                y: 50,
                rotationX: -90,
                stagger: 0.02,
                ease: "back.out(1.7)",
            });
        }

        if (servicesRef.current) {
            gsap.from(servicesRef.current, {
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                },
                opacity: 0,
                yPercent: 50,
                stagger: 0.1,
                ease: "back.out(1.7)",
            })
        }

        if (lumRef.current) {
            gsap.from(lumRef.current, {
                scrollTrigger: {
                    trigger: lumRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                },
                rotateX: 90,
                transformOrigin: "top",
                ease: "back.out(1.7)"
            })
        }

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".service-badge", { y: 20, opacity: 0, duration: 0.6 })
            .from(".service-title span", { y: 30, opacity: 0, stagger: 0.15 }, "-=0.3")
            .from(".service-subtitle", { y: 20, opacity: 0 }, "-=0.2")
            .from(".service-card", { 
                y: 50, 
                opacity: 0, 
                rotateY: -15,
                stagger: 0.15,
                duration: 0.8
            }, "-=0.3")
            .from(".emergency-card", { 
                scale: 0.9, 
                opacity: 0,
                duration: 0.6
            }, "-=0.4");

        // Animation pulsation pour la carte d'urgence
        gsap.to(emergencyRef.current, {
            scale: 1.02,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Effet de brillance sur les cartes
        const cards = document.querySelectorAll(".service-card");
        cards.forEach((card) => {
            const shine = card.querySelector(".shine-effect");
            
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { 
                    y: -10,
                    duration: 0.4, 
                    ease: "power2.out" 
                });
                gsap.to(shine, {
                    x: "100%",
                    duration: 0.6,
                    ease: "power2.inOut"
                });
            });
            
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { 
                    y: 0,
                    duration: 0.4, 
                    ease: "power2.out" 
                });
                gsap.to(shine, {
                    x: "-100%",
                    duration: 0
                });
            });
        });

        // Animation des icônes au hover
        const icons = document.querySelectorAll(".service-icon");
        icons.forEach((icon) => {
            icon.parentElement && icon.parentElement.addEventListener("mouseenter", () => {
                gsap.to(icon, {
                    rotate: 360,
                    scale: 1.1,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                });
            });
        });

    }, { scope: root });

    const services = [
        {
            id: 1,
            title: "DÉRATISATION",
            icon: Rat,
            description: "Élimination complète et durable de tous types de rongeurs",
            features: [
                "Rats, souris, mulots",
                "Traitement préventif et curatif",
                "Méthodes écologiques disponibles",
                "Garantie anti-réinfestation"
            ],
            gradient: "from-orange-600 to-red-600",
            bgGradient: "from-orange-600/20 via-red-600/10 to-transparent"
        },
        {
            id: 2,
            title: "DÉSINSECTISATION",
            icon: Bug,
            description: "Traitement professionnel contre tous les insectes nuisibles",
            features: [
                "Cafards, punaises de lit",
                "Fourmis, guêpes, frelons",
                "Mites, puces, araignées",
                "Solutions sans risque pour la santé"
            ],
            gradient: "from-orange-500 to-amber-600",
            bgGradient: "from-orange-500/20 via-amber-600/10 to-transparent"
        },
        {
            id: 3,
            title: "DÉSINFECTION",
            icon: Droplet,
            description: "Désinfection complète et assainissement des espaces",
            features: [
                "Virus, bactéries, champignons",
                "Traitement post-infestation",
                "Normes hospitalières",
                "Certificat de désinfection"
            ],
            gradient: "from-blue-600 to-cyan-600",
            bgGradient: "from-blue-600/20 via-cyan-600/10 to-transparent"
        }
    ];

    return (
        <section ref={root} className="relative min-h-screen bg-black text-white overflow-hidden py-20">
            {/* Animated background */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-black to-black z-0" /> */}
            <div ref={lumRef} className="absolute top-0 w-full h-20 bg-linear-to-b from-gray-600 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
            
            {/* Grid pattern overlay */}
            {/* <div className="absolute inset-0 opacity-[0.03]" 
                 style={{
                     backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                     backgroundSize: '50px 50px'
                 }}
            /> */}

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    {/* <div className="service-badge inline-flex items-center bg-orange-600/20 border border-orange-600/30 rounded-full px-6 py-3 mb-6">
                        <Shield className="w-5 h-5 mr-2 text-orange-500" />
                        <span className="text-orange-500 font-bold">Expertise Professionnelle</span>
                    </div> */}
                    
                    <h2 
                        ref={titleRef}
                        className="text-5xl lg:text-7xl font-black text-white my-4"
                    >
                        NOS <span className="text-orange-600">SERVICES</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Des solutions professionnelles pour chaque type d'infestation. 
                        Intervention rapide et résultats garantis.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            ref={el => {servicesRef.current[index] = el}}
                            className="service-card relative group cursor-pointer"
                            style={{ perspective: '1000px' }}
                        >
                            {/* Decorative corner cuts */}
                            <div className="relative bg-linear-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-orange-600/50"
                                 style={{
                                     clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)'
                                 }}
                            >
                                {/* Shine effect */}
                                <div className="shine-effect absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full" />
                                
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-linear-to-br ${service.bgGradient} opacity-50`} />
                                
                                {/* Corner accent */}
                                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl ${service.gradient} opacity-20`}
                                     style={{
                                         clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                                     }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${service.gradient} mb-6 shadow-lg`}>
                                        <service.icon className="service-icon w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-black mb-3">{service.title}</h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-400">
                                                <CheckCircle className="w-4 h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button className={`w-full bg-linear-to-r ${service.gradient} hover:shadow-lg hover:shadow-orange-600/30 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center group`}>
                                        En savoir plus
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className={`absolute -top-3 -right-3 bg-linear-to-br ${service.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                                24/7
                            </div>
                        </div>
                    ))}
                </div>

                {/* Emergency Card */}
                <div 
                    ref={emergencyRef}
                    className="emergency-card max-w-4xl mx-auto relative overflow-hidden"
                >
                    <div className="relative bg-linear-to-br from-orange-600 via-red-600 to-orange-700 rounded-3xl p-10 shadow-2xl"
                        //  style={{
                        //      clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
                        //  }}
                    >
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0"
                                 style={{
                                     backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                                     backgroundSize: '30px 30px'
                                 }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                    <AlertCircle className="w-5 h-5 mr-2" />
                                    <span className="font-bold text-sm">URGENCE</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black mb-3">
                                    INTERVENTION IMMÉDIATE
                                </h2>
                                <p className="text-white/90 text-lg mb-4">
                                    Service d'urgence disponible 24h/24 et 7j/7 pour toute infestation critique
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                                        <Zap className="w-4 h-4 mr-2" />
                                        <span className="text-sm font-semibold">Réponse &lt; 2h</span>
                                    </div>
                                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                                        <Shield className="w-4 h-4 mr-2" />
                                        <span className="text-sm font-semibold">Intervention &lt; 24h</span>
                                    </div>
                                </div>
                            </div>

                            <div className="shrink-0">
                                <a
                                    href="tel:+33658942067"
                                    className="block bg-white text-orange-600 hover:bg-gray-100 text-center font-black text-2xl md:text-3xl px-8 py-6 rounded-2xl transition-all shadow-2xl hover:scale-105"
                                >
                                    📞 06 58 94 20 67
                                </a>
                                <p className="text-center text-white/80 text-sm mt-3 font-semibold">
                                    Appel gratuit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;