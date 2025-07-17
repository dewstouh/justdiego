import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if company exists
    const company = await db.company.findUnique({
      where: { id },
    });

    if (!company) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      );
    }

    // Delete the company
    await db.company.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.error('Error deleting company:', error);
    return NextResponse.json(
      { error: 'Failed to delete company' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check if company exists
    const existingCompany = await db.company.findUnique({
      where: { id },
    });

    if (!existingCompany) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      );
    }

    // Update the company
    const updatedCompany = await db.company.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        logoUrl: body.logoUrl,
        website: body.website,
        countryId: body.countryId,
        ownerId: body.ownerId,
      },
      include: {
        country: true,
      },
    });

    return NextResponse.json({
      message: 'Company updated successfully',
      company: updatedCompany,
    });
  } catch (error) {
    console.error('Error updating company:', error);

    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('Foreign key constraint')) {
        return NextResponse.json(
          { error: 'Invalid country ID or owner ID' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to update company' },
      { status: 500 }
    );
  }
}
