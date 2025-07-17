import SolutionCardSeparator from '@/components/solution-card/SolutionCardSeparator';
import CompanyHeader from '@/components/solution-card/CompanyHeader';
import ProjectDetails from '@/components/solution-card/ProjectDetails';
import TagList from '@/components/solution-card/TagList';
import ReviewCard from '@/components/solution-card/ReviewCard';
import AttachmentGallery from '@/components/solution-card/AttachmentGallery';
import SolutionActions from '@/components/solution-card/SolutionActions';
import { getSolutions } from '@/lib/data/solution';
import Link from 'next/link';

interface SolutionCardProps {
  solution: NonNullable<Awaited<ReturnType<typeof getSolutions>>>[number];
  variant?: 'compact' | 'full';
  showSeparator?: boolean;
}

export default function SolutionCard({
  solution,
  variant = 'full',
  showSeparator = true
}: SolutionCardProps) {

  const { id, title, slug, shortDescription, problemDescription, solutionDescription, completedAt, tags, attachments, company, review } = solution;


  return (
    <>
      <div className="relative">
        <SolutionCardSeparator show={showSeparator} />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Project Info */}
          <div className="space-y-6">
            <CompanyHeader
              company={company}
              completedAt={completedAt}
            />

            <ProjectDetails
              title={title}
              shortDescription={shortDescription}
              problem={problemDescription}
              result={solutionDescription}
              slug={slug}
              variant={variant}
            />

            <TagList tags={tags} />
            <Link
              href={`/solutions/${slug}`}
              className="inline-block bg-gray-900 text-white px-6 py-3 border-2 border-gray-900 font-bold hover:bg-primary transition-all duration-200"
            >
              VIEW FULL STUDY CASE →
            </Link>
          </div>

          {/* Right Column - Review & Content */}
          {review && (
            <div className="space-y-6">
              <ReviewCard rating={review.rating} comment={review.comment} author={review.author} country={review.author.country} />
              <div className="space-y-6">
                {attachments && attachments.length > 0 && (
                  <AttachmentGallery attachments={attachments} />
                )}
                <SolutionActions slug={slug} solutionId={id} />
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
