import Link from 'next/link';
import Section from './Section';
import { Suspense } from 'react';
import SolutionsList from './solutions/SolutionsList';

export default async function Solutions() {
  try {

    return (
      <Section id="solutions" className='bg-primary text-gray-900'>
        <Section.Header
          title="SOLUTIONS IN ACTION"
          description="Identifying problems. Delivering solutions. Automating outcomes."
          note="(This section is always up-to-date with the latest work delivered.)"
        />

        <Section.Content>
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded m-4"></div>}>
            <SolutionsList />
          </Suspense>
        </Section.Content>

        <Section.Footer>
          <Link
            href="/solutions"
            className="inline-block bg-primary text-gray-900 px-8 py-3 border-2 border-gray-300 font-bold hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            VIEW ALL SOLUTIONS →
          </Link>
        </Section.Footer>
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
