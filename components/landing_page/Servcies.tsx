"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Bug, Droplet, Rat, AlertCircle, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { SplitText } from "gsap/SplitText";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { useMobileStore } from "@/lib/stores/mobileStore";

gsap.registerPlugin(useGSAP);

const Services = () => {

    const { isMobile } = useMobileStore();

    const root = useRef(null);
    const emergencyRef = useRef(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
    const lumRef = useRef<(HTMLDivElement)>(null);

    useGSAP(() => {

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

    })

    useGSAP(() => {

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".emergency-card", { 
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
        // const cards = document.querySelectorAll(".service-card");
        // cards.forEach((card) => {
        //     const shine = card.querySelector(".shine-effect");
            
        //     card.addEventListener("mouseenter", () => {
        //         gsap.to(card, { 
        //             y: -10,
        //             duration: 0.4, 
        //             ease: "power2.out" 
        //         });
        //         gsap.to(shine, {
        //             x: "100%",
        //             duration: 0.6,
        //             ease: "power2.inOut"
        //         });
        //     });
            
        //     card.addEventListener("mouseleave", () => {
        //         gsap.to(card, { 
        //             y: 0,
        //             duration: 0.4, 
        //             ease: "power2.out" 
        //         });
        //         gsap.to(shine, {
        //             x: "-100%",
        //             duration: 0
        //         });
        //     });
        // });

        // Animation des icônes au hover
        // const icons = document.querySelectorAll(".service-icon");
        // icons.forEach((icon) => {
        //     icon.parentElement && icon.parentElement.addEventListener("mouseenter", () => {
        //         gsap.to(icon, {
        //             rotate: 360,
        //             scale: 1.1,
        //             duration: 0.6,
        //             ease: "back.out(1.7)"
        //         });
        //     });
        // });

    }, { scope: root });

    const services = [
        {
            id: 1,
            title: "DÉRATISATION",
            icon: Rat,
            description: "Élimination complète et durable de tous types de rongeurs",
            features: [
                "Rats, souris, mulots",
                "Taupe, rats taupier",
                "Traitement préventif et curatif",
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
                "Chenilles processionnaires",
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
            <div ref={lumRef} className="absolute top-0 w-full h-20 bg-linear-to-b from-gray-600 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
    
                    <SectionTitle title="NOS" span="SERVICES" />

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Des solutions professionnelles pour chaque type d'infestation. 
                        Intervention rapide et résultats garantis.
                    </p>

                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} bgGradient={service.bgGradient} gradient={service.gradient} index={index} id={service.id} icon={service.icon} features={service.features}/>
                    ))}
                </div>

                {/* Emergency Card */}
                <div 
                    ref={emergencyRef}
                    className="emergency-card max-w-4xl mx-auto relative overflow-hidden"
                >
                    <div className="relative bg-linear-to-br from-orange-600 via-red-600 to-orange-700 rounded-3xl p-10 shadow-2xl">
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

                            <div className="flex flex-col gap-2">
                                <a
                                    href="tel:+33658942067"
                                    className="shrink-0 bg-white text-orange-600 hover:bg-gray-100 text-center font-black text-2xl md:text-3xl px-8 py-6 rounded-2xl transition-all shadow-2xl hover:scale-105"
                                >
                                    {isMobile ? "06 58 94 20 67" : "📞 06 58 94 20 67"}
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