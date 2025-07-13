import { Review } from '@justdiego/types';

interface ReviewCardProps {
  review: Review | null | undefined;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  if (!review) return null;

  return (
    <div className="bg-white border-2 border-gray-900 p-6">
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
          <cite className="text-sm text-gray-600 font-mono">
            — {review.authorId.replace('author-', '').replace('-', ' ')}
          </cite>
        </div>
      </div>
    </div>
  );
}
