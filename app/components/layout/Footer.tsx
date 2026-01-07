"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import { EstimateForm } from '../form/EstimateForm';
import Logo from '../ui/Logo';
import Social from '../ui/Social';
import { navItems, serviceItems } from '@/app/data/navItems';

const Footer = () => {

	return (
		<>
		<motion.footer 
			 
			className="bg-black text-white relative overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div className="container mx-auto px-6 py-16 relative z-10">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
				{/* Infos entreprise */}
				<motion.div
					id="contact"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					>
					{/* Logo */}
					<Logo />

					<p className="text-gray-300 pt-10 lg:pt-0 my-6 leading-relaxed">
						Votre partenaire de confiance pour des solutions complètes de lutte contre les nuisibles. Nous protégeons les habitations et les entreprises avec des méthodes avancées, écologiques et des résultats garantis.
					</p>

					{/* Coordonnées */}
					<div className="space-y-4">
						{[
						{ icon: Phone, text: '06 58 94 20 67' },
						{ icon: Mail, text: 'g.v.s.3dpro@gmail.com' },
						{ icon: MapPin, text: '7, rue de la fontaine 30390 ESTEZARGUES' },
						{ icon: Clock, text: 'Service d\'urgence 24h/24 et 7j/7' }
						].map((contact, index) => (
						<motion.div 
							key={contact.text}
							className="flex items-center"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
							whileHover={{ x: 5 }}
						>
							<contact.icon className="w-5 h-5 text-orange-500 mr-3" />
							<span>{contact.text}</span>
						</motion.div>
						))}
					</div>

					{/* Social Network */}
					<Social />
				</motion.div>

				{/* Services & Liens */}
				<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, duration: 0.6 }}
				>
				<h2 className="text-xl font-bold text-white mb-6">Services & Infos</h2>
				<div className="grid grid-cols-2 gap-4">
					<div>
					<h3 className="text-orange-500 font-semibold mb-3">Nos services</h3>
					<ul className="space-y-2 text-gray-300">
						{serviceItems.map((service, index) => (
						<motion.li 
							key={index}
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
						>
							<motion.a 
							href={service.path} 
							className="hover:text-orange-500 transition-colors"
							whileHover={{ x: 5 }}
							>
							{service.label}
							</motion.a>
						</motion.li>
						))}
					</ul>
					</div>
					<div>
					<h3 className="text-orange-500 font-semibold mb-3">Liens rapides</h3>
					<ul className="space-y-2 text-gray-300">
						{navItems.map((link, index) => (
						<motion.li 
							key={index}
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
						>
							<motion.a 
							href={link.path} 
							className="hover:text-orange-500 transition-colors"
							whileHover={{ x: 5 }}
							>
							{link.label}
							</motion.a>
						</motion.li>
						))}
					</ul>
					</div>
				</div>

				{/* Certifications */}
				<motion.div 
					className="mt-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					<h3 className="text-orange-500 font-semibold mb-3">Certifications</h3>
					{['Certibiocide', 'Agrément Piégeur Agréé'].map((cert, index) => (
					<motion.div 
						key={cert}
						className="flex items-center space-x-2 text-gray-300 mt-2"
						initial={{ opacity: 0, x: -10 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
						whileHover={{ x: 5 }}
					>
						<Shield className="w-4 h-4 text-orange-500" />
						<span className="text-sm">{cert}</span>
					</motion.div>
					))}
				</motion.div>
				
				{/* infos legales */}
				<motion.div
					className="mt-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					<h3 className="text-orange-500 font-semibold mb-3">Informations légales</h3>
				</motion.div>
				<div className="flex gap-5 text-gray-300 underline">
					<motion.a href='/CGV'>CGV</motion.a>
					<motion.a href='/politique-de-confidentialite'>politique de confidentialité</motion.a>
				</div>					
				</motion.div>

				{/* Formulaire de contact rapide */}
				<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.4, duration: 0.6 }}
				>
				<h3 className="text-xl font-bold text-white mb-6">Demande rapide</h3>
				<EstimateForm />
				</motion.div>
			</div>
			

			{/* Mention légale et copyright */}
			<motion.div
				className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 1.4, duration: 0.5 }}
			>
				© 2025 David Vasseur. Tous droits réservés.
			</motion.div>
			</div>
		</motion.footer>
		</>
	);
};

export default Footer;
