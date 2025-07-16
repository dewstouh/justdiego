import {prisma as db} from './client'
export default db;

// Export Prisma types
export type { Prisma } from '../generated/prisma';

// Export country mocks and search utilities
export { 
  countriesMock, 
  searchCountries, 
  getRandomCountries 
} from '../mocks/countries';

// Export technology mocks and search utilities
export { 
  technologiesMock, 
  searchTechnologies, 
  getTechnologiesByCategory 
} from '../mocks/technologies';