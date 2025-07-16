import { TechnicalDetail } from "@justdiego/types";

interface TechnicalDetailsProps {
  technicalDetails: TechnicalDetail[];
}

export default function TechnicalDetails({ technicalDetails }: TechnicalDetailsProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
      <div className="grid gap-6">
        {technicalDetails.map((detail, index) => {
            const { title, content } = detail;
            return (
            <div key={index} className="bg-white border-2 border-gray-200 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{content}</p>
            </div>

            )
        })
        }
      </div>
    </div>
  );
}
