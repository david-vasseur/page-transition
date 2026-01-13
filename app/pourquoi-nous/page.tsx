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

gsap.registerPlugin(SplitText);

export default function PourquoiNous() {
	const root = useRef<HTMLDivElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const h3Ref = useRef<HTMLHeadingElement | null>(null);
	const h3PlusRef = useRef<HTMLHeadingElement | null>(null);
	const imageRef = useRef(null);
	const imageContainerRef = useRef(null);
	const { isMobile } = useMobileStore();

	useGSAP(() => {


		/* HERO */
		gsap.from(".hero-line", {
			y: 40,
			opacity: 0,
			stagger: 0.15,
			duration: 0.8,
			ease: "power3.out",
		});

		/* STORY PIN */
		gsap.utils.toArray<HTMLElement>(".story-panel").forEach((panel) => {
			ScrollTrigger.create({
				trigger: panel,
				start: "top top",
				pin: true,
				pinSpacing: false,
				scrub: 1,
			});

			gsap.from(panel.querySelectorAll(".story-item"), {
				opacity: 0,
				y: 60,
				stagger: 0.2,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: panel,
					start: "top center",
				},
			});
		});


		if (!h2Ref.current && !h3Ref.current) return

		const h2split = new SplitText(h2Ref.current, { type: "words, chars" });
		const h3split = new SplitText(h3Ref.current, { type: "words, chars" });

		gsap.set(h2split.words, { display: "inline-block" });
		gsap.set(h3split.words, { display: "inline-block" });

		gsap.fromTo(
			h2split.chars,
			{ yPercent: 50, opacity: 0 },
			{
				yPercent: 0,
				opacity: 1,
				stagger: 0.01,
				ease: "power4.out",
				scrollTrigger: {
				trigger: ".story-text-anim-1",
				start: "top 80%",
				scrub: 1
				}
			}
		)

		gsap.fromTo(
			h3split.chars,
			{ xPercent: 50, opacity: 0 },
			{
				xPercent: 0,
				opacity: 1,
				stagger: 0.02,
				ease: "power4.out",
				scrollTrigger: {
				trigger: ".story-text-anim-1",
				start: "top 70%",
				scrub: 1
				}
			}
		)

		gsap.fromTo(
			h3PlusRef.current,
			{ scaleX: 0, opacity: 0 },
			{
				scaleX: 1,
				opacity: 1,
				stagger: 0.04,
				ease: "power4.out",
				scrollTrigger: {
				trigger: ".story-text-anim-1",
				start: "top 60%",
				scrub: 1
				}
			}
		)

		gsap.fromTo(imageRef.current, 
			{ 
				yPercent: 10, 
				scale: 1.4    
			}, 
			{
				yPercent: -10,  
				scale: 1.4,      
				ease: "none",
				scrollTrigger: {
				trigger: ".story-panel",
				start: "top bottom",
				end: "+=200% top",
				scrub: true
				}
			}
		);

		gsap.fromTo(imageContainerRef.current, 
			{ 
				yPercent: 25, 
			}, 
			{
				yPercent: -25,    
				ease: "none",
				scrollTrigger: {
				trigger: ".story-panel",
				start: "top bottom",
				end: "+=200% top",
				scrub: true
				}
			}
		);

		gsap.to(".panel-1", 
			{ 
				opacity: 0, 
				scrollTrigger: {
					trigger: ".panel-1",
					start: "top top",
					scrub: 1
				}
			}
		)

		gsap.to(".panel-1-text", 
			{ 
				opacity: 0,
				scale: 1.4,
				xPercent: -25, 
				scrollTrigger: {
					trigger: ".panel-1",
					start: "top top",
					scrub: 1
				}
			}
		)

		gsap.to(".panel-hero", 
			{ 
				opacity: 0, 
				scale: 1.5,
				scrollTrigger: {
					trigger: ".panel-1",
					start: "top bottom",
					end:"top top",
					scrub: 1
				}
			}
		)

	}, { scope: root });

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

			{/* STORY 1 — LE PROBLÈME */}
			<section className="story-panel panel-1 relative bg-gray-950 min-h-screen flex items-center overflow-hidden px-6 py-24">

				{/* Décor d’arrière-plan sombre */}
				<div className="absolute inset-0 z-0">
					<img
					src="/infestation-dark.png"
					alt=""
					className="w-full h-full object-cover opacity-20 scale-110"
					/>
					<div className="absolute inset-0 bg-linear-to-l from-black via-black/80 to-transparent" />
				</div>

				<div className="max-w-7xl mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

					{/* --- COLONNE IMAGE (GAUCHE) --- */}
					<div ref={imageContainerRef} className="hidden lg:block col-span-1 lg:col-span-7 relative h-150 lg:h-187.5 group rounded-3xl overflow-hidden shadow-2xl border-r border-b border-white/10 image-container-trigger">

						<img
							ref={imageRef} 
							src="/close-up-pest.png"
							alt="Infestation en gros plan"
							className="w-full h-full object-cover scale-110 parallax-image"
						/>

						{/* Overlay dramatique */}
						<div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-transparent opacity-70" />

						{/* Halo de danger */}
						<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/20 blur-3xl rounded-full" />
					</div>

					{/* --- COLONNE TEXTE (OVERLAP À DROITE) --- */}
					<div className="col-span-1 lg:col-span-5 lg:-ml-24 panel-1-text relative z-20 content-container">
						<div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-8">

						{/* Titre */}
						<div className="story-text-anim-1">
							<h2 className="text-orange-500 font-medium tracking-[0.2em] uppercase mb-2 flex items-center">
								<span className="w-6 h-0.5 bg-orange-500 mr-3 inline-block" />
								<span ref={h2Ref}>Constat initial</span>
							</h2>

							<h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
								<span ref={h3Ref}>Le problème</span>								
								<br />
								<span ref={h3PlusRef} className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
									n’attend jamais
								</span>
							</h3>
						</div>

						{/* Texte principal */}
						<p className="text-xl text-gray-300 leading-relaxed story-text-anim">
							Rats, souris, cafards, punaises de lit…
							<strong className="block mt-4 text-white">
							chaque minute perdue aggrave la situation.
							</strong>
						</p>

						{/* Texte secondaire */}
						<p className="text-gray-400 leading-relaxed story-text-anim">
							Une infestation ignorée devient rapidement incontrôlable.
							Plus vous attendez, plus les dégâts — sanitaires, matériels,
							financiers — s’intensifient.
						</p>

						</div>
					</div>

					</div>
				</div>
			</section>

			{/* STORY 2 — MÉTHODE CHIRURGICALE */}
			<section className="story-panel relative bg-gray-950 min-h-screen flex items-center overflow-hidden px-6 py-24">

				{/* Décor d’arrière-plan */}
				<div className="absolute top-0 left-0 w-2/3 h-full bg-linear-to-r from-gray-900 to-transparent opacity-40 z-0" />

				<div className="max-w-7xl mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

					{/* --- COLONNE TEXTE (OVERLAP) --- */}
					<div className="col-span-1 lg:col-span-5 lg:ml-0 lg:-mr-24 relative z-20 content-container">
						<div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8">

						{/* Titre */}
						<div className="story-text-anim">
							<h2 className="text-orange-500 font-medium tracking-[0.2em] uppercase mb-2 flex items-center">
							<span className="w-6 h-0.5 bg-orange-500 mr-3 inline-block" />
							Notre méthode
							</h2>

							<h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
							Une approche
							<br />
							<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
								chirurgicale
							</span>
							</h3>
						</div>

						{/* Texte */}
						<p className="text-xl text-gray-300 leading-relaxed story-text-anim">
							Pas de bricolage. Pas d’actions inutiles.
							<strong className="block mt-4 text-white">
							Chaque geste est réfléchi, mesuré et ciblé.
							</strong>
						</p>

						{/* Liste */}
						<div className="space-y-4 pt-4 border-t border-white/10 story-text-anim">
							<div className="flex items-start text-gray-300">
							<CheckCircle className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" />
							<p><span className="text-white font-bold">Diagnostic précis :</span> identification exacte de la source.</p>
							</div>

							<div className="flex items-start text-gray-300">
							<CheckCircle className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" />
							<p><span className="text-white font-bold">Traitements certifiés :</span> efficaces et maîtrisés.</p>
							</div>

							<div className="flex items-start text-gray-300">
							<CheckCircle className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" />
							<p><span className="text-white font-bold">Plan sur mesure :</span> adapté à votre environnement.</p>
							</div>

							<div className="flex items-start text-gray-300">
							<CheckCircle className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" />
							<p><span className="text-white font-bold">Prévention durable :</span> pas de retour non contrôlé.</p>
							</div>
						</div>

						</div>
					</div>

					{/* --- COLONNE IMAGE (DROITE) --- */}
					<div className="hidden lg:block col-span-1 lg:col-span-7 relative h-150 lg:h-187.5 group rounded-3xl overflow-hidden shadow-2xl border-l border-b border-white/10 image-container-trigger">

						<Image
						src="/precision-method.png"
						alt="Méthode d’intervention précise et professionnelle"
						fill
						className="object-cover scale-110 transition-transform duration-700 group-hover:scale-105 parallax-image"
						priority
						/>

						{/* Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-60" />

						{/* UI flottante */}
						<div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 floating-ui hidden lg:flex">
						<div className="bg-orange-500/20 p-2 rounded-full">
							<Target className="w-6 h-6 text-orange-500" />
						</div>
						<div>
							<p className="text-white font-bold text-sm uppercase tracking-wider">
							Intervention ciblée
							</p>
							<p className="text-gray-300 text-xs">
							Zéro approximation
							</p>
						</div>
						</div>
					</div>

					</div>
				</div>
			</section>

			{/* STORY 3 - SECTION RESPONSABILITÉ TOTALE */}
			<section className="story-panel relative bg-gray-950 min-h-screen flex items-center overflow-hidden px-6 py-24">
			
				{/* Élément de décor d'arrière-plan subtil */}
				<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-40 z-0"></div>

				<div className="max-w-7xl mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					
					{/* --- COLONNE IMAGE (Impact Visuel) --- */}
					{/* Elle prend 7 colonnes sur 12 en large */}
					<div className="hidden lg:block col-span-1 lg:col-span-7 relative h-[600px] lg:h-[750px] group rounded-3xl overflow-hidden shadow-2xl border-r border-b border-white/10 image-container-trigger">
						{/* L'image elle-même avec un léger scale pour l'effet parallaxe futur */}
						<Image 
						src="/security-professional.png" // REMPLACEZ PAR VOTRE IMAGE
						alt="Professionnel garantissant la sécurité"
						fill
						className="object-cover scale-110 transition-transform duration-700 group-hover:scale-105 parallax-image"
						priority
						/>
						
						{/* Overlay dégradé pour que le texte ressorte dessus si besoin */}
						<div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/30 to-transparent opacity-60"></div>

						{/* Un petit badge "UI flotante" sur l'image pour le côté premium/tech */}
						<div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 floating-ui hidden lg:flex">
							<div className="bg-orange-500/20 p-2 rounded-full">
								<Shield className="w-6 h-6 text-orange-500" />
							</div>
							<div>
								<p className="text-white font-bold text-sm uppercase tracking-wider">Zone sous contrôle</p>
								<p className="text-gray-300 text-xs">Protocole 100% actif</p>
							</div>
						</div>
					</div>

					{/* --- COLONNE TEXTE (Overlap) --- */}
					{/* Elle prend 5 colonnes et est décalée vers la gauche pour chevaucher l'image */}
					<div className="col-span-1 lg:col-span-5 lg:-ml-24 relative z-20 content-container">
						<div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8">
						
						<div className="story-text-anim">
							<h2 className="text-orange-500 font-medium tracking-[0.2em] uppercase mb-2 flex items-center">
							<span className="w-6 h-0.5 bg-orange-500 mr-3 inline-block"></span>
							Engagement absolu
							</h2>
							<h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
							Une responsabilité <br/>
							<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600"> totale</span>
							</h3>
						</div>

						<p className="text-xl text-gray-300 leading-relaxed story-text-anim">
							Nous ne sommes pas de simples prestataires. Nous intervenons comme si c’était chez nous. 
							<strong className="block mt-4 text-white">Votre sérénité est notre seule métrique.</strong>
						</p>

						{/* Liste à puces modernisée */}
						<div className="space-y-4 pt-4 border-t border-white/10 story-text-anim">
							<div className="flex items-start text-gray-300">
								<CheckCircle className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" />
								<p><span className="text-white font-bold">Professionnels & Collectivités :</span> Des standards industriels appliqués partout.</p>
							</div>
							<div className="flex items-start text-gray-300">
								<CheckCircle className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" />
								<p><span className="text-white font-bold">Résultat mesurable :</span> Transparence totale sur nos actions.</p>
							</div>
						</div>

						</div>
					</div>

					</div>
				</div>
			</section>

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
