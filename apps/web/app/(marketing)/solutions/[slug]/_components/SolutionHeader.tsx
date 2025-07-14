import { Solution, Customer, Country, Tag } from '@justdiego/types';
import { formatDate } from '@justdiego/utils';
import TagList from '../../../../../components/solution-card/TagList';
import PDFButton from '../../../../../components/PDFButton';

interface SolutionHeaderProps {
  solution: Solution;
  customer?: Customer;
  country?: Country;
  tags: Tag[];
}

export default function SolutionHeader({ solution, customer, country, tags }: SolutionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-12 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600">
          {customer ? customer.id.split('-').map(word => word[0]?.toUpperCase() || '').join('') : 'N/A'}
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {solution.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-lg">{country?.flag || '🏳️'}</span>
            <span className="font-semibold">
              {customer?.id.replace('customer-', '').replace('-', ' ').toUpperCase() || 'Unknown Customer'}
            </span>
            <span>•</span>
            <span>{country?.name || 'Unknown Country'}</span>
            <span>•</span>
            <span>{formatDate(solution.completedAt.toISOString())}</span>
          </div>
        </div>
      </div>
      
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        {solution.fullDescription}
      </p>

      {/* Tags */}
      <TagList tags={tags} />
      
      {/* PDF Export Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        <PDFButton 
          solution={solution}
          variant="preview"
          size="md"
        >
          [PDF] - SOLUTION REPORT STUDIO CASE
        </PDFButton>
      </div>
    </div>
  );
}
