import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({
    content,
}: MarkdownRendererProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                // Customize heading styles for legal documents
                h1: ({ children }) => {
                    const text = typeof children === 'string' ? children : children?.toString() || '';
                    const id = text
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .trim();
                    return (
                        <h1 id={id} className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>
                    );
                },
                h2: ({ children }) => {
                    const text = typeof children === 'string' ? children : children?.toString() || '';
                    const id = text
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .trim();
                    return (
                        <h2 id={id} className="text-2xl font-semibold mb-4 mt-8 text-gray-800">{children}</h2>
                    );
                },
                h3: ({ children }) => {
                    const text = typeof children === 'string' ? children : children?.toString() || '';
                    const id = text
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .trim();
                    return (
                        <h3 id={id} className="text-xl font-medium mb-3 mt-6 text-gray-700">{children}</h3>
                    );
                },
                p: ({ children }) => (
                    <p className="mb-4 leading-relaxed text-gray-600">{children}</p>
                ),
                ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                    <li className="leading-relaxed text-gray-600">{children}</li>
                ),
                a: ({ href, children }) => (
                    <a 
                        href={href} 
                        className="text-gray-900 underline hover:text-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                ),
                strong: ({ children }) => (
                    <strong className="font-bold text-gray-900">{children}</strong>
                ),
                em: ({ children }) => (
                    <em className="italic">{children}</em>
                ),
                blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
                        {children}
                    </blockquote>
                ),
                hr: () => (
                    <hr 
                        className="border-gray-300 mt-8 mb-8" 
                    />
                ),
                code: ({ children }) => (
                    <code className="bg-gray-100 text-gray-900 px-1 py-0.5 rounded text-sm font-mono">
                        {children}
                    </code>
                ),
                pre: ({ children }) => (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
                        {children}
                    </pre>
                ),
                table: ({ children }) => (
                    <div className="overflow-x-auto mb-4">
                        <table className="min-w-full border-collapse border border-gray-300">
                            {children}
                        </table>
                    </div>
                ),
                th: ({ children }) => (
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left text-gray-900">
                        {children}
                    </th>
                ),
                td: ({ children }) => (
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                        {children}
                    </td>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}