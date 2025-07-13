import React from 'react'
import { getLegalDocumentBySlug, getLegalDocuments } from '@justdiego/react-utils';
import Page from '../../_components/Page';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MarkdownPage } from '../../../../components/MarkdownPage';

export async function generateStaticParams() {
  const legalDocs = getLegalDocuments();
  return legalDocs.map((solution) => ({
    slug: solution.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDocumentBySlug(slug);
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
  const legalDocument = getLegalDocumentBySlug(slug);

  if(!legalDocument) return notFound();

  const { content, description, title } = legalDocument;
  return (
    <Page>
      <Page.Header
        title={title}
        description={description}
      />

      <Page.Content>
        <MarkdownPage content={content} />
      </Page.Content>
    </Page>
  )
}
