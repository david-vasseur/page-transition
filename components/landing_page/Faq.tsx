"use client"

import React, { useRef } from 'react'
import SectionTitle from '../ui/SectionTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Faq() {

    const sectionRef = useRef<HTMLDivElement>(null);
    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const stickys = document.querySelectorAll(".sticky-card");

        stickys.forEach((card, index) => {

            // ---- PINNING ----
            if (index < stickys.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 10%",
                    endTrigger: stickys[index + 1],
                    end: "top 10%",
                    scrub: 2,
                    pin: true,
                    pinSpacing: false
                });
            }
        });
    }, { scope: sectionRef });


    return (
        <section ref={sectionRef} className="relative bg-black text-white text-center mb-20 py-20">
            <SectionTitle title='LES DENIERES' span='QESTIONS ?' />
            
            <div ref={firstRef} className="relative sticky-card mt-20 z-2 bg-red-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
            <div ref={secondRef} className="relative sticky-card z-3 bg-orange-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
            <div ref={thirdRef} className="relative sticky-card z-4 bg-green-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
            <div  className="relative sticky-card z-5 bg-blue-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
            <div  className="relative sticky-card z-6 bg-gray-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
            <div  className="relative sticky-card z-7 bg-pink-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
            <div  className="relative sticky-card z-8 bg-yellow-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
            <div  className="relative sticky-card z-9 bg-zinc-500 h-24 w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ipsum consectetur, aut veritatis totam quae soluta, nihil quas porro, tenetur vero? Nam excepturi reiciendis beatae blanditiis nihil repellat numquam nobis.</p>
            </div>
           
            <div className='flex items-center justify-center h-64 mt-10'>
                <a  
                    href="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
                    target='_blank'
                    className='relative overflow-hidden bg-linear-to-br from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold'
                >
                    Voir plus d&apos;avis
                    <div  className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
                </a>
            </div>
        </section>
    )
}

export default Faq