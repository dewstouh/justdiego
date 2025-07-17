"use client";

import { useState } from 'react';
import SolutionForm from './solutions/_components/SolutionForm';

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

export default function AdminDashboard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  const handleSubmit = async (formData: FormData) => {
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
    <SolutionForm
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitStatus={submitStatus}
    />
  );
}