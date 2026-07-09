"use client"

import { motion } from "framer-motion";

export default function CGVPage() {
  return (
    <div className="min-h-screen mt-20 py-20 flex flex-col items-center justify-center bg-black text-center px-6 text-white">
    

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-5xl font-bold text-orange-600 mb-6"
      >
        Conditions Générales de Vente (CGV)
      </motion.h1>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl text-orange-100 space-y-6 text-justify"
      >
        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">1. Présentation de l’entreprise</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
            <strong> G.V.S.3D </strong>, société spécialisée dans la dératisation, désinsectisation et désinfection, 
            et toute personne physique ou morale sollicitant ses services.
          </p>
          <p>
            Coordonnées :
            <br />
            📍 41, rue du roitelet – 30129 Manduel
            <br />
            📞 06 58 94 20 67
            <br />
            📧 g.v.s.3dpro@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">2. Objet</h2>
          <p>
            Les présentes CGV définissent les droits et obligations des parties dans le cadre de la
            réalisation de prestations de dératisation, désinsectisation et de traitements
            anti-nuisibles. Toute commande implique l’adhésion pleine et entière du client aux présentes
            conditions.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">3. Tarifs et devis</h2>
          <p>
            Les tarifs appliqués sont ceux en vigueur au moment de la commande. Un devis détaillé est
            systématiquement établi avant toute intervention. Les prix s’entendent en euros, toutes taxes
            comprises (TTC), sauf mention contraire.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">4. Modalités de paiement</h2>
          <p>
            Le paiement est exigible à réception de facture, sauf accord spécifique mentionné sur le devis.
            Les paiements peuvent être effectués par virement bancaire, chèque ou espèces. En cas de retard
            de paiement, des pénalités pourront être appliquées conformément à la législation en vigueur.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">5. Conditions d’exécution</h2>
          <p>
            G.V.S.3D s’engage à réaliser les prestations conformément aux règles de l’art et aux normes
            sanitaires en vigueur. Le client doit s’assurer de fournir un accès libre et sécurisé aux
            locaux à traiter. Toute intervention empêchée par le client pourra donner lieu à une
            facturation.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">6. Garanties</h2>
          <p>
            Certaines prestations peuvent bénéficier d’une garantie dont les modalités sont précisées sur
            le devis. Cette garantie ne couvre pas les réinfestations liées à un manque d’entretien, à des
            conditions d’hygiène insuffisantes ou à des causes extérieures indépendantes de notre volonté.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">7. Réclamations et litiges</h2>
          <p>
            Toute réclamation doit être formulée par écrit dans un délai de 7 jours après l’intervention.
            En cas de litige, les parties s’efforceront de trouver une solution amiable. À défaut,
            compétence exclusive est attribuée aux tribunaux du ressort du siège social de G.V.S.3D.
          </p>
        </section>

        <section>
          <h2 className="text-orange-400 font-bold text-lg mb-2">8. Acceptation des CGV</h2>
          <p>
            En signant le devis ou en validant une commande, le client reconnaît avoir pris connaissance et
            accepté les présentes conditions générales de vente.
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
