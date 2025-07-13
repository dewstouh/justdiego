# Section Template Component

A reusable section template for marketing pages that provides consistent styling and structure.

## Usage

```tsx
import Section from './Section';

export default function MySection() {
  return (
    <Section id="my-section" maxWidth="5xl">
      <Section.Header
        title="My Section Title"
        subtitle="Optional Subtitle"
        description="Optional description text"
        note="Optional note text"
      />

      <Section.Content>
        {/* Your section content goes here */}
      </Section.Content>

      <Section.Footer>
        {/* Optional footer content like buttons, links, etc. */}
      </Section.Footer>
    </Section>
  );
}
```

## Props

### Section Props
- `id` (optional): HTML id attribute for the section
- `children`: React nodes to render inside the section
- `className` (optional): Additional CSS classes
- `maxWidth`: Maximum width constraint ('sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full')
- `padding`: Padding size ('none' | 'sm' | 'md' | 'lg' | 'xl')
- `background`: Background style ('transparent' | 'white' | 'gray' | 'primary')

### Section.Header Props
- `title`: Main section title (required)
- `subtitle` (optional): Small text above the title
- `description` (optional): Description text below the title
- `note` (optional): Small note text below the description
- `showDivider`: Whether to show the divider line under the title (default: true)
- Various `className` props for styling individual elements

### Section.Content Props
- `children`: Content to render
- `className` (optional): Additional CSS classes

### Section.Footer Props
- `children`: Footer content to render
- `className` (optional): Additional CSS classes
- `showTopBorder`: Whether to show a top border (default: true)

## Examples

### Basic Section
```tsx
<Section id="about">
  <Section.Header title="About Us" />
  <Section.Content>
    <p>Our story...</p>
  </Section.Content>
</Section>
```

### Section with All Options
```tsx
<Section id="services" maxWidth="6xl" padding="xl" background="gray">
  <Section.Header
    subtitle="What we offer"
    title="Our Services"
    description="Comprehensive solutions for your needs"
    note="Available 24/7"
    showDivider={false}
  />
  <Section.Content className="grid grid-cols-3 gap-8">
    {/* Service cards */}
  </Section.Content>
  <Section.Footer showTopBorder={false}>
    <button>Contact Us</button>
  </Section.Footer>
</Section>
```

### Minimal Section
```tsx
<Section id="simple" padding="sm" maxWidth="2xl">
  <Section.Content>
    <h3>Simple content without header</h3>
    <p>Just content, no header or footer needed.</p>
  </Section.Content>
</Section>
```

## Benefits

1. **Consistency**: Uniform styling and structure across all marketing sections
2. **Flexibility**: Configurable props for different use cases
3. **Maintainability**: Centralized styling makes updates easier
4. **Reusability**: Can be used across different pages and sections
5. **Type Safety**: Full TypeScript support with proper interfaces
