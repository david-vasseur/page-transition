"use client"

import React, { useRef } from 'react'
import SectionTitle from '../ui/SectionTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FaqElement from '../ui/FaqElement';
import { FaBug, FaClock, FaEuroSign } from 'react-icons/fa6';
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

function Faq() {

    const sectionRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".sticky-card");
        const cta = sectionRef.current?.querySelector(".faq-cta") as HTMLElement;

        const questionY = 150;
        const answerY = 300;

        gsap.set(cards, { y: 600, opacity: 0 });
        gsap.set(cta, { opacity: 0, y: 40 });

        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            },
        });

        const animatePair = (q: HTMLElement, r: HTMLElement, at: number) => {
            tl.to(q, {
            y: questionY,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            }, at);

            tl.to(r, {
            y: answerY,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            }, at + 0.1);
        };

        const fadeOutPair = (q: HTMLElement, r: HTMLElement, at: number) => {
            tl.to([q, r], {
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            }, at);
        };

        let time = 0;

        for (let i = 0; i < cards.length; i += 2) {
            const q = cards[i];
            const r = cards[i + 1];

            animatePair(q, r, time);

            if (i >= 2) {
            fadeOutPair(cards[i - 2], cards[i - 1], time);
            }

            time += 1.5;
    }

    // 🔥 Fade out dernière paire
    const lastIndex = cards.length - 2;
    fadeOutPair(cards[lastIndex], cards[lastIndex + 1], time);
    time += 0.6;

    // 🔥 Apparition finale du CTA
    tl.to(cta, {
        opacity: 1,
        y: questionY,
        duration: 1,
        ease: "power3.out",
    })
    .fromTo(
    ctaRef.current,
    { x: "-120%" },
    { x: "120%", duration: 1, ease: "power2.out" },
    "<+0.2"
    );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-black text-white text-center py-20 mb-64">
            <SectionTitle title='UNE DERNIERE' span='QESTION ?' />
            <FaqElement 
            icon={FaShieldAlt} 
            label="Est-ce dangereux pour mes enfants ou mes animaux ?" 
            />
            <FaqElement 
            label="Non. Nous utilisons uniquement des solutions professionnelles sécurisées, placées dans des dispositifs protégés, inaccessibles aux enfants et aux animaux. Votre sécurité est notre priorité absolue." 
            />

            <FaqElement 
            icon={FaCheckCircle} 
            label="Est-ce que le problème peut vraiment être éliminé définitivement ?" 
            />
            <FaqElement 
            label="Oui. Nous traitons la cause du problème (points d’entrée, nids, habitudes) pour empêcher toute réinfestation durablement." 
            />

            <FaqElement 
            icon={FaClock} 
            label="En combien de temps pouvez-vous intervenir ?" 
            />
            <FaqElement 
            label="Nous intervenons généralement sous 24 à 48 heures, avec des solutions d’urgence en cas d’infestation critique." 
            />

            <FaqElement 
            icon={FaEuroSign} 
            label="Combien ça coûte ? Y a-t-il des frais cachés ?" 
            />
            <FaqElement 
            label="Nos tarifs sont clairs et sans surprise. Un diagnostic est réalisé avant toute intervention pour vous proposer un devis précis et adapté." 
            />
           
            <div className="faq-cta flex flex-col gap-10 items-center justify-center mt-10">
                <p className="max-w-2xs text-xl font-extrabold">Une infestation n’attend pas. Appelez-nous dès maintenant.</p>
                <a  
                    href="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
                    target='_blank'
                    className='relative text-2xl shrink-0 overflow-hidden bg-linear-to-br from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold'
                >
                    Appellez nous
                    <div ref={ctaRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
                </a>
            </div>
        </section>
    )
}

export default Faq;