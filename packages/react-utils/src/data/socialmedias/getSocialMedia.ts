import { cache } from 'react';
import { getSocialMedias } from './getSocialMedias';
import { SocialMedia } from '@justdiego/types';

export const getSocialMedia = cache((id: string): SocialMedia | undefined => {
    const socialMedias = getSocialMedias();
    const socialMedia = socialMedias.find((sm: SocialMedia) => sm.id === id);
    return socialMedia;
})
