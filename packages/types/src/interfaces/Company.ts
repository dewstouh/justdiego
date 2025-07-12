
export interface Company {
    id: string;
    ownerId: string;
    countryId: string;
    name: string;
    logo: string;
    website: string;
    socialMediaLinks?: string[];
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}