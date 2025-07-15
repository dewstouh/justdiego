import SolutionCard from "../../../../components/SolutionCard";
import { getSolutions } from "../../../../lib/data/solution";

export default async function SolutionsList() {
  const solutions = await getSolutions();
  return (
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
  )
}
