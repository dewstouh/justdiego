import { formatDistanceToNow } from 'date-fns';

export function getTimeAgo(dateString: string): string {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};