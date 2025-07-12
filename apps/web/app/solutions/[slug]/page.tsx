import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getSolution, getSolutions } from '@justdiego/react-utils';
import { formatDate } from '@justdiego/utils';

export async function generateStaticParams() {
  const solutions = getSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: `${solution.project} - ${solution.company} Case Study | Diego Rodriguez`,
    description: solution.shortDescription,
    keywords: solution.tags.join(', '),
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>→</span>
            <Link href="/solutions" className="hover:text-gray-900">Solutions</Link>
            <span>→</span>
            <span className="text-gray-900">{solution.company}</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <a 
              href={solution.companyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-12 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600 hover:border-gray-900"
            >
              {solution.company.split(' ').map(word => word[0]).join('')}
            </a>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {solution.project}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-lg">{solution.countryFlag}</span>
                <a 
                  href={solution.companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-gray-900"
                >
                  {solution.company}
                </a>
                <span>•</span>
                <span>{solution.country}</span>
                <span>•</span>
                <span>{formatDate(solution.completedDate)}</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {solution.fullDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {solution.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-mono bg-gray-200 border border-gray-400 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Result */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-red-50 border-2 border-red-200 p-6">
            <h2 className="font-bold text-lg text-red-700 mb-4">THE PROBLEM</h2>
            <p className="text-red-900 leading-relaxed">{solution.problem}</p>
          </div>
          
          <div className="bg-green-50 border-2 border-green-200 p-6">
            <h2 className="font-bold text-lg text-green-700 mb-4">THE RESULT</h2>
            <p className="text-green-900 leading-relaxed">{solution.result}</p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
          <div className="grid gap-6">
            {solution.technicalDetails.map((detail, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{detail.title}</h3>
                <p className="text-gray-700 leading-relaxed">{detail.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Outcomes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges Overcome</h2>
            <ul className="space-y-3">
              {solution.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes</h2>
            <ul className="space-y-3">
              {solution.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {solution.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-900 text-white font-mono text-sm border-2 border-gray-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Client Review */}
        <div className="bg-white border-2 border-gray-900 p-8 mb-12">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>
          <blockquote className="text-gray-900 font-medium text-xl mb-6 leading-relaxed">
            &ldquo;{solution.review}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-300 border-2 border-gray-400 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-mono">IMG</span>
            </div>
            <div>
              <cite className="text-gray-900 font-semibold">{solution.reviewer}</cite>
              <p className="text-gray-600">{solution.company}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Similar Results for Your Project?
            </h2>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss how we can solve your specific challenges and automate your outcomes.
            </p>
            <a
              href="mailto:hello@justdiego.com"
              className="inline-block bg-gray-900 text-white px-8 py-3 border-2 border-gray-900 font-bold hover:bg-white hover:text-gray-900 transition-all duration-200 mr-4"
            >
              START YOUR PROJECT →
            </a>
            <Link
              href="/solutions"
              className="inline-block bg-white text-gray-900 px-8 py-3 border-2 border-gray-300 font-bold hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
            >
              VIEW MORE SOLUTIONS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
