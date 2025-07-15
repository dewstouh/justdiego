"use cache";
import db from "@justdiego/db"

export const getNavigations = async () => {
    // Add delay for testing suspense effect
    await new Promise(resolve => setTimeout(resolve, 2000));
    return db.navigationItem.findMany();
}