"use client"

import React, { useEffect } from 'react'
import Transition from './components/pages/Transition'
import { useMobileStore } from './lib/stores/mobileStore';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import Footer from './components/layout/Footer';

gsap.registerPlugin(ScrollTrigger, SplitText);

function template({ children }: {children: React.ReactNode}) {

    const { setIsMobile } = useMobileStore();

    useEffect(() => {
        const update = () =>
            setIsMobile(window.innerWidth < 1024);

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <div>
            <Transition />
            {children}
            <Footer />
        </div>
    )
}

export default template;