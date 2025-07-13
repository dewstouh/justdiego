import Link from 'next/link';
import { getSolutions } from '@justdiego/react-utils';
import SolutionCard from '../../../components/SolutionCard';
import Section from './Section';

export default function Solutions() {
  const solutions = getSolutions();

  return (
    <Section id="solutions" className='bg-primary text-gray-900'>
      <Section.Header
        title="SOLUTIONS IN ACTION"
        description="Identifying problems. Delivering solutions. Automating outcomes."
        note="(This section is always up-to-date with the latest work delivered.)"
      />

      <Section.Content>
        <div className="grid gap-8 lg:gap-12">
          {solutions.slice(0, 2).map((solution, index) => (
            <SolutionCard 
              key={solution.id} 
              solution={solution} 
              variant="compact"
              showSeparator={index > 0}
            />
          ))}
        </div>
      </Section.Content>

      {solutions.length > 2 && (
        <Section.Footer>
          <Link
            href="/solutions"
            className="inline-block bg-primary text-gray-900 px-8 py-3 border-2 border-gray-300 font-bold hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            VIEW ALL SOLUTIONS →
          </Link>
        </Section.Footer>
      )}
    </Section>
  );
}
