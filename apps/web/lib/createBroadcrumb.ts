import { BreadcrumbItem } from "../components/Breadcrumb";

/**
 * Helper function to create breadcrumbs for solution pages
 */
/**
 * Helper function to create breadcrumbs for any page with a simple path
 */
export function createBreadcrumb(path: string[], baseHref: string = '/'): BreadcrumbItem[] {
    const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    for (let i = 0; i < path.length; i++) {
        const isLast = i === path.length - 1;
        const href = isLast ? undefined : `${baseHref}${path.slice(0, i + 1).join('/')}`;
        const label = path[i];

        if (label) {
            items.push({
                label,
                href
            });
        }
    }

    return items;
}