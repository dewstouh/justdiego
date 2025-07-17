"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  countryId: string;
  country: Country;
}

interface Company {
  id: string;
  name: string;
  description?: string;
  logoUrl?: string;
  website?: string;
  countryId: string;
  country: Country;
}

interface Tag {
  id: string;
  name: string;
  description?: string;
  iconUrl?: string;
  color: string;
}

interface Technology {
  id: string;
  name: string;
  description?: string;
  iconUrl?: string;
  color: string;
}

interface TechnicalDetail {
  title: string;
  content: string;
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
  customerId: string;
  companyId?: string;
  technologies?: string[];
  tags?: string[];
}

interface ReviewData {
  rating: number;
  comment: string;
  attachments?: string[];
  authorId: string;
}

interface FormData {
  solution: SolutionData;
  review: ReviewData;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  
  const [formData, setFormData] = useState<FormData>({
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
      customerId: '',
      companyId: '',
      technologies: [],
      tags: [],
    },
    review: {
      rating: 5,
      comment: '',
      attachments: [],
      authorId: '',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  // Load data on component mount
  useEffect(() => {
    loadUsers();
    loadCompanies();
    loadTags();
    loadTechnologies();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Failed to load users:', error);
    }
  };

  const loadCompanies = async () => {
    try {
      const response = await fetch('/api/admin/companies');
      const data = await response.json();
      setCompanies(data.companies || []);
    } catch (error) {
      console.error('Failed to load companies:', error);
    }
  };

  const loadTags = async () => {
    try {
      const response = await fetch('/api/admin/tags');
      const data = await response.json();
      setTags(data.tags || []);
    } catch (error) {
      console.error('Failed to load tags:', error);
    }
  };

  const loadTechnologies = async () => {
    try {
      const response = await fetch('/api/admin/technologies');
      const data = await response.json();
      setTechnologies(data.technologies || []);
    } catch (error) {
      console.error('Failed to load technologies:', error);
    }
  };

  const handleSolutionChange = (field: keyof SolutionData, value: string | boolean | string[] | TechnicalDetail[] | undefined) => {
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

  const handleArrayInputChange = (field: 'challenges' | 'outcomes', value: string) => {
    const arrayValue = value.split('\n').filter(item => item.trim() !== '');
    handleSolutionChange(field, arrayValue);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    handleSolutionChange('title', title);
    handleSolutionChange('slug', generateSlug(title));
  };

  const resetForm = () => {
    setFormData({
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
        customerId: '',
        companyId: '',
        technologies: [],
        tags: [],
      },
      review: {
        rating: 5,
        comment: '',
        attachments: [],
        authorId: '',
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/solutions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'Solution created successfully!'});
        resetForm();
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to create solution'});
      }
    } catch (error) {
      console.error('Error creating solution:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ADD NEW SOLUTION</h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Create new solutions by selecting existing users and companies</p>
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
        {/* User Selection */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">SELECT USER</h3>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">CUSTOMER *</label>
            
            {/* Selected User Preview */}
            {formData.solution.customerId && (
              <div className="mb-4 p-4 border-2 border-green-300 bg-green-50 rounded">
                {(() => {
                  const selectedUser = users.find(u => u.id === formData.solution.customerId);
                  return selectedUser ? (
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {selectedUser.avatarUrl ? (
                          <Image 
                            src={selectedUser.avatarUrl} 
                            alt={selectedUser.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover border-2 border-gray-300"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-gray-300 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {selectedUser.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{selectedUser.name}</div>
                        <div className="text-sm text-gray-600">{selectedUser.email}</div>
                        <div className="text-sm text-gray-500">
                          {selectedUser.country.flag} {selectedUser.country.name}
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
            
            <select
              value={formData.solution.customerId}
              onChange={(e) => handleSolutionChange('customerId', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            >
              <option value="">Select a user</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email}) - {user.country.flag} {user.country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Company Selection */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">SELECT COMPANY (Optional)</h3>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">COMPANY</label>
            
            {/* Selected Company Preview */}
            {formData.solution.companyId && (
              <div className="mb-4 p-4 border-2 border-blue-300 bg-blue-50 rounded">
                {(() => {
                  const selectedCompany = companies.find(c => c.id === formData.solution.companyId);
                  return selectedCompany ? (
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {selectedCompany.logoUrl ? (
                          <Image 
                            src={selectedCompany.logoUrl} 
                            alt={selectedCompany.name}
                            width={48}
                            height={48}
                            className="rounded object-cover border-2 border-gray-300"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded bg-blue-500 border-2 border-gray-300 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {selectedCompany.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{selectedCompany.name}</div>
                        <div className="text-sm text-gray-600">{selectedCompany.description}</div>
                        {selectedCompany.website && (
                          <div className="text-sm text-blue-600">
                            <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer">
                              {selectedCompany.website}
                            </a>
                          </div>
                        )}
                        <div className="text-sm text-gray-500">
                          {selectedCompany.country.flag} {selectedCompany.country.name}
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
            
            <select
              value={formData.solution.companyId || ''}
              onChange={(e) => handleSolutionChange('companyId', e.target.value || undefined)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
            >
              <option value="">No company</option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name} - {company.country.flag} {company.country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Solution Details */}
        <div className="bg-white p-6 border-2 border-gray-300 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">SOLUTION DETAILS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">TITLE *</label>
              <input
                type="text"
                value={formData.solution.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">SLUG</label>
              <input
                type="text"
                value={formData.solution.slug}
                onChange={(e) => handleSolutionChange('slug', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none bg-gray-100"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">SHORT DESCRIPTION *</label>
            <textarea
              value={formData.solution.shortDescription}
              onChange={(e) => handleSolutionChange('shortDescription', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">LONG DESCRIPTION *</label>
            <textarea
              value={formData.solution.longDescription}
              onChange={(e) => handleSolutionChange('longDescription', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-32"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">PROBLEM DESCRIPTION *</label>
            <textarea
              value={formData.solution.problemDescription}
              onChange={(e) => handleSolutionChange('problemDescription', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">SOLUTION DESCRIPTION *</label>
            <textarea
              value={formData.solution.solutionDescription}
              onChange={(e) => handleSolutionChange('solutionDescription', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">THUMBNAIL URL</label>
              <input
                type="url"
                value={formData.solution.thumbnailUrl || ''}
                onChange={(e) => handleSolutionChange('thumbnailUrl', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">DEMO URL</label>
              <input
                type="url"
                value={formData.solution.demoUrl || ''}
                onChange={(e) => handleSolutionChange('demoUrl', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              <input
                type="checkbox"
                checked={formData.solution.isForSale}
                onChange={(e) => handleSolutionChange('isForSale', e.target.checked)}
                className="mr-2"
              />
              IS FOR SALE
            </label>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">CHALLENGES (one per line)</label>
            <textarea
              value={formData.solution.challenges?.join('\n') || ''}
              onChange={(e) => handleArrayInputChange('challenges', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">OUTCOMES (one per line)</label>
            <textarea
              value={formData.solution.outcomes?.join('\n') || ''}
              onChange={(e) => handleArrayInputChange('outcomes', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
            />
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white p-6 border-2 border-gray-300 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">TECHNICAL DETAILS</h3>
            <button
              type="button"
              onClick={addTechnicalDetail}
              className="px-4 py-2 border-2 border-gray-900 bg-gray-900 text-white font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              ADD DETAIL
            </button>
          </div>
          
          {formData.solution.technicalDetails?.map((detail, index) => (
            <div key={index} className="border-2 border-gray-200 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold">Detail #{index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeTechnicalDetail(index)}
                  className="px-3 py-1 border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-colors"
                >
                  REMOVE
                </button>
              </div>
              <input
                type="text"
                placeholder="Title"
                value={detail.title}
                onChange={(e) => handleTechnicalDetailChange(index, 'title', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              />
              <textarea
                placeholder="Content"
                value={detail.content}
                onChange={(e) => handleTechnicalDetailChange(index, 'content', e.target.value)}
                className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
              />
            </div>
          ))}
        </div>

        {/* Tags Selection */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">SELECT TAGS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {tags.map((tag) => (
              <label key={tag.id} className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.solution.tags?.includes(tag.id) || false}
                  onChange={(e) => {
                    const currentTags = formData.solution.tags || [];
                    if (e.target.checked) {
                      handleSolutionChange('tags', [...currentTags, tag.id]);
                    } else {
                      handleSolutionChange('tags', currentTags.filter(id => id !== tag.id));
                    }
                  }}
                />
                <div className="w-4 h-4 rounded" style={{ backgroundColor: tag.color }}></div>
                <span className="text-sm">{tag.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Technologies Selection */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">SELECT TECHNOLOGIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {technologies.map((technology) => (
              <label key={technology.id} className="flex items-center space-x-2 p-2 border border-gray-300 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.solution.technologies?.includes(technology.id) || false}
                  onChange={(e) => {
                    const currentTechnologies = formData.solution.technologies || [];
                    if (e.target.checked) {
                      handleSolutionChange('technologies', [...currentTechnologies, technology.id]);
                    } else {
                      handleSolutionChange('technologies', currentTechnologies.filter(id => id !== technology.id));
                    }
                  }}
                />
                <div className="w-4 h-4 rounded" style={{ backgroundColor: technology.color }}></div>
                <span className="text-sm">{technology.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white p-6 border-2 border-gray-300 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">REVIEW DETAILS</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">REVIEW AUTHOR *</label>
            
            {/* Selected Review Author Preview */}
            {formData.review.authorId && (
              <div className="mb-4 p-4 border-2 border-purple-300 bg-purple-50 rounded">
                {(() => {
                  const selectedAuthor = users.find(u => u.id === formData.review.authorId);
                  return selectedAuthor ? (
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {selectedAuthor.avatarUrl ? (
                          <Image 
                            src={selectedAuthor.avatarUrl} 
                            alt={selectedAuthor.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover border-2 border-gray-300"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-purple-500 border-2 border-gray-300 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {selectedAuthor.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{selectedAuthor.name}</div>
                        <div className="text-sm text-gray-600">{selectedAuthor.email}</div>
                        <div className="text-sm text-gray-500">
                          {selectedAuthor.country.flag} {selectedAuthor.country.name}
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
            
            <select
              value={formData.review.authorId}
              onChange={(e) => handleReviewChange('authorId', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            >
              <option value="">Select a reviewer</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">RATING *</label>
            <select
              value={formData.review.rating}
              onChange={(e) => handleReviewChange('rating', parseInt(e.target.value))}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            >
              <option value={1}>⭐ 1 Star</option>
              <option value={2}>⭐⭐ 2 Stars</option>
              <option value={3}>⭐⭐⭐ 3 Stars</option>
              <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
              <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">COMMENT *</label>
            <textarea
              value={formData.review.comment}
              onChange={(e) => handleReviewChange('comment', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
              required
            />
          </div>
        </div>

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
            {isSubmitting ? 'CREATING SOLUTION...' : 'CREATE SOLUTION'}
          </button>
        </div>
      </form>
    </div>
  );
}