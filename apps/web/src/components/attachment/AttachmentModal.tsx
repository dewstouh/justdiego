"use client";

import { getMediaType, getVideoEmbedUrl, isEmbeddableVideo } from '@justdiego/utils';
import Image from 'next/image';
import { useState } from 'react';

interface AttachmentModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

export default function AttachmentModal({ selectedImage, onClose }: AttachmentModalProps) {
  const [imageError, setImageError] = useState(false);

  if (!selectedImage) return null;

  const mediaType = getMediaType(selectedImage);
  const isVideo = mediaType === 'video';
  const isEmbeddable = isVideo && isEmbeddableVideo(selectedImage);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 pixelated-backdrop flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[70vw] max-h-full" onClick={handleContentClick}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 text-2xl font-bold bg-neutral-200 opacity-90 cursor-pointer w-10 h-10 border-2 border-white-900 flex items-center justify-center hover:bg-opacity-100 z-10"
        >
          ×
        </button>
        <div className="bg-primary border-4 border-gray-300 p-4 max-h-[90vh] overflow-auto">
          {isVideo && isEmbeddable ? (
            // Embeddable video (YouTube, Vimeo)
            <div className="w-[65vw] mx-auto">
              <div className="relative " style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={getVideoEmbedUrl(selectedImage)}
                  className="absolute top-0 left-0 w-full h-full border-2 border-gray-300"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          ) : isVideo ? (
            // Direct video URL
            <div className="w-full mx-auto">
              <video
                controls
                className="w-full h-auto border-2 border-gray-300 bg-black"
                preload="metadata"
              >
                <source src={selectedImage} type="video/mp4" />
                <source src={selectedImage} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : mediaType === 'image' ? (
            // Image
            <div className="w-full mx-auto">
              {!imageError ? (
                <Image
                  width={1200}
                  height={800}
                  src={selectedImage}
                  alt="Attachment"
                  className="w-full h-auto border-2 border-gray-300 bg-gray-100"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-96 bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 mx-auto mb-4 flex items-center justify-center text-2xl">
                      📷
                    </div>
                    <p className="text-gray-600 font-mono text-sm mb-2">Image could not be loaded</p>
                    <p className="text-xs text-gray-500 break-all">
                      {selectedImage}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Unknown media type - render as iframe
            <div className="w-[65vw] mx-auto">
              <div className="border-2 border-gray-300 bg-gray-100">
                <div className="relative w-full h-[60vh]">
                  <iframe
                    src={selectedImage}
                    className="w-full h-full"
                    title="Attachment Viewer"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 font-mono text-sm mb-2">Attachment Preview</p>
                <a
                  href={selectedImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-4 py-2 border-2 border-gray-900 font-bold hover:bg-primary transition-all duration-200 text-sm"
                >
                  Open in New Tab →
                </a>
              </div>
            </div>
          )}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 font-mono">
              Click outside or the × button to close
            </p>
            {selectedImage && (
              <p className="text-xs text-gray-500 mt-2 break-all">
                {selectedImage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
