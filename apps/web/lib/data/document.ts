"use server";

import db from '@justdiego/db';

export const getLegalDocuments = async () => {
    "use cache";
    return db.document.findMany({
        where: {
            type: "LEGAL",
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });
};

export const getLegalDocumentBySlug = async (slug: string) => {
    "use cache";
    return db.document.findUnique({
        where: {
            type: "LEGAL",
            slug,
        }
    });
};