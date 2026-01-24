"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { useModalStore } from "@/lib/stores/modalStore";
import { useMobileStore } from "@/lib/stores/mobileStore";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const { isMobile } = useMobileStore();
    const { openModal } = useModalStore();

    const root = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const scrollIndicator = useRef<HTMLDivElement>(null);
    const actionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (!actionRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
            .from(".hero-title span", { y: 30, opacity: 0, stagger: 0.2 }, "-=0.3")
            .from(".hero-desc", { y: 20, opacity: 0 }, "-=0.2")
            .from(".hero-desc-1", { y: 20, opacity: 0 }, "-=0.2")
            .from(".hero-features", { opacity: 0 }, "-=0.2")
            .from(actionRef.current?.children, { y: 30, opacity: 0, stagger: 0.2 }, "-=0.2");

        if (!isMobile) {
            gsap.to(arrowRef.current, {
            x: 5,
            repeat: -1,
            yoyo: true,
            duration: 0.8,
            ease: "power1.inOut",
            });

            gsap.to(scrollIndicator.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "power1.inOut",
            });
        }
        },
        
    );

    return (
        <section
            ref={root}
            id="home"
            className="relative min-h-screen bg-black overflow-hidden"
        >
            <Image src={"/hero.webp"} fill alt="" className="opacity-50" />
            <div className="absolute inset-0 bg-linear-to-t from-orange-950/70 to-black/40" />
            <div className="container w-[90vw] mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div>
                        {/* Badge */}
                        <div className="hero-badge hidden lg:flex items-center mb-6">
                        <div className="bg-orange-600/20 border border-orange-600/30 rounded-full px-4 py-2 flex items-center text-orange-500 text-sm font-semibold">
                            <Zap className="w-4 h-4 mr-2" />
                            Intervention d&apos;urgence 24/7
                        </div>
                        </div>

                        {/* Title */}
                        <h1 className="hero-title text-[2.6rem] xl:text-6xl 2xl:text-7xl font-black text-white mb-6 leading-tight">
                            <span className="block">ÉLIMINEZ</span>
                            <span className="inline-block text-orange-600 relative">
                                LES NUISIBLES
                                <span className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-orange-600 to-orange-400" />
                            </span>
                            <span className="block mt-2">
                                POUR DE BON
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="hero-desc text-xl text-gray-300 mb-4 max-w-xl">
                            Services professionnels d&apos;extermination pour rats, guêpes,
                            frelons et nuisibles.
                        </p>
                        <p className="hero-desc-1 text-white font-semibold pb-4">Satisfaction garantie à 100 %</p>

                        {/* Features */}
                        <div className="hero-features flex flex-col sm:flex-row gap-6 mb-10">
                        {["Certibiocide", "Agrément Piégeur Agréé"].map((feature) => (
                            <div
                            key={feature}
                            className="flex items-center gap-2 text-white font-medium"
                            >
                            <CheckCircle className="w-5 h-5 text-orange-500" />
                            {feature}
                            </div>
                        ))}
                        </div>

                        {/* Actions */}
                        <div ref={actionRef} className="hero-actions flex flex-col sm:flex-row gap-4">
                            <button
                                aria-label="Demande de devis"
                                // onClick={() => openModal(<EstimateForm />)}
                                className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-base 2xl:text-lg flex items-center justify-center"
                            >
                                Inspection gratuite
                                <div ref={arrowRef} className="ml-2">
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
                    </div>
                </div>

                {/* Scroll Indicator */}
                {!isMobile && (
                <div
                    ref={scrollIndicator}
                    className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2" />
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
