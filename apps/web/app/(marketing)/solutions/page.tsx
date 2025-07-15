import Page from '../_components/Page';
import { getSolutions } from '../../../lib/data/solution';
import SolutionCard from '../../../components/SolutionCard';

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  return (
    <Page>
      <Page.Header 
        title="All Solutions"
        description="Detailed case studies of problems solved, solutions delivered, and outcomes automated."
        note="Each solution includes technical implementation details, results metrics, and client testimonials."
      />
      
      <Page.Content>
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
      </Page.Content>
    </Page>
  );
}
