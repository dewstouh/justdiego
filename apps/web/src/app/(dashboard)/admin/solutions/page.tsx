"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Solution {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  createdAt: string;
  customer: {
    name: string;
    email: string;
  };
  review: {
    rating: number;
    comment: string;
  };
}

export default function SolutionsList() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await fetch('/api/admin/solutions');
        const data = await response.json();
        setSolutions(data.solutions || []);
      } catch (error) {
        console.error('Error fetching solutions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-600">Loading solutions...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Recent Solutions</h2>
        <Link
          href="/admin"
          className="px-4 py-2 bg-gray-900 text-white border-2 border-gray-900 font-bold hover:bg-white hover:text-gray-900 transition-colors"
        >
          ADD NEW SOLUTION
        </Link>
      </div>

      {solutions.length === 0 ? (
        <div className="text-center py-12 border-2 border-gray-300 bg-gray-50">
          <div className="text-gray-600 mb-4">No solutions found</div>
          <Link
            href="/admin"
            className="text-gray-900 underline hover:no-underline"
          >
            Create your first solution
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {solutions.map((solution) => (
            <div key={solution.id} className="border-2 border-gray-300 bg-white p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.shortDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-bold text-gray-700">Customer:</span>{' '}
                      {solution.customer.name} ({solution.customer.email})
                    </div>
                    <div>
                      <span className="font-bold text-gray-700">Rating:</span>{' '}
                      {'⭐'.repeat(solution.review.rating)} ({solution.review.rating}/5)
                    </div>
                  </div>
                </div>
                
                <div className="ml-4 text-right">
                  <div className="text-sm text-gray-500 mb-3">
                    {new Date(solution.createdAt).toLocaleDateString()}
                  </div>
                  <div className="space-y-2">
                    <Link
                      href={`/admin/solutions/edit/${solution.id}`}
                      className="block px-3 py-1 bg-gray-900 text-white text-xs font-bold hover:bg-gray-700 transition-colors"
                    >
                      EDIT
                    </Link>
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="block text-xs text-gray-900 underline hover:no-underline"
                    >
                      View Solution →
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm text-gray-600">
                  <span className="font-bold">Review:</span> &ldquo;{solution.review.comment.substring(0, 150)}
                  {solution.review.comment.length > 150 ? '...' : ''}&rdquo;
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
