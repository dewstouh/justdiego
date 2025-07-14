import { Review } from '@justdiego/types';

export const reviewsMock: Review[] = [
    {
        id: 'review-sarah-chen',
        authorId: 'author-sarah-chen',
        solutionId: '1',
        rating: 5,
        content: 'Deploys are now effortless and 7x faster. Changed the way our team works.',
        attachments: ['/avatars/sarah-chen.jpg'],
        createdAt: new Date('2024-11-20'),
        updatedAt: new Date('2024-11-20')
    },
    {
        id: 'review-alex-morrison',
        authorId: 'author-alex-morrison',
        solutionId: '2',
        rating: 5,
        content: '99% uptime. We never worry about downtime anymore.',
        attachments: ['/avatars/alex-morrison.jpg'],
        createdAt: new Date('2025-03-05'),
        updatedAt: new Date('2025-03-05')
    },
    {
        id: 'review-james-potter',
        authorId: 'author-james-potter',
        solutionId: '3',
        rating: 5,
        content: 'Our decision-making speed increased dramatically. The insights are crystal clear.',
        attachments: ['/avatars/james-potter.jpg'],
        createdAt: new Date('2025-05-25'),
        updatedAt: new Date('2025-05-25')
    }
];
