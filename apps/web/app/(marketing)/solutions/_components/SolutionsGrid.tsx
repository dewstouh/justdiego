import { Solution } from "@justdiego/types";
import SolutionCard from "../../../../components/SolutionCard";

export default function SolutionsGrid({ solutions }: { solutions: Solution[] }) {
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
