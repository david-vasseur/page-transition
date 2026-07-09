"use client"

import { motion } from "framer-motion";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen mt-20 flex flex-col items-center justify-center bg-black text-center py-20 px-6 text-white">
      

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-5xl font-bold text-orange-600 mb-6"
      >
        Politique de Confidentialité
      </motion.h1>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl text-orange-100 space-y-6 text-justify"
      >
        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">1. Introduction</h2>
          <p>
            La présente Politique de Confidentialité décrit comment <strong>G.V.S.3D</strong> collecte, utilise et protège 
            les informations personnelles que vous nous fournissez dans le cadre de nos prestations de dératisation, 
            désinsectisation et désinfection.
          </p>
          <p>
            Coordonnées de l’entreprise :
            <br />
            📍 41, rue du Roitelet – 30129 Manduel
            <br />
            📞 06 58 94 20 67
            <br />
            📧 g.v.s.3dpro@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">2. Données collectées</h2>
          <p>
            Nous collectons uniquement les données strictement nécessaires à la réalisation de nos services, 
            notamment :
          </p>
          <ul className="list-disc list-inside">
            <li>Nom et prénom</li>
            <li>Coordonnées (adresse, téléphone, email)</li>
            <li>Informations liées au lieu d’intervention</li>
            <li>Historique des interventions et devis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">3. Finalité du traitement</h2>
          <p>
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc list-inside">
            <li>Réaliser et suivre vos interventions</li>
            <li>Établir des devis et factures</li>
            <li>Communiquer avec vous pour la gestion des prestations</li>
            <li>Respecter nos obligations légales et fiscales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">4. Conservation des données</h2>
          <p>
            Les données personnelles sont conservées pour la durée strictement nécessaire à la réalisation 
            des prestations et au respect des obligations légales. Passé ce délai, elles sont supprimées ou anonymisées.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">5. Partage des données</h2>
          <p>
            G.V.S.3D ne partage pas vos données personnelles avec des tiers, sauf dans les cas suivants :
          </p>
          <ul className="list-disc list-inside">
            <li>Obligations légales ou réglementaires</li>
            <li>Partenaires techniques intervenant dans le cadre du service (sous-traitants agréés)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">6. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
            vos données personnelles contre toute perte, accès non autorisé, divulgation ou altération.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">7. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside">
            <li>Droit d’accès et de rectification</li>
            <li>Droit à l’effacement (“droit à l’oubli”)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d’opposition au traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous à : <strong>g.v.s.3dpro@gmail.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">8. Modifications de la politique</h2>
          <p>
            G.V.S.3D se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. 
            La version en vigueur est disponible sur notre site internet.
          </p>
        </section>
      </motion.div>

      {/* Bouton retour */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
      >
        Retour à l’accueil
      </motion.a>
    </div>
  );
}
