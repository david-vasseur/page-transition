"use client"

import TransitionLink from "@/components/ui/transitionLink"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

interface IHeroSeo {
    heroTitle: string
	heroTitle1: string
	heroTitle2: string
	heroSubtitle: string
	heroImage: string
}

function SeoHeader({ heroImage, heroSubtitle, heroTitle, heroTitle1, heroTitle2 }: IHeroSeo) {

    const actionRef = useRef<HTMLDivElement>(null);
  	const arrowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

		if (actionRef.current) {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.from(".hero-title span", { y: 30, opacity: 0, stagger: 0.2 })
				.from(".hero-desc", { y: 20, opacity: 0 }, "-=0.2")
				.from(actionRef.current?.children, { y: 30, opacity: 0, stagger: 0.2 }, "-=0.2");
		}

		gsap.to(arrowRef.current, {
            x: 5,
            repeat: -1,
            yoyo: true,
            duration: 0.8,
            ease: "power1.inOut",
            });

	})

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-20">
            <div className="absolute inset-0 -z-1">
                <Image
                    src={heroImage}
                    alt=""
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/30 via-black/80 to-black/30" />
            </div>

            {/* <h1 className="text-4xl sm:text-5xl font-black leading-tight max-w-3xl">
                {heroTitle}
            </h1> */}
            <h1 className="hero-title text-[2.6rem] xl:text-6xl 2xl:text-7xl font-black text-white mb-6 leading-tight">
                <span className="block text-orange-600 scale-110">{heroTitle}</span>
                <span className="inline-block text-orange-600 relative">
                    {heroTitle1}
                </span>
                <span className="block mt-2">
                    {heroTitle2}
                </span>
            </h1>
            <p className="hero-desc mt-6 text-lg sm:text-xl text-gray-300 max-w-xl">
                {heroSubtitle}
            </p>

            <div ref={actionRef} className="hero-actions flex flex-col sm:flex-row gap-4 mt-10">
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

                <TransitionLink
                    href="/"
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-base 2xl:text-lg text-center"
                >
                    En savoir plus
                </TransitionLink>
            </div>
        </section>
    )
}

export default SeoHeader