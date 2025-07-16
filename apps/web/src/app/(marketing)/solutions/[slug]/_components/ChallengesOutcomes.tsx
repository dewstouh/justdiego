interface ComponentProps {
  challenges: string[];
  outcomes: string[];
}

export default function ChallengesOutcomes({ challenges, outcomes }: ComponentProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges Overcome</h2>
        <ul className="space-y-3">
          {challenges.map((challenge, index) => (
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
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
