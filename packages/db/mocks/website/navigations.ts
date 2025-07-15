import { Prisma } from "../../generated/prisma";

export const navigationsMock: Prisma.NavigationItemCreateInput[] = [
    {
        id: 'solutions',
        title: 'Tools',
        href: '/tools',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'guide',
        title: 'Guides',
        href: '/guides',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'work',
        title: 'Work',
        href: '/work',
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'about',
        title: 'About',
        href: '/about',
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]