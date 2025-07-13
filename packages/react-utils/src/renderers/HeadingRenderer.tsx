import { extractText } from "../string/extractText";
import { slugifyHeading } from "../string/slugifyHeading";

const headingCount: Record<string, number> = {};

export function HeadingRenderer({ level, children }: { level: number, children: React.ReactNode }) {
    const text = extractText(children);
    let slug = slugifyHeading(text);

    // Ensure unique IDs
    headingCount[slug] = (headingCount[slug] || 0) + 1;
    if ((headingCount[slug] || 0) > 1) slug = `${slug}-${headingCount[slug]}`;

    const Tag = `h${level}` as React.ElementType;
    const className = [
        level === 1 && "text-3xl font-bold mb-6 text-gray-900",
        level === 2 && "text-2xl font-semibold mb-4 mt-8 text-gray-800",
        level === 3 && "text-xl font-medium mb-3 mt-6 text-gray-700",
        // ...y así sucesivamente si quieres
    ].filter(Boolean).join(" ");

    return (
        <Tag id={slug} className={className}>
            {children}
        </Tag>
    );
}
