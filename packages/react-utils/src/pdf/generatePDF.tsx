import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { Solution } from '@justdiego/types';
import { getCustomer, getCountry, getTags, getTechnologies, getReview } from '../data';
import { SolutionPDFTemplate } from '../renderers/SolutionPDFRenderer';

export interface GenerateSolutionPDFOptions {
    solution: Solution;
    filename?: string;
}

export interface GenerateMultipleSolutionsPDFOptions {
    solutions: Solution[];
    filename?: string;
}

/**
 * Generates and downloads a PDF for a single solution
 */
export async function generateSolutionPDF({
    solution,
    filename
}: GenerateSolutionPDFOptions): Promise<void> {
    try {
        // Get related data
        const customer = getCustomer(solution.customerId);
        const country = getCountry(solution.countryId);
        const tags = getTags().filter(tag => solution.tagIds.includes(tag.id));
        const technologies = getTechnologies().filter(tech => solution.technologyIds.includes(tech.id));
        const review = solution.reviewId ? getReview(solution.reviewId) : undefined;

        // Generate PDF blob
        const blob = await pdf(
            <SolutionPDFTemplate
                solution={solution}
                customer={customer}
                country={country}
                tags={tags}
                technologies={technologies}
                review={review}
            />
        ).toBlob();

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename || `${solution.slug}.pdf`;

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
 * Generates and downloads a PDF containing multiple solutions
 */
export async function generateMultipleSolutionsPDF({
    solutions,
    filename = 'solutions'
}: GenerateMultipleSolutionsPDFOptions): Promise<void> {
    try {
        // For now, let's generate individual PDFs for each solution
        // In the future, this could be enhanced to create a single multi-page document
        for (const [index, solution] of solutions.entries()) {
            await generateSolutionPDF({
                solution,
                filename: `${filename}-${index + 1}-${solution.slug}.pdf`
            });
        }
    } catch (error) {
        console.error('Error generating multiple PDFs:', error);
        throw new Error('Failed to generate PDFs');
    }
}

/**
 * Opens a PDF preview in a new tab instead of downloading
 */
export async function previewSolutionPDF({
    solution
}: { solution: Solution }): Promise<void> {
    try {
        // Get related data
        const customer = getCustomer(solution.customerId);
        const country = getCountry(solution.countryId);
        const tags = getTags().filter(tag => solution.tagIds.includes(tag.id));
        const technologies = getTechnologies().filter(tech => solution.technologyIds.includes(tech.id));
        const review = solution.reviewId ? getReview(solution.reviewId) : undefined;

        // Generate PDF blob
        const blob = await pdf(
            <SolutionPDFTemplate
                solution={solution}
                customer={customer}
                country={country}
                tags={tags}
                technologies={technologies}
                review={review}
            />
        ).toBlob();

        // Open in new tab
        const url = URL.createObjectURL(blob);
        const newWindow = window.open(url, '_blank');

        if (!newWindow) {
            throw new Error('Popup blocked. Please allow popups for this site.');
        }

        // Cleanup URL after a delay to allow the browser to load it
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    } catch (error) {
        console.error('Error previewing PDF:', error);
        throw new Error('Failed to preview PDF');
    }
}
