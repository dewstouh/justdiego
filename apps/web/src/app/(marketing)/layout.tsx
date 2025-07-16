import { ReactNode, Suspense } from 'react';
import AutoBreadcrumb from '@/components/AutoBreadcrumb';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-5xl mx-auto px-4 py-22">
        <AutoBreadcrumb />
        <Suspense fallback={<div className="h-16 bg-gray-200 animate-pulse rounded-md mb-4" />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
