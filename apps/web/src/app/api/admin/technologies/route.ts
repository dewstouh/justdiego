import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function GET() {
  try {
    const technologies = await db.technology.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ technologies });
  } catch (error) {
    console.error('Error fetching technologies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch technologies' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, description, iconUrl, color } = data;

    const technology = await db.technology.create({
      data: {
        name,
        description: description || null,
        iconUrl: iconUrl || null,
        color: color || '#000000',
      },
    });

    return NextResponse.json({ technology });
  } catch (error) {
    console.error('Error creating technology:', error);
    return NextResponse.json(
      { error: 'Failed to create technology' },
      { status: 500 }
    );
  }
}
