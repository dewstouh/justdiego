import { Metadata } from 'next';
import Page from './Page';

interface PageTemplate {
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

interface PageFactoryOptionsWithData<T> {
  template: PageTemplate;
  metadata?: Metadata;
  dataFetcher: () => Promise<T>;
  renderContent: (data: T) => React.ReactNode;
}

interface PageFactoryOptionsWithoutData {
  template: PageTemplate;
  metadata?: Metadata;
  renderContent: () => React.ReactNode;
}

type PageFactoryOptions<T> = T extends undefined 
  ? PageFactoryOptionsWithoutData 
  : PageFactoryOptionsWithData<T>;

export function createPageComponent<T = undefined>(
  options: PageFactoryOptions<T>
) {
  const PageComponent = async function() {
    let data: T | undefined;
    
    // Check if we have a dataFetcher
    if ('dataFetcher' in options && options.dataFetcher) {
      data = await options.dataFetcher();
    }

    return (
      <Page
        maxWidth={options.template.maxWidth}
        padding={options.template.padding}
        background={options.template.background}
        showBackHomeButton={options.template.showBackHomeButton}
        showFooterBorder={options.template.showFooterBorder}
      >
        <Page.Header
          title={options.template.title}
          subtitle={options.template.subtitle}
          description={options.template.description}
          note={options.template.note}
        />

        <Page.Content>
          {'dataFetcher' in options 
            ? (options.renderContent as (data: T) => React.ReactNode)(data!)
            : (options.renderContent as () => React.ReactNode)()
          }
        </Page.Content>
      </Page>
    );
  };

  // Export metadata if provided
  if (options.metadata) {
    Object.defineProperty(PageComponent, 'metadata', {
      value: options.metadata,
      writable: false
    });
  }

  return PageComponent;
}

export default createPageComponent;
