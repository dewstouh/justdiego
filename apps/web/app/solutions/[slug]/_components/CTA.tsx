import Link from 'next/link';

export default function CTA() {
  return (
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
  );
}
