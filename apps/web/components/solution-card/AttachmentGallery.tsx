import Link from 'next/link';
import Image from 'next/image';
import { getMediaIcon, getMediaLabel, getMediaType } from '@justdiego/utils';
import { useState } from 'react';

interface AttachmentGalleryProps {
  attachments: string[] | undefined;
  slug: string;
  onImageClick: (imageSrc: string) => void;
}

export default function AttachmentGallery({ attachments, slug, onImageClick }: AttachmentGalleryProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set([...prev, index]));
  };

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
          {attachments.map((attachment, index) => {
            const mediaType = getMediaType(attachment);
            const hasImageError = imageErrors.has(index);
            const isImage = mediaType === 'image' && !hasImageError;
            const isVideo = mediaType === 'video';
            
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => onImageClick(attachment)}
              >
                <div className="w-full h-24 bg-gray-200 border-2 border-gray-300 hover:border-gray-900 group-hover:bg-gray-100 transition-colors overflow-hidden">
                  {isImage ? (
                    <Image
                      src={attachment}
                      alt={`Attachment ${index + 1}`}
                      width={120}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                    />
                  ) : isVideo ? (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center mb-2">
                          <span className="text-gray-800 text-sm ml-0.5">▶</span>
                        </div>
                        <span className="text-xs text-white font-mono text-center">
                          Video {index + 1}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gray-400 mx-auto mb-1 flex items-center justify-center">
                          <span className="text-white text-xs">{getMediaIcon(attachment)}</span>
                        </div>
                        <span className="text-xs text-gray-600 font-mono">
                          {getMediaLabel(attachment, index)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-white text-xs font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
                    Click to view
                  </span>
                </div>
              </div>
            );
          })}
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
