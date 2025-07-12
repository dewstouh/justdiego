import { cache } from 'react';
import { reviewsMock } from '@justdiego/mocks';
import { Review } from '@justdiego/types';

export const getReviews = cache((): Review[] => {
    return reviewsMock;
})
