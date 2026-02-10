"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';

interface ITitle {
    title: string;
    span: string;
    big: boolean;
}

function SectionTitle({ title, span, big=true }: ITitle) {

    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {

        if (titleRef.current) {

            const splitWords = new SplitText(titleRef.current, {
                type: "words",
                wordsClass: "split-word"
            })

            const split = new SplitText(splitWords.words, {
                type: "chars",
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
            className={`${big ? "text-5xl lg:text-7xl" : "text-4xl lg:text-6xl"} mx-auto max-w-xl font-black text-white my-4`}
        >
            {title} <span className="text-orange-600">{span}</span>
        </h2>
    )
}

export default SectionTitle;