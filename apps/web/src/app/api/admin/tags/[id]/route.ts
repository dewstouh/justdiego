import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if tag exists
    const tag = await db.tag.findUnique({
      where: { id },
    });

    if (!tag) {
      return NextResponse.json(
        { error: 'Tag not found' },
        { status: 404 }
      );
    }

    // Delete the tag
    await db.tag.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Tag deleted successfully' });
  } catch (error) {
    console.error('Error deleting tag:', error);
    return NextResponse.json(
      { error: 'Failed to delete tag' },
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

    // Check if tag exists
    const existingTag = await db.tag.findUnique({
      where: { id },
    });

    if (!existingTag) {
      return NextResponse.json(
        { error: 'Tag not found' },
        { status: 404 }
      );
    }

    // Update the tag
    const updatedTag = await db.tag.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        iconUrl: body.iconUrl,
        color: body.color,
      },
    });

    return NextResponse.json({
      message: 'Tag updated successfully',
      tag: updatedTag,
    });
  } catch (error) {
    console.error('Error updating tag:', error);
    return NextResponse.json(
      { error: 'Failed to update tag' },
      { status: 500 }
    );
  }
}
