import Image from 'next/image';
import { Metadata } from 'next';
import BackHomeButton from './ui/BackHomeButton';

// Import BackHomeButton - adjust path as needed

// Simple utility to combine class names
function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

interface PageProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    background?: 'transparent' | 'white' | 'gray' | 'primary';
    showBackHomeButton?: boolean;
    showFooterBorder?: boolean;
    footerContent?: React.ReactNode;
    footerClassName?: string;
}

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string;
    note?: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    descriptionClassName?: string;
    noteClassName?: string;
    showDivider?: boolean;
    dividerClassName?: string;
}

interface PageContentProps {
    children: React.ReactNode;
    className?: string;
}

interface PageFooterProps {
    children?: React.ReactNode;
    className?: string;
    showTopBorder?: boolean;
    showBackHomeButton?: boolean;
}

const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
};

const paddingClasses = {
    none: '',
    sm: 'px-4 py-2',
    md: 'px-4 py-4',
    lg: 'px-4 py-8',
    xl: 'px-4 py-12',
    xxl: 'px-4 py-20',
};

const backgroundClasses = {
    transparent: '',
    white: 'bg-primary',
    gray: 'bg-gray-50',
    primary: 'bg-gray-900',
};

function Page({
    id,
    children,
    className,
    maxWidth = '6xl',
    padding = 'sm',
    background = 'transparent',
    showBackHomeButton = true,
    showFooterBorder = true,
    footerContent,
    footerClassName
}: PageProps) {
    return (
        <main
            id={id}
            className={cn(
                'w-full mx-auto',
                maxWidthClasses[maxWidth],
                paddingClasses[padding],
                backgroundClasses[background],
                className
            )}
        >
            {children}

            {/* Automatic Footer */}
            {showBackHomeButton && (
                <div className={cn('text-center mt-24', footerClassName)}>
                    {showFooterBorder && <div className="w-full border-t border-gray-200 mb-12" />}
                    <BackHomeButton />
                    {footerContent}
                </div>
            )}
        </main>
    );
}

function PageHeader({
    title,
    subtitle,
    description,
    imageUrl,
    note,
    className,
    titleClassName,
    subtitleClassName,
    descriptionClassName,
    noteClassName,
    showDivider = true,
    dividerClassName
}: PageHeaderProps) {
    return (
        <div className={cn('text-center mb-16', className)}>
            {subtitle && (
                <p className={cn('text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2', subtitleClassName)}>
                    {subtitle}
                </p>
            )}
            <h1 className={cn('text-4xl lg:text-5xl font-bold text-gray-900 mb-6', titleClassName)}>
                {title.toUpperCase()}
            </h1>
            {showDivider && (
                <div className={cn('w-32 h-1 bg-gray-900 mx-auto mb-8', dividerClassName)} />
            )}
            {imageUrl && (
                <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-8">
                    <div className="mb-8">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            priority
                            className="mx-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
            {description && (
                <p className={cn('text-xl text-gray-600 max-w-4xl mx-auto mb-4', descriptionClassName)}>
                    {description}
                </p>
            )}
            {note && (
                <p className={cn('text-sm text-gray-400', noteClassName)}>
                    {note}
                </p>
            )}
        </div>
    );
}

function PageContent({ children, className }: PageContentProps) {
    return (
        <div className={cn('mb-12', className)}>
            {children}
        </div>
    );
}

function PageFooter({ children, className, showTopBorder = true }: PageFooterProps) {
    return (
        <div className={cn('text-center mt-24', className)}>
            {showTopBorder && <div className="w-full border-t border-gray-200 mb-12" />}
            {children}
        </div>
    );
}

// Compound component pattern
Page.Header = PageHeader;
Page.Content = PageContent;
Page.Footer = PageFooter;

interface SimplePageConfig {
    title: string;
    subtitle?: string;
    description?: string;
    note?: string;
    imageUrl?: string;
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
                imageUrl={config.imageUrl}
                note={config.note}
            />

            <Page.Content>
                {children}
            </Page.Content>
        </Page>
    );
}

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

export default Page;
