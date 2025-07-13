import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSolution, getSolutions, getCustomer, getCountry, getTags, getTechnologies, getReview } from '@justdiego/react-utils';
import SolutionHeader from './_components/SolutionHeader';
import ProblemResult from './_components/ProblemResult';
import TechnicalDetails from './_components/TechnicalDetails';
import ChallengesOutcomes from './_components/ChallengesOutcomes';
import Technologies from './_components/Technologies';
import ClientReview from './_components/ClientReview';
import CTA from './_components/CTA';
import AutoBreadcrumb from '../../../components/AutoBreadcrumb';

export async function generateStaticParams() {
  const solutions = getSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  // Get tags for keywords
  const tags = getTags().filter(tag => solution.tagIds.includes(tag.id));
  const tagNames = tags.map(tag => tag.name);

  return {
    title: `${solution.title} Case Study | Diego Rodriguez`,
    description: solution.shortDescription,
    keywords: tagNames.join(', '),
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  const { problem, result, technicalDetails, challenges, outcomes } = solution;

  // Get related data
  const customer = getCustomer(solution.customerId);
  const country = getCountry(solution.countryId);
  const tags = getTags().filter(tag => solution.tagIds.includes(tag.id));
  const technologies = getTechnologies().filter(tech => solution.technologyIds.includes(tech.id));
  const review = solution.reviewId ? getReview(solution.reviewId) : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <AutoBreadcrumb customLabels={{
          [solution.slug]: customer?.id.replace('customer-', '').replace('-', ' ') || 'Unknown'
        }} />

        <SolutionHeader 
          solution={solution}
          customer={customer}
          country={country}
          tags={tags}
        />

        <ProblemResult problem={problem} result={result} />

        <TechnicalDetails technicalDetails={technicalDetails} />

        <ChallengesOutcomes challenges={challenges} outcomes={outcomes} />

        <Technologies technologies={technologies} />

        {review && (
          <ClientReview 
            review={review}
            customer={customer}
          />
        )}

        <CTA />
      </div>
    </div>
  );
}
