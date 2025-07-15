'use client';

import React, { useState } from 'react';
import { Solution } from '@justdiego/types';
//import { generateSolutionPDF, previewSolutionPDF, generateMultipleSolutionsPDF } from '@justdiego/react-utils';

interface PDFButtonProps {
    solution?: Solution;
    solutions?: Solution[];
    variant?: 'download' | 'preview';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
    className?: string;
}

export default function PDFButton({
    solution,
    solutions,
    variant = 'download',
    size = 'md',
    children,
    className = ''
}: PDFButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleClick = async () => {
        try {
            setIsGenerating(true);

            if (solution) {
                if (variant === 'preview') {
                    //await previewSolutionPDF({ solution });
                } else {
                    //await generateSolutionPDF({ solution });
                }
            } else if (solutions && solutions.length > 0) {
                //await generateMultipleSolutionsPDF({ solutions });
            }
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    if (!solution && (!solutions || solutions.length === 0)) {
        return null;
    }

    const sizeClasses = {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    const baseClasses = 'inline-flex items-center gap-2 font-bold border-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = variant === 'preview'
        ? 'bg-gray-100 text-gray-900 border-gray-300 hover:border-gray-900 hover:bg-gray-50'
        : 'bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-gray-900';

    const finalClassName = `${baseClasses} ${variantClasses} ${sizeClasses[size]} ${className}`;

    return (
        <button
            onClick={handleClick}
            disabled={isGenerating}
            className={finalClassName}
            title={variant === 'preview' ? 'Preview PDF' : 'Download PDF'}
        >
            {isGenerating ? (
                <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Generating...
                </>
            ) : (
                <>
                    {variant === 'preview' ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7,10 12,15 17,10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    )}
                    {children || (variant === 'preview' ? 'Preview PDF' : 'Download PDF')}
                </>
            )}
        </button>
    );
}
