"use client";

import Attachment from '@/components/Attachment';

interface AttachmentGalleryProps {
  attachments: string[];
}

export default function AttachmentGallery({ attachments }: AttachmentGalleryProps) {
  if (!attachments || attachments.length === 0) {
    return null;
  }

  const getGridCols = () => {
    const count = attachments.length;
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <div className={`space-y-4`}>
      <h5 className="font-bold text-sm text-gray-700 mb-4">EVIDENCE:</h5>
      <div className={`grid ${getGridCols()} gap-4`}>
        {attachments.map((attachment, index) => (
          <Attachment
            key={index}
            attachment={attachment}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
