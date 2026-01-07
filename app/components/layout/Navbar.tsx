"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import TransitionLink from '../ui/transitionLink';
import { serviceItems } from '@/app/data/navItems';
import { useModalStore } from '@/app/lib/stores/modalStore';
import Logo from '../ui/Logo';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false); 
	const [isScrolled, setIsScrolled] = useState(false);
	const [isServiceOpen, setIsServiceOpen] = useState(false);
	
	const { openModal } = useModalStore();

	const navItems = [
		{ label: 'Accueil', path: '/' },
		{ label: 'Services', path: '/services' },
		{ label: 'Pourquoi nous', path: '/why-us' },
		{ label: 'FAQ', path: '/FAQ' },
		{ label: 'Contact', path: '/#contact' },
	];

	// Détecte le scroll pour changer l’apparence du header
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50); // si scroll > 50px → activer fond
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll); // clean up
	}, []);

	return (
		<>
			<motion.header 
				initial={{ y: -100, opacity: 0 }} // animation d’entrée : de haut vers bas
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`fixed w-full top-0 z-15 transition-all duration-300 ${
					isScrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
				}`}
			>
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between h-20">
					
						{/* Logo + Nom de l’entreprise */}
						<Logo />

						{/* Menu de navigation – bureau (desktop) */}
						<nav className="hidden lg:flex items-center space-x-8">
							{navItems.map((item, index) => (
								item.label !== "Services" ? 
								<TransitionLink
									key={index}
									href={item.path}
									className="text-white hover:text-orange-500 transition-colors font-medium group relative"
									// initial={{ opacity: 0, y: -20 }}
									// animate={{ opacity: 1, y: 0 }}
									// transition={{ delay: index * 0.1 + 0.3, duration: 0.2 }}
								>
									{item.label}
									<motion.div	className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 z-20 transition-all duration-300 group-hover:w-full" />
								</TransitionLink>
								:																
								<motion.button
									key={index}
									className="text-white relative hover:text-orange-500 transition-colors font-semibold cursor-pointer group"
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
									onClick={ () => setIsServiceOpen(!isServiceOpen)}
								>
									{item.label}
									<motion.div	className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 z-20 transition-all duration-300 group-hover:w-full" />	
									<AnimatePresence>								
										{isServiceOpen && (
											<motion.div 
												key="dropdown"
												className="absolute top-[2rem] bg-linear-to-b from-transparent to-gray-100/10 backdrop-blur-sm flex flex-col gap-4 items-start pr-2 py-2 rounded-b-md z-20"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												{serviceItems.map((i, index) => (								
													<TransitionLink
														key={i.path}
														href={i.path}
														// className="text-white ml-4 hover:text-orange-500 transition-colors font-medium"
														// initial={{ opacity: 0, x: -20 }}
														// animate={{ opacity: 1, x: 0 }}
														// exit={{ opacity: 0, x: -20 }}
														// transition={{ delay: index * 0.1, duration: 0.3 }}
													>
														{i.label}
													</TransitionLink>												
												))}
											</motion.div>									
										)}
									</AnimatePresence>
								</motion.button>
							))}
						</nav>

						{/* Contact et CTA – visible sur grand écran */}
						<motion.div 
							className="hidden lg:flex items-center space-x-4"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.8, duration: 0.5 }}
						>
							<div className="flex items-center space-x-2 text-sm">
								<Phone className="w-4 h-4 text-orange-500" />
								<span className="text-white">06 58 94 20 67</span>
							</div>
							<motion.button 
								aria-label='Demande de devis'
								className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold cursor-pointer"
								whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 102, 0, 0.3)" }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 300 }}
								// onClick={() => openModal(<EstimateForm />)}
							>
								Devis Gratuit
							</motion.button>
						</motion.div>

						{/* Bouton menu – mobile uniquement */}
						<motion.button 
							aria-label='Ouvrir le menu'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden text-white p-2"
							whileTap={{ scale: 0.9 }}
						>
							{isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
						</motion.button>
					</div>

					{/* Menu mobile déroulant */}
					<AnimatePresence mode='wait'>
					{isMenuOpen && (
						<motion.div 
							className="lg:hidden absolute top-full left-0 w-full h-svh bg-black border-t border-gray-800"
							initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
							animate={{ opacity: 1, scaleY: 1 }}
							exit={{ opacity: 0, scaleY: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<nav className="flex flex-col h-svh p-6 space-y-4">
								{navItems.map((item, index) => (
								item.label !== "Services" ?
								<TransitionLink
									key={index}
									href={item.path}
									className="text-white hover:text-orange-500 transition-colors font-medium"
									onClick={() => setIsMenuOpen(!isMenuOpen)}
								>
									{item.label}
								</TransitionLink>
								: 
								<div key={index}>
									<motion.button
										className={`${isServiceOpen ? "text-gray-400" : "text-white"} text-left hover:text-orange-500 transition-colors font-medium`}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1, duration: 0.3 }}
										onClick={ () => setIsServiceOpen(!isServiceOpen)}
									>
										{item.label}
									</motion.button>
									<AnimatePresence>
										{isServiceOpen && (
											<motion.div
											key="services-submenu"
											className="overflow-hidden"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.35, ease: "easeInOut" }}
											>
											{/* container interne pour stagger des enfants */}
												<motion.div
													initial="hidden"
													animate="show"
													exit="hidden"
													variants={{
													show: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
													hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
													}}
												>
													{serviceItems.map((i, idx) => (
													<TransitionLink
														key={i.path}
														href={i.path}
														className="block text-white ml-4 hover:text-orange-500 transition-colors py-2"
													>
														{i.label}
													</TransitionLink>
													))}
												</motion.div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
								))}

								{/* Contact rapide dans le menu mobile */}
								<a className="flex items-center space-x-2 pt-4 border-t border-gray-800" href="tel:+33658942067">
									<Phone className="w-4 h-4 text-orange-500" />
									<span className="text-white">06 58 94 20 67</span>
								</a>
								<motion.button 
									aria-label='Demande de devis'
									className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold w-full cursor-pointer"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									// onClick={() => openModal(<EstimateForm />)}
								>
									Devis Gratuit
								</motion.button>
							</nav>
						</motion.div>
					)}
					</AnimatePresence>
				</div>
			</motion.header>
		</>
	);
};

export default Navbar;
