'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import {
    ArrowRight,
    Shield,
    Zap,
    Users,
    BadgeCheck,
    MousePointer,
    Award,
    Briefcase,
    GraduationCap,
    Lock,
    CheckCircle
} from 'lucide-react';
import HeroService from '@/components/pages/services/HeroService';


export default function PourquoiNousPage() {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (typeof window === 'undefined') return;

        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
			const split = new SplitText(heroTitle, { type: 'chars, words' });
			gsap.from(split.chars, {
				opacity: 0,
				y: 50,
				rotateX: -90,
				stagger: 0.02,
				duration: 1,
				ease: 'back.out(1.7)',
			});
        }

        gsap.from('.hero-subtitle', {
			opacity: 0,
			y: 30,
			duration: 1,
			delay: 0.5,
        });

        gsap.from('.hero-cta', {
			opacity: 0,
			y: 30,
			duration: 0.8,
			delay: 0.8,
			stagger: 0.2,
        });

        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
			gsap.to(scrollIndicator, {
				y: 10,
				duration: 1,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut',
			});
        }

        gsap.utils.toArray('.story-image').forEach((image: any) => {
			gsap.from(image, {
				scrollTrigger: {
				trigger: image,
				start: 'top 80%',
				},
				x: -100,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
			});
        });

        gsap.utils.toArray('.story-text').forEach((text: any) => {
			gsap.from(text, {
				scrollTrigger: {
				trigger: text,
				start: 'top 80%',
				},
				y: 50,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
			});
        });

        gsap.utils.toArray('.force-card').forEach((card: any, index: number) => {
			gsap.from(card, {
				scrollTrigger: {
				trigger: card,
				start: 'top 85%',
				},
				y: 60,
				opacity: 0,
				duration: 0.8,
				delay: index * 0.15,
				ease: 'power3.out',
			});
        });

        const counters = document.querySelectorAll('.counter-number');
        counters.forEach((counter: any) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const obj = { value: 0 };

        gsap.to(obj, {
            scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            },
            value: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
            counter.textContent = Math.round(obj.value);
            },
        });
        });

        gsap.utils.toArray('.cert-logo').forEach((logo: any, index: number) => {
        gsap.from(logo, {
            scrollTrigger: {
            trigger: logo,
            start: 'top 85%',
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
        });
        });

        gsap.utils.toArray('.prestation-card').forEach((card: any, index: number) => {
        gsap.from(card, {
            scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            },
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: (index % 3) * 0.1,
            ease: 'power3.out',
        });
        });

        const valuesTitles = document.querySelectorAll('.value-title');
        valuesTitles.forEach((title: any) => {
        const split = new SplitText(title, { type: 'chars' });
        gsap.from(split.chars, {
            scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            },
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.6,
        });
        });

        gsap.utils.toArray('.value-line').forEach((line: any) => {
        gsap.from(line, {
            scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            },
            scaleX: 0,
            duration: 0.8,
            ease: 'power3.inOut',
        });
        });

        gsap.from('.recruitment-content', {
        scrollTrigger: {
            trigger: '.recruitment-content',
            start: 'top 80%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        });

        gsap.from('.final-cta-content', {
        scrollTrigger: {
            trigger: '.final-cta-content',
            start: 'top 80%',
        },
        scale: 0.98,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-[#0B0B0B] text-white overflow-hidden">

            <HeroService header1="Pourquoi" header2="nous faire confiance ?" subTitle="Un interlocuteur unique, une expertise reconnue et un engagement total sur chaque intervention." />

            {/* STORYTELLING SECTION */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="story-image relative h-100 md:h-150 rounded-2xl overflow-hidden">
                            <Image
                            src="/pourquoi/gv.webp"
                            alt="Expertise terrain"
                            fill
                            className="object-cover"
                            />
                        </div>

                        <div className="story-text">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#FF6A00]">
                            Une expertise forgée sur le terrain
                            </h2>

                            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Avec plus de <span className="text-white font-bold">6 ans d'expérience</span> dans la lutte contre les nuisibles et l’élimination des nids d’hyménoptères, j’ai développé une expertise concrète, acquise directement sur le terrain.
                            </p>

                            <p>
                                Avant de me lancer en indépendant, j’ai exercé au sein de <span className="text-white font-bold">grandes entreprises nationales du secteur</span>, où j’ai appris les méthodes les plus rigoureuses et les standards d’intervention les plus exigeants.
                            </p>

                            <p>
                                Cette expérience m’a permis d’intervenir dans des contextes variés : habitations individuelles, immeubles collectifs, sites professionnels et environnements sensibles.
                            </p>

                            <p className="text-white font-semibold text-xl pt-4">
                                Aujourd’hui, j’interviens personnellement sur chaque mission avec une exigence simple : efficacité, sécurité et travail soigné.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NOTRE FORCE SECTION */}
            <section className="py-24 px-4 bg-black/50">
                <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
                    Ce qui fait <span className="text-[#FF6A00]">notre force</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ForceCard
                    icon={<Shield className="w-12 h-12" />}
                    title="Méthodes alternatives et écoresponsables"
                    description="Nous privilégions des solutions respectueuses de l'environnement sans compromis sur l'efficacité."
                    />

                    <ForceCard
                    icon={<Zap className="w-12 h-12" />}
                    title="Réactivité régional"
                    description="Intervention rapide partout dans le Gard, le Vaucluse, et les Bouches du Rhone."
                    />

                    <ForceCard
                    icon={<Users className="w-12 h-12" />}
                    title="Un interlocuteur unique"
                    description="Du premier contact à l'intervention finale, vous êtes accompagné par le même expert."
                    />

                    <ForceCard
                    icon={<BadgeCheck className="w-12 h-12" />}
                    title="Tarification transparente"
                    description="Devis détaillé et forfaitisé sans surprise. Vous savez exactement ce que vous payez."
                    />
                </div>
                </div>
            </section>

            {/* RÉSEAU NATIONAL SECTION */}
            <section className="py-24 px-4 relative">
                <div className="absolute inset-0 opacity-5">
                    <Image
                    src="/logo.webp"
                    alt="France map"
                    fill
                    className="object-cover"
                    />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
                        Une expertise <span className="text-[#FF6A00]">indépendante et reconnue</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <StatCard number={5} label="Années d'expérience" suffix="+" />
                        <StatCard number={500} label="Interventions réalisées" suffix="+" />
                        <StatCard number={100} label="Clients satisfaits" suffix="%" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-300 text-lg">
                            <p className="text-xl leading-relaxed">
                            Professionnel <span className="text-white font-bold">indépendant et expérimenté</span>, j’interviens avec rigueur et réactivité auprès de mes clients.
                            </p>

                            <p className="leading-relaxed">
                            Je travaille en collaboration avec des <span className="text-[#FF6A00] font-semibold">partenaires de confiance</span> qui me sollicitent régulièrement pour mon expertise et la qualité de mes prestations.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Badge text="Expert indépendant" />
                                <Badge text="Partenaires de confiance" />
                                <Badge text="Service 7j/7" />
                                <Badge text="Disponibilité rapide" />
                            </div>
                        </div>

                        <div className="relative h-100 rounded-2xl overflow-hidden">
                            <Image
                                src="/thanks.webp"
                                alt="Intervention professionnelle"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS & PARTENARIATS */}
            <section className="py-24 px-4 bg-black/30">
                <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
                    Certifications & <span className="text-[#FF6A00]">Partenariats</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                    <CertCard title="Agrément biocide" icon={<Award className="w-16 h-16" />} />
                    <CertCard title="Membre Chambre Syndicale 3D" icon={<Shield className="w-16 h-16" />} />
                    <CertCard title="Certification poseur Écopiège®" icon={<BadgeCheck className="w-16 h-16" />} />
                    <CertCard title="Réseau Plus que Pro" icon={<Users className="w-16 h-16" />} />
                    {/* <CertCard title="Partenaire Digrain" icon={<Briefcase className="w-16 h-16" />} /> */}                
                </div>

                <p className="text-center text-gray-400 mt-12 text-lg">
                    Des certifications reconnues qui garantissent la qualité et la fiabilité de nos interventions
                </p>
                </div>
            </section>

            {/* PRESTATIONS SECTION */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
                    Nos <span className="text-[#FF6A00]">prestations</span>
                </h2>

                <div className="space-y-16">
                    <PrestationCategory
                    title="DÉRATISATION"
                    items={[
                        { name: 'Rats', image: '/pourquoi/rat.webp' },
                        { name: 'Souris', image: '/pourquoi/souris.webp' },
                        { name: 'Ragondins', image: '/pourquoi/ragondin.webp' },
                    ]}
                    />

                    <PrestationCategory
                    title="DÉSINSECTISATION"
                    items={[
                        { name: 'Guêpes', image: '/pourquoi/guepe.webp' },
                        { name: 'Frelons Européens', image: '/pourquoi/europeen.webp' },
                        { name: 'Frelons asiatiques', image: '/pourquoi/asiatique.webp' },
                        { name: 'Chenilles processinnaires', image: '/pourquoi/chenille.webp' },
                        { name: 'Punaises de lit', image: '/pourquoi/punaise.webp' },
                        { name: 'Fourmis', image: '/pourquoi/fourmis.webp' }
                    ]}
                    />

                    <PrestationCategory
                    title="AUTRES PRESTATIONS"
                    items={[
                        { name: 'Désinfection', image: '/pourquoi/desinfection.webp' },
                        { name: 'Dépigeonnage', image: '/pourquoi/depigeonnage.webp' },
                        { name: 'Taupes', image: '/pourquoi/taupes.webp' }
                    ]}
                    />
                </div>
                </div>
            </section>

            {/* VALEURS SECTION */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-[#FF6A00]/20 via-[#0B0B0B] to-[#0B0B0B]"></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-white">
                    Nos <span className="text-[#FF6A00]">valeurs</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard
                    icon={<Users className="w-12 h-12" />}
                    title="Accompagnement"
                    description="Un suivi personnalisé de A à Z pour chaque intervention."
                    />

                    <ValueCard
                    icon={<GraduationCap className="w-12 h-12" />}
                    title="Formation continue"
                    description="Nos équipes sont constamment formées aux dernières techniques."
                    />

                    <ValueCard
                    icon={<Lock className="w-12 h-12" />}
                    title="Discrétion"
                    description="Interventions discrètes et professionnelles garanties."
                    />

                    <ValueCard
                    icon={<CheckCircle className="w-12 h-12" />}
                    title="Certification & excellence"
                    description="Des standards de qualité élevés pour chaque mission."
                    />
                </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-32 px-4 bg-black">
                <div className="final-cta-content container mx-auto max-w-5xl text-center">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 text-white leading-tight">
                    Besoin d'une intervention <span className="text-[#FF6A00]">rapide</span> ?
                </h2>

                <button className="group bg-[#FF6A00] hover:bg-[#FF7A10] text-white px-16 py-6 rounded-xl font-black text-2xl transition-all duration-300 flex items-center gap-4 mx-auto hover:scale-110 hover:shadow-[0_0_50px_rgba(255,106,0,0.7)] mb-8">
                    Demander mon devis gratuit
                    <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </button>

                <p className="text-gray-400 text-lg flex flex-wrap justify-center gap-6 items-center">
                    <span className="flex items-center gap-2">
                    <CheckCircle className="text-[#FF6A00]" />
                    Intervention rapide
                    </span>
                    <span className="flex items-center gap-2">
                    <CheckCircle className="text-[#FF6A00]" />
                    Devis gratuit
                    </span>
                    <span className="flex items-center gap-2">
                    <CheckCircle className="text-[#FF6A00]" />
                    Transparence totale
                    </span>
                </p>
                </div>
            </section>

            </div>
        );
    }

    function ForceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
        return (
            <div className="force-card group bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#FF6A00] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,106,0,0.3)] cursor-pointer">
            <div className="text-[#FF6A00] mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
        );
    }

    function StatCard({ number, label, suffix }: { number: number; label: string; suffix: string }) {
        return (
            <div className="text-center">
            <div className="text-6xl md:text-7xl font-black text-[#FF6A00] mb-4">
                <span className="counter-number" data-target={number}>0</span>{suffix}
            </div>
            <p className="text-xl text-gray-300 font-semibold">{label}</p>
            </div>
        );
    }

    function Badge({ text }: { text: string }) {
        return (
            <span className="inline-flex items-center gap-2 bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] px-4 py-2 rounded-full text-sm font-semibold">
            <CheckCircle size={16} />
            {text}
            </span>
        );
    }

    function CertCard({ title, icon }: { title: string; icon: React.ReactNode }) {
        return (
            <div className="cert-logo group text-center p-6 rounded-xl border border-gray-800 hover:border-[#FF6A00] transition-all duration-300 hover:bg-[#FF6A00]/5">
            <div className="text-gray-500 group-hover:text-[#FF6A00] transition-colors duration-300 mb-4 mx-auto w-fit">
                {icon}
            </div>
            <p className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                {title}
            </p>
            </div>
        );
    }

    function PrestationCategory({ title, items }: { title: string; items: { name: string; image: string }[] }) {
        return (
            <div>
            <h3 className="text-3xl font-black text-[#FF6A00] mb-8 border-l-4 border-[#FF6A00] pl-4">
                {title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                <div
                    key={index}
                    className="prestation-card group relative h-64 rounded-xl overflow-hidden cursor-pointer"
                >
                    <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">{item.name}</h4>
                    <button className="bg-[#FF6A00] text-white px-4 py-2 rounded-lg font-semibold text-sm w-fit opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        Intervention rapide
                        <ArrowRight size={16} />
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </div>
        );
    }

    function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
        return (
            <div className="text-center">
            <div className="text-[#FF6A00] mb-4 mx-auto w-fit">
                {icon}
            </div>
            <h3 className="value-title text-2xl font-black mb-4 text-white">{title}</h3>
            <div className="value-line w-20 h-1 bg-[#FF6A00] mx-auto mb-4"></div>
            <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
        );
    }
