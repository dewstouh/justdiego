"use cache";

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SolutionHeader from './_components/SolutionHeader';
import ProblemResult from './_components/ProblemResult';
import TechnicalDetails from './_components/TechnicalDetails';
import ChallengesOutcomes from './_components/ChallengesOutcomes';
import Technologies from './_components/Technologies';
import ClientReview from './_components/ClientReview';
import CTA from './_components/CTA';
import { TechnicalDetail } from '@justdiego/types';
import { getSolutionBySlug, getSolutions } from '../../../../lib/data/solution';

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  // Get tags for keywords
  const tags = solution.tags;
  const tagNames = tags.map(tag => tag.name);

  return {
    title: `${solution.title} Case Study | Diego Rodriguez`,
    description: solution.shortDescription,
    keywords: tagNames.join(', '),
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) return notFound();

  const { problemDescription, solutionDescription, technicalDetails, challenges, outcomes, technologies, customer, review } = solution;

  return (
    <>
      <SolutionHeader 
        title={solution.title}
        customerName={customer?.name || "Unknown Customer"}
        countryName={customer?.country?.name}
        countryFlag={customer?.country?.flag}
        tags={solution.tags}
        description={solution.shortDescription}
        completedAt={solution.completedAt}
      />

      <ProblemResult problem={problemDescription} result={solutionDescription} />

      <TechnicalDetails technicalDetails={technicalDetails as TechnicalDetail[]} />

      <ChallengesOutcomes challenges={challenges} outcomes={outcomes} />

      <Technologies technologies={technologies} />

      {review && (
          <ClientReview
            key={review.id}
            rating={review.rating}
            comment={review.comment}
            author={review.author}
          />
        )
      }

      <CTA />
    </>
  );
}
