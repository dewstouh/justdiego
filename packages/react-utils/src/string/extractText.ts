import React from "react";

export function extractText(node: React.ReactNode): string {
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(extractText).join(" ");
    // Check if node is a React element and has children
    if (React.isValidElement(node) && node.props && typeof node.props === 'object' && 'children' in node.props) {
        return extractText((node.props as React.PropsWithChildren<unknown>).children);
    }
    return "";
}
