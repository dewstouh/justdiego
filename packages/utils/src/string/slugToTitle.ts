export function slugToTitle(slug: string): string {
    if (!slug) return "";
    return slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}