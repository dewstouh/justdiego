import { Category } from "./GuidesContent";

interface CategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export default function Categories({ categories, selectedCategory, onCategorySelect }: CategoriesProps) {
  return (
    <div className="border-b border-gray-300 pb-8 mb-12">
      <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
        CATEGORIES
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`p-4 border border-gray-300 bg-white hover:border-gray-900 hover:bg-gray-50 transition-colors duration-200 text-center ${
              selectedCategory === category.id 
                ? 'border-gray-900 bg-gray-50' 
                : ''
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="text-xs font-bold uppercase tracking-wide text-gray-900">
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
