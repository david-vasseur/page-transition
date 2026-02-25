import SeoCatchTemplate from '@/components/pages/seo/SeoCatch';
import { seoData } from '@/data/seoData';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = seoData[slug];

    if (!data) {
        return {};
    }

    const title = `${data.service} à ${data.city} | Intervention rapide 7j/7`;
    const description = `${data.service} professionnelle à ${data.city}. Intervention rapide, devis gratuit et techniciens certifiés. Contactez-nous dès maintenant.`;

    return {
        title,
        description,
        keywords: [
            `${data.service} ${data.city}`,
            `${data.service} pas cher ${data.city}`,
            `entreprise ${data.service} ${data.city}`,
            `urgence ${data.service} ${data.city}`,
        ],
        openGraph: {
            title,
            description,
            url: `https://gvs3d.fr/${slug}`,
            siteName: "GVS3D",
            images: [
                {
                url: "https://gvs3d.fr/logo.webp",
                width: 1200,
                height: 630,
                alt: `${data.service} à ${data.city}`,
                },
            ],
            locale: "fr_FR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://gvs3d.fr/logo.webp"],
        },
        alternates: {
            canonical: `https://gvs3d.fr/${slug}`,
        },
    };
}

async function page({ params }: Props) {

    const authorizedSlug = [
        "deratisation-sur-aramon",
        "desinsectisation-garons",
        "deratisation-st-bonnet-du-gard",
        "desinctisation-bellegarde",
        "deratisation-a-ledenon",
        "desinsectisation-a-st-anastasie",
    ]

    const { slug } = await params;

    if (!authorizedSlug.includes(slug)) {
        redirect('/');
    }

    const data = seoData[slug];

    return (
        <div>
           <SeoCatchTemplate
                city={data.city}
                service={data.service}
                heroTitle={data.heroTitle}
                heroTitle1={data.heroTitle1}
                heroTitle2={data.heroTitle2}
                heroSubtitle={data.heroSubtitle}
                heroImage={data.heroImage}
                history={data.history}
                proofImages={data.proofImages}
                ctaLink={data.ctaLink}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "GVS3D",
                    image: "https://gvs3d.fr/logo.webp",
                    "@id": `https://gvs3d.fr/${slug}`,
                    url: `https://gvs3d.fr/${slug}`,
                    telephone: "+33658942067",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: data.city,
                        addressRegion: "Occitanie",
                        addressCountry: "FR",
                    },
                    areaServed: {
                        "@type": "City",
                        name: data.city,
                    },
                    serviceOffered: {
                        "@type": "Service",
                        name: data.service,
                    },
                    priceRange: "€€",
                    }),
                }}
            />
        </div>
    )
}

export default page;