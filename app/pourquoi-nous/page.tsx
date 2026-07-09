import PourquoiNousPage from '@/components/pages/pourquoi/PagePourquoi';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
	title: "Pourquoi Choisir GVS3D ? Expertise Nuisibles Gard, Avignon, Nîmes",
	description: "Découvrez pourquoi GVS3D est le partenaire de confiance pour la dératisation, désinsectisation et désinfection. Expertise terrain, réactivité à Manduel, Nîmes, Avignon, Beaucaire et approche écoresponsable.",
	keywords: ["GVS3D", "pourquoi nous", "entreprise nuisibles Gard", "dératisation Manduel", "désinsectisation Avignon", "désinfection Nîmes", "frelons Beaucaire", "guêpes Gard", "expert nuisibles", "lutte anti-nuisibles", "gestion parasitaire", "méthodes écoresponsables", "technicien 3D", "agrément biocide", "tarifs transparents"],
	alternates: {
		canonical: "https://gvs3d.fr/pourquoi-nous",
	},
	openGraph: {
		title: "Pourquoi Choisir GVS3D ? Votre Expert Nuisibles Local sur Manduel (Gard, Avignon, Nîmes)",
		description: "GVS3D : L'excellence en dératisation, désinsectisation et désinfection dans le Gard (Manduel, Nîmes, Beaucaire) et Avignon. Engagement, réactivité et solutions respectueuses.",
		type: "website",
		url: "https://gvs3d.fr/pourquoi-nous",
		images: [{
		url: "https://gvs3d.fr/logo.webp", 
		width: 1200, 
		height: 630, 
		alt: "GVS3D - Expert anti-nuisibles dans le Gard et Vaucluse",
		}],
	},
	twitter: {
		card: "summary_large_image",
		title: "GVS3D : Expertise en Nuisibles Gard & Vaucluse (Manduel, Nîmes, Avignon)",
		description: "Faites confiance à GVS3D pour une intervention rapide et efficace contre les nuisibles. Une expertise locale reconnue à Manduel, Nîmes, Avignon et Beaucaire.",
		images: ["https://gvs3d.fr/logo.webp"], 
	},
};

// Schéma JSON-LD pour LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": [
    "LocalBusiness",
    "PestControlService"
  ],
  "name": "GVS3D",
  "image": "https://gvs3d.fr/logo.webp",
  "url": "https://gvs3d.fr/pourquoi-nous",
  "telephone": "+33658942067",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "41 rue du Roitelet",
    "addressLocality": "Manduel",
    "postalCode": "30129",
    "addressRegion": "Occitanie",
    "addressCountry": "FR"
  },

  "hasMap": "https://www.google.com/maps/search/?api=1&query=41+rue+du+Roitelet+30129+Manduel",

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.8189",
    "longitude": "4.4717"
  },

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],

  "serviceType": [
    "Dératisation",
    "Désinsectisation",
    "Désinfection",
    "Lutte contre les nuisibles",
    "Traitement des rats et souris",
    "Traitement des guêpes et frelons",
    "Traitement des punaises de lit"
  ],

  "areaServed": [
    {
      "@type": "City",
      "name": "Manduel"
    },
    {
      "@type": "City",
      "name": "Nîmes"
    },
    {
      "@type": "City",
      "name": "Beaucaire"
    },
    {
      "@type": "City",
      "name": "Avignon"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Gard"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Vaucluse"
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