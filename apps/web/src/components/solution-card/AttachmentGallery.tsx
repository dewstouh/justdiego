"use client";

import Link from 'next/link';
import Attachment from '@/components/Attachment';
import { useAdminAuth } from '@/lib/admin-auth';

interface AttachmentGalleryProps {
  attachments: string[] | undefined;
  slug: string;
  solutionId?: string;
}

export default function AttachmentGallery({ attachments, slug, solutionId }: AttachmentGalleryProps) {
  const { isAdmin } = useAdminAuth();

  if (!attachments || attachments.length === 0) {
    return (
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
    );
  }

  return (
    <>
      <div className="space-y-3">
        <h5 className="font-bold text-sm text-gray-700 mb-3">ATTACHMENTS:</h5>
        <div className="grid grid-cols-3 gap-2">
          {attachments.map((attachment, index) => (
            <Attachment
              key={index}
              attachment={attachment}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Demo Button */}
      <div className="text-center space-y-3">
        <Link
          href={`/solutions/${slug}`}
          className="inline-block bg-gray-900 text-white px-8 py-3 border-2 border-gray-900 font-bold hover:bg-primary  transition-all duration-200"
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
    </>
  );
}
