import Link from 'next/link';

interface AttachmentGalleryProps {
  attachments: string[] | undefined;
  slug: string;
  onImageClick: (imageSrc: string) => void;
}

export default function AttachmentGallery({ attachments, slug, onImageClick }: AttachmentGalleryProps) {
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
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => onImageClick(attachment)}
            >
              <div className="w-full h-24 bg-gray-200 border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-400 mx-auto mb-1 flex items-center justify-center">
                    <span className="text-white text-xs">📷</span>
                  </div>
                  <span className="text-xs text-gray-600 font-mono">
                    Attachment {index + 1}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-white text-xs font-bold bg-black bg-opacity-50 px-2 py-1">
                  Click to view
                </span>
              </div>
            </div>
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
