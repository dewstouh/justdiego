import { cache } from 'react';
import { socialMediasMock } from '@justdiego/mocks';
import { SocialMedia } from '@justdiego/types';

export const getSocialMedias = cache((): SocialMedia[] => {
    return socialMediasMock;
})
