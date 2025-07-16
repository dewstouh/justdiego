import { NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function GET(): Promise<NextResponse> {
  try {
    const countries = await db.country.findMany({
      orderBy: { name: 'asc' }
    });

    return NextResponse.json({ countries });
  } catch (error) {
    console.error('Get countries error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
}
