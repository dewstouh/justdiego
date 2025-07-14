import { Prisma } from "../generated/prisma";

export const technologiesMock: Prisma.TechnologyCreateInput[] = [
    {
        id: 'tech-github-actions',
        name: 'GitHub Actions',
        description: 'CI/CD platform for automating workflows',
        iconUrl: '🐙',
        color: '#24292e',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-docker',
        name: 'Docker',
        description: 'Containerization platform',
        iconUrl: '🐳',
        color: '#0db7ed',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-kubernetes',
        name: 'Kubernetes',
        description: 'Container orchestration platform',
        iconUrl: '☸️',
        color: '#326ce5',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-aws-ecs',
        name: 'AWS ECS',
        description: 'Amazon Elastic Container Service',
        iconUrl: '☁️',
        color: '#ff9900',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-prometheus',
        name: 'Prometheus',
        description: 'Monitoring and alerting toolkit',
        iconUrl: '🔥',
        color: '#e6522c',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-grafana',
        name: 'Grafana',
        description: 'Analytics and monitoring platform',
        iconUrl: '📊',
        color: '#f46800',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-snyk',
        name: 'Snyk',
        description: 'Security platform for developers',
        iconUrl: '🔒',
        color: '#4c4a73',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-slack',
        name: 'Slack API',
        description: 'Team communication platform API',
        iconUrl: '💬',
        color: '#4a154b',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-nodejs',
        name: 'Node.js',
        description: 'JavaScript runtime environment',
        iconUrl: '🟢',
        color: '#339933',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-discordjs',
        name: 'Discord.js',
        description: 'Discord API library for Node.js',
        iconUrl: '🎮',
        color: '#7289da',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-postgresql',
        name: 'PostgreSQL',
        description: 'Open source relational database',
        iconUrl: '🐘',
        color: '#336791',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-redis',
        name: 'Redis',
        description: 'In-memory data structure store',
        iconUrl: '🔴',
        color: '#dc382d',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-pm2',
        name: 'PM2',
        description: 'Node.js process manager',
        iconUrl: '⚡',
        color: '#2b037a',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-chartjs',
        name: 'Chart.js',
        description: 'JavaScript charting library',
        iconUrl: '📈',
        color: '#ff6384',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-react',
        name: 'React',
        description: 'JavaScript library for building user interfaces',
        iconUrl: '⚛️',
        color: '#61dafb',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-d3js',
        name: 'D3.js',
        description: 'Data visualization library',
        iconUrl: '📊',
        color: '#f68e56',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-python',
        name: 'Python',
        description: 'High-level programming language',
        iconUrl: '🐍',
        color: '#3776ab',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-pandas',
        name: 'Pandas',
        description: 'Data analysis library for Python',
        iconUrl: '🐼',
        color: '#150458',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-airflow',
        name: 'Apache Airflow',
        description: 'Workflow orchestration platform',
        iconUrl: '🌊',
        color: '#017cee',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-aws-lambda',
        name: 'AWS Lambda',
        description: 'Serverless computing service',
        iconUrl: '⚡',
        color: '#ff9900',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    }
];
