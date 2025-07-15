
import React from 'react'
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getDocument, getDocuments } from '../../../../lib/data/document';
import DocumentPage from '../../../../components/document/DocumentPage';

export async function generateStaticParams() {
  const legalDocs = await getDocuments({type: 'LEGAL'});
  return legalDocs.map((doc) => ({
    slug: doc.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocument({slug, type: 'LEGAL'});
  if (!doc) return { title: "Not Found | JustDiego" };

  return {
    title: `${doc.title} | JustDiego`,
    description: doc.description,
    openGraph: {
      title: `${doc.title} | JustDiego`,
      description: doc.description,
      url: `https://justdiego.com/${slug}`,
      siteName: "JustDiego",
      type: "article",
    },
    robots: "index, follow",
  };
}


export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const legalDocument = await getDocument({ slug, type: 'LEGAL' });

  if(!legalDocument) return notFound();

  return (
    <DocumentPage
      document={legalDocument}
    />
  )
}
