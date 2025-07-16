"use client";

import { useEffect, useRef } from 'react';

export function TableOfContents({ toc, activeId }: { toc: { id: string, text: string, level: number }[], activeId: string }) {
    const navRef = useRef<HTMLElement>(null);
    const activeItemRef = useRef<HTMLAnchorElement>(null);

    // Auto-scroll to active item
    useEffect(() => {
        if (activeId && activeItemRef.current && navRef.current) {
            const activeElement = activeItemRef.current;
            const container = navRef.current;
            
            // Get container and element positions
            const containerRect = container.getBoundingClientRect();
            const elementRect = activeElement.getBoundingClientRect();
            
            // Calculate relative position within the container
            const relativeTop = elementRect.top - containerRect.top + container.scrollTop;
            const relativeBottom = relativeTop + elementRect.height;
            
            // Check if element is outside visible area
            const containerHeight = container.clientHeight;
            const scrollTop = container.scrollTop;
            const scrollBottom = scrollTop + containerHeight;
            
            if (relativeTop < scrollTop || relativeBottom > scrollBottom) {
                // Scroll to center the active item
                const scrollTo = relativeTop - containerHeight / 2 + elementRect.height / 2;
                container.scrollTo({
                    top: Math.max(0, scrollTo),
                    behavior: 'smooth'
                });
            }
        }
    }, [activeId]);

    return (
        <nav ref={navRef} style={{ height: '100%', overflowY: 'auto' }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {toc.map(h => (
                    <li key={h.id} style={{ marginLeft: (h.level - 1) * 16 }}>
                        <a
                            ref={activeId === h.id ? activeItemRef : null}
                            href={`#${h.id}`}
                            style={{
                                display: 'block',
                                color: activeId === h.id ? "#3b82f6" : "#374151",
                                fontWeight: activeId === h.id ? "bold" : "normal",
                                textDecoration: activeId === h.id ? "underline" : "none",
                                fontSize: h.level === 1 ? "15px" : "13px",
                                transition: "color 0.1s",
                                cursor: "pointer",
                                padding: "4px 0",
                                lineHeight: "1.4"
                            }}
                        >
                            {h.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
  