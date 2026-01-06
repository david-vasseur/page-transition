"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

function Transition() {

    useGSAP(() => {

        gsap.set(".panel-top", {
            scaleY: 0,
            transformOrigin: "top",
        });

        gsap.set(".panel-bottom", {
            scaleY: 0,
            transformOrigin: "bottom",
        });

        gsap.set(".panel-mobile", {
            scaleX: 0,
            transformOrigin: "left",
        });

        gsap.fromTo(".panel-top", 
            { scaleY: 1 },
            { scaleY: 0, duration:1,  stagger: { each: 0.1, from: "start", grid: [1, 6], axis: "x" }, ease: "expo.inOut" }
        )

        gsap.fromTo(".panel-bottom", 
            { scaleY: 1 },
            { scaleY: 0, duration:1,  stagger: { each: 0.1, from: "start", grid: [1, 6], axis: "x" }, ease: "expo.inOut" }
        )

        gsap.fromTo(".panel-mobile", 
            { scaleX: 1, transformOrigin: "right" },
            { scaleX: 0, duration: 0.8,  stagger: { each: 0.1, from: "start", grid: [1, 6], axis: "x" }, ease: "expo.inOut" }
        )

    })

    return (
        <>
            <div className="fixed hidden lg:grid h-svh w-svw grid-rows-2 z-15 pointer-events-none">
                <div className="grid grid-cols-6">
                    {[...Array(6)].map((_, i) => (
                        <div 
                            key={i} 
                            className="panel-top bg-size-[100%_auto] bg-bottom bg-no-repeat" 
                            style={{
                                backgroundImage: `url(/assets/gvs-transition-${i + 1}.jpg)`,
                            }}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-6">
                    {[...Array(6)].map((_, i) => (
                        <div 
                            key={i} 
                            className="panel-bottom bg-size-[100%_auto] bg-top bg-no-repeat"
                            style={{
                                backgroundImage: `url(/assets/gvs-transition-${i + 7}.jpg)`,
                            }}
                        />
                    ))}
                </div>        
            </div>
            <div className="fixed grid lg:hidden h-svh w-svw grid-rows-6 z-15 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div 
                        key={i} 
                        className="panel-mobile w-full"
                        style={{
                            height: `${100 / 6}vh`,
                            backgroundImage: `url(/assets/gvs-transition-mobile-${i + 1}.jpg)`,
                            backgroundSize: "100% 100%", 
                            backgroundPosition: "center",
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default Transition;