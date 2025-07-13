import { Solution } from '@justdiego/types';

interface ProblemResultProps {
    problem: Solution['problem'];
    result: Solution['result'];
}

export default function ProblemResult({ problem, result }: ProblemResultProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-red-50 border-2 border-red-200 p-6">
        <h2 className="font-bold text-lg text-red-700 mb-4">THE PROBLEM</h2>
        <p className="text-red-900 leading-relaxed">{problem}</p>
      </div>
      
      <div className="bg-green-50 border-2 border-green-200 p-6">
        <h2 className="font-bold text-lg text-green-700 mb-4">THE RESULT</h2>
        <p className="text-green-900 leading-relaxed">{result}</p>
      </div>
    </div>
  );
}
