import NavList from './navbar/NavList';
import ScrollNavbar from './navbar/ScrollNavbar';
import MobileNavToggle from './navbar/MobileNavToggle';
import { Suspense } from 'react';
import NavSkeleton from './navbar/NavSkeleton';

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
        <NavList />
      </MobileNavToggle>
    </ScrollNavbar>
  );
}
