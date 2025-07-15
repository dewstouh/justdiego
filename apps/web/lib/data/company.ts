import { cache } from "react";
import db from '@justdiego/db';

export const getCompany = cache(async (id:string) => {
    return db.company.findUnique({
        where: {
            id,
        },
        include: {
            country: true,
        }
    })
});