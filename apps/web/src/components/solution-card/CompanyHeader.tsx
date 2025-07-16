import { formatDate, getTimeAgo } from '@justdiego/utils';
import { Prisma  } from '@justdiego/types';
import Image from 'next/image';

interface CompanyHeaderProps {
  company: Prisma.CompanyGetPayload<{
    include: {
      country: true;
    };
  }> | null;
  completedAt: Date | null;
}

export default function CompanyHeader({ company, completedAt }: CompanyHeaderProps) {

  const { country } = company || {};

  const completed = completedAt ? `${formatDate(completedAt.toISOString())} • ${getTimeAgo(completedAt.toISOString())}`: "In progress";

  return (
    <div className="flex items-center gap-4 mb-6">

      <div className="flex-shrink-0">
        <Image
          src={company?.logoUrl || '/placeholder-logo.png'}
          alt={company?.name || 'Company Logo'}
          width={150}
          height={40}
        />
      </div>

      <div>
        <div className="font-bold text-xl text-gray-900">
          <a href={company?.website || ""} className="hover:underline">
            {(company?.name || 'Unknown Company').toUpperCase()}
          </a>
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
