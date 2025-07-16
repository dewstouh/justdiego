import React from 'react'

export default function CTA() {
  return (
    <div className = "text-center mb-8 pt-8 border-t-2 border-gray-300" >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Will your business be next?
      </h3>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
        Get a full business analysis in <strong>under 24 hours</strong>: see what to improve, fix, and automate to <strong>attract more clients.</strong>
      </p>
      <a 
        href="/contact"
        className="bg-gray-900 text-white px-8 py-4 border-2 border-gray-900 font-bold hover:bg-primary inline-block"
      >
        CONTACT →
      </a>
    </div>
  )
}
