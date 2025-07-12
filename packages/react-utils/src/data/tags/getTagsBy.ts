import { cache } from 'react';
import { getTags } from './getTags';
import { Tag } from '@justdiego/types';

export const getTagsByName = cache((name: string): Tag[] => {
    const tags = getTags();
    return tags.filter((tag: Tag) => 
        tag.name.toLowerCase().includes(name.toLowerCase())
    );
})

export const getTagsByColor = cache((color: string): Tag[] => {
    const tags = getTags();
    return tags.filter((tag: Tag) => tag.color === color);
})

export const searchTags = cache((searchTerm: string): Tag[] => {
    const tags = getTags();
    const term = searchTerm.toLowerCase();
    
    return tags.filter((tag: Tag) => 
        tag.name.toLowerCase().includes(term) ||
        (tag.description && tag.description.toLowerCase().includes(term))
    );
})
