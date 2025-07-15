import { cache } from "react";
import db from '@justdiego/db';

export const getLegalDocuments = cache(async () => {
    return db.document.findMany({
        where: {
            type: "LEGAL",
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });
});

export const getLegalDocumentBySlug = cache(async (slug: string) => {
    return db.document.findUnique({
        where: {
            type: "LEGAL",
            slug,
        }
    });
});