import { Prisma } from "../../generated/prisma";

export const navigationsMock: Prisma.NavigationItemCreateInput[] = [
    {
        id: 'home',
        title: 'Home',
        href: '/',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'tools',
        title: 'Tools',
        href: '/tools',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'guide',
        title: 'Guides',
        href: '/guides',
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'work',
        title: 'Work',
        href: '/work',
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'about',
        title: 'About',
        href: '/about',
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]