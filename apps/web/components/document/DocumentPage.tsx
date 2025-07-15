import React from 'react'
import { formatDate } from '@justdiego/utils';
import { MarkdownPage } from './MarkdownPage';
import { getDocument } from '../../lib/data/document';
import { SimplePage } from '../Page';

interface DocumentPageProps {
    document: NonNullable<Awaited<ReturnType<typeof getDocument>>>
}

export default function DocumentPage({ document }: DocumentPageProps) {
    const { title, description, content, thumbnailUrl, createdAt, updatedAt } = document;
    return (
        <SimplePage config={{
            title,
            description,
            imageUrl: thumbnailUrl || undefined,
        }}>
            {(createdAt || updatedAt) && (
                <div className="py-3 mb-6 border-b border-gray-200">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-8 text-sm text-gray-600">
                            {createdAt && (
                                <div className="flex items-center gap-1">
                                    <span className="font-medium text-gray-900">Published: </span>
                                    <time dateTime={createdAt.toISOString()}>
                                        {formatDate(createdAt.toISOString())}
                                    </time>
                                </div>
                            )}
                            {updatedAt && updatedAt.getTime() !== createdAt?.getTime() && (
                                <div className="flex items-center gap-1">
                                    <span className="font-medium text-gray-900">Last updated: </span>
                                    <time dateTime={updatedAt.toISOString()}>
                                        {formatDate(updatedAt.toISOString())}
                                    </time>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <MarkdownPage content={content} />
        </SimplePage>
    )
}
