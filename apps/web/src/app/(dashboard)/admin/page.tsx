"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Stats {
  solutions: number;
  users: number;
  companies: number;
  tags: number;
  technologies: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    solutions: 0,
    users: 0,
    companies: 0,
    tags: 0,
    technologies: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [solutionsRes, usersRes, companiesRes, tagsRes, technologiesRes] = await Promise.all([
          fetch('/api/admin/solutions'),
          fetch('/api/admin/users'),
          fetch('/api/admin/companies'),
          fetch('/api/admin/tags'),
          fetch('/api/admin/technologies'),
        ]);

        const [solutionsData, usersData, companiesData, tagsData, technologiesData] = await Promise.all([
          solutionsRes.json(),
          usersRes.json(),
          companiesRes.json(),
          tagsRes.json(),
          technologiesRes.json(),
        ]);

        setStats({
          solutions: solutionsData.solutions?.length || 0,
          users: usersData.users?.length || 0,
          companies: companiesData.companies?.length || 0,
          tags: tagsData.tags?.length || 0,
          technologies: technologiesData.technologies?.length || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const adminSections = [
    {
      title: 'Solutions',
      description: 'Create and manage solutions',
      href: '/admin/solutions',
      count: stats.solutions,
      color: 'bg-blue-500',
    },
    {
      title: 'Users',
      description: 'Manage user accounts',
      href: '/admin/users',
      count: stats.users,
      color: 'bg-green-500',
    },
    {
      title: 'Companies',
      description: 'Manage companies',
      href: '/admin/companies',
      count: stats.companies,
      color: 'bg-purple-500',
    },
    {
      title: 'Tags',
      description: 'Manage content tags',
      href: '/admin/tags',
      count: stats.tags,
      color: 'bg-orange-500',
    },
    {
      title: 'Technologies',
      description: 'Manage technologies',
      href: '/admin/technologies',
      count: stats.technologies,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">ADMIN DASHBOARD</h1>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Manage all aspects of your application</p>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="text-gray-600">Loading dashboard...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group bg-white border-2 border-gray-300 p-6 hover:border-gray-900 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {section.title.charAt(0)}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{section.count}</div>
                  <div className="text-sm text-gray-500">items</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm">{section.description}</p>
            </Link>
          ))}
        </div>
      )}

      <div className="bg-gray-50 border-2 border-gray-300 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/solutions"
            className="px-4 py-2 bg-gray-900 text-white font-bold text-center hover:bg-gray-800 transition-colors"
          >
            CREATE NEW SOLUTION
          </Link>
          <Link
            href="/admin/users"
            className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold text-center hover:bg-gray-900 hover:text-white transition-colors"
          >
            ADD NEW USER
          </Link>
          <Link
            href="/admin/companies"
            className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold text-center hover:bg-gray-900 hover:text-white transition-colors"
          >
            ADD NEW COMPANY
          </Link>
        </div>
      </div>
    </div>
  );
}