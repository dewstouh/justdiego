import { getSolutions } from '@/lib/data/solution';
import SolutionCard from '@/components/SolutionCard';
import { SimplePage, createPageMetadata } from '@/components/Page';

export const metadata = createPageMetadata(
  'All Solutions',
  'Detailed case studies of problems solved, solutions delivered, and outcomes automated.',
  '/solutions'
);

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  
  return (
    <SimplePage config={{
      title: "All Solutions",
      description: "Detailed case studies of problems solved, solutions delivered, and outcomes automated.",
      note: "Each solution includes technical implementation details, results metrics, and client testimonials."
    }}>
      <div className="grid gap-12 lg:gap-16">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            variant="full"
            showSeparator={index > 0}
          />
        ))}
      </div>
    </SimplePage>
  );
}
