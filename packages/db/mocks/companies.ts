import { Prisma } from "../generated/prisma";

export const companiesMock: Prisma.CompanyCreateInput[] = [
  {
    id: 'company-techstartup',
    ownerId: 'user-sarah-chen',
    name: 'TechStartup Inc.',
    logoUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=entropy&auto=format&q=80',
    website: 'https://techstartup.com',
    socialMediaUrls: [
      'https://twitter.com/techstartup',
      'https://linkedin.com/company/techstartup',
      'https://github.com/techstartup'
    ],
    description: 'Innovative technology startup focused on AI-driven solutions for small businesses.',
    country: { connect: { id: 'country-usa' } },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'company-growthco',
    ownerId: 'user-alex-morrison',
    name: 'GrowthCo Solutions',
    logoUrl: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=200&fit=crop&crop=entropy&auto=format&q=80',
    website: 'https://growthco.com',
    socialMediaUrls: [
      'https://linkedin.com/company/growthco',
      'https://twitter.com/growthco'
    ],
    description: 'Digital transformation consultancy helping businesses scale through technology.',
    country: { connect: { id: 'country-canada' } },
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },
  {
    id: 'company-digitalagency',
    ownerId: 'user-emma-wilson',
    name: 'Digital Agency Pro',
    logoUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop&crop=entropy&auto=format&q=80',
    website: 'https://digitalagency.com',
    socialMediaUrls: [
      'https://instagram.com/digitalagencypro',
      'https://linkedin.com/company/digitalagencypro',
      'https://twitter.com/digitalagencypro'
    ],
    description: 'Full-service digital marketing agency specializing in e-commerce and SaaS companies.',
    country: { connect: { id: 'country-uk' } },
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: 'company-innovatech',
    ownerId: 'user-marco-rossi',
    name: 'InnovaTech Solutions',
    logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop&crop=entropy&auto=format&q=80',
    website: 'https://innovatech.it',
    socialMediaUrls: [
      'https://linkedin.com/company/innovatech-solutions',
      'https://twitter.com/innovatech_it'
    ],
    description: 'Italian technology company focusing on enterprise software solutions and automation.',
    country: { connect: { id: 'country-italy' } },
    createdAt: new Date('2024-04-05'),
    updatedAt: new Date('2024-04-05')
  }
];
