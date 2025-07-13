import { cache } from 'react';
import { mockLegalDocuments } from '@justdiego/mocks';
import { LegalDocument } from '@justdiego/types';

export const getLegalDocuments = cache((): LegalDocument[] => {
    return mockLegalDocuments;
})
