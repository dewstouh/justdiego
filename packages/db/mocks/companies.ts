import { Prisma } from "../generated/prisma";

export const companiesMock: Prisma.CompanyCreateInput[] = [
  {
    id: 'company-kodalogic',
    ownerId: 'user-isaac-correa',
    name: 'Kodalogic',
    logoUrl: 'https://imgur.com/D6KiCYP',
    website: 'https://techstartup.com',
    description: 'Curated Looker Studio templates to simplify your data reporting and visualization workflows.',
    country: { connect: { id: 'country-usa' } },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'company-gestionclientes-online',
    ownerId: 'user-gus',
    name: 'GestionClientes Online',
    logoUrl: 'https://i.imgur.com/K8V2Tgg.png',
    website: 'https://gestionclientes.online',
    description: 'Merchandising CRM software for online stores.',
    country: { connect: { id: 'country-spain' } },
    createdAt: new Date('2025-02-20'),
  },
  {
    id: 'company-qualoom',
    ownerId: 'user-david',
    name: 'Qualoom',
    logoUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop&crop=entropy&auto=format&q=80',
    website: 'https://www.qualoom.es/',
    description: 'Qualoom is a Spanish company that specializes in providing innovative solutions for quality management and process optimization.',
    country: { connect: { id: 'country-spain' } },
    createdAt: new Date('2024-03-10'),
  },
];
