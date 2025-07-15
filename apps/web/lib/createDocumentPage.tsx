import { notFound } from 'next/navigation';
import { getDocument } from './data/document';
import DocumentPage from '../components/document/DocumentPage';
import { generateMetadata as generateMetadataBase } from './utils/generateMetadata';
import { Metadata } from 'next';


export function createStaticDocumentPage({ slug, path }: { slug: string, path: string }) {
    async function generateMetadata(): Promise<Metadata> {
        const doc = await getDocument({ slug });
        if (!doc) {
            return { title: 'Not Found' };
        }

        const metadata = generateMetadataBase({
            title: doc.title,
            description: doc.description,
            path,
            images: doc.thumbnailUrl,
            type: "article"
        })

        return metadata
    }

    async function Page() {
        const doc = await getDocument({ slug });
        if (!doc) return notFound();
        return <DocumentPage document={doc} />;
    }

    return { generateMetadata, Page };
}