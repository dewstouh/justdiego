import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function GET() {
  try {
    const users = await db.user.findMany({
      include: {
        country: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { email, name, avatarUrl, countryId } = data;

    // Check if user with this email already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    const user = await db.user.create({
      data: {
        email,
        name,
        avatarUrl: avatarUrl || null,
        countryId,
      },
      include: {
        country: true,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
