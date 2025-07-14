export function extractMarkdownHeadings(markdown: string): { id: string, text: string, level: number }[] {
    const regex = /^(#{1,6})\s+(.+)$/gm;
    const headings = [];
    let match;
    while ((match = regex.exec(markdown)) !== null) {
        if (match && match[1] && match[2]) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .trim();
            headings.push({ id, text, level });
        }
    }
    return headings;
  }