import PourquoiNousPage from '@/components/pages/pourquoi/PagePourquoi';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Pourquoi Choisir GVS3D ? Expertise Nuisibles Gard, Avignon, Nîmes",
  description: "Découvrez pourquoi GVS3D est le partenaire de confiance pour la dératisation, désinsectisation et désinfection. Expertise terrain, réactivité à Remoulins, Nîmes, Avignon, Beaucaire et approche écoresponsable.",
  keywords: ["GVS3D", "pourquoi nous", "entreprise nuisibles Gard", "dératisation Remoulins", "désinsectisation Avignon", "désinfection Nîmes", "frelons Beaucaire", "guêpes Gard", "expert nuisibles", "lutte anti-nuisibles", "gestion parasitaire", "méthodes écoresponsables", "technicien 3D", "agrément biocide", "tarifs transparents"],
  alternates: {
    canonical: "https://gvs3d.fr/pourquoi-nous",
  },
  openGraph: {
    title: "Pourquoi Choisir GVS3D ? Votre Expert Nuisibles Local (Gard, Avignon, Nîmes)",
    description: "GVS3D : L'excellence en dératisation, désinsectisation et désinfection dans le Gard (Remoulins, Nîmes, Beaucaire) et Avignon. Engagement, réactivité et solutions respectueuses.",
    type: "website",
    url: "https://gvs3d.fr/pourquoi-nous",
    images: [{
      url: "https://gvs3d.fr/logo.webp", 
      width: 1200, // Recommandé pour Open Graph
      height: 630, // Recommandé pour Open Graph
      alt: "GVS3D - Expert anti-nuisibles dans le Gard et Vaucluse",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GVS3D : Expertise en Nuisibles Gard & Vaucluse (Remoulins, Nîmes, Avignon)",
    description: "Faites confiance à GVS3D pour une intervention rapide et efficace contre les nuisibles. Une expertise locale reconnue à Remoulins, Nîmes, Avignon et Beaucaire.",
    images: ["https://gvs3d.fr/logo.webp"], 
  },
};

// Schéma JSON-LD pour LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GVS3D",
  "image": "https://gvs3d.fr/logo.webp",
  "url": "https://gvs3d.fr/pourquoi-nous",
  "telephone": "+33658942067", 
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30390 Estezargues", 
    "addressLocality": "Estezargues",
    "addressRegion": "Gard",
    "postalCode": "30390", 
    "addressCountry": "FR"
  },
  "hasMap": "https://www.google.com/maps/place//@43.9411971,4.634722,15z?hl=fr&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D", 
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.9411971", 
    "longitude": "4.634722" 
  },
  "servesCuisine": "Pest Control", 
  "areaServed": [
    {
      "@type": "City",
      "name": "Remoulins"
    },
    {
      "@type": "City",
      "name": "Nîmes"
    },
    {
      "@type": "City",
      "name": "Avignon"
    },
    {
      "@type": "City",
      "name": "Beaucaire"
    },
    {
      "@type": "State",
      "name": "Gard"
    },
    {
      "@type": "State",
      "name": "Vaucluse"
    },
    {
      "@type": "State",
      "name": "Bouches-du-Rhône"
    }
  ],
  "priceRange": "€€"
};


function page() {
    return (
        <>
            <PourquoiNousPage />
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    )
}

export default page;