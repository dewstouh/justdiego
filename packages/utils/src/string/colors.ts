/**
 * Helper function to get hex color from RGB
 */
export function rgbToHex(rgb: { r: number; g: number; b: number }): string {
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

/**
 * Helper function to convert RGB object to CSS RGB string
 */
export function rgbToString(rgb: { r: number; g: number; b: number }): string {
    return `${rgb.r} ${rgb.g} ${rgb.b}`;
}