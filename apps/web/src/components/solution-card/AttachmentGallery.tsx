import Link from 'next/link';
import Attachment from '@/components/Attachment';

interface AttachmentGalleryProps {
  attachments: string[] | undefined;
  slug: string;
}

export default function AttachmentGallery({ attachments, slug }: AttachmentGalleryProps) {

  if (!attachments || attachments.length === 0) {
    return (
      <div className="text-center">
        <Link
          href={`/solutions/${slug}`}
          className="inline-block bg-gray-900 text-white px-8 py-3 border-2 border-gray-900 font-bold hover:bg-primary transition-all duration-200"
        >
          VIEW STUDY CASE →
        </Link>
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
      <div className="text-center">
        <Link
          href={`/solutions/${slug}`}
          className="inline-block bg-gray-900 text-white px-8 py-3 border-2 border-gray-900 font-bold hover:bg-primary  transition-all duration-200"
        >
          VIEW STUDY CASE →
        </Link>
      </div>
    </>
  );
}
