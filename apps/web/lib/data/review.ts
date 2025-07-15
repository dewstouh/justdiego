import { cache } from "react";
import db from '@justdiego/db';

export const getReviews = cache(async (targetId:string) => {
    return db.review.findMany({
        where: {
            targetId,
        },
        include: {
            author: {
                include: {
                    country: true,
                }
            }
        }
    })
});