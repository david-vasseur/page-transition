"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';

function Error() {

    const titleRef = useRef(null);
    const linkRef = useRef(null);

    useGSAP(() => {

        if (!titleRef && !linkRef) return;

        gsap.from(titleRef.current, {
            scale: 0,
            duration: .4,
            yoyo: true
        });

        gsap.from(linkRef.current, {
            yPercent: 100,
            duration: .4,
            yoyoEase: true
        })

    })

    return (
        <div className="min-h-svh flex flex-col gap-15 items-center justify-center">
            <h1 ref={titleRef} className="text-4xl font-extrabold">Cette page n'existe pas...</h1>
            <Link ref={linkRef} href={"/"}>Retour à l'accueil</Link>
        </div>
    )
}

export default Error