import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if technology exists
    const technology = await db.technology.findUnique({
      where: { id },
    });

    if (!technology) {
      return NextResponse.json(
        { error: 'Technology not found' },
        { status: 404 }
      );
    }

    // Delete the technology
    await db.technology.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Technology deleted successfully' });
  } catch (error) {
    console.error('Error deleting technology:', error);
    return NextResponse.json(
      { error: 'Failed to delete technology' },
      { status: 500 }
    );
  }
}
