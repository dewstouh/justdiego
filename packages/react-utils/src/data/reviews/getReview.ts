import { cache } from 'react';
import { getReviews } from './getReviews';
import { Review } from '@justdiego/types';

export const getReview = cache((id: string): Review | undefined => {
    const reviews = getReviews();
    const review = reviews.find((r: Review) => r.id === id);
    return review;
})
