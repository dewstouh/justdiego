// Mock data for tools - will be replaced with real Prisma data later

export interface Tool {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  iconUrl?: string;
  demoUrl?: string;
  problemDescription: string;
  solutionDescription: string;
  technicalDetails: Record<string, unknown>;
  tags: Array<{
    id: string;
    name: string;
    color: string;
    icon: string;
  }>;
  technologies: Array<{
    id: string;
    name: string;
    color: string;
    icon: string;
  }>;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const mockTools: Tool[] = [
  {
    id: 'tool-deployment-automation',
    slug: 'deployment-automation',
    name: 'Deployment Automation Suite',
    shortDescription: 'Complete CI/CD automation toolkit for modern web applications',
    longDescription: 'A comprehensive deployment automation suite that streamlines the entire CI/CD pipeline for modern web applications. Built with Docker, Jenkins, and cloud-native technologies, this tool automates testing, building, and deployment processes while providing real-time monitoring and rollback capabilities.',
    iconUrl: '🚀',
    demoUrl: 'https://deployment-demo.justdiego.dev',
    problemDescription: 'Manual deployments are time-consuming, error-prone, and cause frequent downtime',
    solutionDescription: 'Automated CI/CD pipeline reduces deployment time from hours to minutes with zero manual intervention',
    technicalDetails: {
      languages: ['TypeScript', 'Python', 'Bash'],
      frameworks: ['Docker', 'Jenkins', 'Kubernetes'],
      platforms: ['AWS', 'Google Cloud', 'Azure'],
      features: ['Blue-Green Deployment', 'Automatic Rollback', 'Real-time Monitoring', 'Slack Integration']
    },
    tags: [
      { id: 'automation', name: 'Automation', color: '#4CAF50', icon: '⚙️' },
      { id: 'cicd', name: 'CI/CD', color: '#2196F3', icon: '🔄' }
    ],
    technologies: [
      { id: 'docker', name: 'Docker', color: '#2496ED', icon: '🐳' },
      { id: 'kubernetes', name: 'Kubernetes', color: '#326CE5', icon: '☸️' },
      { id: 'jenkins', name: 'Jenkins', color: '#D33833', icon: '🏗️' }
    ],
    price: 299.99,
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-06-20')
  },
  {
    id: 'tool-discord-moderation-bot',
    slug: 'discord-moderation-bot',
    name: 'AI Discord Moderation Bot',
    shortDescription: 'AI-powered Discord bot for automated community management',
    longDescription: 'An intelligent Discord moderation bot powered by machine learning algorithms to automatically detect and handle spam, inappropriate content, and community violations. Features include smart role assignment, member verification systems, automated welcome sequences, and comprehensive analytics dashboard.',
    iconUrl: '🤖',
    demoUrl: 'https://discord-bot-demo.justdiego.dev',
    problemDescription: 'Large Discord communities struggle with manual moderation and member management',
    solutionDescription: 'AI-powered automation handles 95% of moderation tasks while providing detailed analytics',
    technicalDetails: {
      languages: ['JavaScript', 'TypeScript'],
      frameworks: ['Node.js', 'Discord.js'],
      databases: ['MongoDB', 'Redis'],
      features: ['AI Moderation', 'Auto Role Assignment', 'Analytics Dashboard', 'Custom Commands']
    },
    tags: [
      { id: 'automation', name: 'Automation', color: '#4CAF50', icon: '⚙️' },
      { id: 'ai', name: 'AI/ML', color: '#FF9800', icon: '🧠' },
      { id: 'integrations', name: 'Integrations', color: '#9C27B0', icon: '🔗' }
    ],
    technologies: [
      { id: 'nodejs', name: 'Node.js', color: '#339933', icon: '🟢' },
      { id: 'discord', name: 'Discord.js', color: '#5865F2', icon: '💬' },
      { id: 'mongodb', name: 'MongoDB', color: '#47A248', icon: '🍃' }
    ],
    price: 199.99,
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-08-25')
  },
  {
    id: 'tool-analytics-dashboard',
    slug: 'analytics-dashboard',
    name: 'Real-time Analytics Dashboard',
    shortDescription: 'Comprehensive business intelligence dashboard with real-time data visualization',
    longDescription: 'A powerful analytics dashboard that consolidates data from multiple sources into beautiful, interactive visualizations. Built with React, D3.js, and modern data processing technologies, this tool provides real-time insights into business performance, customer behavior, and operational metrics.',
    iconUrl: '📊',
    demoUrl: 'https://analytics-demo.justdiego.dev',
    problemDescription: 'Businesses struggle to get unified insights from scattered data sources',
    solutionDescription: 'Unified dashboard provides real-time insights from 20+ data sources with interactive visualizations',
    technicalDetails: {
      languages: ['TypeScript', 'Python'],
      frameworks: ['React', 'D3.js', 'FastAPI'],
      databases: ['PostgreSQL', 'Redis', 'InfluxDB'],
      features: ['Real-time Updates', 'Custom Widgets', 'PDF Reports', 'API Integration']
    },
    tags: [
      { id: 'analytics', name: 'Analytics', color: '#FF5722', icon: '📈' },
      { id: 'reporting', name: 'Reporting', color: '#795548', icon: '📄' },
      { id: 'integrations', name: 'Integrations', color: '#9C27B0', icon: '🔗' }
    ],
    technologies: [
      { id: 'react', name: 'React', color: '#61DAFB', icon: '⚛️' },
      { id: 'd3js', name: 'D3.js', color: '#F68E56', icon: '📊' },
      { id: 'postgresql', name: 'PostgreSQL', color: '#336791', icon: '🐘' }
    ],
    price: 499.99,
    createdAt: new Date('2024-08-01'),
    updatedAt: new Date('2024-09-15')
  },
  {
    id: 'tool-backup-automation',
    slug: 'backup-automation',
    name: 'Cloud Backup Automation',
    shortDescription: 'Automated backup solution for databases and files across multiple cloud providers',
    longDescription: 'A robust backup automation tool that ensures your critical data is safely stored across multiple cloud providers. Features include automated scheduling, encryption, compression, and intelligent deduplication. Supports databases and file systems with configurable retention policies.',
    iconUrl: '💾',
    demoUrl: 'https://backup-demo.justdiego.dev',
    problemDescription: 'Manual backups are unreliable and data loss risks are high without proper automation',
    solutionDescription: 'Automated daily backups with 99.99% reliability and instant recovery capabilities',
    technicalDetails: {
      languages: ['Python', 'Bash'],
      frameworks: ['Celery', 'Docker'],
      platforms: ['AWS S3', 'Google Cloud Storage', 'Azure Blob'],
      features: ['Encryption', 'Compression', 'Deduplication', 'Monitoring', 'Alerts']
    },
    tags: [
      { id: 'automation', name: 'Automation', color: '#4CAF50', icon: '⚙️' },
      { id: 'scanning', name: 'Scanning', color: '#607D8B', icon: '🔍' }
    ],
    technologies: [
      { id: 'python', name: 'Python', color: '#3776AB', icon: '🐍' },
      { id: 'aws', name: 'AWS', color: '#FF9900', icon: '☁️' },
      { id: 'docker', name: 'Docker', color: '#2496ED', icon: '🐳' }
    ],
    price: 149.99,
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-08-05')
  },
  {
    id: 'tool-inventory-tracker',
    slug: 'inventory-tracker',
    name: 'Smart Inventory Tracker',
    shortDescription: 'Automated inventory management system with barcode scanning and alerts',
    longDescription: 'A comprehensive inventory management system that automates stock tracking, purchase orders, and supplier management. Features barcode scanning, low-stock alerts, demand forecasting, and integration with popular e-commerce platforms.',
    iconUrl: '📦',
    demoUrl: 'https://inventory-demo.justdiego.dev',
    problemDescription: 'Manual inventory tracking leads to stockouts, overstocking, and lost revenue',
    solutionDescription: 'Automated tracking reduces stockouts by 80% and optimizes inventory levels in real-time',
    technicalDetails: {
      languages: ['TypeScript', 'Python'],
      frameworks: ['Next.js', 'FastAPI'],
      databases: ['PostgreSQL', 'Redis'],
      features: ['Barcode Scanning', 'Demand Forecasting', 'Auto Reordering', 'Supplier Integration']
    },
    tags: [
      { id: 'automation', name: 'Automation', color: '#4CAF50', icon: '⚙️' },
      { id: 'scanning', name: 'Scanning', color: '#607D8B', icon: '🔍' },
      { id: 'reporting', name: 'Reporting', color: '#795548', icon: '📄' }
    ],
    technologies: [
      { id: 'nextjs', name: 'Next.js', color: '#000000', icon: '▲' },
      { id: 'fastapi', name: 'FastAPI', color: '#009688', icon: '⚡' },
      { id: 'postgresql', name: 'PostgreSQL', color: '#336791', icon: '🐘' }
    ],
    price: 399.99,
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-07-10')
  },
  {
    id: 'tool-email-automation',
    slug: 'email-automation',
    name: 'Email Marketing Automation',
    shortDescription: 'Advanced email marketing platform with AI-powered personalization',
    longDescription: 'A sophisticated email marketing automation platform that uses AI to personalize content, optimize send times, and improve engagement rates. Features include drag-and-drop email builder, A/B testing, advanced segmentation, and detailed analytics.',
    iconUrl: '📧',
    demoUrl: 'https://email-demo.justdiego.dev',
    problemDescription: 'Generic email campaigns have low engagement and poor conversion rates',
    solutionDescription: 'AI-powered personalization increases open rates by 40% and conversions by 60%',
    technicalDetails: {
      languages: ['TypeScript', 'Python'],
      frameworks: ['React', 'Django'],
      databases: ['PostgreSQL', 'Redis'],
      features: ['AI Personalization', 'A/B Testing', 'Drag & Drop Builder', 'Advanced Analytics']
    },
    tags: [
      { id: 'automation', name: 'Automation', color: '#4CAF50', icon: '⚙️' },
      { id: 'ai', name: 'AI/ML', color: '#FF9800', icon: '🧠' },
      { id: 'analytics', name: 'Analytics', color: '#FF5722', icon: '📈' }
    ],
    technologies: [
      { id: 'react', name: 'React', color: '#61DAFB', icon: '⚛️' },
      { id: 'django', name: 'Django', color: '#092E20', icon: '🎸' },
      { id: 'ai', name: 'OpenAI', color: '#412991', icon: '🤖' }
    ],
    price: 249.99,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-06-30')
  }
];

export function getTools(): Tool[] {
  return mockTools;
}

export function getTool(slug: string): Tool | undefined {
  return mockTools.find(tool => tool.slug === slug);
}

export function getToolsByTag(tagId: string): Tool[] {
  return mockTools.filter(tool => 
    tool.tags.some(tag => tag.id === tagId)
  );
}

export function getAllToolTags(): Array<{id: string; name: string; color: string; icon: string; count: number}> {
  const tagCounts = new Map();
  
  mockTools.forEach(tool => {
    tool.tags.forEach(tag => {
      if (tagCounts.has(tag.id)) {
        tagCounts.set(tag.id, {
          ...tag,
          count: tagCounts.get(tag.id).count + 1
        });
      } else {
        tagCounts.set(tag.id, {
          ...tag,
          count: 1
        });
      }
    });
  });
  
  return Array.from(tagCounts.values()).sort((a, b) => b.count - a.count);
}

export function getToolsByCategory(): Record<string, Tool[]> {
  const tools = getTools();
  const categories: Record<string, Tool[]> = {};
  
  tools.forEach(tool => {
    tool.tags.forEach(tag => {
      if (!categories[tag.name]) {
        categories[tag.name] = [];
      }
      const categoryTools = categories[tag.name];
      if (categoryTools && !categoryTools.some(t => t.id === tool.id)) {
        categoryTools.push(tool);
      }
    });
  });
  
  return categories;
}

export function getToolsSortedByCategory(): Tool[] {
  return mockTools.sort((a, b) => {
    // Sort by primary tag name (first tag)
    const aCategory = a.tags[0]?.name || 'Zzz';
    const bCategory = b.tags[0]?.name || 'Zzz';
    return aCategory.localeCompare(bCategory);
  });
}
