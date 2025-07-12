
import { cache } from 'react';
import { getTags } from './getTags';
import { Tag } from '@justdiego/types';

export const getTag = cache((id: string): Tag | undefined => {
    const tags = getTags();
    const tag = tags.find((t: Tag) => t.id === id);
    return tag;
})