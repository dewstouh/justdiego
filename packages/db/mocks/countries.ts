import { Prisma } from "../generated/prisma";

export const countriesMock: Prisma.CountryCreateInput[] = [
    // Required countries for users and companies
    { id: 'country-poland', code: 'pl', name: 'Poland', flag: '🇵🇱' },
    { id: 'country-usa', code: 'us', name: 'United States', flag: '🇺🇸' },
    { id: 'country-canada', code: 'ca', name: 'Canada', flag: '🇨🇦' },
    { id: 'country-uk', code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'country-italy', code: 'it', name: 'Italy', flag: '🇮🇹' },
    
];
