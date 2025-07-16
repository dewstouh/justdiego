
import db from '@justdiego/db';
import { Prisma } from "@justdiego/types";

export const getSolutions = async (): Promise<
    Prisma.SolutionGetPayload<{
        include: {
            tags: true,
            technologies: true,
            tools: true,
            review: {
                include: {
                    author: {
                        include: {
                            country: true
                        }
                    }
                }
            },
            company: { include: { country: true } },
            customer: { include: { country: true } }
        }
    }>[]
> => {
    return db.solution.findMany({
        include: {
            tags: true,
            technologies: true,
            tools: true,
            review: {
                include: {
                    author: {
                        include: {
                            country: true
                        }
                    }
                }
            },
            company: {
                include: {
                    country: true,
                }
            },
            customer: {
                include: {
                    country: true,
                }
            },
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });
};


export const getSolutionBySlug = async (slug: string) => {
    return db.solution.findFirst({
        where: {
            slug,
        },
        include: {
            tags: true,
            technologies: true,
            tools: true,
            review: {
                include: {
                    author: {
                        include: {
                            country: true
                        }
                    }
                }
            },
            company: {
                include: {
                    country: true,
                }
            },
            customer: {
                include: {
                    country: true,
                }
            },
        },
    });
};