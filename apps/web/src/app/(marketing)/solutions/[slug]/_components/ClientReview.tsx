import AttachmentGallery from '@/components/solution-card/AttachmentGallery';
import { Avatar } from '@justdiego/react-utils';

interface Country {
  name: string;
  code: string;
  flag: string | null;
}

interface ReviewAuthor {
  id: string;
  name: string;
  avatarUrl?: string | null;
  country: Country
}

interface ClientReviewProps {
  rating: number;
  comment: string;
  author: ReviewAuthor;
  attachments: string[] | null;
}

export default function ClientReview({ rating, comment, author, attachments }: ClientReviewProps) {
  return (
    <div className="bg-white border-2 border-gray-900 p-8 mb-12">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-xl">★</span>
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <span key={i} className="text-gray-300 text-xl">★</span>
        ))}
      </div>
      <blockquote className="text-gray-900 font-medium text-xl mb-6 leading-relaxed">
        &ldquo;{comment}&rdquo;
      </blockquote>

      {/* Attachments */}
      <div className="mb-6">
        {attachments && attachments.length > 0 && (
          <AttachmentGallery attachments={attachments} />
        )}
      </div>

      <div className="flex items-center gap-4">
        <Avatar
          src={author.avatarUrl}
          alt={author.name}
          size="sm"
        />
        <div>
          <cite className="text-gray-900 font-semibold">{author.name}</cite>
        </div>
      </div>
    </div>
  );
}
