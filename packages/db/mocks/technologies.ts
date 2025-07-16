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
    },
    {
        id: 'tech-nextjs',
        name: 'Next.js',
        description: 'React framework for production',
        iconUrl: '⚡',
        color: '#000000',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-typescript',
        name: 'TypeScript',
        description: 'Typed superset of JavaScript',
        iconUrl: '📘',
        color: '#3178c6',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-prisma',
        name: 'Prisma',
        description: 'Next-generation ORM for Node.js and TypeScript',
        iconUrl: '🔺',
        color: '#2d3748',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-tailwind',
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework',
        iconUrl: '🎨',
        color: '#06b6d4',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-mysql',
        name: 'MySQL',
        description: 'Open-source relational database management system',
        iconUrl: '🗄️',
        color: '#4479a1',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-vuejs',
        name: 'Vue.js',
        description: 'Progressive JavaScript framework',
        iconUrl: '💚',
        color: '#4fc08d',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-laravel',
        name: 'Laravel',
        description: 'PHP web application framework',
        iconUrl: '🔴',
        color: '#ff2d20',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-sendgrid',
        name: 'SendGrid',
        description: 'Cloud-based email delivery service',
        iconUrl: '📧',
        color: '#1a82e2',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-angular',
        name: 'Angular',
        description: 'TypeScript-based web application framework',
        iconUrl: '🅰️',
        color: '#dd0031',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-dotnet',
        name: '.NET Core',
        description: 'Cross-platform application framework',
        iconUrl: '⚡',
        color: '#512bd4',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-sqlserver',
        name: 'SQL Server',
        description: 'Microsoft relational database management system',
        iconUrl: '🗄️',
        color: '#cc2927',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-azure',
        name: 'Microsoft Azure',
        description: 'Cloud computing platform and services',
        iconUrl: '☁️',
        color: '#0078d4',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-csharp',
        name: 'C#',
        description: 'General-purpose programming language',
        iconUrl: '©️',
        color: '#239120',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-tensorflow',
        name: 'TensorFlow',
        description: 'Machine learning framework',
        iconUrl: '🧠',
        color: '#ff6f00',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-aws',
        name: 'Amazon Web Services',
        description: 'Cloud computing platform',
        iconUrl: '☁️',
        color: '#ff9900',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-fastapi',
        name: 'FastAPI',
        description: 'Modern Python web framework',
        iconUrl: '⚡',
        color: '#009688',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-java',
        name: 'Java',
        description: 'Object-oriented programming language',
        iconUrl: '☕',
        color: '#ed8b00',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-spring-boot',
        name: 'Spring Boot',
        description: 'Java application framework',
        iconUrl: '🍃',
        color: '#6db33f',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-kafka',
        name: 'Apache Kafka',
        description: 'Distributed streaming platform',
        iconUrl: '📨',
        color: '#231f20',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'tech-django',
        name: 'Django',
        description: 'Python web framework',
        iconUrl: '🎯',
        color: '#092e20',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    }
];

/**
 * Search technologies by name or description
 * @param query - Search term (case insensitive)
 * @returns Array of technologies matching the search query
 */
export const searchTechnologies = (query: string): Prisma.TechnologyCreateInput[] => {
    if (!query || query.trim() === '') {
        return technologiesMock;
    }

    const searchTerm = query.toLowerCase().trim();
    
    return technologiesMock.filter(tech => 
        tech.name.toLowerCase().includes(searchTerm) ||
        tech.description.toLowerCase().includes(searchTerm)
    );
};

/**
 * Get technologies by category/type
 * @param category - The category to filter by
 * @returns Array of technologies in the specified category
 */
export const getTechnologiesByCategory = (category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'ai'): Prisma.TechnologyCreateInput[] => {
    // Simple categorization based on technology names - you might want to add category field to your schema
    const categoryKeywords = {
        'frontend': ['react', 'vue', 'angular', 'svelte', 'html', 'css', 'javascript', 'typescript', 'tailwind', 'bootstrap'],
        'backend': ['node', 'express', 'nestjs', 'python', 'django', 'flask', 'java', 'spring', 'php', 'laravel', '.net'],
        'database': ['mysql', 'postgresql', 'mongodb', 'redis', 'sqlite', 'cassandra', 'dynamodb'],
        'devops': ['docker', 'kubernetes', 'aws', 'gcp', 'azure', 'jenkins', 'github actions', 'terraform'],
        'mobile': ['react native', 'flutter', 'swift', 'kotlin', 'xamarin'],
        'ai': ['tensorflow', 'pytorch', 'openai', 'langchain', 'hugging face']
    };
    
    const keywords = categoryKeywords[category] || [];
    
    return technologiesMock.filter(tech => 
        keywords.some(keyword => tech.name.toLowerCase().includes(keyword))
    );
};
