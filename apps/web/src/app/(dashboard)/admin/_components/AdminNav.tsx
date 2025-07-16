"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNav() {
  const pathname = usePathname();

  // Extract locale from pathname (e.g., /en/admin -> 'en')
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0] || 'en';

  // Create locale-aware paths
  const adminPath = `/${locale}/admin`;
  const solutionsPath = `/${locale}/admin/solutions`;

  return (
    <nav className="mb-8 border-b-2 border-gray-300 pb-4">
      <div className="flex gap-6">
        <Link 
          href={adminPath}
          className={`text-sm font-bold px-3 py-2 border-2 transition-colors ${
            pathname === adminPath
              ? 'text-white bg-gray-900 border-gray-900' 
              : 'text-gray-900 border-gray-300 hover:border-gray-900'
          }`}
        >
          ADD SOLUTION
        </Link>
        <Link 
          href={solutionsPath}
          className={`text-sm font-bold px-3 py-2 border-2 transition-colors ${
            pathname === solutionsPath
              ? 'text-white bg-gray-900 border-gray-900' 
              : 'text-gray-900 border-gray-300 hover:border-gray-900'
          }`}
        >
          MANAGE SOLUTIONS
        </Link>
      </div>
    </nav>
  );
}
