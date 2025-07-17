import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function GET() {
  try {
    const companies = await db.company.findMany({
      include: {
        country: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ companies });
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, description, logoUrl, website, countryId } = data;

    // For now, we'll use the first available user as the owner
    // In a real app, you'd get this from the authenticated admin user
    const firstUser = await db.user.findFirst();
    
    if (!firstUser) {
      return NextResponse.json(
        { error: 'No users available to assign as company owner. Please create a user first.' },
        { status: 400 }
      );
    }

    const company = await db.company.create({
      data: {
        name,
        description: description || null,
        logoUrl: logoUrl || null,
        website: website || null,
        countryId,
        ownerId: firstUser.id,
      },
      include: {
        country: true,
      },
    });

    return NextResponse.json({ company });
  } catch (error) {
    console.error('Error creating company:', error);
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    );
  }
}
