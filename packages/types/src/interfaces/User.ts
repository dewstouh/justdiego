export interface User {
    id: string;
    countryId: string;
    firstName?: string;
    lastName?: string;
    username: string;
    email: string;
    password: string;
    isEmailVerified: boolean;
    avatarUrl: string;
    bio?: string;
    createdAt: string;
    updatedAt: string;
}