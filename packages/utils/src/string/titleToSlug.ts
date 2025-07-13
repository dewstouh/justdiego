export function titleToSlug(title: string): string {
    if (!title) return "";
    return title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Reemplaza todo lo que no sea letra o número por guion
        .replace(/^-+|-+$/g, '');    // Quita guiones del inicio y final
}
  