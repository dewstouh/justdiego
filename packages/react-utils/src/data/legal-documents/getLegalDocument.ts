import { cache } from 'react';
import { getLegalDocuments } from './getLegalDocuments';
import { LegalDocument } from '@justdiego/types';

export const getLegalDocument = cache((id: string): LegalDocument | undefined => {
    const documents = getLegalDocuments();
    const document = documents.find((doc: LegalDocument) => doc.id === id);
    return document;
})