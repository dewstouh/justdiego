import { Prisma } from "../generated/prisma";

export const reviewsMock: Prisma.ReviewCreateInput[] = [
    {
        id: 'review-cicd-pipeline-1',
        author: { connect: { id: 'user-sarah-tech' } },
        targetId: 'solution-automated-ci-cd',
        rating: 5,
        comment: 'Absolutely game-changing! This CI/CD solution saved our team countless hours. The automated deployment process is flawless and the documentation is excellent. Highly recommend for any team struggling with manual deployments.',
        attachments: [
            'https://example.com/deployment-success-screenshot.png'
        ],
        createdAt: new Date('2024-03-20'),
        updatedAt: new Date('2024-03-20')
    },
    {
        id: 'review-cicd-pipeline-2',
        author: { connect: { id: 'user-mike-devops' } },
        targetId: 'solution-automated-ci-cd',
        rating: 4,
        comment: 'Great solution overall! The setup was straightforward and it integrates well with our existing infrastructure. Only minor issue was some initial configuration complexity, but support was helpful.',
        attachments: [],
        createdAt: new Date('2024-04-02'),
        updatedAt: new Date('2024-04-02')
    },
    {
        id: 'review-discord-bot-1',
        author: { connect: { id: 'user-alex-community' } },
        targetId: 'solution-discord-moderation-bot',
        rating: 5,
        comment: 'This bot transformed our Discord server! The AI moderation is incredibly accurate and has virtually eliminated spam. The custom rule system is flexible and easy to configure. Worth every penny!',
        attachments: [
            'https://example.com/community-stats-before-after.png',
            'https://example.com/moderation-report.pdf'
        ],
        createdAt: new Date('2024-05-25'),
        updatedAt: new Date('2024-05-25')
    },
    {
        id: 'review-discord-bot-2',
        author: { connect: { id: 'user-jessica-admin' } },
        targetId: 'solution-discord-moderation-bot',
        rating: 4,
        comment: 'Solid moderation bot with great features. The AI sometimes flags legitimate messages, but the appeal system works well. Customer support is responsive and helped with custom configurations.',
        attachments: [],
        createdAt: new Date('2024-06-10'),
        updatedAt: new Date('2024-06-10')
    },
    {
        id: 'review-analytics-dashboard-1',
        author: { connect: { id: 'user-robert-analyst' } },
        targetId: 'solution-real-time-analytics',
        rating: 5,
        comment: 'Phenomenal real-time analytics platform! The visualizations are beautiful and the performance is outstanding. Being able to see live data updates has completely changed how we make business decisions.',
        attachments: [
            'https://example.com/dashboard-performance-metrics.png'
        ],
        createdAt: new Date('2024-07-15'),
        updatedAt: new Date('2024-07-15')
    },
    {
        id: 'review-analytics-dashboard-2',
        author: { connect: { id: 'user-lisa-product' } },
        targetId: 'solution-real-time-analytics',
        rating: 4,
        comment: 'Excellent analytics solution with impressive real-time capabilities. The learning curve is a bit steep for non-technical users, but the insights gained are invaluable. Great investment for data-driven teams.',
        attachments: [],
        createdAt: new Date('2024-07-20'),
        updatedAt: new Date('2024-07-20')
    },
    {
        id: 'review-rate-limiting-1',
        author: { connect: { id: 'user-david-security' } },
        targetId: 'solution-api-rate-limiting',
        rating: 5,
        comment: 'Outstanding API protection system! The intelligent rate limiting has completely eliminated our bot traffic issues while maintaining excellent performance for legitimate users. The ML-based detection is incredibly accurate.',
        attachments: [
            'https://example.com/traffic-analysis-report.pdf'
        ],
        createdAt: new Date('2024-06-12'),
        updatedAt: new Date('2024-06-12')
    },
    {
        id: 'review-rate-limiting-2',
        author: { connect: { id: 'user-emma-backend' } },
        targetId: 'solution-api-rate-limiting',
        rating: 4,
        comment: 'Really solid rate limiting solution. Easy to integrate and very effective at stopping abuse. The documentation could be more comprehensive, but the core functionality works exactly as advertised.',
        attachments: [],
        createdAt: new Date('2024-06-18'),
        updatedAt: new Date('2024-06-18')
    },
    {
        id: 'review-ecommerce-optimization-1',
        author: { connect: { id: 'user-carlos-ecommerce' } },
        targetId: 'solution-e-commerce-optimization',
        rating: 5,
        comment: 'Incredible ROI! Our site speed improved dramatically and conversions are up 40%. The A/B testing framework made it easy to measure improvements. This solution paid for itself within the first month.',
        attachments: [
            'https://example.com/conversion-rate-improvement.png',
            'https://example.com/performance-audit-results.pdf'
        ],
        createdAt: new Date('2024-08-20'),
        updatedAt: new Date('2024-08-20')
    },
    {
        id: 'review-ecommerce-optimization-2',
        author: { connect: { id: 'user-maria-marketing' } },
        targetId: 'solution-e-commerce-optimization',
        rating: 4,
        comment: 'Great optimization suite that delivered real results. Our bounce rate dropped significantly and customer satisfaction improved. Implementation required some technical expertise, but the results speak for themselves.',
        attachments: [],
        createdAt: new Date('2024-08-25'),
        updatedAt: new Date('2024-08-25')
    },
    {
        id: 'review-blockchain-payment-1',
        author: { connect: { id: 'user-kevin-fintech' } },
        targetId: 'solution-blockchain-integration',
        rating: 4,
        comment: 'Promising blockchain payment solution! The multi-cryptocurrency support is excellent and the security features are robust. Still in development but already showing great potential for our fintech platform.',
        attachments: [
            'https://example.com/transaction-test-results.json'
        ],
        createdAt: new Date('2024-07-08'),
        updatedAt: new Date('2024-07-08')
    },
    {
        id: 'review-blockchain-payment-2',
        author: { connect: { id: 'user-sophia-crypto' } },
        targetId: 'solution-blockchain-integration',
        rating: 5,
        comment: 'Early access to this blockchain solution has been fantastic! The transaction speed and security are impressive. Looking forward to the full release. The developer is very responsive to feedback.',
        attachments: [],
        createdAt: new Date('2024-07-12'),
        updatedAt: new Date('2024-07-12')
    },
    {
        id: 'review-general-portfolio-1',
        author: { connect: { id: 'user-thomas-cto' } },
        targetId: 'user-diego', // Review of Diego's overall work
        rating: 5,
        comment: 'Diego consistently delivers high-quality solutions that solve real business problems. His technical expertise and attention to detail are exceptional. All the solutions we\'ve implemented have exceeded expectations.',
        attachments: [
            'https://example.com/business-impact-summary.pdf'
        ],
        createdAt: new Date('2024-08-01'),
        updatedAt: new Date('2024-08-01')
    },
    {
        id: 'review-general-portfolio-2',
        author: { connect: { id: 'user-rachel-startup' } },
        targetId: 'user-diego', // Review of Diego's overall work
        rating: 4,
        comment: 'Excellent developer with strong problem-solving skills. Communication is clear and timely. The solutions are well-documented and maintainable. Would definitely work with again!',
        attachments: [],
        createdAt: new Date('2024-08-10'),
        updatedAt: new Date('2024-08-10')
    },
    {
        id: 'review-critical-feedback-1',
        author: { connect: { id: 'user-james-enterprise' } },
        targetId: 'solution-real-time-analytics',
        rating: 3,
        comment: 'Good analytics platform but had some performance issues with our large dataset. Support was helpful in resolving most issues, though it took longer than expected. The core functionality is solid once configured properly.',
        attachments: [
            'https://example.com/performance-issue-report.pdf'
        ],
        createdAt: new Date('2024-07-25'),
        updatedAt: new Date('2024-07-25')
    },
    {
        id: 'review-discord-bot-3',
        author: { connect: { id: 'user-natalie-gaming' } },
        targetId: 'solution-discord-moderation-bot',
        rating: 5,
        comment: 'Perfect for our gaming community! The bot handles our 10k+ member server flawlessly. The gaming-specific moderation features are exactly what we needed. Setup was surprisingly easy.',
        attachments: [
            'https://example.com/gaming-community-stats.png'
        ],
        createdAt: new Date('2024-06-05'),
        updatedAt: new Date('2024-06-05')
    }
];