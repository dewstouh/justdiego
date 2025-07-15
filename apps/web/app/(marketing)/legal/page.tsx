import Link from 'next/link';
import { CTAButton } from '@justdiego/ui/button';
import { getDocuments } from '../../../lib/data/document';
import { notFound } from 'next/navigation';
import { SimplePage, createPageMetadata } from '../../../components/Page';

export const metadata = createPageMetadata(
  "Legal Documents",
  "Access all legal documents including Privacy Policy, Terms of Service, and Legal Notice for JustDiego technology solutions.",
  "/legal"
);

export default async function LegalPage() {
  const legalDocuments = await getDocuments({type: 'LEGAL'});
  if(!legalDocuments) return notFound();
  
  return (
    <SimplePage config={{
      title: "Legal Documents",
      description: "Access our legal documents including privacy policy, terms of service, and company information.",
      note: "All documents are regularly updated to ensure compliance and transparency."
    }}>
      <div className="grid gap-6 md:gap-8">
        {legalDocuments.map((document) => (
          <Link 
            key={document.id}
            href={`/legal/${document.slug}`}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer block"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {document.title}
                </h2>
                <span className="text-sm text-gray-500 ml-4">
                  Updated: {new Date(document.updatedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {document.description}
              </p>
              
              <div className="pt-2">
                <span className="inline-flex items-center text-blue-600 font-medium">
                  Read Full Document
                  <svg 
                    className="ml-1 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Questions or Concerns?
        </h3>
        <p className="text-gray-600 mb-4">
          If you have any questions about our legal documents or need clarification on any terms, 
          please don&apos;t hesitate to reach out to us.
        </p>
        <CTAButton 
          href="/contact"
          variant="primary"
          className="w-auto"
        >
          Contact Us
        </CTAButton>
      </div>
    </SimplePage>
  );
}