"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SolutionForm from './_components/SolutionForm';

interface Solution {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  problemDescription: string;
  solutionDescription: string;
  technicalDetails?: { title: string; content: string }[];
  attachments?: string[];
  challenges?: string[];
  outcomes?: string[];
  completedAt: string;
  createdAt: string;
  customerId: string;
  companyId?: string;
  customer: {
    id: string;
    name: string;
    email: string;
    country: {
      id: string;
      name: string;
      flag: string;
    };
  };
  company?: {
    id: string;
    name: string;
    description?: string;
    logoUrl?: string;
    website?: string;
    country: {
      id: string;
      name: string;
      flag: string;
    };
  };
  review: {
    id: string;
    rating: number;
    comment: string;
    attachments?: string[];
    authorId: string;
  };
  tags: {
    id: string;
    name: string;
    description?: string;
    iconUrl?: string;
    color: string;
  }[];
  technologies: {
    id: string;
    name: string;
    description?: string;
    iconUrl?: string;
    color: string;
  }[];
}

interface FormData {
  solution: {
    title: string;
    slug: string;
    shortDescription: string;
    longDescription: string;
    description?: string;
    problemDescription: string;
    solutionDescription: string;
    technicalDetails?: { title: string; content: string }[];
    attachments?: string[];
    challenges?: string[];
    outcomes?: string[];
    completedAt: string;
    customerId: string;
    companyId?: string;
    technologies?: string[];
    tags?: string[];
  };
  review: {
    rating: number;
    comment: string;
    attachments?: string[];
    authorId: string;
  };
}

export default function SolutionsList() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSolution, setEditingSolution] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  useEffect(() => {
    fetchSolutions();
  }, []);

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

  const handleCreateSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/solutions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Solution created successfully!'});
        setShowCreateForm(false);
        fetchSolutions();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to create solution'});
      }
    } catch (error) {
      console.error('Error creating solution:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (formData: FormData) => {
    if (!editingSolution) return;

    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    // Debug: Log what we're sending
    console.log('Sending edit data:', formData);

    try {
      const response = await fetch(`/api/admin/solutions/${editingSolution}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Solution updated successfully!'});
        setEditingSolution(null);
        fetchSolutions();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to update solution'});
      }
    } catch (error) {
      console.error('Error updating solution:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this solution?')) return;

    try {
      const response = await fetch(`/api/admin/solutions/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Solution deleted successfully!'});
        fetchSolutions();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to delete solution'});
      }
    } catch (error) {
      console.error('Error deleting solution:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    }
  };

  const transformSolutionToFormData = (solution: Solution): FormData => {
    return {
      solution: {
        title: solution.title,
        slug: solution.slug,
        shortDescription: solution.shortDescription,
        longDescription: solution.longDescription,
        description: solution.longDescription,
        problemDescription: solution.problemDescription,
        solutionDescription: solution.solutionDescription,
        technicalDetails: solution.technicalDetails || [],
        attachments: solution.attachments || [],
        challenges: solution.challenges || [],
        outcomes: solution.outcomes || [],
        completedAt: solution.completedAt,
        customerId: solution.customerId,
        companyId: solution.companyId,
        technologies: solution.technologies.map(tech => tech.id),
        tags: solution.tags.map(tag => tag.id),
      },
      review: {
        rating: solution.review.rating,
        comment: solution.review.comment,
        attachments: solution.review.attachments || [],
        authorId: solution.review.authorId,
      },
    };
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-600">Loading solutions...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">MANAGE SOLUTIONS</h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Create and manage solutions</p>
      </div>

      {status.type && (
        <div className={`p-4 border-2 ${
          status.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {status.message}
        </div>
      )}

      {/* Create Button */}
      <div className="text-center">
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-6 py-2 border-2 border-gray-900 bg-gray-900 text-white font-bold hover:bg-white hover:text-gray-900 transition-colors"
        >
          {showCreateForm ? 'CANCEL' : 'CREATE NEW SOLUTION'}
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-gray-50 p-6 border-2 border-gray-300">
          <SolutionForm
            onSubmit={handleCreateSubmit}
            isSubmitting={isSubmitting}
            submitStatus={status}
          />
        </div>
      )}

      {/* Solutions List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">EXISTING SOLUTIONS ({solutions.length})</h3>
        
        {solutions.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No solutions found</p>
        ) : (
          <div className="grid gap-6">
            {solutions.map((solution) => (
              <div key={solution.id} className="border-2 border-gray-300 bg-white">
                {editingSolution === solution.id ? (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">EDIT SOLUTION</h3>
                      <button
                        onClick={() => setEditingSolution(null)}
                        className="px-4 py-2 border-2 border-gray-600 text-gray-600 font-bold hover:bg-gray-600 hover:text-white transition-colors"
                      >
                        CANCEL
                      </button>
                    </div>
                    <SolutionForm
                      initialData={transformSolutionToFormData(solution)}
                      isEditing={true}
                      onSubmit={handleEditSubmit}
                      isSubmitting={isSubmitting}
                      submitStatus={status}
                    />
                  </div>
                ) : (
                  <div className="p-6">
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
                            <br />
                            <span className="text-gray-500">
                              {solution.customer.country.flag} {solution.customer.country.name}
                            </span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-700">Rating:</span>{' '}
                            {'⭐'.repeat(solution.review.rating)} ({solution.review.rating}/5)
                            <br />
                            {solution.company && (
                              <span className="text-gray-500">
                                Company: {solution.company.name}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4 text-right">
                        <div className="text-sm text-gray-500 mb-3">
                          {new Date(solution.createdAt).toLocaleDateString()}
                        </div>
                        <div className="space-y-2">
                          <button
                            onClick={() => setEditingSolution(solution.id)}
                            className="block w-full px-3 py-1 bg-gray-900 text-white text-xs font-bold hover:bg-gray-700 transition-colors"
                          >
                            EDIT
                          </button>
                          <button
                            onClick={() => handleDelete(solution.id)}
                            className="block w-full px-3 py-1 bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors"
                          >
                            DELETE
                          </button>
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
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
