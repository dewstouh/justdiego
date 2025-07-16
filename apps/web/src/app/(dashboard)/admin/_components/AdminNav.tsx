"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="mb-8 border-b-2 border-gray-300 pb-4">
      <div className="flex gap-6">
        <Link 
          href="/admin" 
          className={`text-sm font-bold px-3 py-2 border-2 transition-colors ${
            pathname === '/admin' 
              ? 'text-white bg-gray-900 border-gray-900' 
              : 'text-gray-900 border-gray-300 hover:border-gray-900'
          }`}
        >
          ADD SOLUTION
        </Link>
        <Link 
          href="/admin/solutions" 
          className={`text-sm font-bold px-3 py-2 border-2 transition-colors ${
            pathname === '/admin/solutions' 
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
