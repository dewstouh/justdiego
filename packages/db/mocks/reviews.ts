import { Prisma } from "../generated/prisma";

export const reviewsMock: Prisma.ReviewCreateInput[] = [
  {
    id: 'review-ecommerce-platform',
    rating: 5,
    comment: 'Exceptional work! Diego delivered a robust e-commerce platform that exceeded our expectations. The real-time inventory management has been a game-changer for our business. The platform handles high traffic seamlessly, and the analytics dashboard provides invaluable insights. Communication throughout the project was excellent, and delivery was on time. Highly recommended!',
    attachments: [
      'https://testimonial-video-ecommerce.mp4',
      'https://before-after-comparison.pdf'
    ],
    author: { connect: { id: 'user-sarah-chen' } },
    solution: { connect: { id: 'solution-ecommerce-platform' } },
    createdAt: new Date('2024-05-25'),
    updatedAt: new Date('2024-05-25')
  },
  {
    id: 'review-crm-system',
    rating: 5,
    comment: 'The AI-powered CRM system has transformed our sales process completely. The lead scoring accuracy is impressive, and the automated email sequences have significantly improved our conversion rates. Diego\'s technical expertise and understanding of our business needs resulted in a solution that perfectly fits our workflow. The integration with our existing Salesforce setup was seamless.',
    attachments: [
      'https://crm-results-report.pdf',
      'https://sales-team-testimonial.mp4'
    ],
    author: { connect: { id: 'user-alex-morrison' } },
    solution: { connect: { id: 'solution-crm-system' } },
    createdAt: new Date('2024-07-15'),
    updatedAt: new Date('2024-07-15')
  },
  {
    id: 'review-marketing-dashboard',
    rating: 4,
    comment: 'Great solution for consolidating our marketing data across multiple platforms. The dashboard provides clear insights and has saved our team countless hours of manual reporting. The automated reports are particularly valuable for client presentations. Minor suggestion would be to add more customization options for the visualizations, but overall very satisfied with the outcome.',
    attachments: [
      'https://marketing-dashboard-showcase.pdf'
    ],
    author: { connect: { id: 'user-emma-wilson' } },
    solution: { connect: { id: 'solution-digital-marketing-dashboard' } },
    createdAt: new Date('2024-07-05'),
    updatedAt: new Date('2024-07-05')
  },
  {
    id: 'review-learning-platform',
    rating: 5,
    comment: 'Outstanding learning platform that has revolutionized our employee training programs. The interactive features keep employees engaged, and the progress tracking helps managers identify skill gaps effectively. The certificate generation system is professional and the mobile responsiveness ensures our remote team can access training anywhere. Excellent project execution from start to finish.',
    attachments: [
      'https://learning-platform-impact-report.pdf',
      'https://employee-feedback-compilation.pdf'
    ],
    author: { connect: { id: 'user-sarah-chen' } },
    solution: { connect: { id: 'solution-learning-platform' } },
    createdAt: new Date('2024-09-10'),
    updatedAt: new Date('2024-09-10')
  }
];
