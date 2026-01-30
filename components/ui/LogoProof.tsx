"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import TransitionLink from './transitionLink';

interface ILogo {
    index: number;
    image: string;
    name: string;
    alt: string;
    href: string;
}

function LogoProof({ index, image, name, alt, href="#" }: ILogo) {

    const logoRef = useRef<HTMLAnchorElement>(null);

    useGSAP(() => {

        if (logoRef.current) {

            const xOffset = index % 2 === 0 ? -50 : 50;
            
            gsap.from(logoRef.current, {
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "top 90%",
                    end: "top 70%",
                    scrub: 1,
                },
                scale: 0.7,
                opacity: 0,
                yPercent: 50,
                xPercent: xOffset,
                ease: "power2.in"
            });
        }

    })

    return (
        <TransitionLink
            href={href}
            key={index}
            className="group relative w-30 cursor-pointer"
            ref={logoRef}
        >
            <div className="relative aspect-square backdrop-blur-sm rounded-2xl p-6 hover:border-orange-600/50 transition-all duration-500 hover:scale-110 pointer-events-none">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 rounded-2xl transition-all duration-500 blur-xl pointer-events-none" />
                <Image
                    width={160}
                    height={160}
                    src={image}
                    alt={alt}
                    className="absolute opacity-25 rounded-2xl inset-0 group-hover:opacity-10 transition-all duration-500 grayscale-75"
                />

                <div className="relative flex flex-col items-center gap-3 pointer-events-none">
                    <p className="text-orange-600 group-hover:text-gray-200 font-bold uppercase text-xs text-center transition-colors duration-300">
                        {name}
                    </p>
                </div>
            </div>
        </TransitionLink>
    )
}

export default LogoProof;