import { Prisma } from "../generated/prisma";

export const socialMediasMock: Prisma.SocialMediaCreateInput[] = [
    {
        platform: 'GitHub',
        url: 'https://github.com/dewstuoh',
    },
    {
        platform: 'Bluesky',
        url: 'https://bsky.app/profile/justdiego.com',
    },
    {
        id: 'social-fiverr',
        platform: 'Fiverr',
        url: 'https://www.fiverr.com/diego_roguez',
    }
];
