
import DropAnswer from '@/components/features/DropAnswer';
import { faq } from '@/data/faq';

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
        <section className="min-h-svh flex flex-col items-center justify-center">
            <h1 className="mt-40 pb-20 text-center text-5xl lg:text-6xl font-black text-orange-600 mb-8">
                Foire aux questions
            </h1>
            <h2 className="text-center text-xl lg:text-2xl font-semibold text-gray-100 pb-12 mb-20 border-b border-orange-600">
                Vous trouverez ici la mojorité des réponses aux questions les plus fréquentes
            </h2>
            {faq.map((f) => (
                <DropAnswer key={f.id} question={f.question} answer={f.answer} />
            ))}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
        </section>
    )
}

export default page;