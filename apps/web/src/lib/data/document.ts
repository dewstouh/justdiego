"use server";

import db from '@justdiego/db';
import { Document } from '@justdiego/types';

interface DocumentQuery {
    type?: Document['type'];
    slug?: string;
    title?: string;
}

export const getDocument = async (query?: DocumentQuery) => {
    "use cache";
    return db.document.findFirst({
        where: query,
        include: {
            tags: true,
            author: true
        }
    });
};

export const getDocuments = async (query?: DocumentQuery) => {
    "use cache";
    return db.document.findMany({
        where: query,
        orderBy: {
            updatedAt: 'desc',
        },
        include: {
            tags: true,
            author: true
        }
    });
};