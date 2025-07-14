import { PrismaClient } from '../generated/prisma';
import {
    countriesMock,
    technologiesMock,
    tagsMock,
    documentsMock,
    socialMediasMock
} from '../mocks';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Clear existing data (in reverse order of dependencies)
    console.log('🧹 Clearing existing data...');
    await prisma.review.deleteMany();
    await prisma.solution.deleteMany();
    await prisma.tool.deleteMany();
    await prisma.document.deleteMany();
    await prisma.user.deleteMany();
    await prisma.company.deleteMany();
    await prisma.socialMedia.deleteMany();
    await prisma.technology.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.country.deleteMany();
    await prisma.role.deleteMany();
    await prisma.permission.deleteMany();
    await prisma.navigationItem.deleteMany();

    // 1. Seed Countries
    console.log('🌍 Seeding countries...');
    await prisma.country.createMany({ data: countriesMock });

    // 2. Seed Technologies
    console.log('💻 Seeding technologies...');
    await prisma.technology.createMany({ data: technologiesMock });

    // 3. Seed Tags
    console.log('🏷️ Seeding tags...');
    await prisma.tag.createMany({ data: tagsMock });

    // 4. Seed Social Media platforms
    console.log('📱 Seeding social media platforms...');
    await prisma.socialMedia.createMany({ data: socialMediasMock });


    // 5. Seed Permissions and Roles
    console.log('🔐 Seeding permissions and roles...');
    const permissions = [
        { name: 'READ', description: 'Can read content' },
        { name: 'WRITE', description: 'Can create and edit content' },
        { name: 'DELETE', description: 'Can delete content' },
        { name: 'ADMIN', description: 'Full administrative access' },
    ];

    await prisma.permission.createMany({ data: permissions });


    const roles = [
        { name: 'ADMIN', permissions: ['READ', 'WRITE', 'DELETE', 'ADMIN'] },
        { name: 'USER', permissions: ['READ', 'WRITE'] },
        { name: 'GUEST', permissions: ['READ'] },
    ];

    for (const role of roles) {
        await prisma.role.create({
            data: {
                name: role.name,
                permissions: {
                    connect: role.permissions.map(name => ({ name })),
                },
            },
        });
    }

    // 6. Seed Users
    console.log('👥 Seeding users...');
    const users = [
        {
            id: 'user-diego',
            email: 'diego@justdiego.com',
            name: 'Diego Rodriguez',
            countryCode: 'us',
        },
        {
            id: 'user-sarah-chen',
            email: 'sarah@techflow.com',
            name: 'Sarah Chen',
            countryCode: 'us',
        },
        {
            id: 'user-alex-morrison',
            email: 'alex@innovate.com',
            name: 'Alex Morrison',
            countryCode: 'ca',
        },
    ];

    for (const user of users) {
        await prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
                country: {
                    connect: { code: user.countryCode },
                },
                roles: {
                    connect: [{ name: 'USER' }],
                },
            },
        });
    }

    // 7. Seed Companies
    console.log('🏢 Seeding companies...');
    const companies = [
        {
            id: 'company-techflow',
            ownerId: 'user-sarah-chen',
            countryCode: 'us',
            name: 'TechFlow',
            website: 'https://techflow.com',
            description: 'Leading e-commerce technology company',
        },
        {
            id: 'company-innovate',
            ownerId: 'user-alex-morrison',
            countryCode: 'us',
            name: 'Innovate Labs',
            website: 'https://innovatelabs.com',
            description: 'Innovation-focused software development company',
        },
    ];

    for (const company of companies) {
        await prisma.company.create({
            data: {
                id: company.id,
                name: company.name,
                website: company.website,
                description: company.description,
                ownerId: company.ownerId,
                country: {
                    connect: { code: company.countryCode },
                },
            },
        });
    }

    // 8. Seed Documents
    console.log('📄 Seeding documents...');
    await prisma.document.createMany({
        data: documentsMock,
    });

    // 9. Seed Tools (based on solution data structure)
    console.log('🔧 Seeding tools...');
    const tools = [
        {
            id: 'tool-cicd-pipeline',
            authorId: 'user-diego',
            name: 'CI/CD Pipeline Automation',
            shortDescription: 'Automated deployment pipeline for e-commerce platforms',
            fullDescription: 'Complete CI/CD automation solution with Docker containerization and Kubernetes orchestration',
            problemDescription: 'Manual deployments causing downtime and errors',
            solutionDescription: 'Automated pipeline reducing deployment time by 700%',
            challenges: ['Manual deployment errors', 'Long deployment times', 'Inconsistent environments'],
            outcomes: ['Reduced deployment time from 15min to 2min', 'Zero deployment errors', 'Consistent environments'],
            isForSale: true,
            price: 2500.00,
            completedAt: new Date('2024-11-15'),
        },
    ];

    for (const tool of tools) {
        await prisma.tool.create({
            data: {
                ...tool,
                tags: {
                    connect: [
                        { id: 'tag-cicd' },
                        { id: 'tag-devops' },
                        { id: 'tag-automation' },
                    ].filter(tag => tagsMock.some(t => t.id === tag.id)),
                },
                technologies: {
                    connect: [
                        { id: 'tech-github-actions' },
                        { id: 'tech-docker' },
                        { id: 'tech-kubernetes' },
                    ].filter(tech => technologiesMock.some(t => t.id === tech.id)),
                },
            },
        });
    }

    // 10. Seed Solutions
    console.log('💡 Seeding solutions...');
    const solutionsToCreate = [
        {
            id: 'solution-cicd-pipeline',
            authorId: 'user-diego',
            title: 'Automated CI/CD Pipeline for E-commerce',
            description: 'Complete automation of deployment pipeline for e-commerce platform, reducing deployment time by 700% and eliminating manual errors.',
            problemDescription: 'Manual deployments taking 15+ minutes with frequent errors and downtime',
            solutionDescription: 'Reduced deploy time from 15 min to 2 min (7x faster)',
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
        },
        {
            id: 'solution-discord-bot',
            authorId: 'user-sarah-chen',
            title: 'Advanced Discord Bot for Gaming Community',
            description: 'Custom Discord bot with advanced moderation features, analytics, and community management tools for 2,000+ active gaming community members.',
            problemDescription: 'Community management chaos with 2,000+ users and no automated moderation',
            solutionDescription: 'Enabled moderation and logging for 2,000+ users with 99% uptime',
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
        },
        {
            id: 'solution-analytics-dashboard',
            authorId: 'user-alex-morrison',
            title: 'Real-time Analytics Dashboard',
            description: 'Real-time analytics dashboard with automated reporting, saving 20+ hours weekly and providing actionable business insights.',
            problemDescription: 'Manual reporting consuming 20+ hours weekly with error-prone data collection',
            solutionDescription: 'Automated reporting saved 20 hours/week of manual work',
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
        }
    ];

    for (const solution of solutionsToCreate) {
        await prisma.solution.create({
            data: {
                ...solution,
                tags: {
                    connect: [
                        { id: 'tag-cicd' },
                        { id: 'tag-devops' },
                        { id: 'tag-automation' },
                    ].filter(tag => tagsMock.some(t => t.id === tag.id)),
                },
                technologies: {
                    connect: [
                        { id: 'tech-github-actions' },
                        { id: 'tech-docker' },
                        { id: 'tech-kubernetes' },
                    ].filter(tech => technologiesMock.some(t => t.id === tech.id)),
                },
                tools: {
                    connect: [{ id: 'tool-cicd-pipeline' }],
                },
            },
        });
    }

    // 11. Seed Reviews
    console.log('⭐ Seeding reviews...');
    const reviewsWithAuthors = [
        {
            authorId: 'user-sarah-chen',
            targetId: 'solution-cicd-pipeline',
            rating: 5,
            comment: 'Deploys are now effortless and 7x faster. Changed the way our team works.',
            attachments: ['/avatars/sarah-chen.jpg'],
        },
        {
            authorId: 'user-alex-morrison',
            targetId: 'tool-cicd-pipeline',
            rating: 5,
            comment: '99% uptime. We never worry about downtime anymore.',
            attachments: ['/avatars/alex-morrison.jpg'],
        },
        {
            authorId: 'user-diego',
            targetId: 'solution-analytics-dashboard',
            rating: 5,
            comment: 'Our decision-making speed increased dramatically. The insights are crystal clear.',
            attachments: ['/avatars/diego-rodriguez.jpg'],
        }
    ];

    await prisma.review.createMany({ data: reviewsWithAuthors });

    // 12. Seed Navigation Items
    console.log('🧭 Seeding navigation items...');
    const navigationItems = [
        { href: '/', title: 'Home', order: 1 },
        { href: '/solutions', title: 'Solutions', order: 2 },
        { href: '/tools', title: 'Tools', order: 3 },
        { href: '/about', title: 'About', order: 4 },
        { href: '/contact', title: 'Contact', order: 5 },
    ];

    await prisma.navigationItem.createMany({
        data: navigationItems,
    });
    console.log('✅ Database seeding completed successfully!');

    // Print summary
    const counts = {
        countries: await prisma.country.count(),
        technologies: await prisma.technology.count(),
        tags: await prisma.tag.count(),
        users: await prisma.user.count(),
        companies: await prisma.company.count(),
        solutions: await prisma.solution.count(),
        tools: await prisma.tool.count(),
        reviews: await prisma.review.count(),
        documents: await prisma.document.count(),
        socialMedia: await prisma.socialMedia.count(),
        navigationItems: await prisma.navigationItem.count(),
    };

    console.log('\n📊 Seeding Summary:');
    Object.entries(counts).forEach(([model, count]) => {
        console.log(`  ${model}: ${count} records`);
    });
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });