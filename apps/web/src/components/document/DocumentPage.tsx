import React from 'react'
import { formatDate } from '@justdiego/utils';
import { MarkdownPage } from './MarkdownPage';
import { getDocument } from '@/lib/data/document';
import { SimplePage } from '@/components/Page';
import TagList from '@/components/solution-card/TagList';
import { Avatar } from '@justdiego/react-utils';

interface DocumentPageProps {
    document: NonNullable<Awaited<ReturnType<typeof getDocument>>>
}

export default function DocumentPage({ document }: DocumentPageProps) {
    const { title, description, content, thumbnailUrl, createdAt, updatedAt, author, tags } = document;
    return (
        <SimplePage config={{
            title,
            description,
            imageUrl: thumbnailUrl || undefined,
        }}>
            {(createdAt || updatedAt || author) && (
                <div className="py-3 mb-6 border-b border-gray-200">
                    <div className="w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
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
                            {author && (

                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-900">Author: </span>
                                    <div className="flex items-center gap-2">
                                        <Avatar
                                            src={author.avatarUrl}
                                            alt={author.name}
                                            size="sm" />
                                        <span className="text-gray-600">{author.name}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {tags && tags.length > 0 && (
                <div className="mb-6">
                    <TagList tags={tags} />
                </div>
            )}
            <MarkdownPage content={content} />
        </SimplePage>
    )
}
