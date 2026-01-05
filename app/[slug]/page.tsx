import Title from '../components/pages/Title';
import Error from '../components/pages/Error';

interface Props {
    params: { slug: string }
}

async function page({ params }: Props) {

    const { slug } = await params;
    const validSlugs = ["bio", "contact", "product"];

    if (!validSlugs.includes(slug)) {
        return (
            <Error />
        )
    }

    return (
        <Title slug={slug} />
    )
}

export default page;