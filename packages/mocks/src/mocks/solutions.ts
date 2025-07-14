import { Solution } from '@justdiego/types';

export const solutionsMock: Solution[] = [
    {
        id: '1',
        title: 'Automated CI/CD Pipeline for E-commerce',
        slug: 'automated-cicd-pipeline-techflow-commerce',
        projectIds: ['proj-1'],
        customerId: 'customer-techflow',
        countryId: 'us',
        tagIds: ['tag-cicd', 'tag-devops', 'tag-automation'],
        technologyIds: ['tech-github-actions', 'tech-docker', 'tech-kubernetes', 'tech-aws-ecs', 'tech-prometheus', 'tech-grafana', 'tech-snyk', 'tech-slack'],
        problem: 'Manual deployments taking 15+ minutes with frequent errors and downtime',
        result: 'Reduced deploy time from 15 min to 2 min (7x faster)',
        reviewId: 'review-sarah-chen',
        attachments: [
            'https://picsum.photos/800/600?random=1', // CI/CD Pipeline Before - slow manual process
            'https://picsum.photos/800/600?random=2', // CI/CD Pipeline After - automated fast deployment
            'https://via.placeholder.com/1200x800/2563eb/ffffff?text=TechFlow+CI%2FCD+Dashboard', // Pipeline monitoring dashboard
            'https://placehold.co/800x450/png?text=Deployment+Metrics+Video&font=roboto', // Deployment process video thumbnail
            'https://picsum.photos/600/400?random=3' // Architecture diagram
        ],
        demoUrl: 'https://demo.techflow.com',
        completedAt: new Date('2024-11-15'),
        shortDescription: 'Complete automation of deployment pipeline for e-commerce platform, reducing deployment time by 700% and eliminating manual errors.',
        fullDescription: 'TechFlow Commerce was struggling with a manual deployment process that was taking over 15 minutes per deployment, causing frequent downtime and errors that affected their customer experience. Their development team was spending hours each week managing deployments instead of building features. We implemented a complete CI/CD pipeline automation solution that transformed their development workflow.',
        technicalDetails: [
            {
                title: 'Pipeline Architecture',
                content: 'Designed a multi-stage pipeline using GitHub Actions with automatic testing, building, and deployment stages. Implemented Docker containerization for consistent environments across development, staging, and production.'
            },
            {
                title: 'Automated Testing',
                content: 'Integrated comprehensive test suites including unit tests, integration tests, and end-to-end tests. Set up code quality checks with ESLint, Prettier, and security scanning with Snyk.'
            },
            {
                title: 'Zero-Downtime Deployment',
                content: 'Implemented blue-green deployment strategy with automated rollback capabilities. Used Kubernetes for orchestration and load balancing during deployment transitions.'
            },
            {
                title: 'Monitoring & Alerts',
                content: 'Set up comprehensive monitoring with Prometheus and Grafana, including deployment success rates, performance metrics, and automated alerting via Slack integration.'
            }
        ],
        challenges: [
            'Legacy codebase with complex dependencies',
            'Multiple environments with different configurations',
            'Zero tolerance for downtime during peak shopping hours',
            'Team needed training on new deployment workflows'
        ],
        outcomes: [
            '700% faster deployment time (15 min → 2 min)',
            'Zero deployment-related downtime since implementation',
            '90% reduction in deployment errors',
            'Development team can now focus on features instead of deployments',
            'Automatic rollback prevented 3 potential incidents'
        ],
        createdAt: new Date('2024-10-01'),
        updatedAt: new Date('2024-11-20')
    },
    {
        id: '2',
        title: 'Advanced Discord Bot for Gaming Community',
        slug: 'discord-bot-moderation-niby-gaming',
        projectIds: ['proj-2'],
        customerId: 'customer-niby',
        countryId: 'ca',
        tagIds: ['tag-discord', 'tag-moderation', 'tag-community'],
        technologyIds: ['tech-nodejs', 'tech-discordjs', 'tech-postgresql', 'tech-redis', 'tech-pm2', 'tech-chartjs', 'tech-docker'],
        problem: 'Community management chaos with 2,000+ users and no automated moderation',
        result: 'Enabled moderation and logging for 2,000+ users with 99% uptime',
        reviewId: 'review-alex-morrison',
        attachments: [
            'https://via.placeholder.com/1000x700/5865f2/ffffff?text=Discord+Bot+Commands', // Discord bot command interface
            'https://picsum.photos/900/600?random=4', // Moderation panel screenshot
            'https://via.placeholder.com/1200x800/7289da/ffffff?text=Community+Analytics+Dashboard', // Analytics dashboard
            'https://placehold.co/800x450/mp4?text=Bot+Demo+Video&font=roboto', // Bot demonstration video
            'https://picsum.photos/700/500?random=5', // Community growth chart
            'https://via.placeholder.com/600x400/99aab5/2c2f33?text=Moderation+Logs' // Moderation activity logs
        ],
        demoUrl: 'https://discord.gg/niby',
        completedAt: new Date('2025-02-28'),
        shortDescription: 'Custom Discord bot with advanced moderation features, analytics, and community management tools for 2,000+ active gaming community members.',
        fullDescription: 'Niby Gaming had a rapidly growing Discord community of over 2,000 gamers but lacked proper moderation tools. Manual moderation was becoming impossible, with inappropriate content, spam, and rule violations overwhelming their small team of moderators. We built a comprehensive Discord bot solution that automated community management while providing detailed analytics.',
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
        challenges: [
            'Handling high message volume (1000+ messages/hour)',
            'Complex permission system for different user roles',
            'Integration with multiple gaming platforms',
            'Maintaining 99% uptime with Discord API rate limits'
        ],
        outcomes: [
            '99.2% uptime since deployment',
            '85% reduction in manual moderation work',
            'Automated handling of 500+ moderation actions per week',
            'Community growth increased by 40% after implementation',
            'Zero major incidents or community disruptions'
        ],
        createdAt: new Date('2025-01-15'),
        updatedAt: new Date('2025-03-05')
    },
    {
        id: '3',
        title: 'Real-time Analytics Dashboard',
        slug: 'analytics-dashboard-insightcorp',
        projectIds: ['proj-3'],
        customerId: 'customer-insight',
        countryId: 'gb',
        tagIds: ['tag-analytics', 'tag-dashboard', 'tag-automation'],
        technologyIds: ['tech-react', 'tech-d3js', 'tech-nodejs', 'tech-python', 'tech-pandas', 'tech-postgresql', 'tech-redis', 'tech-airflow', 'tech-aws-lambda'],
        problem: 'Manual reporting consuming 20+ hours weekly with error-prone data collection',
        result: 'Automated reporting saved 20 hours/week of manual work',
        reviewId: 'review-james-potter',
        attachments: [
            'https://via.placeholder.com/1400x900/1f2937/f9fafb?text=Analytics+Dashboard+Overview', // Main dashboard view
            'https://picsum.photos/1200/800?random=6', // Real-time charts and graphs
            'https://via.placeholder.com/1000x600/059669/ffffff?text=Automated+Reports+Interface', // Report generation interface
            'https://placehold.co/800x450/webm?text=Dashboard+Walkthrough&font=roboto', // Dashboard demo video
            'https://picsum.photos/800/600?random=7', // Data visualization examples
            'https://via.placeholder.com/900x600/dc2626/ffffff?text=Alert+System+Setup', // Alert configuration panel
            'https://picsum.photos/600/400?random=8' // Performance metrics before/after comparison
        ],
        demoUrl: 'https://dashboard.insightcorp.com',
        completedAt: new Date('2025-05-20'),
        shortDescription: 'Real-time analytics dashboard with automated reporting, saving 20+ hours weekly and providing actionable business insights.',
        fullDescription: 'InsightCorp was drowning in manual data collection and reporting processes. Their analytics team spent over 20 hours each week manually gathering data from multiple sources, creating reports, and trying to identify trends. The process was error-prone and insights were often outdated by the time reports were completed. We built a comprehensive real-time analytics dashboard that automated their entire reporting workflow.',
        technicalDetails: [
            {
                title: 'Data Integration',
                content: 'Connected multiple data sources including Google Analytics, CRM systems, social media APIs, and internal databases. Built ETL pipelines for real-time data processing and normalization.'
            },
            {
                title: 'Interactive Dashboard',
                content: 'Created responsive dashboard with customizable widgets, real-time charts, and drill-down capabilities. Users can filter by date ranges, segments, and custom parameters.'
            },
            {
                title: 'Automated Reporting',
                content: 'Scheduled automatic report generation and distribution via email and Slack. Custom report templates for different stakeholders with relevant KPIs and insights.'
            },
            {
                title: 'Predictive Analytics',
                content: 'Implemented machine learning models for trend prediction and anomaly detection. Automated alerts when metrics deviate from expected patterns.'
            }
        ],
        challenges: [
            'Integrating 8 different data sources with varying APIs',
            'Processing large datasets in real-time',
            'Creating intuitive visualizations for non-technical users',
            'Ensuring data accuracy and consistency across sources'
        ],
        outcomes: [
            '20+ hours saved weekly on manual reporting',
            'Real-time insights instead of week-old data',
            '95% reduction in data accuracy errors',
            'Decision-making speed increased by 60%',
            'Identified 3 new revenue opportunities through trend analysis'
        ],
        createdAt: new Date('2025-04-01'),
        updatedAt: new Date('2025-05-25')
    }
];