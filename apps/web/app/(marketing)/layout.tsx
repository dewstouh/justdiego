import { ReactNode } from 'react';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
}
