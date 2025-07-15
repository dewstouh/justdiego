import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocument, getDocuments } from '../../../../lib/data/document';
import DocumentPage from '../../_components/DocumentPage';

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
    const guide = await getDocument({ slug: params.slug, type: 'GUIDE' });

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

// Helper function to get reading time estimate
function getReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

// Helper function to categorize guides
function getCategory(title: string): string {
    if (title.toLowerCase().includes('seo') || title.toLowerCase().includes('appear first')) return 'SEO & Marketing';
    if (title.toLowerCase().includes('automation')) return 'Automation';
    if (title.toLowerCase().includes('digital transformation')) return 'Digital Transformation';
    if (title.toLowerCase().includes('productivity') || title.toLowerCase().includes('tools')) return 'Productivity';
    return 'Business Growth';
}

export default async function GuidePage({ params }: GuidePageProps) {
    const guide = await getDocument({ slug: params.slug, type: 'GUIDE' });

    if(!guide) return notFound();

    const {title, description, content, thumbnailUrl} = guide;

    return (
        <DocumentPage
            title={title}
            description={description}
            content={content}
            thumbnailUrl={thumbnailUrl}
        />
    )

}