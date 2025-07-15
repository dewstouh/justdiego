# Page Automation Guide

This guide explains the automated solutions created to reduce boilerplate when creating marketing pages.

## Problem Solved

Before automation, every marketing page required repetitive code:

```tsx
// OLD WAY - Lots of repetition
import Page from '../_components/Page';

export default async function MyPage() {
  const data = await getData();

  return (
    <Page>
      <Page.Header
        title="My Page"
        description="Page description"
      />

      <Page.Content>
        <MyContent data={data} />
      </Page.Content>
    </Page>
  );
}
```

## Solutions Provided

### 1. SimplePage Component (Recommended)

The easiest way to create pages with automatic layout and metadata.

```tsx
// NEW WAY - Much cleaner
import { SimplePage, createPageMetadata } from '../_components/SimplePage';

export const metadata = createPageMetadata(
  'My Page',
  'Page description',
  '/my-page'
);

export default async function MyPage() {
  const data = await getData();

  return (
    <SimplePage config={{
      title: "My Page",
      description: "Page description"
    }}>
      <MyContent data={data} />
    </SimplePage>
  );
}
```

### 2. CLI Page Generator

Generate complete pages from the command line:

```bash
# Create a simple page
npm run page:create -- --name "about" --title "About Us" --description "Learn about our company"

# Create a page with data fetching
npm run page:create -- --name "services" --title "Our Services" --dataFetcher "getServices"

# Create a page without metadata
npm run page:create -- --name "simple" --title "Simple Page" --no-metadata
```

### 3. VS Code Snippets

Type these snippets in any `.tsx` file:

- `marketing-page` - Creates a basic marketing page
- `marketing-page-data` - Creates a page with data fetching

### 4. Higher-Order Component (Advanced)

For more complex scenarios where you need to wrap existing components:

```tsx
import { withPageLayout } from '../_components/withPageLayout';
import MyExistingComponent from './MyComponent';

const MyPage = withPageLayout(MyExistingComponent, {
  title: "My Page",
  description: "Page description",
  maxWidth: '6xl'
});

export default MyPage;
```

## Configuration Options

All solutions support these configuration options:

```tsx
interface PageConfig {
  title: string;                    // Required: Page title
  subtitle?: string;                // Optional: Subtitle
  description?: string;             // Optional: Description
  note?: string;                    // Optional: Small note
  showBackHomeButton?: boolean;     // Default: true
  showFooterBorder?: boolean;       // Default: true
  maxWidth?: 'sm' | 'md' | ... ;    // Default: '6xl'
  padding?: 'none' | 'sm' | ... ;   // Default: 'sm'
  background?: 'transparent' | ... ; // Default: 'transparent'
}
```

## Metadata Automation

The `createPageMetadata` function automatically generates SEO-friendly metadata:

```tsx
export const metadata = createPageMetadata(
  'Page Title',           // Becomes "Page Title | JustDiego"
  'Description',          // Meta description
  '/page-path'           // Canonical URL (optional)
);

// Generates:
{
  title: "Page Title | JustDiego",
  description: "Description",
  openGraph: {
    title: "Page Title | JustDiego",
    description: "Description",
    url: "https://justdiego.com/page-path",
    siteName: "JustDiego",
    type: "website",
  },
  robots: "index, follow",
}
```

## Migration Examples

### Before vs After

**Before (Legal Page):**
```tsx
import Page from '../_components/Page';

export const metadata: Metadata = {
  title: "Legal Documents | JustDiego",
  description: "Access all legal documents...",
  openGraph: { /* lots of repetitive config */ },
  robots: "index, follow",
};

export default async function LegalPage() {
  const docs = await getDocuments({type: 'LEGAL'});
  
  return (
    <Page>
      <Page.Header 
        title="Legal Documents"
        description="Access our legal documents..."
        note="All documents are regularly updated..."
      />
      
      <Page.Content>
        {/* content */}
      </Page.Content>
    </Page>
  );
}
```

**After:**
```tsx
import { SimplePage, createPageMetadata } from '../_components/SimplePage';

export const metadata = createPageMetadata(
  "Legal Documents",
  "Access all legal documents...",
  "/legal"
);

export default async function LegalPage() {
  const docs = await getDocuments({type: 'LEGAL'});
  
  return (
    <SimplePage config={{
      title: "Legal Documents",
      description: "Access our legal documents...",
      note: "All documents are regularly updated..."
    }}>
      {/* content */}
    </SimplePage>
  );
}
```

## Benefits

1. **Reduced Boilerplate**: 50-70% less code per page
2. **Consistent Metadata**: Automatic SEO-friendly metadata generation
3. **Standardized Layout**: Consistent look and feel across all pages
4. **Developer Experience**: Faster page creation with CLI and snippets
5. **Type Safety**: Full TypeScript support with intelligent autocomplete
6. **Maintainability**: Changes to page structure happen in one place

## When to Use Each Solution

| Solution | Best For | Pros | Cons |
|----------|----------|------|------|
| **SimplePage** | Most pages | Simple, clean, consistent | Less flexible |
| **CLI Generator** | New pages from scratch | Fast, complete setup | Requires command line |
| **VS Code Snippets** | Quick development | Fast typing, templates | Manual typing still needed |
| **withPageLayout** | Existing components | Wrap existing code | More complex |
| **Original Page** | Complex layouts | Maximum flexibility | More boilerplate |

## Future Enhancements

Potential additions to consider:

1. **Page Templates**: Pre-built templates for common page types
2. **Component Library**: Automated generation of common page sections
3. **Theme Variants**: Easy switching between different page styles
4. **Analytics Integration**: Automatic tracking setup
5. **A/B Testing**: Built-in experimentation framework

## Support

If you need help or want to suggest improvements:

1. Check existing page examples in `/app/(marketing)/`
2. Look at the component source in `/_components/`
3. Test changes with the development server
4. Use TypeScript to guide you with autocomplete

Happy coding! 🚀
