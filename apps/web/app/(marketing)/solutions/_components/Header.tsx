import PDFButton from '../../../../components/PDFButton';
import { getSolutions } from '../../../../lib/data/solution';

export default async function Header() {
  const solutions = await getSolutions();

  return (
        <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ALL SOLUTIONS
            </h1>
            <div className="w-32 h-1 bg-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
                Detailed case studies of problems solved, solutions delivered, and outcomes automated.
            </p>
            <p className="text-sm text-gray-400 mb-6">
                Each solution includes technical implementation details, results metrics, and client testimonials.
            </p>
            
            {/* Download All PDFs Button */}
            <div className="flex justify-center">
              <PDFButton 
                solutions={solutions}
                size="lg"
                className="bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-gray-900"
              >
                DOWNLOAD ALL SOLUTIONS PDFs
              </PDFButton>
            </div>
        </div>
    )
}
