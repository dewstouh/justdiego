"use client";

import { useContactForm } from './hooks/useContactForm';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { FormInput, StatusMessage, SubmitButton } from './ui/FormComponents';

export default function ContactForm() {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get a full analysis</CardTitle>
        <CardDescription>
          No small talk. State your problem, get a solution.
        </CardDescription>
      </CardHeader>

      <CardContent className="h-[600px] p-0">
        <form onSubmit={handleSubmit} className="h-full p-6 flex flex-col">
          <div className="space-y-4 flex-shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                id="name"
                name="name"
                type="text"
                label="Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
              />
              
              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
              />
            </div>

            <FormInput
              id="company"
              name="company"
              type="text"
              label="Company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your business url (If applicable)"
            />
          </div>

          <div className="flex-1 flex flex-col mt-4 min-h-0">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex-shrink-0">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe your business mess. If there’s a real problem, you’ll get the fix."
              className="flex-1 w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="mt-6 space-y-4 flex-shrink-0">
            {submitStatus === 'success' && (
              <StatusMessage type="success">
                🎉 Email successfully sent! You will get a reply in less than 24h.
              </StatusMessage>
            )}

            {submitStatus === 'error' && (
              <StatusMessage type="error">
                Sorry, there was an error sending your message. Please try again or contact me directly.
              </StatusMessage>
            )}

            <SubmitButton 
              isLoading={isSubmitting}
              loadingText="SENDING..."
            >
              SEND MESSAGE →
            </SubmitButton>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
