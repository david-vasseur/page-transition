"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Shield,
  Zap,
  Bug,
  Skull,
  CheckCircle,
  Flame,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PourquoiNous() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      /* HERO */
      gsap.from(".hero-line", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      /* STORY PIN */
      gsap.utils.toArray<HTMLElement>(".story-panel").forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        });

        gsap.from(panel.querySelectorAll(".story-item"), {
          opacity: 0,
          y: 60,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top center",
          },
        });
      });

      /* CARDS */
      gsap.from(".proof-card", {
        scrollTrigger: {
          trigger: ".proofs",
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-900/20 via-black to-black" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-400/5 blur-3xl rounded-full" />

      {/* HERO */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        <span className="hero-line inline-flex items-center bg-orange-600/20 border border-orange-600/30 rounded-full px-6 py-3 mb-6">
          <Zap className="w-5 h-5 mr-2 text-orange-500" />
          L’exigence du résultat
        </span>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="hero-line block">POURQUOI</span>
          <span className="hero-line text-orange-600 relative inline-block">
            NOUS CHOISIR
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-orange-600 to-orange-400" />
          </span>
        </h1>

        <p className="hero-line text-xl text-gray-300 max-w-2xl">
          Parce qu’un nuisible n’est jamais un simple problème.
          C’est une urgence, une menace, une perte de contrôle.
        </p>
      </div>

      {/* STORY 1 */}
      <section className="story-panel relative min-h-screen flex items-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="story-item flex items-center text-orange-500">
            <Skull className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-black">
              Le problème n’attend jamais
            </h2>
          </div>

          <p className="story-item text-xl text-gray-300">
            Rats, souris, cafards, punaises de lit…
            Quand ils apparaissent, ils se multiplient.
            Chaque heure perdue aggrave la situation.
          </p>

          <p className="story-item text-gray-400">
            La majorité des infestations deviennent critiques
            à cause d’interventions trop tardives ou inefficaces.
          </p>
        </div>
      </section>

      {/* STORY 2 */}
      <section className="story-panel relative min-h-screen bg-gray-800 flex items-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="story-item flex items-center text-orange-500">
            <Target className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-black">
              Notre méthode est chirurgicale
            </h2>
          </div>

          <p className="story-item text-xl text-gray-300">
            Pas de bricolage. Pas de solutions temporaires.
            Nous analysons, traquons et éliminons à la source.
          </p>

          <ul className="story-item space-y-3 text-gray-300">
            {[
              "Diagnostic précis",
              "Traitements certifiés",
              "Plan d’action sur mesure",
              "Prévention à long terme",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-orange-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STORY 3 */}
      <section className="story-panel relative bg-gray-900 min-h-screen flex items-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="story-item flex items-center text-orange-500">
            <Shield className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-black">
              Une responsabilité totale
            </h2>
          </div>

          <p className="story-item text-xl text-gray-300">
            Nous intervenons comme si c’était chez nous.
            Résultat mesurable. Sécurité maximale.
          </p>

          <p className="story-item text-gray-400">
            Professionnels, particuliers, collectivités :
            notre engagement est le même.
          </p>
        </div>
      </section>

      {/* PROOFS */}
      <section className="proofs relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-black mb-12 text-center">
            Ce qui fait la différence
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Flame />,
                title: "Interventions rapides",
                text: "Urgences traitées en priorité 24/7",
              },
              {
                icon: <Bug />,
                title: "Expertise terrain",
                text: "Des centaines de cas réels maîtrisés",
              },
              {
                icon: <Shield />,
                title: "Garantie sérénité",
                text: "Résultat durable ou réintervention",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="proof-card bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-600/50 transition"
              >
                <div className="bg-orange-600/20 w-12 h-12 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-gray-400">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
