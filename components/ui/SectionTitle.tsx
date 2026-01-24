"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';

interface ITitle {
    title: string;
    span: string;
}

function SectionTitle({ title, span }: ITitle) {

    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {

        if (titleRef.current) {
            const split = new SplitText(titleRef.current, {
                type: "chars,words",
                charsClass: "split-char"
            });

            gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                },
                opacity: 0,
                y: 50,
                rotationX: -90,
                stagger: 0.02,
                ease: "back.out(1.7)",
            });
        }

    })

    return (
        <h2 
            ref={titleRef}
            className="text-5xl mx-auto lg:text-7xl max-w-xl font-black text-white my-4"
        >
            {title} <span className="text-orange-600">{span}</span>
        </h2>
    )
}

export default SectionTitle;