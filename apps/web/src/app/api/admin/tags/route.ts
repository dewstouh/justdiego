import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function GET() {
  try {
    const tags = await db.tag.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ tags });
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tags' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, description, iconUrl, color } = data;

    const tag = await db.tag.create({
      data: {
        name,
        description: description || null,
        iconUrl: iconUrl || null,
        color: color || '#000000',
      },
    });

    return NextResponse.json({ tag });
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json(
      { error: 'Failed to create tag' },
      { status: 500 }
    );
  }
}
