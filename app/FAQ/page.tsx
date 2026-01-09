
import DropAnswer from '@/components/features/DropAnswer';
import { faq } from '@/data/faq';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "FAQ - Questions fréquentes sur nos services d'extermination à Estezargues",
    description: "Trouvez toutes les réponses aux questions les plus fréquentes sur nos services de dératisation, désinsectisation et désinfection à Estezargues et alentours.",
    openGraph: {
        title: "FAQ - Questions fréquentes sur nos services d'extermination",
        description: "Découvrez les réponses aux questions les plus fréquentes concernant nos services d’extermination à Estezargues et dans le Gard/Vaucluse.",
        url: "https://www.gvs3d.fr/FAQ",
        siteName: "GVS3D",
        locale: "fr_FR",
        type: "website",
        images: [
        {
            url: "https://www.gvs3d.fr/new_logo.webp",
            width: 1200,
            height: 630,
            alt: "FAQ services d'extermination à Estezargues",
        },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ - Questions fréquentes sur nos services d'extermination",
        description: "Trouvez toutes les réponses aux questions les plus fréquentes sur nos services de dératisation, désinsectisation et désinfection à Estezargues et alentours.",
        images: ["https://www.gvs3d.fr/new_logo.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
}

const generateFAQJsonLd = (faqArray: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqArray.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  }
}

async function page() {

    const faqJsonLd = JSON.stringify(generateFAQJsonLd(faq))

    return (
        <section className="min-h-svh relative flex flex-col items-center justify-center mb-40">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-900/20 via-black to-black z-0" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-400/5 rounded-full blur-3xl" />

            {/* Header Section */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center mb-16">
                <div className="contact-badge inline-flex items-center bg-orange-600/20 border border-orange-600/30 rounded-full px-6 py-3 mb-6">
                    <Zap className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="text-orange-500 font-bold">Toutes les réponses au même endroit</span>
                </div>
                
                <h1 className="contact-title text-5xl md:text-7xl font-black mb-6">
                    <span className="block">FOIRE AUX</span>
                    <span className="text-orange-600 relative inline-block">
                        QUESTIONS
                        <span className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-orange-600 to-orange-400" />
                    </span>
                </h1>

                <p className="contact-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
                    Retrouvez ici les réponses aux questions les plus fréquentes concernant nos services, nos interventions et nos tarifs.
                </p>
            </div>

            {/* <h1 className="mt-40 pb-20 text-center text-5xl lg:text-6xl font-black text-orange-600 mb-8">
                Foire aux questions
            </h1>
            <h2 className="text-center text-xl lg:text-2xl font-semibold text-gray-100 pb-12 mb-20 border-b border-orange-600">
                Vous trouverez ici la mojorité des réponses aux questions les plus fréquentes
            </h2> */}
            {faq.map((f) => (
                <DropAnswer key={f.id} question={f.question} answer={f.answer} />
            ))}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
        </section>
    )
}

export default page;