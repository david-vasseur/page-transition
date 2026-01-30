import SeoCatchTemplate from '@/components/pages/seo/SeoCatch';
import { seoData } from '@/data/seoData';
import { redirect } from 'next/navigation';

interface Props {
    params: { slug: string };
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
        </div>
    )
}

export default page;