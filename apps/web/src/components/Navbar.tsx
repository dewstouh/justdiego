import NavList from '@/components/navbar/NavList';
import ScrollNavbar from '@/components/navbar/ScrollNavbar';
import MobileNavToggle from '@/components/navbar/MobileNavToggle';
import { Suspense } from 'react';
import NavSkeleton from '@/components/navbar/NavSkeleton';

export default function Navbar() {
  return (
    <ScrollNavbar>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 md:gap-8">
        <Suspense fallback={<NavSkeleton/>}>
          <NavList />
        </Suspense>
      </div>

      <MobileNavToggle>
        <Suspense fallback={<NavSkeleton />}>
          <NavList />
        </Suspense>
      </MobileNavToggle>
    </ScrollNavbar>
  );
}
