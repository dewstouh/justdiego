import { formatDate } from '@justdiego/utils';
import TagList from '../../../../../components/solution-card/TagList';
import { Tag } from '@justdiego/types';
import PDFButton from '../../../../../components/ui/PDFButton';


interface SolutionHeaderProps {
  title: string;
  customerName: string;
  countryName?: string;
  countryFlag?: string | null;
  tags: Tag[];
  description: string;
  completedAt: Date | null;
}

export default function SolutionHeader({ title, customerName, tags, description, completedAt, countryName, countryFlag }: SolutionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-12 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600">
          {customerName}
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-lg">{countryFlag || '🏳️'}</span>
            <span className="font-semibold">
              {customerName.toUpperCase() || 'Unknown Customer'}
            </span>
            <span>•</span>
            <span>{countryName || 'Unknown Country'}</span>
            <span>•</span>
            <span>{completedAt ? formatDate(completedAt.toISOString()) : "In progress"}</span>
          </div>
        </div>
      </div>
      
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Tags */}
      <TagList tags={tags} />
      
      {/* PDF Export Buttons */}
      {/*<div className="flex flex-wrap gap-3 mt-6">
        <PDFButton 
          //solution={solution}
          variant="preview"
          size="md"
        >
          [PDF] - SOLUTION REPORT STUDIO CASE
        </PDFButton>
      </div> */}
    </div>
  );
}
