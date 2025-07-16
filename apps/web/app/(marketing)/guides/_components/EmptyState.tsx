import { Category } from "./GuidesContent";

interface EmptyStateProps {
  selectedCategory: string;
  categories: Category[];
}

export default function EmptyState({ selectedCategory, categories }: EmptyStateProps) {
  return (
    <div className="text-center py-24 border border-gray-300 bg-white">
      <div className="text-4xl mb-4 text-gray-400">📄</div>
      <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
        NO GUIDES AVAILABLE
      </h3>
      <p className="text-gray-600 text-xs">
        {selectedCategory === 'all' 
          ? 'Check back soon for business optimization resources.'
          : `No guides found in the ${categories.find(c => c.id === selectedCategory)?.name} category.`
        }
      </p>
    </div>
  );
}
