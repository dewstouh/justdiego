import { cache } from 'react';
import { getReviews } from './getReviews';
import { Review } from '@justdiego/types';

export const getReviewsByAuthor = cache((authorId: string): Review[] => {
    const reviews = getReviews();
    return reviews.filter((review: Review) => review.authorId === authorId);
})

export const getReviewsBySolution = cache((solutionId: string): Review[] => {
    const reviews = getReviews();
    return reviews.filter((review: Review) => review.solutionId === solutionId);
})

export const getReviewsByRating = cache((rating: number): Review[] => {
    const reviews = getReviews();
    return reviews.filter((review: Review) => review.rating === rating);
})

export const getReviewsByMinRating = cache((minRating: number): Review[] => {
    const reviews = getReviews();
    return reviews.filter((review: Review) => review.rating >= minRating);
})

export const searchReviews = cache((searchTerm: string): Review[] => {
    const reviews = getReviews();
    const term = searchTerm.toLowerCase();
    
    return reviews.filter((review: Review) => 
        review.content.toLowerCase().includes(term)
    );
})

export const getReviewsWithAttachments = cache((): Review[] => {
    const reviews = getReviews();
    return reviews.filter((review: Review) => 
        review.attachments && review.attachments.length > 0
    );
})
