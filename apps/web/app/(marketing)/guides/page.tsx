import { Metadata } from 'next';
import { getDocuments } from '../../../lib/data/document';
import { SimplePage, createPageMetadata } from '../../../components/Page';
import GuidesContent from './_components/GuidesContent';

export const metadata: Metadata = createPageMetadata(
  'Guides',
  'Practical guides and resources to help you grow and optimize your business.',
  '/guides'
);

export default async function GuidesPage() {
  const guides = await getDocuments({ type: 'GUIDE' });

  return (
    <SimplePage config={{
      title: "GUIDES",
      description: "Practical resources to optimize your business operations."
    }}>
      <GuidesContent guides={guides} />
    </SimplePage>
  );
}