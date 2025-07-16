import { Country, User } from '@justdiego/types';
import { Avatar } from '@justdiego/react-utils';

interface ReviewCardProps {
  rating: number;
  comment: string;
  author: User;
  country: Country
}

export default function ReviewCard({ rating, comment, author, country }: ReviewCardProps) {

  return (
    <div className="bg-primary border-2 border-gray-900 p-6">
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <span key={i} className="text-gray-300 text-lg">★</span>
          ))}
        </div>
        <blockquote className="text-gray-900 font-medium text-lg mb-4">
          &ldquo;{comment}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar 
            src={author.avatarUrl} 
            alt={author.name} 
            size="lg" 
          />
          <div className="flex flex-col">
            <cite className="text-sm text-gray-600 font-mono">
              — {author.name}
            </cite>
            {country && (
              <div className="flex items-center gap-1 mt-1">
                <span className="text-lg">{country.name}</span>
                <span className="text-xs text-gray-500">{country.flag}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
