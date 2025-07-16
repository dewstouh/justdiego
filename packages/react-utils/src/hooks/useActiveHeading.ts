"use client";
import { useEffect, useState } from "react";

export function useActiveHeading(ids: string[], offset = 100) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        if (!ids.length) return;
        
        const updateActiveHeading = () => {
            let active = "";
            
            // Check each heading in order and find the last one that's above the offset
            for (const id of ids) {
                const element = document.getElementById(id);
                if (!element) continue;
                
                const rect = element.getBoundingClientRect();
                // If this heading is still above or at the offset line, it could be active
                if (rect.top <= offset) {
                    active = id;
                } else {
                    // Once we hit a heading below the offset, stop
                    break;
                }
            }
            
            setActiveId(active);
        };
        
        // Update on scroll
        const handleScroll = () => updateActiveHeading();
        
        // Initial update
        updateActiveHeading();
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ids, offset]);

    return activeId;
}
