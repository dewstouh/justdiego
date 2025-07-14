import { CustomerType, Prisma, Solution } from "../generated/prisma";

export const solutionsMock = [
        {
            id: 'solution-cicd-pipeline',
            customerId: 'user-diego',
            customerType: CustomerType.USER,
            title: 'Automated CI/CD Pipeline for E-commerce',
            shortDescription: 'Complete automation of deployment pipeline for e-commerce platform, reducing deployment time by 700% and eliminating manual errors.',
            longDescription: 'This comprehensive CI/CD solution transformed a legacy e-commerce platform struggling with manual deployments and frequent downtime. The project involved designing and implementing a fully automated pipeline using Docker containers, Jenkins, and AWS services. The solution includes automated testing suites, staging environment provisioning, blue-green deployment strategies, and rollback mechanisms. Special attention was given to handling peak traffic periods and ensuring zero downtime during critical shopping events like Black Friday. The implementation also included comprehensive monitoring, logging, and alerting systems to provide real-time visibility into deployment health and application performance.',
            thumbnailUrl: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
            demoUrl: 'https://cicd-demo.justdiego.dev',
            problemDescription: 'Manual deployments taking 15+ minutes with frequent errors and downtime',
            solutionDescription: 'Reduced deploy time from 15 min to 2 min (7x faster)',
            technicalDetails: {
                "technologies": ["Docker", "Jenkins", "AWS", "Kubernetes", "Terraform"],
                "architecture": "Microservices with containerized deployment",
                "monitoring": "Prometheus, Grafana, ELK Stack",
                "testing": "Unit, Integration, E2E automated testing"
            },
            attachments: [
                'https://fastly.picsum.photos/id/23/800/600.jpg?hmac=tgRp6_r_o2TpuzZfkINDn4dG7rweaGvmcUaNQandV_o',
                'https://i.imgur.com/bNXSrkJ.mp4',
                'https://youtu.be/W-wPHjtkfms'
            ],
            challenges: [
                'Legacy codebase with complex dependencies',
                'Multiple environments with different configurations',
                'Zero tolerance for downtime during peak shopping hours'
            ],
            outcomes: [
                '700% faster deployment time (15 min → 2 min)',
                'Zero deployment-related downtime since implementation',
                '90% reduction in deployment errors'
            ],
            isForSale: true,
            price: 5000.00,
            completedAt: new Date('2024-11-15'),
            createdAt: new Date('2024-10-01'),
            updatedAt: new Date('2024-11-20'),
        },
        {
            id: 'solution-discord-bot',
            customerId: 'user-sarah-chen',
            customerType: CustomerType.USER,
            title: 'Advanced Discord Bot for Gaming Community',
            shortDescription: 'Custom Discord bot with advanced moderation features, analytics, and community management tools for 2,000+ active gaming community members.',
            longDescription: 'Built from the ground up for a rapidly growing gaming community, this Discord bot provides sophisticated automation and management capabilities. The bot features intelligent spam detection using machine learning algorithms, automated role assignment based on user activity and achievements, comprehensive audit logging with searchable history, and integration with popular gaming platforms including Steam, Battle.net, and Epic Games. Advanced features include tournament management systems, leaderboard tracking, custom command creation for community moderators, and detailed analytics dashboards showing community engagement metrics. The bot handles multiple server instances and includes failover mechanisms to ensure 99%+ uptime even during peak gaming events.',
            thumbnailUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png',
            demoUrl: 'https://discord-bot-demo.justdiego.dev',
            problemDescription: 'Community management chaos with 2,000+ users and no automated moderation',
            solutionDescription: 'Enabled moderation and logging for 2,000+ users with 99% uptime',
            technicalDetails: {
                "technologies": ["Node.js", "Discord.js", "MongoDB", "Redis", "Machine Learning"],
                "architecture": "Event-driven microservices with real-time processing",
                "integrations": ["Steam API", "Battle.net API", "Epic Games API"],
                "features": ["AI Moderation", "Analytics Dashboard", "Tournament Management"]
            },
            attachments: [
                'https://fastly.picsum.photos/id/381/800/600.jpg?hmac=izr8qg93BWeDqyzvMwL7rNhNjj_arTqOO3O_TMflB7Y',
                'https://placehold.co/800x600'
            ],
            challenges: [
                'Handling high message volume (1000+ messages/hour)',
                'Complex permission system for different user roles',
                'Integration with multiple gaming platforms'
            ],
            outcomes: [
                '99.2% uptime since deployment',
                '85% reduction in manual moderation work',
                'Automated handling of 500+ moderation actions per week'
            ],
            isForSale: true,
            price: 3500.00,
            completedAt: new Date('2025-02-28'),
            createdAt: new Date('2025-01-10'),
            updatedAt: new Date('2025-03-05'),
        },
        {
            id: 'solution-analytics-dashboard',
            customerId: 'user-alex-morrison',
            customerType: CustomerType.USER,
            title: 'Real-time Analytics Dashboard',
            shortDescription: 'Real-time analytics dashboard with automated reporting, saving 20+ hours weekly and providing actionable business insights.',
            longDescription: 'This enterprise-grade analytics solution consolidates data from eight disparate business systems into a unified, real-time dashboard. The platform integrates with CRM systems, payment processors, inventory management, customer support platforms, social media APIs, and web analytics tools. Built using modern technologies including React, D3.js for visualizations, Node.js backend with Redis caching, and PostgreSQL for data warehousing. The system features automated data pipeline orchestration, anomaly detection algorithms that alert stakeholders to unusual patterns, customizable KPI tracking, and role-based access controls. Advanced features include predictive analytics using machine learning models, automated report generation with PDF exports, and mobile-responsive design for executives on-the-go. The solution includes comprehensive data governance policies and GDPR compliance measures.',
            thumbnailUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png',
            demoUrl: 'https://analytics-dashboard-demo.justdiego.dev',
            problemDescription: 'Manual reporting consuming 20+ hours weekly with error-prone data collection',
            solutionDescription: 'Automated reporting saved 20 hours/week of manual work',
            technicalDetails: {
                "technologies": ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "Machine Learning"],
                "architecture": "Real-time data pipeline with microservices backend",
                "integrations": ["CRM APIs", "Payment Processors", "Social Media APIs", "Web Analytics"],
                "features": ["Predictive Analytics", "Automated Reporting", "GDPR Compliance", "Mobile Responsive"]
            },
            attachments: [
                'https://placehold.co/800x450',
                'https://placehold.co/1280x720'
            ],
            challenges: [
                'Integrating 8 different data sources with varying APIs',
                'Processing large datasets in real-time',
                'Creating intuitive visualizations for non-technical users'
            ],
            outcomes: [
                '20+ hours saved weekly on manual reporting',
                'Real-time insights instead of week-old data',
                '95% reduction in data accuracy errors'
            ],
            isForSale: true,
            price: 7500.00,
            completedAt: new Date('2025-05-20'),
            createdAt: new Date('2025-03-15'),
            updatedAt: new Date('2025-05-25'),
        }
    ];