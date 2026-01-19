"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Shield,
  Zap,
  Bug,
  CheckCircle,
  Flame,
  Target,
  ArrowRight,
  Users,
} from "lucide-react";
import Image from "next/image";
import { SplitText } from "gsap/SplitText";
import { useMobileStore } from "@/lib/stores/mobileStore";
import StorySection from "@/components/features/SectionPourquoi";

gsap.registerPlugin(SplitText);

export default function PourquoiNous() {
	const root = useRef<HTMLDivElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const h3Ref = useRef<HTMLHeadingElement | null>(null);
	const h3PlusRef = useRef<HTMLHeadingElement | null>(null);
	const imageRef = useRef(null);
	const imageContainerRef = useRef(null);
	const { isMobile } = useMobileStore();

	const storyData = [
		{
			tag: "Constat initial",
			title: "Le problème",
			titleHighlight: "n’attend jamais",
			description: "Rats, souris, cafards... chaque minute perdue aggrave la situation.",
			features: [
			{ label: "Urgence", text: "Propagation éclair" },
			{ label: "Risques", text: "Dégâts matériels lourds" }
			],
			imageSrc: "/close-up-pest.png",
			imageAlt: "Infestation",
			floatingTitle: "Alerte rapide",
			floatingSub: "Réponse sous 2h",
			isReversed: false
		},
		{
			tag: "Notre méthode",
			title: "Une approche",
			titleHighlight: "chirurgicale",
			description: "Pas de bricolage. Chaque geste est réfléchi et ciblé.",
			features: [
			{ label: "Diagnostic", text: "Identification de la source" },
			{ label: "Traitements", text: "Certifiés et maîtrisés" }
			],
			imageSrc: "/precision-method.png",
			imageAlt: "Expertise",
			floatingTitle: "Zéro défaut",
			floatingSub: "Précision millimétrée",
			isReversed: true // Inversion ici !
		},
		{
			tag: "Engagement absolu",
			title: "Une responsabilité",
			titleHighlight: "totale",
			description: "Nous intervenons comme si c’était chez nous. Votre sérénité est notre seule métrique.",
			features: [
				{ label: "Professionnels & Collectivités", text: "Standards industriels appliqués partout" },
				{ label: "Résultats mesurables", text: "Transparence totale sur nos actions" }
			],
			imageSrc: "/security-professional.png",
			imageAlt: "Professionnel garantissant la sécurité",
			floatingTitle: "Zone sous contrôle",
			floatingSub: "Protocole 100% actif",
			isReversed: false
		}
	];

	// useGSAP(() => {


	// 	/* HERO */
	// 	gsap.from(".hero-line", {
	// 		y: 40,
	// 		opacity: 0,
	// 		stagger: 0.15,
	// 		duration: 0.8,
	// 		ease: "power3.out",
	// 	});

	// 	/* STORY PIN */
	// 	gsap.utils.toArray<HTMLElement>(".story-panel").forEach((panel) => {
	// 		ScrollTrigger.create({
	// 			trigger: panel,
	// 			start: "top top",
	// 			pin: true,
	// 			pinSpacing: false,
	// 			scrub: 1,
	// 		});

	// 		gsap.from(panel.querySelectorAll(".story-item"), {
	// 			opacity: 0,
	// 			y: 60,
	// 			stagger: 0.2,
	// 			duration: 1,
	// 			ease: "power3.out",
	// 			scrollTrigger: {
	// 				trigger: panel,
	// 				start: "top center",
	// 			},
	// 		});
	// 	});


	// 	// if (!h2Ref.current && !h3Ref.current) return

	// 	// const h2split = new SplitText(h2Ref.current, { type: "words, chars" });
	// 	// const h3split = new SplitText(h3Ref.current, { type: "words, chars" });

	// 	// gsap.set(h2split.words, { display: "inline-block" });
	// 	// gsap.set(h3split.words, { display: "inline-block" });

	// 	// gsap.fromTo(
	// 	// 	h2split.chars,
	// 	// 	{ yPercent: 50, opacity: 0 },
	// 	// 	{
	// 	// 		yPercent: 0,
	// 	// 		opacity: 1,
	// 	// 		stagger: 0.01,
	// 	// 		ease: "power4.out",
	// 	// 		scrollTrigger: {
	// 	// 		trigger: ".story-text-anim-1",
	// 	// 		start: "top 80%",
	// 	// 		scrub: 1
	// 	// 		}
	// 	// 	}
	// 	// )

	// 	// gsap.fromTo(
	// 	// 	h3split.chars,
	// 	// 	{ xPercent: 50, opacity: 0 },
	// 	// 	{
	// 	// 		xPercent: 0,
	// 	// 		opacity: 1,
	// 	// 		stagger: 0.02,
	// 	// 		ease: "power4.out",
	// 	// 		scrollTrigger: {
	// 	// 		trigger: ".story-text-anim-1",
	// 	// 		start: "top 70%",
	// 	// 		scrub: 1
	// 	// 		}
	// 	// 	}
	// 	// )

	// 	// gsap.fromTo(
	// 	// 	h3PlusRef.current,
	// 	// 	{ scaleX: 0, opacity: 0 },
	// 	// 	{
	// 	// 		scaleX: 1,
	// 	// 		opacity: 1,
	// 	// 		stagger: 0.04,
	// 	// 		ease: "power4.out",
	// 	// 		scrollTrigger: {
	// 	// 		trigger: ".story-text-anim-1",
	// 	// 		start: "top 60%",
	// 	// 		scrub: 1
	// 	// 		}
	// 	// 	}
	// 	// )

	// 	// gsap.fromTo(imageRef.current, 
	// 	// 	{ 
	// 	// 		yPercent: 10, 
	// 	// 		scale: 1.4    
	// 	// 	}, 
	// 	// 	{
	// 	// 		yPercent: -10,  
	// 	// 		scale: 1.4,      
	// 	// 		ease: "none",
	// 	// 		scrollTrigger: {
	// 	// 		trigger: ".story-panel",
	// 	// 		start: "top bottom",
	// 	// 		end: "+=200% top",
	// 	// 		scrub: true
	// 	// 		}
	// 	// 	}
	// 	// );

	// 	// gsap.fromTo(imageContainerRef.current, 
	// 	// 	{ 
	// 	// 		yPercent: 25, 
	// 	// 	}, 
	// 	// 	{
	// 	// 		yPercent: -25,    
	// 	// 		ease: "none",
	// 	// 		scrollTrigger: {
	// 	// 		trigger: ".story-panel",
	// 	// 		start: "top bottom",
	// 	// 		end: "+=200% top",
	// 	// 		scrub: true
	// 	// 		}
	// 	// 	}
	// 	// );

	// 	// const tl = gsap.timeline({
	// 	// 	scrollTrigger: {
	// 	// 		trigger: ".panel-1",
	// 	// 		start: "top bottom",
	// 	// 		end: "bottom top",  
	// 	// 		scrub: 1,
				
	// 	// 	}
	// 	// });

	// 	// tl.fromTo(".panel-1-text", 
	// 	// 	{ opacity: 0, xPercent: 200 }, 
	// 	// 	{ opacity: 1, xPercent: 0, duration: 1 } 
	// 	// )
	// 	// .to(".panel-1-text", 
	// 	// 	{ opacity: 0, scale: 1.4, xPercent: -25, duration: 1 }, 
	// 	// 	"+=0.5"
	// 	// );

	// 	// gsap.to(".panel-1", 
	// 	// 	{ 
	// 	// 		opacity: 0, 
	// 	// 		scrollTrigger: {
	// 	// 			trigger: ".panel-1",
	// 	// 			start: "top top",
	// 	// 			scrub: 1
	// 	// 		}
	// 	// 	}
	// 	// )

	// 	// gsap.to(".panel-hero", 
	// 	// 	{ 
	// 	// 		opacity: 0, 
	// 	// 		scale: 1.5,
	// 	// 		scrollTrigger: {
	// 	// 			trigger: ".panel-1",
	// 	// 			start: "top bottom",
	// 	// 			end:"top top",
	// 	// 			scrub: 1
	// 	// 		}
	// 	// 	}
	// 	// )

	// }, { scope: root });

	return (
		<section
		ref={root}
		className="relative bg-black text-white overflow-hidden"
		>
			{/* BACKGROUND */}
			<div className="absolute inset-0 bg-linear-to-br from-orange-900/20 via-black to-black" />
			<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-600/10 blur-3xl rounded-full" />
			<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-400/5 blur-3xl rounded-full" />

			{/* HERO */}
			<div className="story-panel panel-hero relative z-0 min-h-screen flex flex-col justify-center items-center text-center px-6">
				<span className="hero-line inline-flex items-center bg-orange-600/20 border border-orange-600/30 rounded-full px-6 py-3 mb-6">
					<Zap className="w-5 h-5 mr-2 text-orange-500" />
					L’exigence du résultat
				</span>

				<h1 className="text-5xl md:text-7xl font-black mb-6">
					<span className="hero-line block">POURQUOI</span>
					<span className="hero-line text-orange-600 relative inline-block">
						NOUS CHOISIR
						<span className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-orange-600 to-orange-400" />
					</span>
				</h1>

				<p className="hero-line text-xl text-gray-300 max-w-2xl">
					Parce qu’un nuisible n’est jamais un simple problème.
					C’est une urgence, une menace, une perte de contrôle.
				</p>
			</div>

		
			{storyData.map((story, i) => (
				<StorySection key={i} {...story} />
			))}


			{/* PROOFS - THE TRUST HUB */}
			<section className="proofs relative bg-[#050505] py-32 px-6 overflow-hidden">
				{/* Effet de grille en arrière-plan pour le côté "Tech" */}
				<div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
					style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

				<div className="max-w-7xl mx-auto relative z-10">
					
					{/* Header de section avec ligne de progression */}
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
					<div className="max-w-2xl">
						<h2 className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4">Indicateurs de Performance</h2>
						<h3 className="text-5xl md:text-6xl font-black text-white leading-tight">
						L'excellence n'est pas <br />
						<span className="text-gray-500 italic">une option.</span>
						</h3>
					</div>
					<div className="hidden md:block h-px grow bg-linear-to-r from-transparent via-orange-500/30 to-transparent mx-12 mb-4"></div>
					</div>

					{/* Layout Bento Grid */}
					<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
					
					{/* Carte 1 : Rapidité (Large) */}
					<div className="proof-card md:col-span-8 bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center group hover:bg-zinc-900/60 transition-all duration-500">
						<div className="w-32 h-32 rounded-3xl bg-orange-600/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-500">
						<Flame size={48} strokeWidth={1.5} />
						</div>
						<div className="flex-1 text-center md:text-left">
						<div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
							<span className="text-6xl font-black text-white counter" data-target="2">0</span>
							<span className="text-3xl font-bold text-orange-500">H</span>
						</div>
						<h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Intervention éclair</h4>
						<p className="text-gray-400 max-w-sm">Priorité absolue aux urgences 24/7. Notre réactivité est votre première ligne de défense.</p>
						</div>
					</div>

					{/* Carte 2 : Preuve Sociale Publique (Large ou Carrée selon votre choix) */}
						<div className="proof-card md:col-span-4 bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group">
						<div className="relative z-10 h-full flex flex-col">
							<div className="flex items-center gap-3 mb-6">
							<div className="bg-orange-500/20 p-2 rounded-lg">
								<Users className="text-orange-500 w-6 h-6" />
							</div>
							<span className="text-white font-bold uppercase tracking-widest text-xs">Confiance Publique</span>
							</div>

							<h4 className="text-2xl font-bold text-white mb-4">
							Ils nous font <br /> confiance.
							</h4>

							{/* Zone des communes avec défilement ou grille élégante */}
							<div className="relative mt-6 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
							<div className="flex gap-8 animate-marquee whitespace-nowrap">
								{/* Doubler la liste pour le défilement infini */}
								{["Mairie de Bordeaux ", "Ville de Lyon ", "Commune de Biarritz ", "Agglo de Nantes ", "Mairie de Cannes "].map((ville, i) => (
								<span key={i} className="text-xl font-black text-white/20 uppercase italic tracking-tighter">
									{ville}  —
								</span>
								))}
							</div>
							</div>
						</div>

				{/* Filigrane discret en arrière-plan */}
				<Shield className="absolute -bottom-10 -right-10 w-40 h-40 text-white/2 -rotate-12" />
				</div>

					{/* Carte 3 : Expertise (Verticale) */}
					<div className="proof-card md:col-span-4 bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-orange-500/30 transition-colors">
						<Bug className="text-orange-500 w-10 h-10" />
						<div className="mt-12">
						<h4 className="text-2xl font-bold text-white mb-4">Expertise <br/>Terrain</h4>
						<p className="text-gray-400">Pas de théorie. Des centaines d'heures de pratique réelle pour maîtriser chaque scénario.</p>
						</div>
					</div>

					{/* Carte 4 : Le Call to Action Final (Ultra Premium) */}
					<div className="proof-card md:col-span-8 bg-linear-to-br from-zinc-900 to-black border border-white/5 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
						<div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
						
						<div className="relative z-10">
						<h4 className="text-3xl font-bold text-white mb-2">Prêt à sécuriser vos actifs ?</h4>
						<p className="text-gray-400">Discutons de votre projet en moins de 15 minutes.</p>
						</div>

						<button className="relative z-10 bg-white text-black px-8 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-orange-500 hover:text-white transition-all duration-300 group/btn">
						LANCER L'INTERVENTION
						<ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
						</button>
					</div>

					</div>
				</div>
			</section>
		</section>
	);
}
