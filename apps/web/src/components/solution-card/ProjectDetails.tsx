interface ProjectDetailsProps {
  title: string;
  shortDescription?: string;
  problem: string;
  result: string;
  slug: string;
  variant: 'compact' | 'full';
}

export default function ProjectDetails({ 
  title, 
  shortDescription, 
  problem, 
  result, 
  variant,
}: ProjectDetailsProps) {
  return (
    <div>
      <h4 className="font-bold text-lg lg:text-xl text-gray-900 mb-3">
        {variant === 'compact' ? `Objective: ${title}` : title}
      </h4>

      {variant === 'full' && shortDescription && (
        <p className="text-gray-600 mb-4 leading-relaxed">
          {shortDescription}
        </p>
      )}

      <div className="bg-red-50 border-2 border-red-200 p-4 mb-4">
        <h5 className="font-bold text-sm text-red-700 mb-2">PROBLEM:</h5>
        <p className="text-red-900 font-mono text-sm">{problem}</p>
      </div>
      
      <div className="bg-green-50 border-2 border-green-200 p-4 mb-4 lg:mb-6">
        <h5 className="font-bold text-sm text-green-700 mb-2">RESULT:</h5>
        <p className="text-green-900 font-mono text-sm">{result}</p>
      </div>

    </div>
  );
}
