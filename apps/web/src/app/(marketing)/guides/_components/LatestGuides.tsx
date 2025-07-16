import { GuideCard } from './GuideCard';
import { Guide } from './GuidesContent';

interface LatestGuidesProps {
  guides: Guide[];
}

export default function LatestGuides({ guides }: LatestGuidesProps) {
  const latestGuides = guides
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 4);

  return (
    <div className="mb-12">
      <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
        LATEST GUIDES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {latestGuides.map((guide) => (
          <GuideCard 
            key={guide.id} 
            thumbnailUrl={guide.thumbnailUrl} 
            slug={guide.slug} 
            title={guide.title} 
            description={guide.description} 
          />
        ))}
      </div>
    </div>
  );
}
