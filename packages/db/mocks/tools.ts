import { Prisma } from "../generated/prisma";

export const toolsMock: Prisma.ToolCreateInput[] = [
  {
    id: 'tool-deployment-automation',
    slug: 'tool-deployment-automation',
    authorId: 'user-diego',
    name: 'Deployment Automation Suite',
    shortDescription: 'Complete CI/CD automation toolkit for modern web applications',
    longDescription: 'A comprehensive deployment automation suite that streamlines the entire CI/CD pipeline for modern web applications. Built with Docker, Jenkins, and cloud-native technologies, this tool automates testing, building, and deployment processes while providing real-time monitoring and rollback capabilities. Perfect for teams looking to eliminate manual deployment errors and reduce deployment time by up to 90%.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
    demoUrl: 'https://deployment-demo.justdiego.dev',
    problemDescription: 'Manual deployments are time-consuming, error-prone, and cause frequent downtime',
    solutionDescription: 'Automated CI/CD pipeline reduces deployment time from hours to minutes with zero manual intervention',
    technicalDetails: {
      "languages": ["TypeScript", "Python", "Bash"],
      "frameworks": ["Docker", "Jenkins", "Kubernetes"],
      "platforms": ["AWS", "Google Cloud", "Azure"],
      "features": ["Blue-Green Deployment", "Automatic Rollback", "Real-time Monitoring", "Slack Integration"],
      "requirements": ["Docker", "Git", "Cloud Provider Account"]
    },
    attachments: [
      'https://github.com/justdiego/deployment-automation',
      'https://docs.justdiego.dev/deployment-suite',
      'https://youtu.be/dQw4w9WgXcQ'
    ],
    socialMediaUrls: [
      'https://twitter.com/justdiego/status/deployment-suite',
      'https://linkedin.com/posts/diegorodriguez/deployment-automation'
    ],
    challenges: [
      'Complex multi-environment configurations',
      'Zero-downtime deployment requirements',
      'Integration with legacy systems'
    ],
    outcomes: [
      '90% reduction in deployment time',
      'Zero deployment failures since implementation',
      '100% automated testing coverage'
    ],
    completedAt: new Date('2024-06-15'),
    isForSale: true,
    price: 299.99,
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-06-20')
  },
  {
    id: 'tool-discord-moderation-bot',
    slug: 'tool-discord-moderation-bot',
    authorId: 'user-diego',
    name: 'Advanced Discord Moderation Bot',
    shortDescription: 'AI-powered Discord bot for automated community management',
    longDescription: 'An intelligent Discord moderation bot powered by machine learning algorithms to automatically detect and handle spam, inappropriate content, and community violations. Features include smart role assignment, member verification systems, automated welcome sequences, and comprehensive analytics dashboard. Built with Node.js and Discord.js, this bot can handle thousands of users while maintaining 99.9% uptime.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png',
    demoUrl: 'https://discord-bot-demo.justdiego.dev',
    problemDescription: 'Large Discord communities struggle with manual moderation and member management',
    solutionDescription: 'AI-powered automation handles 95% of moderation tasks while providing detailed analytics',
    technicalDetails: {
      "languages": ["JavaScript", "TypeScript"],
      "frameworks": ["Node.js", "Discord.js"],
      "databases": ["MongoDB", "Redis"],
      "features": ["AI Moderation", "Auto Role Assignment", "Analytics Dashboard", "Custom Commands"],
      "integrations": ["Discord API", "OpenAI API", "Webhooks"]
    },
    attachments: [
      'https://github.com/justdiego/discord-mod-bot',
      'https://discord-bot-guide.justdiego.dev',
      'https://youtu.be/moderation-demo'
    ],
    socialMediaUrls: [
      'https://twitter.com/justdiego/discord-bot',
      'https://reddit.com/r/discordbots/discord-mod-ai'
    ],
    challenges: [
      'Handling high message volume (1000+ messages/hour)',
      'Accurate spam detection without false positives',
      'Multi-server scalability'
    ],
    outcomes: [
      '95% reduction in manual moderation',
      '99.9% uptime across all servers',
      '500+ communities using the bot'
    ],
    completedAt: new Date('2024-08-20'),
    isForSale: true,
    price: 199.99,
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-08-25')
  },
  {
    id: 'tool-analytics-dashboard',
    slug: 'tool-analytics-dashboard',
    authorId: 'user-diego',
    name: 'Real-time Analytics Dashboard',
    shortDescription: 'Comprehensive business intelligence dashboard with real-time data visualization',
    longDescription: 'A powerful analytics dashboard that consolidates data from multiple sources into beautiful, interactive visualizations. Built with React, D3.js, and modern data processing technologies, this tool provides real-time insights into business performance, customer behavior, and operational metrics. Features include customizable widgets, automated report generation, and advanced filtering capabilities.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png',
    demoUrl: 'https://analytics-demo.justdiego.dev',
    problemDescription: 'Businesses struggle to get unified insights from scattered data sources',
    solutionDescription: 'Unified dashboard provides real-time insights from 20+ data sources with interactive visualizations',
    technicalDetails: {
      "languages": ["TypeScript", "Python"],
      "frameworks": ["React", "D3.js", "FastAPI"],
      "databases": ["PostgreSQL", "Redis", "InfluxDB"],
      "features": ["Real-time Updates", "Custom Widgets", "PDF Reports", "API Integration"],
      "integrations": ["Google Analytics", "Stripe", "Salesforce", "HubSpot", "AWS CloudWatch"]
    },
    attachments: [
      'https://github.com/justdiego/analytics-dashboard',
      'https://analytics-docs.justdiego.dev',
      'https://youtu.be/analytics-tour'
    ],
    socialMediaUrls: [
      'https://twitter.com/justdiego/analytics-dashboard',
      'https://linkedin.com/posts/diegorodriguez/analytics-tool'
    ],
    challenges: [
      'Real-time data processing at scale',
      'Complex data visualization requirements',
      'Integration with 20+ different APIs'
    ],
    outcomes: [
      'Real-time insights instead of weekly reports',
      '300% faster decision-making process',
      '50+ businesses using the platform'
    ],
    completedAt: new Date('2024-09-10'),
    isForSale: true,
    price: 499.99,
    createdAt: new Date('2024-08-01'),
    updatedAt: new Date('2024-09-15')
  },
  {
    id: 'tool-backup-automation',
    slug: 'tool-backup-automation',
    authorId: 'user-diego',
    name: 'Cloud Backup Automation',
    shortDescription: 'Automated backup solution for databases and files across multiple cloud providers',
    longDescription: 'A robust backup automation tool that ensures your critical data is safely stored across multiple cloud providers. Features include automated scheduling, encryption, compression, and intelligent deduplication. Supports databases (PostgreSQL, MySQL, MongoDB), file systems, and application data with configurable retention policies and disaster recovery capabilities.',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828970.png',
    demoUrl: 'https://backup-demo.justdiego.dev',
    problemDescription: 'Manual backups are unreliable and data loss risks are high without proper automation',
    solutionDescription: 'Automated daily backups with 99.99% reliability and instant recovery capabilities',
    technicalDetails: {
      "languages": ["Python", "Bash"],
      "frameworks": ["Celery", "Docker"],
      "platforms": ["AWS S3", "Google Cloud Storage", "Azure Blob"],
      "features": ["Encryption", "Compression", "Deduplication", "Monitoring", "Alerts"],
      "databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    attachments: [
      'https://github.com/justdiego/backup-automation',
      'https://backup-guide.justdiego.dev'
    ],
    socialMediaUrls: [],
    challenges: [
      'Cross-platform compatibility',
      'Large dataset backup optimization',
      'Secure encryption key management'
    ],
    outcomes: [
      '99.99% backup success rate',
      'Zero data loss incidents',
      '90% reduction in backup management time'
    ],
    completedAt: new Date('2024-07-30'),
    isForSale: true,
    price: 149.99,
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-08-05')
  }
];
