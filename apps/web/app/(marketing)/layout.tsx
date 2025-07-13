import { ReactNode } from 'react';
import AutoBreadcrumb from '../../components/AutoBreadcrumb';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-22">
        <AutoBreadcrumb />
        {children}
      </div>
    </div>
  );
}
