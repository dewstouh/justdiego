import { PrismaClient } from './types'
import {prisma} from './client'
import { Repository } from './utils/Repository'

type ModelName = keyof PrismaClient

export const db = Object.fromEntries(
    Object.entries(prisma)
        .filter(([key, value]) => typeof value === 'object' && value !== null && 'findMany' in value)
        .map(([modelName, model]) => [modelName, new Repository(model)])
) as Record<ModelName, Repository<any>>