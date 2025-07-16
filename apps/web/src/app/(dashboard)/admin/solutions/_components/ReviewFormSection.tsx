import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/(marketing)/contact/_components/ui/Card';

interface ReviewData {
  rating: number;
  comment: string;
  attachments?: string[];
}

interface ReviewFormSectionProps {
  formData: ReviewData;
  onChange: (field: keyof ReviewData, value: string | number | string[]) => void;
  onAddAttachment: (section: 'review') => void;
  onUpdateAttachment: (index: number, value: string, section: 'review') => void;
  onRemoveAttachment: (index: number, section: 'review') => void;
}

export function ReviewFormSection({ 
  formData, 
  onChange, 
  onAddAttachment, 
  onUpdateAttachment, 
  onRemoveAttachment 
}: ReviewFormSectionProps) {
  return (
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
            value={formData.rating}
            onChange={(e) => onChange('rating', parseInt(e.target.value))}
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
            value={formData.comment}
            onChange={(e) => onChange('comment', e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-32"
            placeholder="Customer's review of the solution..."
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Review Attachments
          </label>
          <div className="space-y-2">
            {(formData.attachments || []).map((attachment, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="url"
                  value={attachment}
                  onChange={(e) => onUpdateAttachment(index, e.target.value, 'review')}
                  className="flex-1 px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
                  placeholder="https://example.com/review-attachment.png"
                />
                <button
                  type="button"
                  onClick={() => onRemoveAttachment(index, 'review')}
                  className="px-3 py-2 bg-red-600 text-white hover:bg-red-700 font-bold"
                >
                  REMOVE
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => onAddAttachment('review')}
              className="w-full px-3 py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 font-bold"
            >
              + ADD ATTACHMENT
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Optional: URLs for review-related attachments</p>
        </div>
      </CardContent>
    </Card>
  );
}
