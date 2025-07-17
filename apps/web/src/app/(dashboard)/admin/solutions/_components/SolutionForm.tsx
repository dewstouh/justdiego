"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchableSelect from './SearchableSelect';

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
  problemDescription: string;
  solutionDescription: string;
  technicalDetails?: TechnicalDetail[];
  attachments?: string[];
  challenges?: string[];
  outcomes?: string[];
  completedAt: string;
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

interface SolutionFormProps {
  initialData?: FormData;
  isEditing?: boolean;
  onSubmit: (formData: FormData) => Promise<void>;
  isSubmitting?: boolean;
  submitStatus?: {type: 'success' | 'error' | null, message: string};
}

export default function SolutionForm({ 
  initialData, 
  isEditing = false, 
  onSubmit, 
  isSubmitting = false, 
  submitStatus 
}: SolutionFormProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      solution: {
        title: '',
        slug: '',
        shortDescription: '',
        longDescription: '',
        description: '',
        problemDescription: '',
        solutionDescription: '',
        technicalDetails: [],
        attachments: [],
        challenges: [],
        outcomes: [],
        completedAt: new Date().toISOString().split('T')[0]!,
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
    }
  );

  // Load data on component mount
  useEffect(() => {
    loadUsers();
    loadCompanies();
    loadTags();
    loadTechnologies();
  }, []);

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Auto-set review author to customer when customer changes
  useEffect(() => {
    if (formData.solution.customerId && formData.review.authorId !== formData.solution.customerId) {
      setFormData(prev => ({
        ...prev,
        review: {
          ...prev.review,
          authorId: formData.solution.customerId
        }
      }));
    }
  }, [formData.solution.customerId, formData.review.authorId]);

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

  // Challenge management functions
  const addChallenge = () => {
    const currentChallenges = formData.solution.challenges || [];
    handleSolutionChange('challenges', [...currentChallenges, '']);
  };

  const updateChallenge = (index: number, value: string) => {
    const currentChallenges = [...(formData.solution.challenges || [])];
    currentChallenges[index] = value;
    handleSolutionChange('challenges', currentChallenges);
  };

  const removeChallenge = (index: number) => {
    const currentChallenges = formData.solution.challenges?.filter((_, i) => i !== index) || [];
    handleSolutionChange('challenges', currentChallenges);
  };

  // Outcome management functions
  const addOutcome = () => {
    const currentOutcomes = formData.solution.outcomes || [];
    handleSolutionChange('outcomes', [...currentOutcomes, '']);
  };

  const updateOutcome = (index: number, value: string) => {
    const currentOutcomes = [...(formData.solution.outcomes || [])];
    currentOutcomes[index] = value;
    handleSolutionChange('outcomes', currentOutcomes);
  };

  const removeOutcome = (index: number) => {
    const currentOutcomes = formData.solution.outcomes?.filter((_, i) => i !== index) || [];
    handleSolutionChange('outcomes', currentOutcomes);
  };

  // Attachment management functions
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
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    handleSolutionChange('title', title);
    if (!isEditing) { // Only auto-generate slug when creating new solutions
      handleSolutionChange('slug', generateSlug(title));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {isEditing ? 'EDIT SOLUTION' : 'ADD NEW SOLUTION'}
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">
          {isEditing 
            ? 'Update solution details' 
            : 'Create new solutions by selecting existing users and companies'
          }
        </p>
      </div>

      {submitStatus?.type && (
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
                className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">SHORT DESCRIPTION *</label>
            <textarea
              value={formData.solution.shortDescription}
              onChange={(e) => handleSolutionChange('shortDescription', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-20"
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

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">COMPLETED DATE *</label>
            <input
              type="date"
              value={formData.solution.completedAt}
              onChange={(e) => handleSolutionChange('completedAt', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            />
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">TECHNICAL DETAILS</h3>
          <div className="space-y-4">
            {formData.solution.technicalDetails?.map((detail, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">Technical Detail {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeTechnicalDetail(index)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    Remove
                  </button>
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Title"
                    value={detail.title}
                    onChange={(e) => handleTechnicalDetailChange(index, 'title', e.target.value)}
                    className="w-full p-2 border border-gray-300 focus:border-gray-900 outline-none"
                  />
                  <textarea
                    placeholder="Content"
                    value={detail.content}
                    onChange={(e) => handleTechnicalDetailChange(index, 'content', e.target.value)}
                    className="w-full p-2 border border-gray-300 focus:border-gray-900 outline-none h-20"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addTechnicalDetail}
              className="w-full p-3 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
            >
              + Add Technical Detail
            </button>
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">CHALLENGES</h3>
          <div className="space-y-4">
            {formData.solution.challenges?.map((challenge, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={challenge}
                  onChange={(e) => updateChallenge(index, e.target.value)}
                  placeholder={`Challenge ${index + 1}`}
                  className="flex-1 p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeChallenge(index)}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addChallenge}
              className="w-full p-3 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
            >
              + Add Challenge
            </button>
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">OUTCOMES</h3>
          <div className="space-y-4">
            {formData.solution.outcomes?.map((outcome, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={outcome}
                  onChange={(e) => updateOutcome(index, e.target.value)}
                  placeholder={`Outcome ${index + 1}`}
                  className="flex-1 p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeOutcome(index)}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addOutcome}
              className="w-full p-3 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
            >
              + Add Outcome
            </button>
          </div>
        </div>

        {/* Solution Attachments */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">SOLUTION ATTACHMENTS</h3>
          <div className="space-y-4">
            {formData.solution.attachments?.map((attachment, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="url"
                  value={attachment}
                  onChange={(e) => updateAttachment(index, e.target.value, 'solution')}
                  placeholder={`Attachment URL ${index + 1}`}
                  className="flex-1 p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeAttachment(index, 'solution')}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addAttachment('solution')}
              className="w-full p-3 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
            >
              + Add Attachment
            </button>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <SearchableSelect
            options={technologies}
            selectedIds={formData.solution.technologies || []}
            onSelectionChange={(selectedIds) => handleSolutionChange('technologies', selectedIds)}
            placeholder="Search for technologies..."
            title="TECHNOLOGIES"
          />
        </div>

        {/* Tags */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <SearchableSelect
            options={tags}
            selectedIds={formData.solution.tags || []}
            onSelectionChange={(selectedIds) => handleSolutionChange('tags', selectedIds)}
            placeholder="Search for tags..."
            title="TAGS"
          />
        </div>

        {/* Review Section */}
        <div className="bg-white p-6 border-2 border-gray-300 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">REVIEW</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">RATING *</label>
            <select
              value={formData.review.rating}
              onChange={(e) => handleReviewChange('rating', parseInt(e.target.value))}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
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

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">REVIEW AUTHOR</label>
            <div className="p-3 border-2 border-gray-300 bg-gray-50 text-gray-600">
              {(() => {
                const selectedUser = users.find(u => u.id === formData.solution.customerId);
                return selectedUser 
                  ? `${selectedUser.name} (${selectedUser.email}) - Customer`
                  : 'Customer (will be set automatically)';
              })()}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Review author is automatically set to the customer
            </p>
          </div>
        </div>

        {/* Review Attachments */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">REVIEW ATTACHMENTS</h3>
          <div className="space-y-4">
            {formData.review.attachments?.map((attachment, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="url"
                  value={attachment}
                  onChange={(e) => updateAttachment(index, e.target.value, 'review')}
                  placeholder={`Review Attachment URL ${index + 1}`}
                  className="flex-1 p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeAttachment(index, 'review')}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addAttachment('review')}
              className="w-full p-3 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
            >
              + Add Review Attachment
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-white p-6 border-2 border-gray-300">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-4 text-white font-bold ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gray-900 hover:bg-gray-800'
            }`}
          >
            {isSubmitting 
              ? (isEditing ? 'UPDATING...' : 'CREATING...') 
              : (isEditing ? 'UPDATE SOLUTION' : 'CREATE SOLUTION')
            }
          </button>
        </div>
      </form>
    </div>
  );
}
