// Utility functions for media type detection

/**
 * Detects the media type based on URL patterns and file extensions
 * @param url - The URL to analyze
 * @returns The detected media type: 'image', 'video', or 'unknown'
 */
export function getMediaType(url: string): 'image' | 'video' | 'unknown' {
  // Check for image extensions
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i;
  if (imageExtensions.test(url)) {
    return 'image';
  }

  // Check for video platforms and extensions
  const videoPatterns = [
    /youtube\.com\/watch\?v=/i,
    /youtu\.be\//i,
    /vimeo\.com\//i,
    /imgur\.com\/.*\.(mp4|webm|gif)$/i,
    /\.(mp4|webm|mov|avi|mkv)$/i,
    /dailymotion\.com\//i,
    /twitch\.tv\//i
  ];

  if (videoPatterns.some(pattern => pattern.test(url))) {
    return 'video';
  }

  return 'unknown';
}

/**
 * Image file extension patterns
 */
export const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i;

/**
 * Video platform and file extension patterns
 */
export const VIDEO_PATTERNS = [
  /youtube\.com\/watch\?v=/i,
  /youtu\.be\//i,
  /vimeo\.com\//i,
  /imgur\.com\/.*\.(mp4|webm|gif)$/i,
  /\.(mp4|webm|mov|avi|mkv)$/i,
  /dailymotion\.com\//i,
  /twitch\.tv\//i
] as const;
