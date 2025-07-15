"use server";

import db from '@justdiego/db';

export const getSocialMedias = async () => {
    "use cache";
    return db.socialMedia.findMany()
};