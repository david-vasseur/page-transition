"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone, Mail, MapPin, Clock, Zap, Shield, CheckCircle, AlertCircle, Facebook, Youtube } from "lucide-react";
import { useModalStore } from "@/lib/stores/modalStore";
import { EstimateForm } from "@/components/form/EstimateForm";

gsap.registerPlugin(useGSAP);

const Contact = () => {
    const { openModal } = useModalStore();
    const root = useRef(null);
    const emergencyRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".contact-badge", { y: 20, opacity: 0, duration: 0.6 })
            .from(".contact-title span", { y: 30, opacity: 0, stagger: 0.15 }, "-=0.3")
            .from(".contact-subtitle", { y: 20, opacity: 0 }, "-=0.2")
            .from(".contact-cta", { scale: 0.9, opacity: 0, duration: 0.5 }, "-=0.1")
            .from(".contact-card", { y: 30, opacity: 0, stagger: 0.1 }, "-=0.3")
            .from(".social-item", { x: -20, opacity: 0, stagger: 0.1 }, "-=0.2");

        // Animation pulsation pour le CTA d'urgence
        gsap.to(emergencyRef.current, {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Animation des cartes au hover
        const cards = document.querySelectorAll(".contact-card");
        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });
    }, { scope: root });

    return (
        <section ref={root} className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-900/20 via-black to-black z-0" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-400/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="contact-badge inline-flex items-center bg-orange-600/20 border border-orange-600/30 rounded-full px-6 py-3 mb-6">
                        <Zap className="w-5 h-5 mr-2 text-orange-500" />
                        <span className="text-orange-500 font-bold">Réponse en moins de 2h</span>
                    </div>
                    
                    <h1 className="contact-title text-5xl md:text-7xl font-black mb-6">
                        <span className="block">CONTACTEZ</span>
                        <span className="text-orange-600 relative inline-block">
                            LES EXPERTS
                            <span className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-orange-600 to-orange-400" />
                        </span>
                    </h1>
                    <p className="contact-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
                        Intervention d'urgence 24/7. Devis gratuit et sans engagement.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* CTA + Contact Info */}
                    <div className="space-y-6">
                        {/* Emergency CTA */}
                        <div 
                            ref={emergencyRef}
                            className="contact-cta bg-linear-to-br from-orange-600 to-orange-700 rounded-3xl p-8 shadow-2xl cursor-pointer"
                        >
                            <div className="flex items-start mb-4">
                                <AlertCircle className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-3xl font-black mb-3">URGENCE ?</h3>
                            <p className="text-white/90 mb-6 text-lg">
                                Intervention immédiate disponible 24h/24 et 7j/7
                            </p>
                            <a
                                href="tel:+33658942067"
                                className="block bg-white text-orange-600 text-center font-black text-2xl py-4 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                📞 06 58 94 20 67
                            </a>
                        </div>

                        {/* Demande de devis CTA */}
                        <div className="contact-card bg-linear-to-br from-zinc-900 to-black border-2 border-orange-600/50 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">Demande de devis gratuit</h3>
                            <p className="text-gray-300 mb-6">
                                Remplissez notre formulaire et recevez une estimation personnalisée sous 2 heures.
                            </p>
                            <button
                                onClick={() => openModal(<EstimateForm />)}
                                className="w-full bg-linear-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center text-lg shadow-lg shadow-orange-600/30"
                            >
                                <Zap className="w-5 h-5 mr-2" />
                                Obtenir un devis
                            </button>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            <div className="contact-card bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-600/50 transition-colors">
                                <div className="flex items-start">
                                    <div className="bg-orange-600/20 p-3 rounded-xl mr-4">
                                        <Mail className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Email</h4>
                                        <a href="mailto:contact@deratisation.fr" className="text-gray-400 hover:text-orange-500 transition-colors">
                                            contact@deratisation.fr
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-card bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-600/50 transition-colors">
                                <div className="flex items-start">
                                    <div className="bg-orange-600/20 p-3 rounded-xl mr-4">
                                        <MapPin className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Zone d'intervention</h4>
                                        <p className="text-gray-400">
                                            Narbonne et sa région<br />
                                            Rayon de 50km
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-card bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-600/50 transition-colors">
                                <div className="flex items-start">
                                    <div className="bg-orange-600/20 p-3 rounded-xl mr-4">
                                        <Clock className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Horaires</h4>
                                        <p className="text-gray-400">
                                            Lun-Sam : 8h00 - 20h00<br />
                                            Urgences : 24/7
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Réseaux Sociaux */}
                        <div className="contact-card bg-linear-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <Zap className="w-6 h-6 mr-2 text-orange-500" />
                                Suivez-nous
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Découvrez nos interventions en direct, nos conseils et astuces !
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="https://www.tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-item flex items-center bg-black/50 border-2 border-zinc-700 hover:border-orange-500 rounded-xl p-4 transition-all group"
                                >
                                    <div className="bg-orange-600/20 p-3 rounded-xl mr-4 group-hover:bg-orange-600/30 transition-colors">
                                        <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white group-hover:text-orange-500 transition-colors">TikTok</h4>
                                        <p className="text-sm text-gray-400">@deratisation_pro</p>
                                    </div>
                                    <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        →
                                    </div>
                                </a>

                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-item flex items-center bg-black/50 border-2 border-zinc-700 hover:border-orange-500 rounded-xl p-4 transition-all group"
                                >
                                    <div className="bg-orange-600/20 p-3 rounded-xl mr-4 group-hover:bg-orange-600/30 transition-colors">
                                        <Facebook className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white group-hover:text-orange-500 transition-colors">Facebook</h4>
                                        <p className="text-sm text-gray-400">Dératisation Pro Narbonne</p>
                                    </div>
                                    <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        →
                                    </div>
                                </a>

                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-item flex items-center bg-black/50 border-2 border-zinc-700 hover:border-orange-500 rounded-xl p-4 transition-all group"
                                >
                                    <div className="bg-orange-600/20 p-3 rounded-xl mr-4 group-hover:bg-orange-600/30 transition-colors">
                                        <Youtube className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white group-hover:text-orange-500 transition-colors">YouTube</h4>
                                        <p className="text-sm text-gray-400">Nos interventions filmées</p>
                                    </div>
                                    <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        →
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Garanties */}
                        <div className="contact-card bg-linear-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <Shield className="w-6 h-6 mr-2 text-orange-500" />
                                Nos garanties
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Devis gratuit et sans engagement",
                                    "Intervention sous 24h si urgent",
                                    "Garantie satisfaction 100%",
                                    "Certification Certibiocide",
                                    "Tarifs transparents"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <CheckCircle className="w-5 h-5 mr-3 text-orange-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Trust Badge */}
                        <div className="contact-card bg-linear-to-r from-orange-600/20 to-orange-400/20 border border-orange-600/30 rounded-2xl p-6 text-center">
                            <div className="text-4xl font-black text-orange-500 mb-2">+500</div>
                            <p className="text-white font-semibold">Interventions réussies</p>
                            <p className="text-gray-300 text-sm mt-1">Clients satisfaits depuis 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;