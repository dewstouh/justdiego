import { cache } from "react";
import db from '@justdiego/db';

export const getSocialMedias = cache(async () => {
    return db.socialMedia.findMany()
});