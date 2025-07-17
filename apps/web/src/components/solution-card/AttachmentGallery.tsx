"use client";

import Attachment from '@/components/Attachment';

interface AttachmentGalleryProps {
  attachments: string[];
}

export default function AttachmentGallery({ attachments }: AttachmentGalleryProps) {
  if (!attachments || attachments.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-4`}>
      <h5 className="font-bold text-sm text-gray-700 mb-4">EVIDENCE:</h5>
      <div className="grid grid-cols-3 gap-4">
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
