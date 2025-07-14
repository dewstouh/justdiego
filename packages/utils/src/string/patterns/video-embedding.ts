// Utility functions for video URL processing and embedding

/**
 * YouTube URL patterns for matching and extracting video IDs
 */
export const YOUTUBE_PATTERNS = {
  watch: /youtube\.com\/watch\?v=([^&\n?#]+)/,
  short: /youtu\.be\/([^&\n?#]+)/,
  combined: /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
} as const;

/**
 * Patterns for embeddable video platforms
 */
export const EMBEDDABLE_VIDEO_PATTERNS = [
  /youtube\.com\/watch\?v=/i,
  /youtu\.be\//i,
  /vimeo\.com\//i,
  /dailymotion\.com\//i
] as const;

/**
 * Converts a video URL to its embeddable version
 * @param url - The original video URL
 * @returns The embeddable URL or the original URL if not supported
 */
export function getVideoEmbedUrl(url: string): string {
  // YouTube
  const youtubeMatch = url.match(YOUTUBE_PATTERNS.combined);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // For direct video URLs or other platforms, return as is
  return url;
}

/**
 * Checks if a video URL can be embedded
 * @param url - The video URL to check
 * @returns True if the video can be embedded, false otherwise
 */
export function isEmbeddableVideo(url: string): boolean {
  return EMBEDDABLE_VIDEO_PATTERNS.some(pattern => pattern.test(url));
}
