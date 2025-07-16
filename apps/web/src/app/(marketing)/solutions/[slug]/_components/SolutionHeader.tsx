import { formatDate } from '@justdiego/utils';
import TagList from '@/components/solution-card/TagList';
import { Tag } from '@justdiego/types';
import Image from 'next/image';
import Link from 'next/link';


interface SolutionHeaderProps {
  title: string;
  customerName: string;
  companyName?: string;
  companyImage?: string;
  companyUrl?: string;
  countryFlag?: string | null;
  tags: Tag[];
  description: string;
  completedAt: Date | null;
}

export default function SolutionHeader({ title, customerName, tags, description, completedAt, companyName, countryFlag, companyUrl, companyImage }: SolutionHeaderProps) {

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        {companyImage && (
          <Image
            src={companyImage || ""}
            alt={companyName || 'Unknown Company'}
            width={80}
            height={50}
            className="object-contain"
          />  
        )}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-lg">{countryFlag || '🏳️'}</span>
            <Link href={companyUrl || ""} className="font-semibold">
              {companyName?.toUpperCase() || 'Unknown Company'}
            </Link>
            <span>•</span>
            <span>{customerName || 'Unknown Customer'}</span>
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
    
    </div>
  );
}
