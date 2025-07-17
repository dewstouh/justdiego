import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function GET() {
  try {
    const documents = await db.document.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        tags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ documents });
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { title, description, thumbnailUrl, slug, content, type, authorId } = data;

    const document = await db.document.create({
      data: {
        title,
        description,
        thumbnailUrl: thumbnailUrl || null,
        slug,
        content,
        type,
        authorId: authorId || null,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        tags: true,
      },
    });

    return NextResponse.json({ document });
  } catch (error) {
    console.error('Error creating document:', error);
    return NextResponse.json(
      { error: 'Failed to create document' },
      { status: 500 }
    );
  }
}
