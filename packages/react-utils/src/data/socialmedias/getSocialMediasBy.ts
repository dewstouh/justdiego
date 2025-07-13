import { cache } from 'react';
import { getSocialMedias } from './getSocialMedias';
import { SocialMedia } from '@justdiego/types';

export const getSocialMediasByName = cache((name: string): SocialMedia[] => {
    const socialMedias = getSocialMedias();
    return socialMedias.filter((socialMedia: SocialMedia) => 
        socialMedia.name.toLowerCase().includes(name.toLowerCase())
    );
})

export const getSocialMediaByUrl = cache((url: string): SocialMedia | undefined => {
    const socialMedias = getSocialMedias();
    return socialMedias.find((socialMedia: SocialMedia) => socialMedia.url === url);
})

export const searchSocialMedias = cache((searchTerm: string): SocialMedia[] => {
    const socialMedias = getSocialMedias();
    const term = searchTerm.toLowerCase();
    
    return socialMedias.filter((socialMedia: SocialMedia) => 
        socialMedia.name.toLowerCase().includes(term) ||
        socialMedia.url.toLowerCase().includes(term)
    );
})
