import { Prisma } from "../generated/prisma";

export const solutionsMock: Prisma.SolutionCreateInput[] = [
  {
    id: 'solution-ecommerce-platform',
    slug: 'solution-ecommerce-platform',
    shortDescription: 'Full-stack e-commerce platform with real-time inventory management',
    longDescription: 'A comprehensive e-commerce solution built with Next.js and Node.js, featuring real-time inventory tracking, payment processing, order management, and analytics dashboard. The platform includes advanced features like product recommendations, multi-vendor support, and automated email marketing.',
    title: 'Modern E-commerce Platform',
    description: 'Complete e-commerce solution for modern businesses',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    demoUrl: 'https://ecommerce-demo.justdiego.dev',
    problemDescription: 'Client needed a scalable e-commerce platform that could handle high traffic during peak sales periods while maintaining real-time inventory accuracy across multiple sales channels.',
    solutionDescription: 'Developed a cloud-native e-commerce platform using microservices architecture with real-time synchronization, automated scaling, and comprehensive analytics to maximize sales conversion.',
    technicalDetails: [
      {
        title: 'Modular Architecture',
        content: 'Built using Discord.js with a modular command system, allowing easy addition of new features. Implemented slash commands for better user experience and auto-completion.'
      },
      {
        title: 'Advanced Moderation',
        content: 'Automated detection of spam, inappropriate language, and rule violations using machine learning. Implemented configurable punishment system with warnings, mutes, kicks, and bans.'
      },
      {
        title: 'Analytics Dashboard',
        content: 'Real-time analytics showing member activity, most active channels, moderation actions, and community growth metrics. Data visualization with charts and graphs.'
      },
      {
        title: 'Custom Game Integration',
        content: 'Integration with popular gaming APIs to show player stats, leaderboards, and game-specific commands. Automated role assignment based on game achievements.'
      }
    ],
    attachments: [
      'https://github.com/justdiego/ecommerce-platform',
      'https://docs.justdiego.dev/ecommerce-solution',
      'https://ecommerce-case-study.pdf'
    ],
    challenges: [
      'Real-time inventory synchronization across multiple channels',
      'High-traffic scalability during flash sales',
      'Complex multi-vendor commission calculations'
    ],
    outcomes: [
      '300% increase in conversion rate',
      '99.9% uptime during peak traffic',
      '50% reduction in inventory discrepancies'
    ],
    completedAt: new Date('2024-05-20'),
    isForSale: true,
    price: 15000.00,
    customer: { connect: { id: 'user-sarah-chen' } },
    company: { connect: { id: 'company-techstartup' } },
    tags: {
      connect: [
        { id: 'tag-web-development' },
        { id: 'tag-ecommerce' },
        { id: 'tag-full-stack' }
      ]
    },
    technologies: {
      connect: [
        { id: 'tech-nextjs' },
        { id: 'tech-typescript' },
        { id: 'tech-postgresql' },
        { id: 'tech-prisma' },
        { id: 'tech-redis' }
      ]
    },
    tools: {
      connect: [
        { id: 'tool-deployment-automation' }
      ]
    },
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-05-20')
  },
  {
    id: 'solution-crm-system',
    slug: 'solution-crm-system',
    shortDescription: 'Custom CRM system with AI-powered lead scoring and automation',
    longDescription: 'A sophisticated Customer Relationship Management system designed specifically for B2B sales teams. Features include AI-powered lead scoring, automated email sequences, deal pipeline management, and comprehensive reporting dashboard.',
    title: 'AI-Powered CRM System',
    description: 'Advanced CRM solution with intelligent automation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    demoUrl: 'https://crm-demo.justdiego.dev',
    problemDescription: 'Sales team was struggling with lead qualification and follow-up processes, resulting in low conversion rates and missed opportunities due to manual, time-consuming workflows.',
    solutionDescription: 'Implemented an AI-powered CRM system that automatically scores leads, triggers personalized email sequences, and provides real-time insights to optimize the sales funnel.',
    technicalDetails: [
      {
        title: 'Modular Architecture',
        content: 'Built using Discord.js with a modular command system, allowing easy addition of new features. Implemented slash commands for better user experience and auto-completion.'
      },
      {
        title: 'Advanced Moderation',
        content: 'Automated detection of spam, inappropriate language, and rule violations using machine learning. Implemented configurable punishment system with warnings, mutes, kicks, and bans.'
      },
      {
        title: 'Analytics Dashboard',
        content: 'Real-time analytics showing member activity, most active channels, moderation actions, and community growth metrics. Data visualization with charts and graphs.'
      },
      {
        title: 'Custom Game Integration',
        content: 'Integration with popular gaming APIs to show player stats, leaderboards, and game-specific commands. Automated role assignment based on game achievements.'
      }
    ],
    attachments: [
      'https://github.com/justdiego/ai-crm',
      'https://crm-documentation.justdiego.dev',
      'https://youtu.be/crm-demo-video'
    ],
    challenges: [
      'Training AI model with limited historical data',
      'Integrating with existing Salesforce workflows',
      'Real-time synchronization across multiple devices'
    ],
    outcomes: [
      '45% improvement in lead conversion rate',
      '60% reduction in manual data entry',
      '25% increase in sales team productivity'
    ],
    completedAt: new Date('2024-07-10'),
    isForSale: true,
    price: 25000.00,
    customer: { connect: { id: 'user-alex-morrison' } },
    company: { connect: { id: 'company-growthco' } },
    tags: {
      connect: [
        { id: 'tag-ai' },
        { id: 'tag-crm' },
        { id: 'tag-automation' }
      ]
    },
    technologies: {
      connect: [
        { id: 'tech-python' },
        { id: 'tech-fastapi' },
        { id: 'tech-react' },
        { id: 'tech-tensorflow' },
        { id: 'tech-postgresql' }
      ]
    },
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-07-10')
  },
  {
    id: 'solution-digital-marketing-dashboard',
    slug: 'solution-digital-marketing-dashboard',
    shortDescription: 'Comprehensive digital marketing analytics dashboard with multi-platform integration',
    longDescription: 'A unified marketing dashboard that aggregates data from multiple advertising platforms (Google Ads, Facebook Ads, LinkedIn Ads) and provides actionable insights through advanced analytics and automated reporting.',
    title: 'Unified Marketing Analytics Dashboard',
    description: 'Multi-platform marketing analytics and reporting solution',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    demoUrl: 'https://marketing-dashboard.justdiego.dev',
    problemDescription: 'Marketing team was spending hours manually collecting data from different advertising platforms and creating reports, with no unified view of campaign performance across channels.',
    solutionDescription: 'Built a centralized dashboard that automatically pulls data from all major advertising platforms, provides real-time analytics, and generates automated reports with actionable insights.',
    technicalDetails: [
      {
        title: 'Modular Architecture',
        content: 'Built using Discord.js with a modular command system, allowing easy addition of new features. Implemented slash commands for better user experience and auto-completion.'
      },
      {
        title: 'Advanced Moderation',
        content: 'Automated detection of spam, inappropriate language, and rule violations using machine learning. Implemented configurable punishment system with warnings, mutes, kicks, and bans.'
      },
      {
        title: 'Analytics Dashboard',
        content: 'Real-time analytics showing member activity, most active channels, moderation actions, and community growth metrics. Data visualization with charts and graphs.'
      },
      {
        title: 'Custom Game Integration',
        content: 'Integration with popular gaming APIs to show player stats, leaderboards, and game-specific commands. Automated role assignment based on game achievements.'
      }
    ],
    attachments: [
      'https://github.com/justdiego/marketing-dashboard',
      'https://marketing-dashboard-docs.justdiego.dev'
    ],
    challenges: [
      'Handling different API rate limits across platforms',
      'Data normalization from various sources',
      'Real-time data processing and visualization'
    ],
    outcomes: [
      '80% reduction in reporting time',
      '35% improvement in campaign ROI',
      '90% faster decision-making process'
    ],
    completedAt: new Date('2024-06-30'),
    isForSale: true,
    price: 12000.00,
    customer: { connect: { id: 'user-emma-wilson' } },
    company: { connect: { id: 'company-digitalagency' } },
    tags: {
      connect: [
        { id: 'tag-analytics' },
        { id: 'tag-marketing' },
        { id: 'tag-dashboard' }
      ]
    },
    technologies: {
      connect: [
        { id: 'tech-nextjs' },
        { id: 'tech-python' },
        { id: 'tech-fastapi' },
        { id: 'tech-d3js' },
        { id: 'tech-postgresql' }
      ]
    },
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-06-30')
  },
  {
    id: 'solution-inventory-management',
    slug: 'solution-inventory-management',
    shortDescription: 'Real-time inventory management system with barcode scanning and alerts',
    longDescription: 'A comprehensive inventory management solution featuring barcode scanning, real-time stock tracking, automated reorder alerts, and supplier management. Built for manufacturing companies with complex inventory needs.',
    title: 'Smart Inventory Management System',
    description: 'Advanced inventory tracking with automation features',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    problemDescription: 'Manufacturing company struggled with manual inventory tracking, frequent stockouts, and excess inventory costs due to poor visibility into stock levels and usage patterns.',
    solutionDescription: 'Developed a smart inventory system with IoT sensors, barcode scanning, and predictive analytics to optimize stock levels and automate reordering processes.',
    technicalDetails: [
      {
        title: 'Modular Architecture',
        content: 'Built using Discord.js with a modular command system, allowing easy addition of new features. Implemented slash commands for better user experience and auto-completion.'
      },
      {
        title: 'Advanced Moderation',
        content: 'Automated detection of spam, inappropriate language, and rule violations using machine learning. Implemented configurable punishment system with warnings, mutes, kicks, and bans.'
      },
      {
        title: 'Analytics Dashboard',
        content: 'Real-time analytics showing member activity, most active channels, moderation actions, and community growth metrics. Data visualization with charts and graphs.'
      },
      {
        title: 'Custom Game Integration',
        content: 'Integration with popular gaming APIs to show player stats, leaderboards, and game-specific commands. Automated role assignment based on game achievements.'
      }
    ],
    attachments: [
      'https://inventory-system-demo.justdiego.dev',
      'https://inventory-documentation.pdf'
    ],
    challenges: [
      'Integration with legacy ERP systems',
      'Real-time data synchronization across warehouses',
      'Hardware compatibility with existing equipment'
    ],
    outcomes: [
      '95% reduction in stockouts',
      '30% decrease in inventory holding costs',
      '50% faster inventory audits'
    ],
    completedAt: new Date('2024-08-15'),
    isForSale: false,
    customer: { connect: { id: 'user-diego' } },
    tags: {
      connect: [
        { id: 'tag-inventory' },
        { id: 'tag-iot' },
        { id: 'tag-automation' }
      ]
    },
    technologies: {
      connect: [
        { id: 'tech-java' },
        { id: 'tech-spring-boot' },
        { id: 'tech-angular' },
        { id: 'tech-kafka' },
        { id: 'tech-postgresql' }
      ]
    },
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-08-15')
  },
  {
    id: 'solution-learning-platform',
    slug: 'solution-learning-platform',
    shortDescription: 'Interactive online learning platform with progress tracking and certifications',
    longDescription: 'A modern learning management system designed for corporate training programs. Features include interactive course content, progress tracking, skill assessments, and automated certificate generation.',
    title: 'Corporate Learning Platform',
    description: 'Comprehensive LMS for corporate training and development',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80',
    demoUrl: 'https://learning-platform.justdiego.dev',
    problemDescription: 'HR department needed a scalable solution for employee training and skill development that could track progress, generate certificates, and integrate with existing HR systems.',
    solutionDescription: 'Created an interactive learning platform with multimedia content support, automated assessments, progress analytics, and integration with HRIS for seamless employee development tracking.',
    technicalDetails: [
      {
        title: 'Modular Architecture',
        content: 'Built using Discord.js with a modular command system, allowing easy addition of new features. Implemented slash commands for better user experience and auto-completion.'
      },
      {
        title: 'Advanced Moderation',
        content: 'Automated detection of spam, inappropriate language, and rule violations using machine learning. Implemented configurable punishment system with warnings, mutes, kicks, and bans.'
      },
      {
        title: 'Analytics Dashboard',
        content: 'Real-time analytics showing member activity, most active channels, moderation actions, and community growth metrics. Data visualization with charts and graphs.'
      },
      {
        title: 'Custom Game Integration',
        content: 'Integration with popular gaming APIs to show player stats, leaderboards, and game-specific commands. Automated role assignment based on game achievements.'
      }
    ],
    attachments: [
      'https://github.com/justdiego/learning-platform',
      'https://learning-platform-guide.pdf'
    ],
    challenges: [
      'Video streaming optimization for global users',
      'Scalable assessment system design',
      'Integration with multiple HR systems'
    ],
    outcomes: [
      '85% course completion rate improvement',
      '40% reduction in training administration time',
      '95% user satisfaction score'
    ],
    completedAt: new Date('2024-09-01'),
    isForSale: true,
    price: 18000.00,
    customer: { connect: { id: 'user-sarah-chen' } },
    tags: {
      connect: [
        { id: 'tag-education' },
        { id: 'tag-lms' },
        { id: 'tag-corporate' }
      ]
    },
    technologies: {
      connect: [
        { id: 'tech-nextjs' },
        { id: 'tech-django' },
        { id: 'tech-react' },
        { id: 'tech-redis' },
        { id: 'tech-postgresql' }
      ]
    },
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-09-01')
  }
];
