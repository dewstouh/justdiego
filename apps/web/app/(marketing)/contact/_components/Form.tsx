"use client";

import { useState } from "react";



export default function Form() {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // TODO: Replace with your actual form submission endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');


  return (
      <div className="w-full max-w-4xl mx-auto">
          <div className="bg-gray-50 border-2 border-gray-200 p-8">
              <div className="mb-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h4>
                  <p className="text-gray-600">
                      Tell me about your project and let&apos;s discuss how I can help.
                  </p>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                  Name *
                              </label>
                              <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  required
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                                  placeholder="Your full name"
                              />
                          </div>
                          <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                  Email *
                              </label>
                              <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  required
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                                  placeholder="your@email.com"
                              />
                          </div>
                      </div>

                      <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                              Company
                          </label>
                          <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                              placeholder="Your company name"
                          />
                      </div>

                      <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                              Message *
                          </label>
                          <textarea
                              id="message"
                              name="message"
                              required
                              rows={5}
                              value={formData.message}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-colors resize-vertical"
                              placeholder="Tell me about your project and how I can help..."
                          />
                      </div>

                      {submitStatus === 'success' && (
                          <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3">
                              Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                          </div>
                      )}

                      {submitStatus === 'error' && (
                          <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3">
                              Sorry, there was an error sending your message. Please try again or contact me directly.
                          </div>
                      )}

                      <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gray-900 text-white px-8 py-4 border-2 border-gray-900 font-bold hover:bg-white hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}
