"use client"
import Link from 'next/link';

export default function AdminNav() {

  return (
    <nav className="mb-8 border-b-2 border-gray-300 pb-4">
      <div className="flex gap-6">
        <Link 
          href="/admin"
          className={`text-sm font-bold px-3 py-2 border-2 transition-colors`}
        >
          ADD SOLUTION
        </Link>
        <Link 
          href="/admin/solutions"
          className={`text-sm font-bold px-3 py-2 border-2 transition-colors`}
        >
          MANAGE SOLUTIONS
        </Link>
      </div>
    </nav>
  );
}
