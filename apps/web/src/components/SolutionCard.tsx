import SolutionCardSeparator from '@/components/solution-card/SolutionCardSeparator';
import CompanyHeader from '@/components/solution-card/CompanyHeader';
import ProjectDetails from '@/components/solution-card/ProjectDetails';
import TagList from '@/components/solution-card/TagList';
import ReviewCard from '@/components/solution-card/ReviewCard';
import AttachmentGallery from '@/components/solution-card/AttachmentGallery';
import ProjectOverview from '@/components/solution-card/ProjectOverview';
import { getSolutions } from '@/lib/data/solution';

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

  const {title, slug, shortDescription, problemDescription, solutionDescription, completedAt, tags, attachments, demoUrl, technologies, customer, company, review } = solution;

  const country = customer.country || company?.country;


  return (
    <>
      <div className="relative">
        <SolutionCardSeparator show={showSeparator} />
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Project Info */}
          <div className="space-y-6">
            <CompanyHeader 
              customer={customer}
              country={country}
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
          </div>

          {/* Right Column - Review & Content */}
          {review && (
            <div className="space-y-6">
              <ReviewCard rating={review.rating} comment={review.comment} author={review.author} country={review.author.country} />

              {variant === 'compact' ? (
                <AttachmentGallery
                  attachments={attachments}
                  slug={slug}
                />
              ) : (
                <ProjectOverview
                  attachmentCount={attachments?.length || 0}
                  technologies={technologies}
                  hasDemoUrl={!!demoUrl}
                />
              )}
            </div>
          )}
          
        </div>
      </div>
    </>
  );
}
