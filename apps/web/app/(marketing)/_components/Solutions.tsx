import Link from 'next/link';
import SolutionCard from '../../../components/SolutionCard';
import Section from './Section';
import { getSolutions } from '../../../lib/data/solution';

export default async function Solutions() {
  try {
    console.log('Solutions component: Starting to fetch solutions...');
    const solutions = await getSolutions();
    console.log('Solutions component: Successfully fetched solutions:', solutions.length);

    return (
      <Section id="solutions" className='bg-primary text-gray-900'>
        <Section.Header
          title="SOLUTIONS IN ACTION"
          description="Identifying problems. Delivering solutions. Automating outcomes."
          note="(This section is always up-to-date with the latest work delivered.)"
        />

        <Section.Content>
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
  } catch (error) {
    console.error('Solutions component error:', error);
    return (
      <Section id="solutions" className='bg-primary text-gray-900'>
        <Section.Header
          title="SOLUTIONS IN ACTION"
          description="Identifying problems. Delivering solutions. Automating outcomes."
          note="(This section is always up-to-date with the latest work delivered.)"
        />
        <Section.Content>
          <div className="text-center py-8">
            <p>Unable to load solutions at this time. Please check back later.</p>
          </div>
        </Section.Content>
      </Section>
    );
  }
}
