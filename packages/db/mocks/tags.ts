import { Prisma } from "../generated/prisma";

export const tagsMock: Prisma.TagCreateInput[] = [
    {
        id: 'tag-cicd',
        name: 'CI/CD',
        description: 'Continuous Integration and Continuous Deployment',
        iconUrl: '🔄',
        color: '#4CAF50',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tag-devops',
        name: 'DevOps',
        description: 'Development and Operations automation',
        iconUrl: '⚙️',
        color: '#2196F3',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tag-automation',
        name: 'Automation',
        description: 'Process automation and workflow optimization',
        iconUrl: '🤖',
        color: '#FF9800',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tag-discord',
        name: 'Discord Bot',
        description: 'Discord bot development and integration',
        iconUrl: '🎮',
        color: '#7289DA',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tag-moderation',
        name: 'Moderation',
        description: 'Community moderation and management tools',
        iconUrl: '🛡️',
        color: '#F44336',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tag-community',
        name: 'Community',
        description: 'Community building and engagement platforms',
        iconUrl: '👥',
        color: '#9C27B0',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tag-analytics',
        name: 'Analytics',
        description: 'Data analytics and business intelligence',
        iconUrl: '📊',
        color: '#607D8B',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tag-dashboard',
        name: 'Dashboard',
        description: 'Interactive dashboards and data visualization',
        iconUrl: '📈',
        color: '#795548',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    }
];
