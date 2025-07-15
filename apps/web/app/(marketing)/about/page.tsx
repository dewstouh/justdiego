import React from 'react';
import { Metadata } from 'next';
import { getDocument } from '../../../lib/data/document';
import DocumentPage from '../_components/DocumentPage';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocument({slug});
  
  if (!doc) {
    return {
      title: 'Document Not Found',
    };
  }

  return {
    title: `${doc.title} Case Study | Diego Rodriguez`,
    description: doc.description,
  };
}

export default async function AboutPage() {
  const doc = await getDocument({ slug: 'about' });

  if(!doc) return notFound();

  const {title, content, description, createdAt, updatedAt} = doc;
  return (
    <DocumentPage title={title} content={content} description={description} createdAt={createdAt} updatedAt={updatedAt}  />
  )
}
