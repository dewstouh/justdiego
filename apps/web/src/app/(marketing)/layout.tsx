import { ReactNode } from 'react';
import AutoBreadcrumb from '@/components/AutoBreadcrumb';
import DefaultSuspense from '@/components/DefaultSuspense';
interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-5xl mx-auto px-4 py-22">
        <AutoBreadcrumb />
        <DefaultSuspense>
          {children}
        </DefaultSuspense>
      </div>
    </div>
  );
}
