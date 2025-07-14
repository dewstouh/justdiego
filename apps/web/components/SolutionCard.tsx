import { Solution } from "@justdiego/types";
import { getCustomer, getCountry, getTags, getTechnologies, getReview } from '@justdiego/react-utils';
import SolutionCardSeparator from './solution-card/SolutionCardSeparator';
import CompanyHeader from './solution-card/CompanyHeader';
import ProjectDetails from './solution-card/ProjectDetails';
import TagList from './solution-card/TagList';
import ReviewCard from './solution-card/ReviewCard';
import AttachmentGallery from './solution-card/AttachmentGallery';
import ProjectOverview from './solution-card/ProjectOverview';

interface SolutionCardProps {
  solution: Solution;
  variant?: 'compact' | 'full';
  showSeparator?: boolean;
}

export default function SolutionCard({ 
  solution, 
  variant = 'full',
  showSeparator = true 
}: SolutionCardProps) {

  // Get related data
  const customer = getCustomer(solution.customerId);
  const country = getCountry(solution.countryId);
  const tags = getTags().filter(tag => solution.tagIds.includes(tag.id));
  const technologies = getTechnologies().filter(tech => solution.technologyIds.includes(tech.id));
  const review = solution.reviewId ? getReview(solution.reviewId) : null;

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
              completedAt={solution.completedAt}
            />

            <ProjectDetails
              title={solution.title}
              shortDescription={solution.shortDescription}
              problem={solution.problem}
              result={solution.result}
              slug={solution.slug}
              variant={variant}
            />

            <TagList tags={tags} />
          </div>

          {/* Right Column - Review & Content */}
          <div className="space-y-6">
            <ReviewCard review={review} />

            {variant === 'compact' ? (
              <AttachmentGallery
                attachments={solution.attachments}
                slug={solution.slug}
              />
            ) : (
              <ProjectOverview
                attachmentCount={solution.attachments?.length || 0}
                technologies={technologies}
                hasDemoUrl={!!solution.demoUrl}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
