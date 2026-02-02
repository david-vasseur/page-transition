"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef, useState } from 'react'

function Story() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const image1Ref = useRef<HTMLImageElement>(null);


    const [i1_test, setI1_test] = useState(50);
    const [i1_test1, setI1_test1] = useState(50);
    const [i1_test2, setI1_test2] = useState(50);
    const [i1_test3, setI1_test3] = useState(50);
    const [i1_angle, setI1_angle] = useState(90);

    // Image2 states
    const [i2_test, setI2_test] = useState(50);
    const [i2_test1, setI2_test1] = useState(50);
    const [i2_test2, setI2_test2] = useState(50);
    const [i2_test3, setI2_test3] = useState(50);
    const [i2_angle, setI2_angle] = useState(90);

    // Image3 states
    const [i3_test, setI3_test] = useState(50);
    const [i3_test1, setI3_test1] = useState(50);
    const [i3_test2, setI3_test2] = useState(50);
    const [i3_test3, setI3_test3] = useState(50);
    const [i3_angle, setI3_angle] = useState(90);

    useGSAP(() => {
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

        const title = gsap.utils.toArray(".content-title") as HTMLElement[];
        if (title.length > 2) {
            gsap.set(title[1], { opacity: 0, y: 300 }); 
            gsap.set(title[2], { opacity: 0, y: 300 }); 
            gsap.set(title[3], { opacity: 0, y: 300 }); 
        }

        const h2s = title.map(block => block.querySelector(".content-h2") as HTMLElement);
        const lists = title.map(block => block.querySelectorAll(".content-list li"));

        const splits = h2s.map(h2 =>
            h2  
            ? new SplitText(h2, {
                type: "chars,words",
                charsClass: "split-char",
                })
            : null
        );

        // États initiaux
        splits.forEach((split, index) => {
            if (split) {
            gsap.set(split.chars, { opacity: 0, y: 50, rotationX: -90 });
            }
        });
        lists.forEach(list => {
                gsap.set(list, { opacity: 0, y: 30 });
        });

        // ANimation premiere card

        gsap.to(splits[0]?.chars || [], {
            opacity: 1, y: 0, rotationX: 0,
            stagger: 0.1,
            ease: "back.out(1.7)",
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 50%",
                end: "top 10%",
                scrub: 1
            }
        });

        gsap.to(lists[0], {
            opacity: 1, y: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 30%",
                end: "top 10%",
                scrub: 1,
            }
        });


        // 🔥 Étape 1 → Image 1
        tl.to({}, {
            duration: 1 / 3,
            onUpdate: function () {
            const p = this.progress();
            const newTest = 50 - p * 50;
            const newTest3 = 50 + p * 50;
            setI1_test(newTest);
            setI1_test1(newTest);
            setI1_test2(newTest3);
            setI1_test3(newTest3);
            setI1_angle(90 + p * 30);
            }
        });

        tl.to(title[0], { opacity: 0, yPercent: -20, scale: 0.5, duration: 0.1 }, "<")
            .to(title[1], { opacity: 1, y: 0, duration: 0.1 }, "<+=0.1")
            .to(splits[1]?.chars || [], {
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.02,
            ease: "back.out(1.7)",
            duration: 0.1,
            }, "<")
            .to(lists[1], {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.2,
            ease: "power2.out",
            }, "<+=0.2");

        // 🔥 Étape 2 → Image 2
        tl.to({}, {
            duration: 1 / 3,
            onUpdate: function () {
            const p = this.progress();
            const newTest = 50 - p * 50;
            const newTest3 = 50 + p * 50;
            setI2_test(newTest);
            setI2_test1(newTest);
            setI2_test2(newTest3);
            setI2_test3(newTest3);
            setI2_angle(90 + p * 30);
            }
        });

        tl.to(title[1], { opacity: 0, yPercent: -20, scale: 0.5, duration: 0.1 }, "<")
            .to(title[2], { opacity: 1, y: 0, duration: 0.1 }, "<+=0.1")
            .to(splits[2]?.chars || [], {
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.02,
            ease: "back.out(1.7)",
            duration: 0.1,
            }, "<")
            .to(lists[2], {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.2,
            ease: "power2.out",
            }, "<+=0.2");

        // 🔥 Étape 3 → Image 3
        tl.to({}, {
            duration: 1 / 3,
            onUpdate: function () {
            const p = this.progress();
            const newTest = 50 - p * 50;
            const newTest3 = 50 + p * 50;
            setI3_test(newTest);
            setI3_test1(newTest);
            setI3_test2(newTest3);
            setI3_test3(newTest3);
            setI3_angle(90 + p * 30);
            }
        });

        tl.to(title[2], { opacity: 0, yPercent: -20, scale: 0.5, duration: 0.1 }, "<")
            .to(title[3], { opacity: 1, y: 0, duration: 0.1 }, "<+=0.1")
            .to(splits[3]?.chars || [], {
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.02,
            ease: "back.out(1.7)",
            duration: 0.1,
            }, "<")
            .to(lists[3], {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.2,
            ease: "power2.out",
            }, "<+=0.2");

    }, []);



  useGSAP(() => {

    gsap.fromTo(ctaRef.current,
        { x: "-120%" },
        { x: "120%", scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1
        } }
    );

  })

    

    return (
        <section ref={sectionRef} className="h-lvh relative">
            <div className="absolute inset-0 z-3">
                <div className='absolute inset-0 z-5 bg-black/60' />
                {/* Image1 */}
                <Image
                    ref={image1Ref}
                    fill
                    src="/infestation-dark.png"
                    alt="gg"
                    className="z-3 object-cover"
                    style={{
                    maskImage: `linear-gradient(${i1_angle}deg, black 0%, black ${i1_test}%, transparent ${i1_test1}%, transparent ${i1_test2}%, black ${i1_test3}%, black 100%)`,
                    WebkitMaskImage: `linear-gradient(${i1_angle}deg, black 0%, black ${i1_test}%, transparent ${i1_test1}%, transparent ${i1_test2}%, black ${i1_test3}%, black 100%)`,
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                    }}
                />

                {/* Image2 */}
                <Image
                    fill
                    src="/close-up-pest.png"
                    alt="gg"
                    className="z-2 object-cover"
                    style={{
                    maskImage: `linear-gradient(${i2_angle}deg, black 0%, black ${i2_test}%, transparent ${i2_test1}%, transparent ${i2_test2}%, black ${i2_test3}%, black 100%)`,
                    WebkitMaskImage: `linear-gradient(${i2_angle}deg, black 0%, black ${i2_test}%, transparent ${i2_test1}%, transparent ${i2_test2}%, black ${i2_test3}%, black 100%)`,
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                    }}
                />

                {/* Image3 */}
                <Image
                    fill
                    src="/security-professional.png"
                    alt="gg"
                    className="z-1 object-cover"
                    style={{
                    maskImage: `linear-gradient(${i3_angle}deg, black 0%, black ${i3_test}%, transparent ${i3_test1}%, transparent ${i3_test2}%, black ${i3_test3}%, black 100%)`,
                    WebkitMaskImage: `linear-gradient(${i3_angle}deg, black 0%, black ${i3_test}%, transparent ${i3_test1}%, transparent ${i3_test2}%, black ${i3_test3}%, black 100%)`,
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                    }}
                />
            </div>
            <div className="content absolute flex items-center justify-center text-4xl font-black inset-0 z-3 space-y-16">
                {/* PROBLÈME */}
                <div className="content-title absolute text-center z-3">
                    <h2 className="content-h2 text-5xl mx-auto lg:text-7xl max-w-xl font-black text-white my-4">
                        Contaminations <span className="text-orange-600">et germes</span>
                    </h2>
                    <ul className="content-list mt-4 mx-auto w-[80%] text-sm list-disc list-inside text-white">
                        <li className="mt-5">Présence de bactéries, virus ou champignons sur vos surfaces</li>
                        <li className="mt-5">Risque pour la santé des employés et clients</li>
                        <li className="mt-5">Impact sur l’hygiène et l’image de l’entreprise</li>
                    </ul>
                </div>

                {/* SOLUTION */}
                <div className="content-title text-center absolute z-2">
                    <h2 className="content-h2 text-5xl mx-auto lg:text-7xl max-w-xl font-black text-white my-4">
                        Désinfection <span className="text-orange-600">professionnelle</span>
                    </h2>
                    <ul className="content-list mt-4 mx-auto w-[80%] text-sm list-disc list-inside text-white">
                        <li className="mt-5">Intervention rapide par des experts certifiés en hygiène</li>
                        <li className="mt-5">Utilisation de produits et protocoles conformes aux normes</li>
                        <li className="mt-5">Nettoyage et désinfection complète des locaux et surfaces</li>
                    </ul>
                </div>

                {/* BÉNÉFICE */}
                <div className="content-title text-center absolute z-1">
                    <h2 className="content-h2 text-5xl mx-auto lg:text-7xl max-w-xl font-black text-white my-4">
                        Locaux propres <span className="text-orange-600">et sécurisés</span>
                    </h2>
                    <ul className="content-list mt-4 mx-auto w-[80%] text-sm list-disc list-inside text-white">
                        <li className="mt-5">Environnement de travail sain pour vos collaborateurs</li>
                        <li className="mt-5">Réduction des risques sanitaires et absence de contamination</li>
                        <li className="mt-5">Confiance renforcée des clients et employés</li>
                    </ul>
                </div>

                {/* CTA FINAL */}
                <div className="content-title flex flex-col gap-10 items-center justify-center mt-10">
                    <p className="max-w-2xs text-center text-xl font-extrabold">Une infestation n’attend pas. Appelez-nous dès maintenant.</p>
                    <a  
                        href="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
                        target='_blank'
                        className='relative text-2xl shrink-0 overflow-hidden bg-linear-to-br from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold'
                    >
                        Appellez nous
                        <div ref={ctaRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Story;