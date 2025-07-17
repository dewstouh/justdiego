import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/(marketing)/contact/_components/ui/Card';
import { TechnologySelector, TagSelector } from '@justdiego/react-utils';
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
  problemDescription: string;
  solutionDescription: string;
  technicalDetails?: TechnicalDetail[];
  attachments?: string[];
  challenges?: string[];
  outcomes?: string[];
  completedAt: string;
  companyId?: string;
  technologies?: Prisma.TechnologyCreateInput[];
  tags?: Prisma.TagCreateInput[];
}

interface SolutionFormSectionProps {
  formData: SolutionData;
  onChange: (field: keyof SolutionData, value: string | boolean | string[] | TechnicalDetail[] | Prisma.TechnologyCreateInput[] | Prisma.TagCreateInput[]) => void;
  onTitleChange: (title: string) => void;
  onTechnicalDetailChange: (index: number, field: 'title' | 'content', value: string) => void;
  onAddTechnicalDetail: () => void;
  onRemoveTechnicalDetail: (index: number) => void;
  onAddAttachment: (section: 'solution') => void;
  onUpdateAttachment: (index: number, value: string, section: 'solution') => void;
  onRemoveAttachment: (index: number, section: 'solution') => void;
  onAddChallenge: () => void;
  onUpdateChallenge: (index: number, value: string) => void;
  onRemoveChallenge: (index: number) => void;
  onAddOutcome: () => void;
  onUpdateOutcome: (index: number, value: string) => void;
  onRemoveOutcome: (index: number) => void;
}

export function SolutionFormSection({
  formData,
  onChange,
  onTitleChange,
  onTechnicalDetailChange,
  onAddTechnicalDetail,
  onRemoveTechnicalDetail,
  onAddAttachment,
  onUpdateAttachment,
  onRemoveAttachment,
  onAddChallenge,
  onUpdateChallenge,
  onRemoveChallenge,
  onAddOutcome,
  onUpdateOutcome,
  onRemoveOutcome
}: SolutionFormSectionProps) {
  
  const handleTechnologiesChange = (technologies: Prisma.TechnologyCreateInput[]) => {
    onChange('technologies', technologies);
  };

  const handleTagsChange = (tags: Prisma.TagCreateInput[]) => {
    onChange('tags', tags);
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

        {/* Tags Section */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Tags
          </label>
          <TagSelector
            selectedTags={formData.tags || []}
            onTagsChange={handleTagsChange}
            placeholder="Search and select tags..."
            limit={30}
            showIcons={true}
          />
          <p className="text-xs text-gray-500 mt-1">Select tags that categorize this solution</p>
        </div>

        {/* Challenges & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-gray-700">Challenges</label>
              <button
                type="button"
                onClick={onAddChallenge}
                className="px-3 py-1 border-2 border-gray-900 bg-gray-900 text-white text-sm font-bold hover:bg-white hover:text-gray-900 transition-colors"
              >
                ADD CHALLENGE
              </button>
            </div>
            <div className="space-y-2">
              {(formData.challenges || []).map((challenge, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={challenge}
                    onChange={(e) => onUpdateChallenge(index, e.target.value)}
                    className="flex-1 px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                    placeholder={`Challenge ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => onRemoveChallenge(index)}
                    className="px-3 py-2 border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-colors"
                  >
                    REMOVE
                  </button>
                </div>
              ))}
              {!formData.challenges?.length && (
                <p className="text-gray-500 text-sm">No challenges added yet. Click &quot;ADD CHALLENGE&quot; to add one.</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-gray-700">Outcomes</label>
              <button
                type="button"
                onClick={onAddOutcome}
                className="px-3 py-1 border-2 border-gray-900 bg-gray-900 text-white text-sm font-bold hover:bg-white hover:text-gray-900 transition-colors"
              >
                ADD OUTCOME
              </button>
            </div>
            <div className="space-y-2">
              {(formData.outcomes || []).map((outcome, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={outcome}
                    onChange={(e) => onUpdateOutcome(index, e.target.value)}
                    className="flex-1 px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                    placeholder={`Outcome ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => onRemoveOutcome(index)}
                    className="px-3 py-2 border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-colors"
                  >
                    REMOVE
                  </button>
                </div>
              ))}
              {!formData.outcomes?.length && (
                <p className="text-gray-500 text-sm">No outcomes added yet. Click &quot;ADD OUTCOME&quot; to add one.</p>
              )}
            </div>
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Completed Date *
          </label>
          <input
            type="date"
            required
            value={formData.completedAt}
            onChange={(e) => onChange('completedAt', e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
          />
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
