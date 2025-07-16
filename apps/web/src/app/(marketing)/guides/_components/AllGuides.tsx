import { GuideCard } from './GuideCard';
import { Category, Guide } from './GuidesContent';

interface AllGuidesProps {
  guides: Guide[];
  selectedCategory: string;
  categories: Category[];
}

export default function AllGuides({ guides, selectedCategory, categories }: AllGuidesProps) {
  const sectionTitle = selectedCategory === 'all' 
    ? 'ALL GUIDES' 
    : `${categories.find(c => c.id === selectedCategory)?.name.toUpperCase()} GUIDES`;

  return (
    <div>
      <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
        {sectionTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
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
