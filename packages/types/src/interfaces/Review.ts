export interface Review {
    id: string;
    authorId: string;
    solutionId: string;
    rating: number;
    content: string;
    attachments?: string[];
    createdAt: Date;
    updatedAt: Date;
}