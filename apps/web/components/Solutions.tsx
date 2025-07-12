'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDate, getTimeAgo } from '@justdiego/utils';
import { getSolutions } from '@justdiego/react-utils';

export default function Solutions() {
  const solutions = getSolutions();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full max-w-[55rem] mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
SOLUTIONS IN ACTION
        </h2>
        <div className="w-32 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identifying problems. Delivering solutions. Automating outcomes.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            (This section is always up-to-date with the latest work delivered.)
          </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid gap-8 lg:gap-12">
        {solutions.slice(0, 2).map((solution) => (
          <div key={solution.id} className="relative">
            {/* Separator Line */}
            <div className="w-full border-t-2 border-gray-400 mb-8 relative">
              <div className="absolute left-0 top-0 w-8 h-0.5 bg-gray-900"></div>
              <div className="absolute right-0 top-0 w-8 h-0.5 bg-gray-900"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Project Info */}
              <div className="space-y-6">
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6">
                  <a 
                    href={solution.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-32 h-16 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600 hover:border-gray-900 cursor-pointer"
                  >
                    {solution.company.split(' ').map(word => word[0]).join('')}
                  </a>
                  <div>
                    <a 
                      href={solution.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-xl text-gray-900 hover:text-gray-700 cursor-pointer"
                    >
                      {solution.company}
                    </a>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-lg">{solution.countryFlag}</span>
                      <span>{solution.country}</span>
                    </div>
                    <div className="text-sm text-gray-500 font-mono mt-1">
                      Completed: {formatDate(solution.completedDate)} • {getTimeAgo(solution.completedDate)}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Objective: {solution.project}
                  </h4>

                  <div className="bg-red-50 border-2 border-red-200 p-4 mb-4">
                    <h5 className="font-bold text-sm text-red-700 mb-2">PROBLEM:</h5>
                    <p className="text-red-900 font-mono text-sm">{solution.problem}</p>
                  </div>
                  
                  <div className="bg-green-50 border-2 border-green-200 p-4 mb-4">
                    <h5 className="font-bold text-sm text-green-700 mb-2">RESULT:</h5>
                    <p className="text-green-900 font-mono text-sm">{solution.result}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-gray-200 border border-gray-400 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Review, Screenshots & Demo */}
              <div className="space-y-6">
                {/* Review */}
                <div className="bg-white border-2 border-gray-900 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">★</span>
                      ))}
                    </div>
                    <blockquote className="text-gray-900 font-medium text-lg mb-4">
                      &ldquo;{solution.review}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-mono">IMG</span>
                      </div>
                      <cite className="text-sm text-gray-600 font-mono">
                        — {solution.reviewer}
                      </cite>
                    </div>
                  </div>
                </div>

                {/* Screenshots Gallery */}
                <div className="space-y-3">
                  <h5 className="font-bold text-sm text-gray-700 mb-3">ATTACHMENTS:</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {solution.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() => openImageModal(screenshot)}
                      >
                        <div className="w-full h-24 bg-gray-200 border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-gray-400 mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs">📷</span>
                            </div>
                            <span className="text-xs text-gray-600 font-mono">
                              Screenshot {index + 1}
                            </span>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                          <span className="text-white text-xs font-bold bg-black bg-opacity-50 px-2 py-1">
                            Click to view
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Button */}
                {solution.demoUrl && (
                  <div className="text-center">
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="inline-block bg-gray-900 text-white px-8 py-3 border-2 border-gray-900 font-bold hover:bg-white hover:text-gray-900 transition-all duration-200"
                    >
                      VIEW CASE →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {solutions.length > 2 && (
        <div className="text-center mt-20">
          <div className="w-full border-t border-gray-200 mb-8"></div>
          <a
            href="/solutions"
            className="inline-block bg-white text-gray-900 px-8 py-3 border-2 border-gray-300 font-bold hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            VIEW ALL SOLUTIONS →
          </a>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-75 z-10"
            >
              ×
            </button>
            <div className="bg-white border-4 border-gray-300 p-4 max-h-[90vh] overflow-auto">
              <div className="w-full h-96 bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 mx-auto mb-4 flex items-center justify-center text-2xl">
                    📷
                  </div>
                  <p className="text-gray-600 font-mono text-sm mb-2">Screenshot Preview</p>
                  <p className="text-xs text-gray-500">
                    {selectedImage}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 font-mono">
                  Click outside or the × button to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
