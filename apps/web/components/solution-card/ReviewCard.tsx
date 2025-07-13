import { Review } from '@justdiego/types';
import { getCountry } from '@justdiego/react-utils';

interface ReviewCardProps {
  review: Review | null | undefined;
}

// Simple mapping of authorIds to countries
function getAuthorCountry(authorId: string): string {
  const authorCountryMap: Record<string, string> = {
    'author-sarah-chen': 'us', // United States
    'author-alex-morrison': 'ca', // Canada
    'author-james-potter': 'gb', // United Kingdom
  };
  
  return authorCountryMap[authorId] || 'us'; // Default to US if not found
}

export default function ReviewCard({ review }: ReviewCardProps) {
  if (!review) return null;

  const countryId = getAuthorCountry(review.authorId);
  const country = getCountry(countryId);

  return (
    <div className="bg-primary border-2 border-gray-900 p-6">
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
          ))}
          {[...Array(5 - review.rating)].map((_, i) => (
            <span key={i} className="text-gray-300 text-lg">★</span>
          ))}
        </div>
        <blockquote className="text-gray-900 font-medium text-lg mb-4">
          &ldquo;{review.content}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-xs font-mono">IMG</span>
          </div>
          <div className="flex flex-col">
            <cite className="text-sm text-gray-600 font-mono">
              — {review.authorId.replace('author-', '').replace('-', ' ')}
            </cite>
            {country && (
              <div className="flex items-center gap-1 mt-1">
                <span className="text-lg">{country.flag}</span>
                <span className="text-xs text-gray-500">{country.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
