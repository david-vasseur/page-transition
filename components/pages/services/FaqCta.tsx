"use client"

import { EstimateForm } from '@/components/form/EstimateForm';
import { useModalStore } from '@/lib/stores/modalStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, Phone, Mail, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface IFaqItem {
    id: string | number;
    question: string;
    answer: string;
}

interface IFaqCta {
    faqTitle: string;
    faqHighlight: string;
    faqs: IFaqItem[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButtonText: string;
    ctaButtonLink: string;
    phone: string;
    email?: string;
    address?: string;
}

function FaqCta({
    faqTitle,
    faqHighlight,
    faqs,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink,
    phone,
    email,
    address
}: IFaqCta) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const faqTitleRef = useRef<HTMLHeadingElement>(null);
    const ctaTitleRef = useRef<HTMLHeadingElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const [openFaq, setOpenFaq] = useState<string | number | null>(null);

    const { openModal } = useModalStore();

    useGSAP(() => {
        const faqTitleChars = gsap.utils.toArray<HTMLElement>(".faq-title-char");
        const faqItems = gsap.utils.toArray<HTMLElement>(".faq-item");
        const ctaTitleWords = gsap.utils.toArray<HTMLElement>(".cta-title-word");
        const ctaButtons = gsap.utils.toArray<HTMLElement>(".cta-button");
        const ctaContacts = gsap.utils.toArray<HTMLElement>(".cta-contact");

        // Animation FAQ title
        gsap.fromTo(faqTitleChars,
            { opacity: 0, y: 60, rotationX: -90 },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                stagger: 0.02,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: faqTitleRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                }
            }
        );

        // Animation FAQ items
        faqItems.forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, x: i % 2 === 0 ? -60 : 60, rotationY: i % 2 === 0 ? -10 : 10 },
                {
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        end: "top 65%",
                        scrub: 1,
                    }
                }
            );
        });

        // Animation CTA title
        gsap.fromTo(ctaTitleWords,
            { opacity: 0, y: 80, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.05,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: ctaTitleRef.current,
                    start: "top 85%",
                    end: "top 55%",
                    scrub: 1,
                }
            }
        );

        // Animation CTA buttons
        ctaButtons.forEach((button, i) => {
            gsap.fromTo(button,
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: button,
                        start: "top 90%",
                        end: "top 70%",
                        scrub: 1,
                    }
                }
            );
        });

        // Animation CTA contacts
        ctaContacts.forEach((contact, i) => {
            gsap.fromTo(contact,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contact,
                        start: "top 90%",
                        end: "top 70%",
                        scrub: 1,
                    }
                }
            );
        });

        // Shine effect on CTA
        gsap.fromTo(".cta-shine",
            { x: "-120%" },
            {
                x: "120%",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: 1,
                }
            }
        );

    }, { scope: sectionRef });

    const toggleFaq = (id: string | number) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-gray-950 to-black" />
            
            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* FAQ Section */}
                <div className="mb-20 lg:mb-32">
                    <h2 ref={faqTitleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-center text-white mb-12 lg:mb-16">
                        {faqTitle.split('').map((char, i) => (
                            <span key={i} className="faq-title-char inline-block">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                        {' '}
                        <span className="text-orange-600 whitespace-nowrap">
                            {faqHighlight.split('').map((char, i) => (
                                <span key={i} className="faq-title-char inline-block">
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </span>
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq) => {
                            const isOpen = openFaq === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className="faq-item group"
                                >
                                    <div className="bg-linear-to-r from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-600/50 transition-all duration-300">
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-base sm:text-lg font-bold text-white pr-8 leading-relaxed">
                                                {faq.question}
                                            </span>
                                            <div className="shrink-0 w-8 h-8 bg-orange-600/10 rounded-lg flex items-center justify-center group-hover:bg-orange-600/20 transition-all duration-300">
                                                {isOpen ? (
                                                    <Minus className="w-5 h-5 text-orange-600" />
                                                ) : (
                                                    <Plus className="w-5 h-5 text-orange-600" />
                                                )}
                                            </div>
                                        </button>
                                        
                                        <div
                                            className={`transition-all duration-300 ease-in-out ${
                                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="px-6 pb-6 text-sm sm:text-base text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div ref={ctaRef} className="relative">
                    <div className="bg-linear-to-br from-orange-600/10 via-black to-orange-700/10 border-2 border-orange-600/30 rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl" />
                        
                        <div className="relative z-10">
                            <h2 ref={ctaTitleRef} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                                {ctaTitle.split(' ').map((word, i) => (
                                    <span key={i} className="cta-title-word inline-block mr-3">
                                        {word}
                                    </span>
                                ))}
                            </h2>
                            
                            <p className="text-base sm:text-lg text-gray-300 mb-8 lg:mb-12 max-w-2xl mx-auto">
                                {ctaSubtitle}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 lg:mb-12">
                                <div
                                    onClick={() => openModal(<EstimateForm />)}
                                    className="cta-button cursor-pointer relative group bg-linear-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-bold text-base 2xl:text-lg flex items-center justify-center overflow-hidden"
                                >
                                    <span className="relative z-10">{ctaButtonText}</span>
                                    <div className="cta-shine absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full" />
                                </div>
                                
                                <a
                                    href={`tel:${phone.replace(/\s/g, '')}`}
                                    className="cta-button border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-full font-bold text-base 2xl:text-lg flex items-center justify-center gap-2 transition-all duration-300"
                                >
                                    <Phone className="w-5 h-5" />
                                    {phone}
                                </a>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                                {email && (
                                    <div className="cta-contact flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-orange-600" />
                                        <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                                            {email}
                                        </a>
                                    </div>
                                )}
                                {address && (
                                    <div className="cta-contact flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-orange-600" />
                                        <span>{address}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqCta;
