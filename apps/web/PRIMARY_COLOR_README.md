# Primary Color System

This project uses a centralized color system that allows you to easily change the primary color throughout the entire website.

## Current Primary Color
- **Color**: `#fbfbfc` (very light gray)
- **RGB**: `251, 251, 252`

## How to Change the Primary Color

### Method 1: CSS Variables (Recommended)
Edit the CSS variables in `app/globals.css`:

```css
:root {
  /* Change these RGB values to your desired color */
  --color-primary: 251 251 252; /* Main primary color */
  --color-primary-100: 251 251 252; /* Your desired primary color */
  
  /* You can also adjust the other shades if needed */
  --color-primary-50: 254 254 254;
  --color-primary-200: 244 244 245;
  /* ... etc */
}
```

### Method 2: Configuration File
Use the helper in `lib/colors.ts`:

```typescript
export const PRIMARY_COLOR_CONFIG = {
  r: 251, // Red value (0-255)
  g: 251, // Green value (0-255)  
  b: 252, // Blue value (0-255)
};
```

## What Gets Updated

When you change the primary color, these elements will automatically update:

- ✅ Page backgrounds (replaces `bg-white`)
- ✅ Navigation bar backgrounds
- ✅ Card backgrounds
- ✅ Modal backgrounds
- ✅ Button hover states
- ✅ Form backgrounds
- ✅ All components that previously used `bg-white`

## Usage in Components

Instead of using `bg-white`, components now use:
- `bg-primary` - for the main primary color
- `bg-primary/90` - for semi-transparent backgrounds
- `hover:bg-primary` - for hover states

## Example Color Changes

To change to a light blue:
```css
--color-primary: 239 246 255; /* Light blue */
```

To change to a warm white:
```css
--color-primary: 255 253 250; /* Warm white */
```

To change to a cool gray:
```css
--color-primary: 248 250 252; /* Cool gray */
```

## Notes

- Colors are defined using space-separated RGB values (without commas)
- This format is required for Tailwind CSS opacity modifiers to work
- The system maintains all existing hover and interaction states
- No component changes are needed when updating the primary color
