import { SocialMedia } from '@justdiego/types';

export const socialMediasMock: SocialMedia[] = [
    {
        id: 'social-github',
        name: 'GitHub',
        url: 'https://github.com/dewstuoh',
        icon: '🐙',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'social-bluesky',
        name: 'Bluesky',
        url: 'https://bsky.app/profile/justdiego.com',
        icon: '🦋',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 'social-fiverr',
        name: 'Fiverr',
        url: 'https://www.fiverr.com/diego_roguez',
        icon: '💼',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    }
];
