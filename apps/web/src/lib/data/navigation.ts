"use cache";
import db from "@justdiego/db"

export const getNavigations = async () => {
    return db.navigationItem.findMany();
}