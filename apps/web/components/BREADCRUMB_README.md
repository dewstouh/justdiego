# Automatic Breadcrumb System

The automatic breadcrumb system generates breadcrumbs based on the current URL path without any manual configuration.

## Usage

### Basic Auto Breadcrumb (Client Component)
```tsx
import { AutoBreadcrumb } from '../../../components';

export default function MyPage() {
  return (
    <div>
      <AutoBreadcrumb />
      {/* Rest of your page */}
    </div>
  );
}
```

### With Custom Labels
```tsx
<AutoBreadcrumb 
  customLabels={{
    'about': 'About Us',
    'contact': 'Get In Touch',
    'solutions': 'Our Work'
  }} 
/>
```

### Hide Home Breadcrumb
```tsx
<AutoBreadcrumb hideHome={true} />
```

## How it works

1. **Automatic Path Detection**: Reads the current URL path using `usePathname()`
2. **Smart Formatting**: Converts URL segments to readable labels:
   - `kebab-case` → `Kebab Case`
   - `snake_case` → `Snake Case`
   - Capitalizes each word
3. **Custom Labels**: Override default formatting with `customLabels` prop
4. **Dynamic Links**: Automatically creates proper href values for each breadcrumb level

## Examples

| URL | Generated Breadcrumb |
|-----|---------------------|
| `/` | (none) |
| `/solutions` | Home → Solutions |
| `/solutions/acme-corp` | Home → Solutions → Acme Corp |
| `/about/team` | Home → About → Team |

## Custom Labels Example

For `/solutions/acme-corp-website` with:
```tsx
customLabels={{
  'acme-corp-website': 'ACME Corporation'
}}
```

Result: `Home → Solutions → ACME Corporation`
