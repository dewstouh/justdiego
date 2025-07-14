import { prisma, PrismaClient } from "@justdiego/db";
import { Repository } from "./utils/Repository";

export { prisma } from './client' // exports instance of prisma 
export * from "../generated/prisma" // exports generated types from prisma


type ModelName = keyof PrismaClient

export const db = Object.fromEntries(
    Object.entries(prisma)
        .filter(([key, value]) => typeof value === 'object' && value !== null && 'findMany' in value)
        .map(([modelName, model]) => [modelName, new Repository(model)])
) as Record<ModelName, Repository<any>>