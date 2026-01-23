"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react'

interface ISubtitle {
    title1: string;
    title2?: string;
    span: string;
}

function SectionSubtitle({ title1, title2, span }: ISubtitle) {

    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {

        if (titleRef.current) {
            const split = new SplitText(titleRef.current, {
                type: "lines,words",
                linesClass: "split-line",
                wordsClass: "split-word",
            });
            gsap.from(split.lines, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 1
                },
                opacity: 0,
                y: 50,
                stagger: 0.1
            })
        }
    })

    return (
        <h3 ref={titleRef} className="text-3xl lg:text-5xl font-black text-white text-center mb-4">
            {title1} <span className="italic text-orange-600">{span}</span> {title2}
        </h3>
    )
}

export default SectionSubtitle