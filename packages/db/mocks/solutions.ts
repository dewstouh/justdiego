import { Prisma } from "../generated/prisma";

export const solutionsMock: Prisma.SolutionCreateInput[] = [
    {
        id: 'solution-automated-ci-cd',
        authorId: 'user-diego',
        title: 'Automated CI/CD Pipeline for Microservices',
        description: 'A comprehensive CI/CD solution that automates deployment for microservices architecture using containerization and orchestration.',
        iconUrl: '🚀',
        websiteUrl: 'https://github.com/justdiego/automated-cicd',
        problemDescription: 'Manual deployment processes were causing delays and inconsistencies across multiple microservices, leading to deployment failures and rollback complications.',
        solutionDescription: 'Implemented an automated CI/CD pipeline using GitHub Actions, Docker, and Kubernetes that ensures consistent deployments, automatic testing, and seamless rollbacks.',
        technicalDetails: {
            architecture: 'Microservices',
            deployment: 'Kubernetes',
            monitoring: 'Prometheus + Grafana',
            testing: 'Jest, Cypress',
            infrastructure: 'AWS ECS'
        },
        attachments: [
            'https://example.com/pipeline-diagram.png',
            'https://example.com/deployment-flow.pdf'
        ],
        challenges: [
            'Coordinating deployments across multiple services',
            'Maintaining database schema consistency',
            'Zero-downtime deployment requirements'
        ],
        outcomes: [
            'Reduced deployment time from 2 hours to 15 minutes',
            'Achieved 99.9% deployment success rate',
            'Eliminated manual deployment errors'
        ],
        completedAt: new Date('2024-03-15'),
        isForSale: false,
        price: 0.0,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-03-15')
    },
    {
        id: 'solution-discord-moderation-bot',
        authorId: 'user-diego',
        title: 'Discord Community Moderation Bot',
        description: 'An intelligent Discord bot that automates community moderation tasks using AI-powered content analysis and customizable rule enforcement.',
        iconUrl: '🤖',
        websiteUrl: 'https://github.com/justdiego/discord-moderator',
        problemDescription: 'Large Discord communities struggle with manual moderation, spam detection, and consistent rule enforcement across different time zones.',
        solutionDescription: 'Developed a Discord bot with AI-powered content analysis, automated spam detection, role management, and comprehensive logging system.',
        technicalDetails: {
            language: 'TypeScript',
            framework: 'Discord.js',
            ai: 'OpenAI GPT-4',
            database: 'PostgreSQL',
            hosting: 'AWS Lambda'
        },
        attachments: [
            'https://example.com/bot-features.png',
            'https://example.com/moderation-stats.json'
        ],
        challenges: [
            'Balancing automated moderation with human oversight',
            'Handling high message volumes during peak times',
            'Implementing fair and consistent rule enforcement'
        ],
        outcomes: [
            'Reduced manual moderation workload by 80%',
            'Improved community satisfaction scores',
            'Decreased spam incidents by 95%'
        ],
        completedAt: new Date('2024-05-20'),
        isForSale: true,
        price: 299.99,
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-05-20')
    },
    {
        id: 'solution-real-time-analytics',
        authorId: 'user-diego',
        title: 'Real-time Analytics Dashboard',
        description: 'A comprehensive analytics dashboard that provides real-time insights into application performance, user behavior, and business metrics.',
        iconUrl: '📊',
        websiteUrl: 'https://analytics.justdiego.com',
        problemDescription: 'Businesses needed real-time visibility into their application performance and user engagement metrics to make data-driven decisions quickly.',
        solutionDescription: 'Built a real-time analytics platform using WebSocket connections, time-series databases, and interactive visualizations for instant data insights.',
        technicalDetails: {
            frontend: 'React + D3.js',
            backend: 'Node.js + Socket.io',
            database: 'InfluxDB',
            caching: 'Redis',
            deployment: 'Docker + Kubernetes'
        },
        attachments: [
            'https://example.com/dashboard-screenshot.png',
            'https://example.com/architecture-diagram.svg'
        ],
        challenges: [
            'Processing high-volume data streams in real-time',
            'Optimizing query performance for large datasets',
            'Ensuring data accuracy and consistency'
        ],
        outcomes: [
            'Enabled sub-second data refresh rates',
            'Improved decision-making speed by 60%',
            'Reduced data processing costs by 40%'
        ],
        completedAt: new Date('2024-07-10'),
        isForSale: true,
        price: 1999.99,
        createdAt: new Date('2024-04-01'),
        updatedAt: new Date('2024-07-10')
    },
    {
        id: 'solution-api-rate-limiting',
        authorId: 'user-diego',
        title: 'Intelligent API Rate Limiting System',
        description: 'A sophisticated rate limiting system that protects APIs from abuse while maintaining optimal performance for legitimate users.',
        iconUrl: '🛡️',
        websiteUrl: 'https://github.com/justdiego/api-guardian',
        problemDescription: 'APIs were experiencing abuse from bot traffic and DDoS attempts, causing performance degradation for legitimate users.',
        solutionDescription: 'Implemented a multi-layered rate limiting system with machine learning-based abuse detection and dynamic throttling mechanisms.',
        technicalDetails: {
            algorithm: 'Token Bucket + Sliding Window',
            ml: 'TensorFlow.js',
            storage: 'Redis Cluster',
            monitoring: 'Custom metrics',
            deployment: 'Edge Computing'
        },
        attachments: [
            'https://example.com/rate-limiting-flow.png',
            'https://example.com/performance-metrics.pdf'
        ],
        challenges: [
            'Distinguishing between legitimate and malicious traffic',
            'Maintaining low latency under high load',
            'Implementing fair usage policies'
        ],
        outcomes: [
            'Reduced API abuse incidents by 99%',
            'Maintained 99.99% uptime during traffic spikes',
            'Improved legitimate user experience'
        ],
        completedAt: new Date('2024-06-05'),
        isForSale: false,
        price: 0.0,
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-06-05')
    },
    {
        id: 'solution-e-commerce-optimization',
        authorId: 'user-diego',
        title: 'E-commerce Performance Optimization Suite',
        description: 'A comprehensive optimization solution that improves e-commerce site performance, conversion rates, and user experience.',
        iconUrl: '🛒',
        websiteUrl: 'https://ecommerce-optimizer.com',
        problemDescription: 'E-commerce websites were experiencing slow loading times, high bounce rates, and poor conversion rates affecting revenue.',
        solutionDescription: 'Developed a suite of optimization tools including image compression, lazy loading, caching strategies, and A/B testing frameworks.',
        technicalDetails: {
            optimization: 'Image optimization, Code splitting',
            caching: 'CDN + Browser caching',
            testing: 'A/B testing framework',
            analytics: 'Custom event tracking',
            infrastructure: 'Global CDN'
        },
        attachments: [
            'https://example.com/before-after-metrics.png',
            'https://example.com/optimization-guide.pdf'
        ],
        challenges: [
            'Balancing performance with functionality',
            'Implementing changes without breaking existing features',
            'Measuring and attributing performance improvements'
        ],
        outcomes: [
            'Improved page load times by 70%',
            'Increased conversion rates by 35%',
            'Reduced bounce rates by 45%'
        ],
        completedAt: new Date('2024-08-15'),
        isForSale: true,
        price: 4999.99,
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date('2024-08-15')
    },
    {
        id: 'solution-blockchain-integration',
        authorId: 'user-diego',
        title: 'Blockchain Payment Integration',
        description: 'A secure and efficient blockchain payment system that enables cryptocurrency transactions for web applications.',
        iconUrl: '⛓️',
        websiteUrl: 'https://crypto-payments.dev',
        problemDescription: 'Businesses wanted to accept cryptocurrency payments but lacked the technical expertise and infrastructure to implement secure blockchain integrations.',
        solutionDescription: 'Created a plug-and-play blockchain payment solution supporting multiple cryptocurrencies with built-in security features and compliance tools.',
        technicalDetails: {
            blockchain: 'Ethereum, Bitcoin, Polygon',
            security: 'Multi-signature wallets',
            compliance: 'KYC/AML integration',
            api: 'RESTful API + WebHooks',
            monitoring: 'Transaction tracking'
        },
        attachments: [
            'https://example.com/blockchain-flow.png',
            'https://example.com/security-audit.pdf'
        ],
        challenges: [
            'Ensuring transaction security and compliance',
            'Handling cryptocurrency volatility',
            'Integrating with existing payment systems'
        ],
        outcomes: [
            'Processed over $1M in cryptocurrency transactions',
            'Achieved 99.99% transaction success rate',
            'Reduced payment processing fees by 60%'
        ],
        completedAt: null, // Still in development
        isForSale: true,
        price: 9999.99,
        createdAt: new Date('2024-06-01'),
        updatedAt: new Date('2024-07-14')
    }
];