"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useRef, useState } from 'react'

function page() {


    const sectionRef = useRef<HTMLDivElement>(null);
    // const [test, setTest] = useState(50);
    // console.log(test);
    
    // const [test3, setTest3] = useState(50);
    // console.log(test3);
    
    // const [test1, setTest1] = useState(test === 50 ? test : test + 0.1);
    // const [test2, setTest2] = useState(test3 === 50 ? test3 : test3 - 0.1);

    // const [test4, setTest4] = useState(90);

    // function incr()  {
    //     setTest(test - 1);
    //     setTest3(test3 + 1);
    //     setTest1(test1 - 1);
    //     setTest2(test2 + 1 )
    //     console.log("clicked");

    //     if(test <= 45) {
    //         setTest4(test4 + 1)
    //     }   
    // }

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
        end: "+=400%", 
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    const title = gsap.utils.toArray(".content-title") as HTMLElement[];
    if (title.length > 2) {
        gsap.set(title[1], {opacity: 0, y: 100}); 
        gsap.set(title[2], {opacity: 0, y: 100}); 
    }
       

    // Etape 1 → Image1
    tl.to({}, {
      duration: 1/3,
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
    tl.to(title[0], { opacity: 0, yPercent: -150, scale: 0.5, duration: 0.1 }, "<")
        .to(title[1], { opacity: 1, y: 0, duration: 0.1 }, "<+=0.1")

    // Etape 2 → Image2
    tl.to({}, {
      duration: 1/3,
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
    tl.to(title[1], { opacity: 0, yPercent: -150, scale: 0.5, duration: 0.1 }, "<")
        .to(title[2], { opacity: 1, y: 0, duration: 0.1 }, "<+=0.1")

    // Etape 3 → Image3
    tl.to({}, {
      duration: 1/3,
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

  }, []);
    

    return (
        <div>
            <section className="h-dvh bg-red-400 flex items-center justify-center text-5xl font-black">HERO</section>
            <section ref={sectionRef} className="h-lvh relative">
                <div className="absolute inset-0 z-3">
                    {/* Image1 */}
                    <Image
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
                <div className="content absolute flex items-center justify-center text-4xl font-black inset-0 z-3">
                    <h2 className="content-title absolute z-3">PROBLEME</h2>
                    <h2 className="content-title absolute z-2">SOLUTION</h2>
                    <h2 className="content-title absolute z-1">BENEFICE</h2>
                </div>
            </section>
            <section className="h-dvh bg-red-400 flex items-center justify-center text-5xl font-black">END</section>
        </div>
    )
}

export default page;