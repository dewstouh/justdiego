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
          className="px-3 py-1 text-xs font-mono bg-gray-200 border border-gray-400 text-gray-800"
          style={{ backgroundColor: tag.color + '20', borderColor: tag.color }}
        >
          {tag.icon} {tag.name}
        </span>
      ))}
    </div>
  );
}
