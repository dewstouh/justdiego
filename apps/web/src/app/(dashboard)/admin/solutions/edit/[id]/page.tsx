"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/(marketing)/contact/_components/ui/Card';
import { TagSelector } from '@justdiego/react-utils';
import type { Prisma } from '@justdiego/db';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface TechnicalDetail {
  title: string;
  content: string;
}

interface UserData {
  email: string;
  name: string;
  avatarUrl?: string;
  countryId: string;
}

interface CompanyData {
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  countryId: string;
}

interface ReviewData {
  rating: number;
  comment: string;
  attachments?: string[];
}

interface SolutionData {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
  thumbnailUrl?: string;
  demoUrl?: string;
  problemDescription: string;
  solutionDescription: string;
  technicalDetails?: TechnicalDetail[];
  attachments?: string[];
  challenges?: string[];
  outcomes?: string[];
  completedAt?: string;
  isForSale: boolean;
  companyId?: string;
  tags?: Prisma.TagCreateInput[];
}

interface FormData {
  user: UserData;
  company: CompanyData;
  solution: SolutionData;
  review: ReviewData;
}

export default function EditSolution() {
  const params = useParams();
  const router = useRouter();
  const solutionId = params.id as string;
  
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    user: {
      email: 'example@example.com',
      name: '',
      avatarUrl: '',
      countryId: 'country-spain',
    },
    company: {
      name: '',
      description: '',
      logoUrl: '',
      website: '',
      countryId: 'country-spain',
    },
    solution: {
      title: '',
      slug: '',
      shortDescription: '',
      longDescription: '',
      description: '',
      thumbnailUrl: '',
      demoUrl: '',
      problemDescription: '',
      solutionDescription: '',
      technicalDetails: [],
      attachments: [],
      challenges: [],
      outcomes: [],
      isForSale: false,
      tags: [],
    },
    review: {
      rating: 5,
      comment: '',
      attachments: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  // Load solution data and countries
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load countries
        const countriesResponse = await fetch('/api/admin/countries');
        const countriesData = await countriesResponse.json();
        setCountries(countriesData.countries || []);

        // Load solution data
        const solutionResponse = await fetch(`/api/admin/solutions/${solutionId}`);
        if (!solutionResponse.ok) {
          throw new Error('Solution not found');
        }
        const solutionData = await solutionResponse.json();
        
        // Populate form with existing data
        setFormData(solutionData);
        
      } catch (error) {
        console.error('Failed to load data:', error);
        setSubmitStatus({type: 'error', message: 'Failed to load solution data'});
      } finally {
        setLoading(false);
      }
    };

    if (solutionId) {
      loadData();
    }
  }, [solutionId]);

  const handleUserChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, [field]: value }
    }));
  };

  const handleCompanyChange = (field: keyof CompanyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      company: { ...prev.company, [field]: value }
    }));
  };

  const handleSolutionChange = (field: keyof SolutionData, value: string | boolean | string[] | TechnicalDetail[] | Prisma.TagCreateInput[] | Record<string, unknown>) => {
    setFormData(prev => ({
      ...prev,
      solution: { ...prev.solution, [field]: value }
    }));
  };

  const handleReviewChange = (field: keyof ReviewData, value: string | number | string[]) => {
    setFormData(prev => ({
      ...prev,
      review: { ...prev.review, [field]: value }
    }));
  };

  const handleTechnicalDetailChange = (index: number, field: 'title' | 'content', value: string) => {
    const updatedDetails = [...(formData.solution.technicalDetails || [])];
    if (!updatedDetails[index]) {
      updatedDetails[index] = { title: '', content: '' };
    }
    updatedDetails[index] = { ...updatedDetails[index], [field]: value };
    handleSolutionChange('technicalDetails', updatedDetails);
  };

  const addTechnicalDetail = () => {
    const updatedDetails = [...(formData.solution.technicalDetails || []), { title: '', content: '' }];
    handleSolutionChange('technicalDetails', updatedDetails);
  };

  const removeTechnicalDetail = (index: number) => {
    const updatedDetails = formData.solution.technicalDetails?.filter((_, i) => i !== index) || [];
    handleSolutionChange('technicalDetails', updatedDetails);
  };

  const handleArrayInputChange = (field: 'challenges' | 'outcomes', value: string, section: 'solution' | 'review') => {
    const arrayValue = value.split('\\n').filter(item => item.trim() !== '');
    if (section === 'solution') {
      handleSolutionChange(field as keyof SolutionData, arrayValue);
    } else {
      handleReviewChange(field as keyof ReviewData, arrayValue);
    }
  };

  const addAttachment = (section: 'solution' | 'review') => {
    if (section === 'solution') {
      const currentAttachments = formData.solution.attachments || [];
      handleSolutionChange('attachments', [...currentAttachments, '']);
    } else {
      const currentAttachments = formData.review.attachments || [];
      handleReviewChange('attachments', [...currentAttachments, '']);
    }
  };

  const updateAttachment = (index: number, value: string, section: 'solution' | 'review') => {
    if (section === 'solution') {
      const currentAttachments = [...(formData.solution.attachments || [])];
      currentAttachments[index] = value;
      handleSolutionChange('attachments', currentAttachments);
    } else {
      const currentAttachments = [...(formData.review.attachments || [])];
      currentAttachments[index] = value;
      handleReviewChange('attachments', currentAttachments);
    }
  };

  const removeAttachment = (index: number, section: 'solution' | 'review') => {
    if (section === 'solution') {
      const currentAttachments = formData.solution.attachments?.filter((_, i) => i !== index) || [];
      handleSolutionChange('attachments', currentAttachments);
    } else {
      const currentAttachments = formData.review.attachments?.filter((_, i) => i !== index) || [];
      handleReviewChange('attachments', currentAttachments);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\\s-]/g, '')
      .replace(/\\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    handleSolutionChange('title', title);
    handleSolutionChange('slug', generateSlug(title));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      // Transform tags from objects to IDs before sending to API
      const submissionData = {
        ...formData,
        solution: {
          ...formData.solution,
          tags: (formData.solution.tags || []).map((tag) => {
            // Handle both TagCreateInput objects and strings
            if (typeof tag === 'object' && tag !== null) {
              // If it's a TagCreateInput object with an id field, use the id
              if ('id' in tag && typeof tag.id === 'string') {
                return tag.id;
              }
              // If it's a TagCreateInput without id, it shouldn't happen in edit mode, but handle gracefully
              return '';
            }
            // If it's already a string (tag ID), use it as is
            return tag;
          }).filter(id => id !== '') // Remove any empty strings
        }
      };

      const response = await fetch(`/api/admin/solutions/${solutionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'Solution updated successfully!'});
        // Optionally redirect back to solutions list
        setTimeout(() => {
          router.push('/admin/solutions');
        }, 2000);
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to update solution'});
      }
    } catch (error) {
      console.error('Error updating solution:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading solution data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">EDIT SOLUTION</h2>
          <p className="text-lg text-gray-600">Update solution, user, and company information</p>
        </div>
        <button
          onClick={() => router.push('/admin/solutions')}
          className="px-4 py-2 border-2 border-gray-300 text-gray-900 font-bold hover:border-gray-900 transition-colors"
        >
          ← BACK TO LIST
        </button>
      </div>

      {submitStatus.type && (
        <div className={`p-4 border-2 ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* User Section */}
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.user.email}
                  onChange={(e) => handleUserChange('email', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="example@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.user.name}
                  onChange={(e) => handleUserChange('name', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Avatar URL
              </label>
              <input
                type="url"
                value={formData.user.avatarUrl}
                onChange={(e) => handleUserChange('avatarUrl', e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                placeholder="https://example.com/avatar.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Country *
              </label>
              <select
                required
                value={formData.user.countryId}
                onChange={(e) => handleUserChange('countryId', e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Company Section */}
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company.name}
                  onChange={(e) => handleCompanyChange('name', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.company.website}
                  onChange={(e) => handleCompanyChange('website', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="https://company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Company Description *
              </label>
              <textarea
                required
                value={formData.company.description}
                onChange={(e) => handleCompanyChange('description', e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
                placeholder="Brief description of what the company does..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={formData.company.logoUrl}
                  onChange={(e) => handleCompanyChange('logoUrl', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="https://example.com/logo.png"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Company Country *
                </label>
                <select
                  required
                  value={formData.company.countryId}
                  onChange={(e) => handleCompanyChange('countryId', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                >
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solution Section */}
        <Card>
          <CardHeader>
            <CardTitle>Solution Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.solution.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                placeholder="Amazing Business Solution"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Slug (auto-generated)
              </label>
              <input
                type="text"
                value={formData.solution.slug}
                onChange={(e) => handleSolutionChange('slug', e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 text-gray-900"
                placeholder="amazing-business-solution"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Short Description *
                </label>
                <textarea
                  required
                  value={formData.solution.shortDescription}
                  onChange={(e) => handleSolutionChange('shortDescription', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
                  placeholder="Brief description of the solution..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.solution.description}
                  onChange={(e) => handleSolutionChange('description', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
                  placeholder="Additional description..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Long Description *
              </label>
              <textarea
                required
                value={formData.solution.longDescription}
                onChange={(e) => handleSolutionChange('longDescription', e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-32"
                placeholder="Detailed description of the solution, implementation, and results..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Problem Description *
                </label>
                <textarea
                  required
                  value={formData.solution.problemDescription}
                  onChange={(e) => handleSolutionChange('problemDescription', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
                  placeholder="What problem did this solve?"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Solution Description *
                </label>
                <textarea
                  required
                  value={formData.solution.solutionDescription}
                  onChange={(e) => handleSolutionChange('solutionDescription', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
                  placeholder="How was it solved?"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Thumbnail URL
                </label>
                <input
                  type="url"
                  value={formData.solution.thumbnailUrl}
                  onChange={(e) => handleSolutionChange('thumbnailUrl', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="https://example.com/thumbnail.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Demo URL
                </label>
                <input
                  type="url"
                  value={formData.solution.demoUrl}
                  onChange={(e) => handleSolutionChange('demoUrl', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="https://demo.example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Challenges (one per line)
                </label>
                <textarea
                  value={formData.solution.challenges?.join('\\n') || ''}
                  onChange={(e) => handleArrayInputChange('challenges', e.target.value, 'solution')}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
                  placeholder="Challenge 1&#10;Challenge 2&#10;Challenge 3"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Outcomes (one per line)
                </label>
                <textarea
                  value={formData.solution.outcomes?.join('\\n') || ''}
                  onChange={(e) => handleArrayInputChange('outcomes', e.target.value, 'solution')}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
                  placeholder="Outcome 1&#10;Outcome 2&#10;Outcome 3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Completed Date
                </label>
                <input
                  type="date"
                  value={formData.solution.completedAt}
                  onChange={(e) => handleSolutionChange('completedAt', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                />
              </div>
              <div className="flex items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.solution.isForSale}
                    onChange={(e) => handleSolutionChange('isForSale', e.target.checked)}
                    className="w-4 h-4 border-2 border-gray-300"
                  />
                  <span className="text-sm font-bold text-gray-700">For Sale</span>
                </label>
              </div>
            </div>

            {/* Tags Section */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Tags
              </label>
              <TagSelector
                selectedTags={formData.solution.tags || []}
                onTagsChange={(tags) => handleSolutionChange('tags', tags)}
              />
            </div>

            {/* Technical Details Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-gray-700">
                  Technical Details
                </label>
                <button
                  type="button"
                  onClick={addTechnicalDetail}
                  className="px-3 py-1 border-2 border-gray-900 text-gray-900 text-sm font-bold hover:bg-gray-900 hover:text-white transition-colors duration-200"
                >
                  + ADD DETAIL
                </button>
              </div>
              
              {formData.solution.technicalDetails?.map((detail, index) => (
                <div key={index} className="border-2 border-gray-200 p-4 mb-4 rounded">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-bold text-gray-700">Detail #{index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeTechnicalDetail(index)}
                      className="text-red-600 hover:text-red-800 text-sm font-bold"
                    >
                      REMOVE
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={detail.title}
                        onChange={(e) => handleTechnicalDetailChange(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:border-gray-900 text-sm"
                        placeholder="e.g., Frontend Technology"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1">
                        Content
                      </label>
                      <textarea
                        value={detail.content}
                        onChange={(e) => handleTechnicalDetailChange(index, 'content', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:border-gray-900 text-sm h-20"
                        placeholder="e.g., Built with React 18, TypeScript, and Tailwind CSS"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {!formData.solution.technicalDetails?.length && (
                <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded">
                  <p className="text-gray-500 mb-3">No technical details added yet</p>
                  <button
                    type="button"
                    onClick={addTechnicalDetail}
                    className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-200"
                  >
                    ADD FIRST DETAIL
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Solution Attachments
              </label>
              <div className="space-y-2">
                {(formData.solution.attachments || []).map((attachment, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="url"
                      value={attachment}
                      onChange={(e) => updateAttachment(index, e.target.value, 'solution')}
                      className="flex-1 px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                      placeholder="https://example.com/attachment.png"
                    />
                    <button
                      type="button"
                      onClick={() => removeAttachment(index, 'solution')}
                      className="px-3 py-2 bg-red-600 text-white hover:bg-red-700 font-bold"
                    >
                      REMOVE
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addAttachment('solution')}
                  className="w-full px-3 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 font-bold"
                >
                  + ADD ATTACHMENT
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Add URLs for images, videos, or other attachments</p>
            </div>
          </CardContent>
        </Card>

        {/* Review Section */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Rating *
              </label>
              <select
                value={formData.review.rating}
                onChange={(e) => handleReviewChange('rating', parseInt(e.target.value))}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                <option value={3}>⭐⭐⭐ (3 stars)</option>
                <option value={2}>⭐⭐ (2 stars)</option>
                <option value={1}>⭐ (1 star)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Review Comment *
              </label>
              <textarea
                required
                value={formData.review.comment}
                onChange={(e) => handleReviewChange('comment', e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-32"
                placeholder="Customer's review of the solution..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Review Attachments
              </label>
              <div className="space-y-2">
                {(formData.review.attachments || []).map((attachment, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="url"
                      value={attachment}
                      onChange={(e) => updateAttachment(index, e.target.value, 'review')}
                      className="flex-1 px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                      placeholder="https://example.com/review-attachment.png"
                    />
                    <button
                      type="button"
                      onClick={() => removeAttachment(index, 'review')}
                      className="px-3 py-2 bg-red-600 text-white hover:bg-red-700 font-bold"
                    >
                      REMOVE
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addAttachment('review')}
                  className="w-full px-3 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 font-bold"
                >
                  + ADD ATTACHMENT
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Optional: URLs for review-related attachments</p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 border-2 border-gray-900 font-bold text-white transition-colors duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gray-900 hover:bg-white hover:text-gray-900'
            }`}
          >
            {isSubmitting ? 'UPDATING SOLUTION...' : 'UPDATE SOLUTION'}
          </button>
        </div>
      </form>
    </div>
  );
}
