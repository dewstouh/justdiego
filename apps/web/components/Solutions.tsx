interface SolutionCase {
  id: string;
  project: string;
  company: string;
  companyHref: string;
  country: string;
  countryFlag: string;
  companyLogo: string;
  result: string;
  review: string;
  reviewer: string;
  reviewerAvatar: string;
  demoUrl?: string;
  tags: string[];
}

const solutionCases: SolutionCase[] = [
  {
    id: '1',
    project: 'Automated CI/CD Pipeline',
    company: 'TechFlow Commerce',
    companyHref: 'https://techflow.com',
    country: 'United States',
    countryFlag: '🇺🇸',
    companyLogo: '/company-logos/techflow.svg',
    result: 'Reduced deploy time from 15 min to 2 min (7x faster)',
    review: 'Deploys are now effortless and 7x faster. Changed the way our team works.',
    reviewer: 'Sarah Chen, CTO',
    reviewerAvatar: '/avatars/sarah-chen.jpg',
    demoUrl: 'https://demo.techflow.com',
    tags: ['CI/CD', 'DevOps', 'Automation']
  },
  {
    id: '2',
    project: 'Modular Discord Bot',
    company: 'Niby Gaming',
    companyHref: 'https://niby.gg',
    country: 'Canada',
    countryFlag: '🇨🇦',
    companyLogo: '/company-logos/niby.svg',
    result: 'Enabled moderation and logging for 2,000+ users with 99% uptime',
    review: '99% uptime. We never worry about downtime anymore.',
    reviewer: 'Alex Morrison, Community Manager',
    reviewerAvatar: '/avatars/alex-morrison.jpg',
    demoUrl: 'https://discord.gg/niby',
    tags: ['Discord Bot', 'Moderation', 'Community']
  },
  {
    id: '3',
    project: 'Data Analytics Dashboard',
    company: 'InsightCorp',
    companyHref: 'https://insightcorp.io',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    companyLogo: '/company-logos/insight.svg',
    result: 'Automated reporting saved 20 hours/week of manual work',
    review: 'Our decision-making speed increased dramatically. The insights are crystal clear.',
    reviewer: 'James Potter, Head of Analytics',
    reviewerAvatar: '/avatars/james-potter.jpg',
    demoUrl: 'https://dashboard.insightcorp.com',
    tags: ['Analytics', 'Dashboard', 'Automation']
  }
];

export default function Solutions() {
  return (
    <section className="w-full max-w-[55rem] mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          SOLUTIONS IN ACTION
        </h2>
        <div className="w-32 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real results from real businesses. See how custom automation and solutions 
          have impacted companies worldwide.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid gap-8 lg:gap-12">
        {solutionCases.map((solution) => (
          <div key={solution.id} className="relative">
            {/* Separator Line */}
            <div className="w-full border-t-2 border-gray-400 mb-8 relative">
              <div className="absolute left-0 top-0 w-8 h-0.5 bg-gray-900"></div>
              <div className="absolute right-0 top-0 w-8 h-0.5 bg-gray-900"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Project Info */}
              <div className="space-y-6">
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6">
                  <a 
                    href={solution.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-32 h-16 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600 hover:border-gray-900 cursor-pointer"
                  >
                    {solution.company.split(' ').map(word => word[0]).join('')}
                  </a>
                  <div>
                    <a 
                      href={solution.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-xl text-gray-900 hover:text-gray-700 cursor-pointer"
                    >
                      {solution.company}
                    </a>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-lg">{solution.countryFlag}</span>
                      <span>{solution.country}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Objective: {solution.project}
                  </h4>
                  
                  <div className="bg-gray-50 border-2 border-gray-200 p-4 mb-4">
                    <h5 className="font-bold text-sm text-gray-700 mb-2">RESULT:</h5>
                    <p className="text-gray-900 font-mono text-sm">{solution.result}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-gray-200 border border-gray-400 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Review & Demo */}
              <div className="space-y-6">
                {/* Review */}
                <div className="bg-white border-2 border-gray-900 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">★</span>
                      ))}
                    </div>
                    <blockquote className="text-gray-900 font-medium text-lg mb-4">
                      &ldquo;{solution.review}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-mono">IMG</span>
                      </div>
                      <cite className="text-sm text-gray-600 font-mono">
                        — {solution.reviewer}
                      </cite>
                    </div>
                  </div>
                </div>

                {/* Demo Button */}
                {solution.demoUrl && (
                  <div className="text-center">
                    <button
                      className="bg-gray-900 text-white px-8 py-3 border-2 border-gray-900 font-bold hover:bg-white hover:text-gray-900"
                    >
                      VIEW CASE →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
