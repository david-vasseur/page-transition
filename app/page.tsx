import Services from "@/components/landing_page/Servcies";
import Hero from "../components/landing_page/Hero";
import Presentation from "../components/landing_page/Presentation";
import IReview from "../type/review";
import InterventionZone from "@/components/landing_page/MapSection";
import SocialProof from "@/components/landing_page/Proof";


interface PlaceDetailsResponse {
  result?: {
    reviews?: IReview[];
  };
}

export const metadata = {
	metadataBase: new URL("https://www.gvs3d.fr"),
    title: "GVS3D - Extermination et désinfection à Estezargues, Gard et Vaucluse",
    description: "GVS3D propose des services professionnels de dératisation, désinsectisation et désinfection à Estezargues et alentours. Rapidité, expertise et satisfaction garantie.",
    openGraph: {
        title: "GVS3D - Services d'extermination à Estezargues",
        description: "Découvrez nos services de dératisation, désinsectisation et désinfection à Estezargues, Gard et Vaucluse. Expertise, rapidité et solutions efficaces pour tous vos problèmes de nuisibles.",
        url: "https://www.gvs3d.fr",
        siteName: "GVS3D",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "https://www.gvs3d.fr/new_logo.webp",
                width: 1200,
                height: 630,
                alt: "GVS3D - Services d'extermination à Estezargues",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "GVS3D - Extermination et désinfection à Estezargues",
        description: "GVS3D vous accompagne pour la dératisation, désinsectisation et désinfection dans le Gard et le Vaucluse. Expertise et satisfaction garanties.",
        images: ["https://www.gvs3d.fr/new_logo.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
}

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "GVS3D",
	"url": "https://www.gvs3d.fr",
	"logo": "https://www.gvs3d.fr/new_logo.webp",
	"sameAs": [
		"https://maps.app.goo.gl/bpDEBrJE3b1Z1wtv5", 
		"https://www.facebook.com/people/GVS-3D/100082197788579/",
		"https://www.tiktok.com/@g.v.s.3d"
	],
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "7 rue de la fontaine",
		"addressLocality": "Estezargues",
		"addressRegion": "Gard",
		"postalCode": "30390",
		"addressCountry": "FR"
	},
	"contactPoint": [
		{
		"@type": "ContactPoint",
		"telephone": "+33-6-58-94-20-67",
		"contactType": "customer service",
		"areaServed": "FR"
		}
	]
};



export const revalidate = 21600;

export default async function Home() {

	const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=reviews&language=fr&key=${process.env.GOOGLE_API_KEY}`);
	const data: PlaceDetailsResponse = await response.json();
	const reviews = data.result?.reviews ?? [];
	
	return (
		<div className="min-h-screen">
			<Hero />
			<SocialProof />
			{/* <Presentation /> */}
			<Services />
			<InterventionZone />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
			/>
		</div>
	);
}
