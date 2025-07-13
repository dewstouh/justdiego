import React from 'react';

// Simple utility to combine class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'white' | 'gray' | 'primary';
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
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

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SectionFooterProps {
  children: React.ReactNode;
  className?: string;
  showTopBorder?: boolean;
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
  sm: 'px-4 py-8',
  md: 'px-4 py-12',
  lg: 'px-4 py-16',
  xl: 'px-4 py-20',
};

const backgroundClasses = {
  transparent: '',
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-gray-900',
};

function Section({ 
  id, 
  children, 
  className,
  maxWidth = '5xl',
  padding = 'lg',
  background = 'transparent'
}: SectionProps) {
  return (
    <section 
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
    </section>
  );
}

function SectionHeader({
  title,
  subtitle,
  description,
  note,
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  noteClassName,
  showDivider = true,
  dividerClassName
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-8', className)}>
      {subtitle && (
        <p className={cn('text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2', subtitleClassName)}>
          {subtitle}
        </p>
      )}
      <h2 className={cn('text-3xl lg:text-4xl font-bold text-gray-900 mb-4', titleClassName)}>
        {title.toUpperCase()}
      </h2>
      {showDivider && (
        <div className={cn('w-32 h-1 bg-gray-900 mx-auto mb-6', dividerClassName)} />
      )}
      {description && (
        <p className={cn('text-lg text-gray-600 max-w-3xl mx-auto', descriptionClassName)}>
          {description}
        </p>
      )}
      {note && (
        <p className={cn('text-xs text-gray-400 mt-2', noteClassName)}>
          {note}
        </p>
      )}
    </div>
  );
}

function SectionContent({ children, className }: SectionContentProps) {
  return (
    <div className={cn('mb-8', className)}>
      {children}
    </div>
  );
}

function SectionFooter({ children, className, showTopBorder = true }: SectionFooterProps) {
  return (
    <div className={cn('text-center mt-20', className)}>
      {showTopBorder && <div className="w-full border-t border-gray-200 mb-8" />}
      {children}
    </div>
  );
}

// Compound component pattern
Section.Header = SectionHeader;
Section.Content = SectionContent;
Section.Footer = SectionFooter;

export default Section;
