import { Technology } from '@justdiego/types';

interface ProjectOverviewProps {
  attachmentCount: number;
  technologies: Technology[];
  hasDemoUrl: boolean;
}

export default function ProjectOverview({ attachmentCount, technologies, hasDemoUrl }: ProjectOverviewProps) {
  return (
    <div className="bg-gray-50 border-2 border-gray-200 p-6">
      <h4 className="font-bold text-sm text-gray-700 mb-4">PROJECT OVERVIEW:</h4>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Screenshots:</span>
          <span className="font-mono text-gray-900">{attachmentCount} attachments</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Technologies:</span>
          <span className="font-mono text-gray-900">{technologies.length} tools</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Demo Available:</span>
          <span className="font-mono text-gray-900">{hasDemoUrl ? 'Yes' : 'No'}</span>
        </div>
      </div>
    </div>
  );
}
