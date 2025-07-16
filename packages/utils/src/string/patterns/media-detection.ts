// Utility functions for media type detection

/**
 * Detects the media type based on URL patterns and file extensions
 * @param url - The URL to analyze
 * @returns The detected media type: 'image', 'video', or 'unknown'
 */
export function getMediaType(url: string): 'image' | 'video' | 'unknown' {
  // Check for image extensions anywhere in the URL (including GIF)
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|bmp)/i;
  if (imageExtensions.test(url)) {
    return 'image';
  }

  // Check for video platforms and extensions anywhere in the URL
  // Note: GIF is excluded from video patterns since we treat it as image above
  const videoPatterns = [
    /youtube\.com\/watch\?v=/i,
    /youtu\.be\//i,
    /vimeo\.com\//i,
    /imgur\.com\/.*\.(mp4|webm)/i, // Removed gif from here since it's handled as image
    /\.(mp4|webm|mov|avi|mkv)/i,
    /dailymotion\.com\//i,
    /twitch\.tv\//i
  ];

  if (videoPatterns.some(pattern => pattern.test(url))) {
    return 'video';
  }

  return 'unknown';
}

/**
 * Image file extension patterns (matches anywhere in URL)
 */
export const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|bmp)/i;

/**
 * Video platform and file extension patterns (matches anywhere in URL)
 * Note: GIF is excluded since it's treated as an image format
 */
export const VIDEO_PATTERNS = [
  /youtube\.com\/watch\?v=/i,
  /youtu\.be\//i,
  /vimeo\.com\//i,
  /imgur\.com\/.*\.(mp4|webm)/i, // Removed gif from here
  /\.(mp4|webm|mov|avi|mkv)/i,
  /dailymotion\.com\//i,
  /twitch\.tv\//i
] as const;
