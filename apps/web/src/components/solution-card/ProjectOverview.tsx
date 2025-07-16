"use client";

import Link from 'next/link';
import { Technology } from '@justdiego/types';
import { useAdminAuth } from '@/lib/admin-auth';

interface ProjectOverviewProps {
  attachmentCount: number;
  technologies: Technology[];
  hasDemoUrl: boolean;
  slug: string;
  solutionId?: string;
}

export default function ProjectOverview({ attachmentCount, technologies, hasDemoUrl, slug, solutionId }: ProjectOverviewProps) {
  const { isAdmin } = useAdminAuth();

  return (
    <div className="space-y-4">
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

      <div className="text-center space-y-3">
        <Link
          href={`/solutions/${slug}`}
          className="inline-block bg-gray-900 text-white px-8 py-3 border-2 border-gray-900 font-bold hover:bg-primary transition-all duration-200"
        >
          VIEW STUDY CASE →
        </Link>
        
        {isAdmin && solutionId && (
          <div className="flex gap-3 justify-center">
            <Link
              href={`/admin/solutions/edit/${solutionId}`}
              className="inline-block bg-blue-600 text-white px-6 py-2 border-2 border-blue-600 font-bold text-sm hover:bg-blue-700 transition-all duration-200"
            >
              MANAGE SOLUTION
            </Link>
            <Link
              href="/admin"
              className="inline-block bg-green-600 text-white px-6 py-2 border-2 border-green-600 font-bold text-sm hover:bg-green-700 transition-all duration-200"
            >
              ADD SOLUTION
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
