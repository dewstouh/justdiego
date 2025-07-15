import Page from './Page';

interface PageConfig {
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

export function withPageLayout<T extends object>(
  Component: React.ComponentType<T>,
  config: PageConfig
) {
  return function PageLayoutWrapper(props: T) {
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
          <Component {...props} />
        </Page.Content>
      </Page>
    );
  };
}

export default withPageLayout;
