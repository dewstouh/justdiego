"use client";

import Link from 'next/link';
import { useAdminAuth } from '@/lib/admin-auth';

interface SolutionActionsProps {
  slug: string;
  solutionId?: string;
}

export default function SolutionActions({ solutionId }: SolutionActionsProps) {
  const { isAdmin } = useAdminAuth();

  return (
    <div className="text-center space-y-3">
      
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
  );
}
