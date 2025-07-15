import { cache } from "react";
import db from '@justdiego/db';

export const getNavigations = cache(async () => {
    return db.navigationItem.findMany()
});