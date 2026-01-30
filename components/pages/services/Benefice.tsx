"use client"

import SectionTitle from '@/components/ui/SectionTitle';
import { useMobileStore } from '@/lib/stores/mobileStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';


function Benefice() {

    const { isMobile } = useMobileStore();
    const psbRef = useRef<HTMLDivElement>(null);
    const imgWrapperRef = useRef<HTMLDivElement>(null);

	
	useGSAP(() => {

		if (imgWrapperRef.current) {

			gsap.to(imgWrapperRef.current, {
				scrollTrigger: {
					trigger: psbRef.current,
					start: "top 10%",
					end: "bottom bottom",
					pin: imgWrapperRef.current
				}
			})

		}

	})

	useGSAP(() => {

		if (imgWrapperRef.current) {

			gsap.to(imgWrapperRef.current.children[1], {
				scrollTrigger: {
					trigger: psbRef.current,
					start: "5% top",
					end: "25% top",
					scrub: 1
				},
				scale: 1.05,
				yPercent: -100
			})
		}

	})

	useGSAP(() => {

		if (imgWrapperRef.current) {

			gsap.to(imgWrapperRef.current.children[2], {
				scrollTrigger: {
					trigger: psbRef.current,
					start: "30% top",
					end: "50% top",
					scrub: 1
				},
				scale: 1.05,
				yPercent: -200
			})
		}

	})

useGSAP(() => {
  if (!isMobile || !imgWrapperRef.current || !psbRef.current) return;

  const sections = gsap.utils.toArray<HTMLElement>('.psb-section');
  const images = Array.from(imgWrapperRef.current.children) as HTMLElement[];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: psbRef.current,
      start: 'top top',
      end: '+=500%', // durée totale du scroll
      scrub: true,
      pin: true, // pin le wrapper complet
    }
  });

  // Image scroll
  tl.to(images[0], { yPercent: -100, scale: 1.05 }, 0);
  tl.to(images[1], { yPercent: -100, scale: 1.05 }, 0.33);
  tl.to(images[2], { yPercent: -100, scale: 1.05 }, 0.66);

  // Section fade
  tl.to(sections[0], { opacity: 0 }, 0.2);
  tl.to(sections[1], { opacity: 1 }, 0.33);
  tl.to(sections[1], { opacity: 0 }, 0.66);
  tl.to(sections[2], { opacity: 1 }, 0.66);
});



    return (
        <section ref={psbRef} className="relative py-20 lg:py-32 bg-linear-to-b from-black via-orange-950/5 to-black">
                <div className="grid lg:grid-cols-2 justify-items-center">
				{/* Sticky Image - Left side on desktop */}
				<div ref={imgWrapperRef} className="image-wrapper w-full lg:w-[80%] lg:rounded-2xl h-svh lg:h-auto lg:aspect-square relative overflow-hidden">
					<div className="w-full h-full flex items-center justify-center text-4xl font-extrabold">
						<Image fill src={'/close-up-pest.png'} alt='' className="object-cover" />
					</div>
					<div className="w-full h-full flex items-center justify-center text-4xl font-extrabold relative">
						<div className="absolute h-5 w-375 bg-orange-600 blur-lg  -top-2 -left-5" />
		  					<Image fill src={'/piegeur.webp'} alt='' className="object-cover" />
						</div>
					<div className="w-full h-full flex items-center justify-center text-4xl font-extrabold relative">
						<div className="absolute h-5 w-375 bg-orange-600 blur-lg  -top-2 -left-5" />
		  					<Image fill src={'/security-professional.png'} alt='' className="object-cover" />
						</div>
				</div>

				{/* Content - Right side */}
				{!isMobile &&
					<div className="relative space-y-32 lg:space-y-48">
					{/* Problem */}
					<div className="absolute lg:relative min-h-[60vh] flex flex-col justify-center">
						<div className="psb-title mb-8">
						    <SectionTitle title='DES RONGEURS' span='CHEZ VOUS ?' />
						</div>
						<div className="psb-text space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Les rats et souris représentent un danger réel pour votre santé, vos biens et votre réputation :
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '💀 Risques sanitaires graves : maladies transmissibles, contamination alimentaire',
                                    '⚡ Dégâts matériels coûteux : câbles rongés, risques d\'incendie',
                                    '😱 Impact sur votre image : perte de clientèle, amendes réglementaires',
                                    '📈 Prolifération rapide : jusqu\'à 50 excréments par jour et par rongeur'
                                ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-lg text-gray-300">
                                    <span className="text-xl lg:text-2xl shrink-0">{item.split(' ')[0]}</span>
                                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                                </li>
                                ))}
                            </ul>
						</div>
					</div>

					{/* Solution */}
					<div className="absolute lg:relative min-h-[60vh] flex flex-col justify-center">
						<div className="psb-title mb-8">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                                INTERVENTION<br />
                                <span className="text-orange-500">PROFESSIONNELLE</span>
                            </h2>
						</div>
						<div className="psb-text space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Une approche méthodique et certifiée pour éliminer durablement les rongeurs :
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '🔍 Diagnostic précis : identification des espèces et zones infestées',
                                    '🎯 Plan d\'action sur-mesure : adapté à votre situation et activité',
                                    '💊 Traitement professionnel : rodenticides certifiés AMM, postes sécurisés',
                                    '📊 Suivi rigoureux : contrôles périodiques jusqu\'à éradication complète',
                                ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-lg text-gray-300">
                                    <span className="text-2xl shrink-0">{item.split(' ')[0]}</span>
                                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                                </li>
                                ))}
                            </ul>
						</div>
					</div>

					{/* Benefit */}
					<div className="absolute lg:relative min-h-[60vh] flex flex-col justify-center">
						<div className="psb-title mb-8">
						<h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
							TRANQUILLITÉ<br />
							<span className="text-green-500">GARANTIE</span>
						</h2>
						</div>
						<div className="psb-text space-y-6">
						<p className="text-xl text-gray-300 leading-relaxed">
							Retrouvez la sérénité avec une protection complète et durable :
						</p>
						<ul className="space-y-4">
							{[
                                '✅ Hygiène irréprochable : conformité sanitaire totale',
                                '💰 Économies garanties : évitez les dégâts matériels coûteux',
                                '🌱 Approche responsable : protection de l\'environnement et biodiversité',
                                '⚡ Réactivité 24/7 : intervention rapide en cas d\'urgence'
							].map((item, idx) => (
							<li key={idx} className="flex items-start gap-4 text-lg text-gray-300">
								<span className="text-2xl shrink-0">{item.split(' ')[0]}</span>
								<span>{item.substring(item.indexOf(' ') + 1)}</span>
							</li>
							))}
						</ul>
						</div>
					</div>
				</div>
				}
			</div>
		</section>

    )
}

export default Benefice