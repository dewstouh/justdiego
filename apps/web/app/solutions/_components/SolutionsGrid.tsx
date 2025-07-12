import { Solution } from "@justdiego/types";
import { formatDate, getTimeAgo } from "@justdiego/utils";
import { getCustomer, getCountry, getTags, getTechnologies, getReview } from "@justdiego/react-utils";
import Link from "next/link";

export default function SolutionsGrid({ solutions }: { solutions: Solution[] }) {
  return (
      <div className="grid gap-12 lg:gap-16">
          {solutions.map((solution, index) => {
              // Get related data
              const customer = getCustomer(solution.customerId);
              const country = getCountry(solution.countryId);
              const tags = getTags().filter(tag => solution.tagIds.includes(tag.id));
              const technologies = getTechnologies().filter(tech => solution.technologyIds.includes(tech.id));
              const review = solution.reviewId ? getReview(solution.reviewId) : null;

              return (
                  <div key={solution.id} className="relative">
                      {/* Separator Line */}
                      {index > 0 && (
                          <div className="w-full border-t-2 border-gray-400 mb-12 relative">
                              <div className="absolute left-0 top-0 w-12 h-0.5 bg-gray-900"></div>
                              <div className="absolute right-0 top-0 w-12 h-0.5 bg-gray-900"></div>
                          </div>
                      )}

                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                          {/* Left Column - Project Info */}
                          <div className="space-y-6">
                              {/* Company Header */}
                              <div className="flex items-center gap-4 mb-6">
                                  <div className="w-32 h-16 bg-gray-100 border-2 border-gray-300 flex items-center justify-center font-mono text-xs text-gray-600">
                                      {customer ? customer.id.split('-').map(word => word[0]?.toUpperCase() || '').join('') : 'N/A'}
                                  </div>
                                  <div>
                                      <div className="font-bold text-xl text-gray-900">
                                          {customer?.id.replace('customer-', '').replace('-', ' ').toUpperCase() || 'Unknown Customer'}
                                      </div>
                                      <div className="flex items-center gap-2 text-sm text-gray-600">
                                          <span className="text-lg">{country?.flag || '🏳️'}</span>
                                          <span>{country?.name || 'Unknown Country'}</span>
                                      </div>
                                      <div className="text-sm text-gray-500 font-mono mt-1">
                                          Completed: {formatDate(solution.completedAt.toISOString())} • {getTimeAgo(solution.completedAt.toISOString())}
                                      </div>
                                  </div>
                              </div>

                              {/* Project Details */}
                              <div>
                                  <h2 className="font-bold text-xl text-gray-900 mb-3">
                                      {solution.title}
                                  </h2>

                                  <p className="text-gray-600 mb-4 leading-relaxed">
                                      {solution.shortDescription}
                                  </p>

                                  <div className="bg-red-50 border-2 border-red-200 p-4 mb-4">
                                      <h3 className="font-bold text-sm text-red-700 mb-2">PROBLEM:</h3>
                                      <p className="text-red-900 font-mono text-sm">{solution.problem}</p>
                                  </div>

                                  <div className="bg-green-50 border-2 border-green-200 p-4 mb-6">
                                      <h3 className="font-bold text-sm text-green-700 mb-2">RESULT:</h3>
                                      <p className="text-green-900 font-mono text-sm">{solution.result}</p>
                                  </div>

                                  {/* Tags */}
                                  <div className="flex flex-wrap gap-2 mb-6">
                                      {tags.map((tag) => (
                                          <span
                                              key={tag.id}
                                              className="px-3 py-1 text-xs font-mono bg-gray-200 border border-gray-400 text-gray-800"
                                              style={{ backgroundColor: tag.color + '20', borderColor: tag.color }}
                                          >
                                              {tag.icon} {tag.name}
                                          </span>
                                      ))}
                                  </div>

                                  {/* View Details Button */}
                                  <Link
                                      href={`/solutions/${solution.slug}`}
                                      className="inline-block bg-gray-900 text-white px-6 py-3 border-2 border-gray-900 font-bold hover:bg-white hover:text-gray-900 transition-all duration-200"
                                  >
                                      VIEW FULL CASE STUDY →
                                  </Link>
                              </div>
                          </div>

                          {/* Right Column - Review & Quick Info */}
                          <div className="space-y-6">
                              {/* Review */}
                              {review && (
                                  <div className="bg-white border-2 border-gray-900 p-6">
                                      <div className="mb-4">
                                          <div className="flex items-center gap-1 mb-3">
                                              {[...Array(review.rating)].map((_, i) => (
                                                  <span key={i} className="text-yellow-500 text-lg">★</span>
                                              ))}
                                              {[...Array(5 - review.rating)].map((_, i) => (
                                                  <span key={i} className="text-gray-300 text-lg">★</span>
                                              ))}
                                          </div>
                                          <blockquote className="text-gray-900 font-medium text-lg mb-4">
                                              &ldquo;{review.content}&rdquo;
                                          </blockquote>
                                          <div className="flex items-center gap-3">
                                              <div className="w-12 h-12 bg-gray-300 border-2 border-gray-400 rounded-full flex items-center justify-center">
                                                  <span className="text-gray-600 text-xs font-mono">IMG</span>
                                              </div>
                                              <cite className="text-sm text-gray-600 font-mono">
                                                  — {review.authorId.replace('author-', '').replace('-', ' ')}
                                              </cite>
                                          </div>
                                      </div>
                                  </div>
                              )}

                              {/* Quick Stats */}
                              <div className="bg-gray-50 border-2 border-gray-200 p-6">
                                  <h4 className="font-bold text-sm text-gray-700 mb-4">PROJECT OVERVIEW:</h4>
                                  <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                          <span className="text-gray-600">Screenshots:</span>
                                          <span className="font-mono text-gray-900">{solution.attachments?.length || 0} attachments</span>
                                      </div>
                                      <div className="flex justify-between">
                                          <span className="text-gray-600">Technologies:</span>
                                          <span className="font-mono text-gray-900">{technologies.length} tools</span>
                                      </div>
                                      <div className="flex justify-between">
                                          <span className="text-gray-600">Demo Available:</span>
                                          <span className="font-mono text-gray-900">{solution.demoUrl ? 'Yes' : 'No'}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              );
          })}
      </div>
  )
}
