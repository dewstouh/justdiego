import SolutionCard from '../../../../components/SolutionCard';
import { getSolutions } from '../../../../lib/data/solution';

export default async function SolutionsList() {
    const solutions = await getSolutions();
  return (
      <div className="grid gap-8 lg:gap-12">
          {solutions.slice(0, 2).map((solution, index) => {
              return (
                  <SolutionCard
                      solution={solution}
                      key={solution.id}
                      variant="compact"
                      showSeparator={index > 0}
                  />
              );
          })}
      </div>
  )
}
