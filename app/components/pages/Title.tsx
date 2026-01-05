"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


function Title({ slug }: { slug: string }) {

    const titleRef = useRef(null);

    useGSAP(() => {
        
        if (!titleRef) return;

        gsap.from(titleRef.current, {
            scale: 0,
            duration: .4,
            yoyo: true
        })

    })

    return (
        <div className="min-h-svh bg-gray-800  flex items-center justify-center">
            <h1 ref={titleRef} className="text-4xl font-extrabold">Bienvenue sur la page {slug}</h1>
        </div>
    )
}

export default Title;