import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocument, getDocuments } from '../../../../lib/data/document';
import DocumentPage from '../../../../components/document/DocumentPage';

interface GuidePageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const guides = await getDocuments({type: 'GUIDE'});
    return guides.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
    const {slug} = await params;
    const guide = await getDocument({ slug, type: 'GUIDE' });

    if (!guide) {
        return {
            title: "Guide Not Found | JustDiego",
        };
    }

    return {
        title: `${guide.title} | JustDiego`,
        description: guide.description,
        openGraph: {
            title: `${guide.title} | JustDiego`,
            description: guide.description,
            url: `https://justdiego.com/guides/${guide.slug}`,
            siteName: "JustDiego",
            type: "article",
            images: guide.thumbnailUrl ? [guide.thumbnailUrl] : undefined,
        },
        robots: "index, follow",
    };
}

export default async function GuidePage({ params }: GuidePageProps) {
    const {slug} = await params;
    const guide = await getDocument({ slug, type: 'GUIDE' });

    if(!guide) return notFound();

    return (
        <DocumentPage
            document={guide}
        />
    )

}