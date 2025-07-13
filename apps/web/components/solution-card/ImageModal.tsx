interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

export default function ImageModal({ selectedImage, onClose }: ImageModalProps) {
  if (!selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 pixelated-backdrop flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 text-2xl font-bold bg-white bg-opacity-90 w-10 h-10 border-2 border-gray-900 flex items-center justify-center hover:bg-opacity-100 z-10"
        >
          ×
        </button>
        <div className="bg-white border-4 border-gray-300 p-4 max-h-[90vh] overflow-auto">
          <div className="w-full h-96 bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-400 mx-auto mb-4 flex items-center justify-center text-2xl">
                📷
              </div>
              <p className="text-gray-600 font-mono text-sm mb-2">Screenshot Preview</p>
              <p className="text-xs text-gray-500">
                {selectedImage}
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 font-mono">
              Click outside or the × button to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
