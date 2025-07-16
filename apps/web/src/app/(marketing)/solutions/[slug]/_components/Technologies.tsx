import { Technology } from '@justdiego/types';

interface TechnologiesProps {
  technologies: Technology[];
}

export default function Technologies({ technologies }: TechnologiesProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech.id}
            className="px-4 py-2 bg-gray-900 text-white font-mono text-sm border-2 border-gray-900"
            style={{ backgroundColor: tech.color, borderColor: tech.color }}
          >
            {tech.iconUrl} {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
