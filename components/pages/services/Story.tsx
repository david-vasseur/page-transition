"use client"

import { trackPhoneClick } from '@/actions/trackPhone.action';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface IListItem {
    id: string | number;
    text: string;
}

interface IStory {
    image1: string;
    altImage1: string;
    image2: string;
    altImage2: string;
    image3: string;
    altImage3: string;

    header1_1: string;
    header1_2: string;
    header2_1: string;
    header2_2: string;
    header3_1: string;
    header3_2: string;

    list1: IListItem[];
    list2: IListItem[];
    list3: IListItem[];

    cta: string;
}


function Story({
    image1,
    altImage1,
    image2,
    altImage2,
    image3,
    altImage3,
    header1_1,
    header1_2,
    header2_1,
    header2_2,
    header3_1,
    header3_2,
    list1,
    list2,
    list3,
    cta
}: IStory) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
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

        const splits = h2s.map(h2 => {
            if (!h2) return null;

            const splitWords = new SplitText(h2, {
                type: "words",
                wordsClass: "split-word"
            });

            return new SplitText(splitWords.words, {
                type: "chars",
                charsClass: "split-char"
            });
        });

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
            }, "<+=0.2")
            .fromTo(glowRef.current,
                { scale: 0, opacity: 0 },
                { scale: 2, opacity:1, duration: 0.5, ease: "back.out(1.7)"}, "<" )
            .fromTo(ctaRef.current,
                { x: "-120%" },
                { x: "120%", duration: 0.5, ease: "back.out(1.7)"}, "<");

    }, []);
    

    return (
        <section ref={sectionRef} className="h-lvh relative overflow-hidden">
            <div className="absolute inset-0 z-3">
                <div className='absolute inset-0 z-5 bg-black/60' />
                {/* Image1 */}
                <Image
                    ref={image1Ref}
                    fill
                    src={image1}
                    alt={altImage1}
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
                    src={image2}
                    alt={altImage2}
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
                    src={image3}
                    alt={altImage3}
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
                    <h2 className="content-h2 break-keep text-5xl mx-auto lg:text-7xl lg:mb-30 max-w-xl font-black text-white my-4">
                        {header1_1} <span className="text-orange-600">{header1_2}</span>
                    </h2>
                    <ul className="content-list mt-4 mx-auto w-[80%] text-sm list-disc list-inside text-white">
                        {list1.map(list => (
                            <li key={list.id} className="mt-5 lg:text-xl">{list.text}</li>
                        ))}
                    </ul>
                </div>

                {/* SOLUTION */}
                <div className="content-title text-center absolute z-2">
                    <h2 className="content-h2 break-keep text-5xl mx-auto lg:text-7xl max-w-xl font-black text-white my-4">
                        {header2_1} <span className="text-orange-600">{header2_2}</span>
                    </h2>
                    <ul className="content-list mt-4 mx-auto w-[80%] text-sm list-disc list-inside text-white">
                        {list2.map(list => (
                            <li key={list.id} className="mt-5 lg:text-xl">{list.text}</li>
                        ))}
                    </ul>
                </div>

                {/* BÉNÉFICE */}
                <div className="content-title text-center absolute z-1">
                    <h2 className="content-h2 break-keep text-5xl mx-auto lg:text-7xl max-w-xl font-black text-white my-4">
                        {header3_1} <span className="text-orange-600">{header3_2}</span>
                    </h2>
                    <ul className="content-list mt-4 mx-auto w-[80%] text-sm list-disc list-inside text-white">
                        {list3.map(list => (
                            <li key={list.id} className="mt-5 lg:text-xl">{list.text}</li>
                        ))}
                    </ul>
                </div>

                {/* CTA FINAL */}
                <div className="content-title relative flex flex-col gap-10 items-center justify-center mt-10">
                    <div ref={glowRef} className="absolute z-0 top-1/2 left-1/2 w-96 h-64 bg-orange-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <p className="max-w-2xs z-1 text-center text-xl font-extrabold">{cta}</p>
                    <a  
                        href="tel:+33658942067"
                        onClick={() => {
                            if (navigator.sendBeacon) {
                                navigator.sendBeacon("/api/track-phone");
                            } else {
                                fetch("/api/track-phone", { method: "POST", keepalive: true });
                            }
                        }}
                        className='relative z-1 text-2xl shrink-0 overflow-hidden bg-linear-to-br from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold border border-black/80 shadow-2xl shadow-black/80'
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