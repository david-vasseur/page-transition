"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaCheckCircle, FaClock, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa"

function SeoHightlight() {

    const highlights = [
        { icon: FaShieldAlt, title: "Sécurisé", text: "Produits professionnels sans danger pour votre famille." },
        { icon: FaClock, title: "Rapide", text: "Intervention sous 24 à 48h, urgences possibles." },
        { icon: FaCheckCircle, title: "Efficace", text: "Traitement durable, prévention des récidives." },
        { icon: FaMapMarkerAlt, title: "Local", text: "Entreprise basée près de chez vous." },
    ];

    useGSAP(() => {
		const cards = gsap.utils.toArray<HTMLElement>('.seo-card')

		gsap.from(cards, {
			opacity: 0,
			y: 80,
			stagger: 0.2,
			scrollTrigger: {
				trigger: cards,
				start: 'top 75%',
				end: "top 40%",
				scrub: 1
			},
			ease: 'power3.out',
		})
	})

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {highlights.map((item, index) => (
                <div
                    key={index}
                    className="seo-card bg-zinc-900 rounded-2xl p-6 text-center shadow-xl"
                >
                    <div className="text-orange-500 text-4xl mb-4 mx-auto">
                        <item.icon />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default SeoHightlight