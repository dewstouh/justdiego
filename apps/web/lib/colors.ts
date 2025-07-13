/**
 * Primary Color Configuration
 * 
 * To change the primary color of your website:
 * 1. Update the RGB values below to your desired color
 * 2. The colors will automatically update throughout the site
 * 
 * Current color: #fbfbfc (very light gray)
 */

export const PRIMARY_COLOR_CONFIG = {
  // RGB values for the primary color (without the rgb() wrapper)
  // Current: 251, 251, 252 (#fbfbfc)
  r: 251,
  g: 251,
  b: 252,
  
  // You can also define different shades if needed
  shades: {
    50: { r: 254, g: 254, b: 254 },   // Very light
    100: { r: 251, g: 251, b: 252 },  // Main color (fbfbfc)
    200: { r: 244, g: 244, b: 245 },
    300: { r: 229, g: 229, b: 234 },
    400: { r: 207, g: 207, b: 216 },
    500: { r: 161, g: 161, b: 170 },
    600: { r: 113, g: 113, b: 122 },
    700: { r: 82, g: 82, b: 91 },
    800: { r: 63, g: 63, b: 70 },
    900: { r: 39, g: 39, b: 42 },
    950: { r: 24, g: 24, b: 27 },
  }
};

/**
 * Helper function to convert RGB object to CSS RGB string
 */
export function rgbToString(rgb: { r: number; g: number; b: number }): string {
  return `${rgb.r} ${rgb.g} ${rgb.b}`;
}

/**
 * Helper function to get hex color from RGB
 */
export function rgbToHex(rgb: { r: number; g: number; b: number }): string {
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}
