"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import IReview from '@/type/review';
import SectionTitle from '../ui/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Forward from '../ui/Forward';

const Testimonials = ({ reviews }: { reviews: IReview[] }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (linkRef.current) {
            gsap.from(linkRef.current, {
                scrollTrigger: {
                    trigger: linkRef.current,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: 1
                },
                opacity: 0,
                scale: 0.8
            })
        }

    })

    useGSAP(() => {

        if (glowRef.current) {
            gsap.to(glowRef.current, {
                scrollTrigger: {
                    trigger: glowRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1,
                },
                x: "100%",
            });
        }

    });

	useEffect(() => {
		const timer = setInterval(() => {
		setCurrentSlide((prev) => (prev + 1) % reviews.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [reviews.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % reviews.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
	};

	const slideVariants = {
		enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0,
		scale: 0.8
		}),
		center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
		scale: 1
		},
		exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 1000 : -1000,
		opacity: 0,
		scale: 0.8
		})
	};

	const [direction, setDirection] = useState(0);

	const paginate = (newDirection: number) => {
		setDirection(newDirection);
		if (newDirection === 1) {
		nextSlide();
		} else {
		prevSlide();
		}
	};

	return (
		<>
            <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                    
                    <SectionTitle title="CE QUE NOS" span="CLIENTS DISENT" />
                    
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Avis authentiques de clients satisfaits qui nous ont fait confiance pour leurs besoins en lutte contre les nuisibles.
                    </p>
                    </motion.div>

                    {/* Testimonials Slider */}
                    <motion.div 
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    >
                    <div className="overflow-hidden rounded-2xl relative h-[500px]">
                        <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentSlide}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.4 }
                            }}
                            className="absolute inset-0"
                        >
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 border border-gray-700 h-full flex flex-col rounded-2xl justify-center">
                                {/* Quote Icon */}
                                <motion.div 
                                className="flex justify-center mb-6"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                                >
                                <motion.div 
                                    className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center"
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Quote className="w-8 h-8 text-orange-500" />
                                </motion.div>
                                </motion.div>

                                {/* Rating */}
                                <motion.div 
                                className="flex justify-center mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                {[...Array(reviews[currentSlide].rating)].map((_, i) => (
                                    <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                                    >
                                    <Star className="w-6 h-6 text-orange-500 fill-current" />
                                    </motion.div>
                                ))}
                                </motion.div>

                                {/* Testimonial Text */}
                                <motion.blockquote 
                                    className="text-sm lg:text-2xl px-8 text-white text-center mb-8 font-light line-clamp-10 lg:line-clamp-none"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    {reviews[currentSlide].text}
                                </motion.blockquote>

                                {/* Client Info */}
                                <motion.div 
                                className="flex items-center justify-center space-x-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                <motion.img 
                                    src={reviews[currentSlide].profile_photo_url} 
                                    alt={reviews[currentSlide].author_name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <div className="text-center">
                                    <p className="text-white font-semibold text-lg">{reviews[currentSlide].author_name}</p>
                                    {/* <p className="text-gray-300">{testimonials[currentSlide].role}</p>
                                    <p className="text-orange-500 text-sm">{testimonials[currentSlide].location}</p> */}
                                </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <motion.button 
                        aria-label='Avis précédent'
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600/40 border border-orange-600/30 text-white p-3 rounded-full transition-all duration-300 z-10"
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button 
                        aria-label='Avis suivant'
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600/40 border border-orange-600/30 text-white p-3 rounded-full transition-all duration-300 z-10"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                    {reviews.map((_, index) => (
                        <motion.button
                        aria-label='Aller directement sur un avis'
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <motion.div
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-orange-600' : 'bg-gray-600'
                            }`}
                            animate={{
                            width: index === currentSlide ? 32 : 12,
                            backgroundColor: index === currentSlide ? '#FF6600' : '#6B7280',
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        </motion.button>
                    ))}
                    </div>
                    </motion.div>

                    {/* All google business reviews link */}

                    <div className='flex items-center justify-center mt-10'>
                        <a  
                            ref={linkRef}
                            href="https://www.google.com/search?uds=AOm0WdE2fekQnsyfYEw8JPYozOKzEik-2elEKZuoMX0RuNnOO2GDIgxodzVnOQyNKeXlFnJ-YKUC7TE4kLm3vqIQWIc_K9GQmAyeD4qnUuL2lsL3durM3BCd536avOHSG36vM61mkI3D&q=G.V.S.3D%20Avis&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1JhB0J4OEHu0ExSh8WjvsFDX7W-B4bHUGXrldG4Knsut4hAo43-Re3diVTedAjKfiP_Q40r0ulfUf0zCEy5Boez_ebk&cs=1&hl=fr&sa=X&ved=0CCgQ_4MLahcKEwj4yqq4x_2OAxUAAAAAHQAAAAAQBg&biw=2552&bih=1314&dpr=1"
                            target='_blank'
                            className='relative overflow-hidden bg-linear-to-br from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold'
                        >
                            Voir plus d&apos;avis
                            <div ref={glowRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 text-center">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { number: '500+', label: 'Clients satisfaits' },
                                { number: '98%', label: 'Taux de réussite' },
                                { number: '24/7', label: 'Support' },
                                { number: '5★', label: 'Note moyenne' }
                            ].map((stat, index) => (
                                <Forward 
                                    key={index}
                                    label={stat.label}
                                    title={stat.number}
                                    textColor="text-orange-500"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
		</>
	);
};

export default Testimonials;