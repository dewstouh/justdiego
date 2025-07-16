import { formatDate, getTimeAgo } from '@justdiego/utils';
import { Country, Company, User } from '@justdiego/types';

interface CompanyHeaderProps {
  customer: User | Company | null;
  country: Country | null;
  completedAt: Date | null;
}

export default function CompanyHeader({ customer, country, completedAt }: CompanyHeaderProps) {

  const completed = completedAt ? `${formatDate(completedAt.toISOString())} • ${getTimeAgo(completedAt.toISOString())}`: "In progress";

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-32 h-16 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600">
        {customer ? customer.name : 'N/A'}
      </div>
      <div>
        <div className="font-bold text-xl text-gray-900">
          {customer?.name.toUpperCase() || 'Unknown Customer'}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-lg">{country?.flag || '🏳️'}</span>
          <span>{country?.name || 'Unknown Country'}</span>
        </div>
        <div className="text-sm text-gray-500 font-mono mt-1">
          Completed: {completed}
        </div>
      </div>
    </div>
  );
}
