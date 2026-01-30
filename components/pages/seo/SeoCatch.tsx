"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'
import SectionTitle from '../../ui/SectionTitle'
import ProofHeader from '../../features/ProofHeader'
import { ArrowRight } from 'lucide-react'
import TransitionLink from '../../ui/transitionLink'
import SeoHeader from './SeoHeader'
import SeoHightlight from './SeoHightlight'

interface SeoCatchTemplateProps {
	city: string
	service: string
	heroTitle: string
	heroTitle1: string
	heroTitle2: string
	heroSubtitle: string
	heroImage: string
	history: string
	proofImages: string[]
	ctaLink: string
}

export default function SeoCatchTemplate({
	city,
	service,
	heroTitle,
	heroTitle1,
	heroTitle2,
	heroSubtitle,
	heroImage,
	history,
	proofImages,
	ctaLink,
}: SeoCatchTemplateProps) {
  	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<main ref={sectionRef} className="relative text-white">
			{/* HERO */}
			
			<SeoHeader heroImage={heroImage} heroTitle={heroTitle} heroSubtitle={heroSubtitle} heroTitle1={heroTitle1} heroTitle2={heroTitle2} />

			{/* POINTS FORTS */}
			<section className="px-6 py-16 max-w-6xl mx-auto text-center">
				<ProofHeader />
				<SectionTitle title="Pourquoi choisir notre service de" span={service} />
				<SeoHightlight />
			</section>

			{/* HISTORIQUE / CONFIANCE */}
			<section className="relative px-6 py-20 bg-zinc-950">
				<div className="max-w-4xl mx-auto text-center">
					<SectionTitle title='Une expertise locale reconnue à' span={city} />
					<p className="text-gray-300 text-lg leading-relaxed">{history}</p>

					<div className="mt-10 flex justify-center">
						<a
							href={ctaLink}
							className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition"
						>
						🔎 Diagnostic gratuit
						</a>
					</div>
				</div>
			</section>

			{/* PREUVES EN IMAGE */}
			<section className="px-6 py-20 max-w-6xl mx-auto text-center">
				<SectionTitle title='Nos interventions' span='en images' />

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{proofImages.map((img, index) => (
					<div
					key={index}
					className="relative aspect-square overflow-hidden rounded-xl bg-zinc-800 seo-card"
					>
					<Image
						src={img}
						alt=""
						fill
						className="object-cover"
					/>
					</div>
				))}
				</div>
			</section>

			{/* CTA FINAL */}
			<section className="relative px-6 py-24 bg-linear-to-br from-orange-600 to-red-600 text-white text-center">
				<h2 className="text-3xl sm:text-4xl font-black max-w-3xl mx-auto">
					Une infestation n’attend pas. Agissez maintenant.
				</h2>
				<p className="mt-4 text-lg max-w-xl mx-auto">
					Nous intervenons rapidement à {city} pour vous débarrasser durablement des nuisibles.
				</p>

				<a
					href="tel:+33658942067"
					className="mt-10 inline-flex items-center gap-3 bg-black px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition"
				>
				📞 Appelez-nous maintenant
				</a>
			</section>
		</main>
	)
}
