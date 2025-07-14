// Utility functions for media icons and labels
import { getMediaType } from './media-detection';

/**
 * Media type to icon mapping
 */
export const MEDIA_ICONS = {
  video: '🎥',
  image: '📷',
  unknown: '📎'
} as const;

/**
 * Media type to label prefix mapping
 */
export const MEDIA_LABEL_PREFIXES = {
  video: 'Video',
  image: 'Image',
  unknown: 'Attachment'
} as const;

/**
 * Gets an appropriate icon for a media URL
 * @param url - The media URL
 * @returns An emoji icon representing the media type
 */
export function getMediaIcon(url: string): string {
  const mediaType = getMediaType(url);
  return MEDIA_ICONS[mediaType];
}

/**
 * Generates a descriptive label for a media item
 * @param url - The media URL
 * @param index - The index of the media item (0-based)
 * @returns A formatted label for the media item
 */
export function getMediaLabel(url: string, index: number): string {
  const mediaType = getMediaType(url);
  const prefix = MEDIA_LABEL_PREFIXES[mediaType];
  return `${prefix} ${index + 1}`;
}
