import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

// Function to generate a unique email from name
function generateUniqueEmail(name: string): string {
  // Convert name to lowercase, remove special characters, and replace spaces with dots
  const baseEmail = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '.');
  
  // Add a random suffix to ensure uniqueness
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `${baseEmail}.${randomSuffix}@justdiego.com`;
}

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
    const { name, avatarUrl, countryId } = data;

    // Generate a unique email from the name
    const email = generateUniqueEmail(name);

    // Check if user with this email already exists (should be very rare due to random suffix)
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      // If by some chance the email exists, generate a new one
      const newEmail = generateUniqueEmail(name);
      return NextResponse.json(
        { error: `Email conflict, please try again. Generated email: ${newEmail}` },
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
