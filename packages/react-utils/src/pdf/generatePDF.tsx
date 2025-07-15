import React from 'react';
import { pdf, DocumentProps } from '@react-pdf/renderer';
/**
 * Generates and downloads a PDF for a single solution
 */
interface GeneratePDFOptions {
    Content: React.FC<DocumentProps>;
    filename?: string;
}

/**
 * Generates and previews a PDF in a new window
 */
interface PreviewPDFOptions {
    Content: React.FC<unknown>;
    windowTitle?: string;
}

/**
 * Generates and downloads a PDF for a single solution
 */
export async function generatePDF({
    Content,
    filename = `document.pdf`
}: GeneratePDFOptions): Promise<void> {
    try {
        // Generate PDF blob
        const blob = await pdf(
            <Content/>
        ).toBlob();

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;

        // Trigger download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF');
    }
}

/**
 * Generates and opens a PDF preview in a new window
 */
export async function previewPDF({
    Content,
    windowTitle = 'PDF Preview'
}: PreviewPDFOptions): Promise<void> {
    try {
        // Generate PDF blob
        const blob = await pdf(
        <Content/>
    ).toBlob();

        // Create blob URL
        const url = URL.createObjectURL(blob);

        // Open in new window
        const newWindow = window.open(url, '_blank');
        
        if (newWindow) {
            newWindow.document.title = windowTitle;
            
            // Cleanup URL after window is loaded or closed
            newWindow.addEventListener('beforeunload', () => {
                URL.revokeObjectURL(url);
            });
        } else {
            // Fallback: if popup blocked, cleanup URL
            URL.revokeObjectURL(url);
            throw new Error('Unable to open preview window. Please allow popups for this site.');
        }
    } catch (error) {
        console.error('Error previewing PDF:', error);
        throw new Error('Failed to preview PDF');
    }
}