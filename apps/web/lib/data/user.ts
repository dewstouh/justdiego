import { cache } from "react";
import db from '@justdiego/db';

export const getUser = cache(async (id:string) => {
    return db.user.findUnique({
        where: {
            id,
        },
        include: {
            country: true,
        }
    })
});