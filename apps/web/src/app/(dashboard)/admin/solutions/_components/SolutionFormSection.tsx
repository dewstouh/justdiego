import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/(marketing)/contact/_components/ui/Card';
import { TechnologySelector } from '@justdiego/react-utils';
import type { Prisma } from '@justdiego/db';

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
  companyId?: string;
  technologies?: Prisma.TechnologyCreateInput[];
}

interface SolutionFormSectionProps {
  formData: SolutionData;
  onChange: (field: keyof SolutionData, value: string | boolean | string[] | TechnicalDetail[] | Prisma.TechnologyCreateInput[]) => void;
  onArrayInputChange: (field: 'challenges' | 'outcomes', value: string, section: 'solution') => void;
  onTitleChange: (title: string) => void;
  onTechnicalDetailChange: (index: number, field: 'title' | 'content', value: string) => void;
  onAddTechnicalDetail: () => void;
  onRemoveTechnicalDetail: (index: number) => void;
  onAddAttachment: (section: 'solution') => void;
  onUpdateAttachment: (index: number, value: string, section: 'solution') => void;
  onRemoveAttachment: (index: number, section: 'solution') => void;
}

export function SolutionFormSection({
  formData,
  onChange,
  onArrayInputChange,
  onTitleChange,
  onTechnicalDetailChange,
  onAddTechnicalDetail,
  onRemoveTechnicalDetail,
  onAddAttachment,
  onUpdateAttachment,
  onRemoveAttachment
}: SolutionFormSectionProps) {
  
  const handleTechnologiesChange = (technologies: Prisma.TechnologyCreateInput[]) => {
    onChange('technologies', technologies);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Solution Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => onTitleChange(e.target.value)}
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
              value={formData.slug}
              onChange={(e) => onChange('slug', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-gray-100 text-gray-900"
              placeholder="amazing-business-solution"
            />
          </div>
        </div>

        {/* Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Short Description *
            </label>
            <textarea
              required
              value={formData.shortDescription}
              onChange={(e) => onChange('shortDescription', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
              placeholder="Brief description of the solution..."
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => onChange('description', e.target.value)}
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
            value={formData.longDescription}
            onChange={(e) => onChange('longDescription', e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-32"
            placeholder="Detailed description of the solution, implementation, and results..."
          />
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Problem Description *
            </label>
            <textarea
              required
              value={formData.problemDescription}
              onChange={(e) => onChange('problemDescription', e.target.value)}
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
              value={formData.solutionDescription}
              onChange={(e) => onChange('solutionDescription', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
              placeholder="How was it solved?"
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Technologies Used *
          </label>
          <TechnologySelector
            selectedTechnologies={formData.technologies || []}
            onTechnologiesChange={handleTechnologiesChange}
            placeholder="Search and select technologies..."
            limit={30}
            showIcons={true}
          />
        </div>

        {/* URLs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Thumbnail URL
            </label>
            <input
              type="url"
              value={formData.thumbnailUrl}
              onChange={(e) => onChange('thumbnailUrl', e.target.value)}
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
              value={formData.demoUrl}
              onChange={(e) => onChange('demoUrl', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              placeholder="https://demo.example.com"
            />
          </div>
        </div>

        {/* Challenges & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Challenges (one per line)
            </label>
            <textarea
              value={formData.challenges?.join('\n') || ''}
              onChange={(e) => onArrayInputChange('challenges', e.target.value, 'solution')}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
              placeholder="Challenge 1&#10;Challenge 2&#10;Challenge 3"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Outcomes (one per line)
            </label>
            <textarea
              value={formData.outcomes?.join('\n') || ''}
              onChange={(e) => onArrayInputChange('outcomes', e.target.value, 'solution')}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
              placeholder="Outcome 1&#10;Outcome 2&#10;Outcome 3"
            />
          </div>
        </div>

        {/* Date & Sale Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Completed Date
            </label>
            <input
              type="date"
              value={formData.completedAt}
              onChange={(e) => onChange('completedAt', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
            />
          </div>
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.isForSale}
                onChange={(e) => onChange('isForSale', e.target.checked)}
                className="w-4 h-4 border-2 border-gray-300"
              />
              <span className="text-sm font-bold text-gray-700">For Sale</span>
            </label>
          </div>
        </div>

        {/* Technical Details */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-bold text-gray-700">
              Technical Details
            </label>
            <button
              type="button"
              onClick={onAddTechnicalDetail}
              className="px-3 py-1 border-2 border-gray-900 text-gray-900 text-sm font-bold hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              + ADD DETAIL
            </button>
          </div>
          
          {formData.technicalDetails?.map((detail, index) => (
            <div key={index} className="border-2 border-gray-200 p-4 mb-4 rounded">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-bold text-gray-700">Detail #{index + 1}</span>
                <button
                  type="button"
                  onClick={() => onRemoveTechnicalDetail(index)}
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
                    onChange={(e) => onTechnicalDetailChange(index, 'title', e.target.value)}
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
                    onChange={(e) => onTechnicalDetailChange(index, 'content', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:border-gray-900 text-sm h-20"
                    placeholder="e.g., Built with React 18, TypeScript, and Tailwind CSS"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {!formData.technicalDetails?.length && (
            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded">
              <p className="text-gray-500 mb-3">No technical details added yet</p>
              <button
                type="button"
                onClick={onAddTechnicalDetail}
                className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                ADD FIRST DETAIL
              </button>
            </div>
          )}
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Solution Attachments
          </label>
          <div className="space-y-2">
            {(formData.attachments || []).map((attachment, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="url"
                  value={attachment}
                  onChange={(e) => onUpdateAttachment(index, e.target.value, 'solution')}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="https://example.com/attachment.png"
                />
                <button
                  type="button"
                  onClick={() => onRemoveAttachment(index, 'solution')}
                  className="px-3 py-2 bg-red-600 text-white hover:bg-red-700 font-bold"
                >
                  REMOVE
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => onAddAttachment('solution')}
              className="w-full px-3 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 font-bold"
            >
              + ADD ATTACHMENT
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Add URLs for images, videos, or other attachments</p>
        </div>
      </CardContent>
    </Card>
  );
}
