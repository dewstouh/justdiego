import { Review, Customer } from '@justdiego/types';

interface ClientReviewProps {
  review: Review;
  customer?: Customer;
}

export default function ClientReview({ review, customer }: ClientReviewProps) {
  return (
    <div className="bg-white border-2 border-gray-900 p-8 mb-12">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-xl">★</span>
        ))}
        {[...Array(5 - review.rating)].map((_, i) => (
          <span key={i} className="text-gray-300 text-xl">★</span>
        ))}
      </div>
      <blockquote className="text-gray-900 font-medium text-xl mb-6 leading-relaxed">
        &ldquo;{review.content}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-300 border-2 border-gray-400 rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-sm font-mono">IMG</span>
        </div>
        <div>
          <cite className="text-gray-900 font-semibold">{review.authorId.replace('author-', '').replace('-', ' ')}</cite>
          <p className="text-gray-600">{customer?.id.replace('customer-', '').replace('-', ' ').toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}
