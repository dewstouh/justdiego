import { formatDate, getTimeAgo } from '@justdiego/utils';
import { Customer, Country } from '@justdiego/types';

interface CompanyHeaderProps {
  customer: Customer | null | undefined;
  country: Country | null | undefined;
  completedAt: Date;
}

export default function CompanyHeader({ customer, country, completedAt }: CompanyHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-32 h-16 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600">
        {customer ? customer.id.split('-').map(word => word[0]?.toUpperCase() || '').join('') : 'N/A'}
      </div>
      <div>
        <div className="font-bold text-xl text-gray-900">
          {customer?.id.replace('customer-', '').replace('-', ' ').toUpperCase() || 'Unknown Customer'}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-lg">{country?.flag || '🏳️'}</span>
          <span>{country?.name || 'Unknown Country'}</span>
        </div>
        <div className="text-sm text-gray-500 font-mono mt-1">
          Completed: {formatDate(completedAt.toISOString())} • {getTimeAgo(completedAt.toISOString())}
        </div>
      </div>
    </div>
  );
}
