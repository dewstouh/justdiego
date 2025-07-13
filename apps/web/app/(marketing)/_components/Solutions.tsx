'use client';

import Link from 'next/link';
import { getSolutions } from '@justdiego/react-utils';
import SolutionCard from '../../../components/SolutionCard';

export default function Solutions() {
  const solutions = getSolutions();

  return (
    <section id='solutions' className="w-full max-w-[55rem] mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          SOLUTIONS IN ACTION
        </h2>
        <div className="w-32 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identifying problems. Delivering solutions. Automating outcomes.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            (This section is always up-to-date with the latest work delivered.)
          </p>
      </div>

      {/* Solutions Grid */}
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

      {/* Show More Button */}
      {solutions.length > 2 && (
        <div className="text-center mt-20">
          <div className="w-full border-t border-gray-200 mb-8"></div>
          <Link
            href="/solutions"
            className="inline-block bg-white text-gray-900 px-8 py-3 border-2 border-gray-300 font-bold hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            VIEW ALL SOLUTIONS →
          </Link>
        </div>
      )}

    </section>
  );
}
