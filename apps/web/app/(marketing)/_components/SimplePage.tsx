import { Metadata } from 'next';
import Page from './Page';

interface SimplePageConfig {
  title: string;
  subtitle?: string;
  description?: string;
  note?: string;
  showBackHomeButton?: boolean;
  showFooterBorder?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'white' | 'gray' | 'primary';
}

interface SimplePageProps {
  config: SimplePageConfig;
  children: React.ReactNode;
}

/**
 * A simplified page wrapper that automatically handles the Page layout structure
 * Usage:
 * ```tsx
 * <SimplePage config={{
 *   title: "My Page",
 *   description: "Page description"
 * }}>
 *   <MyContent />
 * </SimplePage>
 * ```
 */
export function SimplePage({ config, children }: SimplePageProps) {
  return (
    <Page
      maxWidth={config.maxWidth}
      padding={config.padding}
      background={config.background}
      showBackHomeButton={config.showBackHomeButton}
      showFooterBorder={config.showFooterBorder}
    >
      <Page.Header
        title={config.title}
        subtitle={config.subtitle}
        description={config.description}
        note={config.note}
      />

      <Page.Content>
        {children}
      </Page.Content>
    </Page>
  );
}

/**
 * Creates a metadata object for common page patterns
 */
export function createPageMetadata(
  title: string, 
  description: string, 
  path?: string
): Metadata {
  return {
    title: `${title} | JustDiego`,
    description,
    openGraph: {
      title: `${title} | JustDiego`,
      description,
      url: path ? `https://justdiego.com${path}` : undefined,
      siteName: "JustDiego",
      type: "website",
    },
    robots: "index, follow",
  };
}

export default SimplePage;
