import { Tag } from '@justdiego/types';


interface TagListProps {
  tags: Tag[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <span
          key={tag.id}
          className="px-3 py-1 text-xs font-mono bg-gray-100 border border-slate-300 text-gray-900 hover:bg-slate-200 transition-colors"
        >
          {tag.iconUrl} {tag.name}
        </span>
      ))}
    </div>
  );
}
