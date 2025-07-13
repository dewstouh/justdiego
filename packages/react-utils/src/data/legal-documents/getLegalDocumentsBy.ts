import { cache } from 'react';
import { getLegalDocuments } from './getLegalDocuments';
import { LegalDocument } from '@justdiego/types';

export const getLegalDocumentsByTitle = cache((title: string): LegalDocument[] => {
    const documents = getLegalDocuments();
    return documents.filter((doc: LegalDocument) => 
        doc.title.toLowerCase().includes(title.toLowerCase())
    );
});

export const getLegalDocumentByTitle = cache((title: string): LegalDocument | undefined => {
    const documents = getLegalDocuments();
    return documents.find((doc: LegalDocument) => 
        doc.title.toLowerCase() === title.toLowerCase()
    );
});

export const getLegalDocumentBySlug = cache((slug: string): LegalDocument | undefined => {
    const documents = getLegalDocuments();
    return documents.find((doc: LegalDocument) =>
        doc.slug.toLowerCase() === slug.toLowerCase()
    );
});