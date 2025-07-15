import React from 'react'
import { getDocuments } from '../../lib/data/document';

export default async function LegalDocumentList() {
    const legalDocuments = await getDocuments({ type: 'LEGAL' });
  return (
      <div className="flex flex-wrap justify-center gap-1 text-xs text-gray-400">
          {legalDocuments.map((document, index) => (
              <span key={document.id}>
                  <a
                      href={`/legal/${document.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-gray-600 hover:underline transition-all duration-200"
                  >
                      {document.title}
                  </a>
                  {index < legalDocuments.length - 1 && (
                      <span className="hidden sm:inline"> · </span>
                  )}
              </span>
          ))}
      </div>
  )
}
