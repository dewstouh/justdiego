"use client";

import { MarkdownRenderer, useActiveHeading } from '@justdiego/react-utils';
import React from 'react';
import { TableOfContents } from './TableOfContents';
import { extractMarkdownHeadings } from '@justdiego/utils';

interface MarkdownPageRendererProps {
    content: string;
    showToc?: boolean;
    className?: string;
}

export function MarkdownPage({
    content,
    showToc = true,
    className = ""
}: MarkdownPageRendererProps) {
    const toc = extractMarkdownHeadings(content);
    const headingIds = toc.map(h => h.id);

    // 2. Hook para tracking activo
    const activeId = useActiveHeading(headingIds, 110); // Offset de navbar (ajusta según diseño)

    // 3. Render
    return (
        <div className="flex flex-row gap-8">
            <div className={className} style={{ flex: 1, minWidth: 0 }}>
                <MarkdownRenderer content={content} />
            </div>
            {showToc && toc.length > 0 && (
                <aside
                    className="hidden lg:flex"
                    style={{
                        position: "sticky",
                        top: 100,
                        alignSelf: "flex-start",
                        width: 240,
                        maxHeight: "70vh",
                        background: "white",
                        border: "1px solid #eee",
                        borderRadius: 8,
                        padding: 16,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
                        minWidth: 0,
                        flexDirection: "column"
                    }}
                >
                    <h3 style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: "#374151", flexShrink: 0 }}>
                        On this page
                    </h3>
                    <TableOfContents toc={toc} activeId={activeId} />
                </aside>
            )}
        </div>
    );
}
