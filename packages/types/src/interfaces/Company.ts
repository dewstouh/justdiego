
export interface Company {
    id: string;
    ownerId: string;
    countryId: string;
    name: string;
    logoUrl: string;
    website: string;
    socialMediaLinks?: string[];
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}