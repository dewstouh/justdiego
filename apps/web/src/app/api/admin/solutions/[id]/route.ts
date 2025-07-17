import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

interface TechnicalDetail {
  title: string;
  content: string;
}

interface UpdateSolutionRequest {
  solution: {
    title: string;
    slug: string;
    shortDescription: string;
    longDescription: string;
    description?: string;
    problemDescription: string;
    solutionDescription: string;
    technicalDetails?: TechnicalDetail[];
    attachments?: string[];
    challenges?: string[];
    outcomes?: string[];
    completedAt: string;
    customerId: string;
    companyId?: string;
    tags?: string[];
    technologies?: string[];
  };
  review: {
    rating: number;
    comment: string;
    attachments?: string[];
    authorId: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: solutionId } = await params;

    // Fetch solution with all related data
    const solution = await db.solution.findUnique({
      where: { id: solutionId },
      include: {
        customer: true,
        company: true,
        review: true,
        tags: true,
        technologies: true,
      }
    });

    if (!solution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }

    // Format data for the edit form
    const formData = {
      user: {
        email: solution.customer.email,
        name: solution.customer.name,
        avatarUrl: solution.customer.avatarUrl || '',
        countryId: solution.customer.countryId,
      },
      company: {
        name: solution.company?.name || '',
        description: solution.company?.description || '',
        logoUrl: solution.company?.logoUrl || '',
        website: solution.company?.website || '',
        countryId: solution.company?.countryId || 'country-spain',
      },
      solution: {
        title: solution.title,
        slug: solution.slug,
        shortDescription: solution.shortDescription,
        longDescription: solution.longDescription,
        description: solution.description || '',
        problemDescription: solution.problemDescription,
        solutionDescription: solution.solutionDescription,
        technicalDetails: (() => {
          try {
            return Array.isArray(solution.technicalDetails) 
              ? solution.technicalDetails as unknown as TechnicalDetail[]
              : [];
          } catch {
            return [];
          }
        })(),
        attachments: (() => {
          try {
            return Array.isArray(solution.attachments) 
              ? solution.attachments as unknown as string[]
              : [];
          } catch {
            return [];
          }
        })(),
        challenges: (() => {
          try {
            return Array.isArray(solution.challenges) 
              ? solution.challenges as unknown as string[]
              : [];
          } catch {
            return [];
          }
        })(),
        outcomes: (() => {
          try {
            return Array.isArray(solution.outcomes) 
              ? solution.outcomes as unknown as string[]
              : [];
          } catch {
            return [];
          }
        })(),
        completedAt: solution.completedAt ? solution.completedAt.toISOString().split('T')[0] : '',
        customerId: solution.customerId,
        companyId: solution.companyId,
        tags: solution.tags.map((tag: {id: string}) => tag.id),
        technologies: solution.technologies.map((tech: {id: string}) => tech.id),
      },
      review: {
        rating: solution.review?.rating || 5,
        comment: solution.review?.comment || '',
        attachments: (() => {
          try {
            return Array.isArray(solution.review?.attachments) 
              ? solution.review.attachments as unknown as string[]
              : [];
          } catch {
            return [];
          }
        })(),
      },
    };

    return NextResponse.json(formData);
    
  } catch (error) {
    console.error('Get solution error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch solution' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: solutionId } = await params;
    
    let body: UpdateSolutionRequest;
    try {
      body = await request.json();
      console.log('Successfully parsed request body:', body);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    
    // Validate required fields
    if (!body.solution.title || !body.solution.customerId || !body.review.comment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if solution exists
    const existingSolution = await db.solution.findUnique({
      where: { id: solutionId },
      include: {
        customer: true,
        company: true,
        review: true,
      }
    });

    if (!existingSolution) {
      return NextResponse.json(
        { error: 'Solution not found' },
        { status: 404 }
      );
    }

    // Check if slug conflicts with other solutions (excluding current one)
    if (body.solution.slug !== existingSolution.slug) {
      const slugConflict = await db.solution.findFirst({
        where: { 
          slug: body.solution.slug,
          id: { not: solutionId }
        }
      });

      if (slugConflict) {
        return NextResponse.json(
          { error: 'Solution with this slug already exists' },
          { status: 400 }
        );
      }
    }

    // Start transaction to update solution and review
    const result = await db.$transaction(async (tx) => {
      // Update solution
      const solution = await tx.solution.update({
        where: { id: solutionId },
        data: {
          title: body.solution.title,
          slug: body.solution.slug,
          shortDescription: body.solution.shortDescription,
          longDescription: body.solution.longDescription,
          description: body.solution.description,
          problemDescription: body.solution.problemDescription,
          solutionDescription: body.solution.solutionDescription,
          // Handle JSON fields safely
          technicalDetails: body.solution.technicalDetails ? 
            JSON.parse(JSON.stringify(body.solution.technicalDetails)) : null,
          attachments: body.solution.attachments || [],
          challenges: body.solution.challenges || [],
          outcomes: body.solution.outcomes || [],
          completedAt: new Date(body.solution.completedAt),
          customerId: body.solution.customerId,
          companyId: body.solution.companyId,
          // Update tags - disconnect all and connect new ones
          tags: {
            set: [], // Clear existing connections
            connect: (body.solution.tags || []).map(tagId => ({ id: tagId }))
          },
          // Update technologies - disconnect all and connect new ones
          technologies: {
            set: [], // Clear existing connections
            connect: (body.solution.technologies || []).map(techId => ({ id: techId }))
          }
        }
      });

      // Update review
      const review = await tx.review.update({
        where: { 
          solutionId: solution.id
        },
        data: {
          rating: body.review.rating,
          comment: body.review.comment,
          attachments: body.review.attachments || [],
          authorId: body.review.authorId,
        }
      });

      return { solution, review };
    });

    return NextResponse.json(
      { 
        message: 'Solution updated successfully',
        data: {
          solutionId: result.solution.id,
          reviewId: result.review.id,
          slug: result.solution.slug
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Update solution error:', error);
    
    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { error: 'A solution with this slug or email already exists' },
          { status: 400 }
        );
      }
      
      if (error.message.includes('Foreign key constraint')) {
        return NextResponse.json(
          { error: 'Invalid country ID or company ID' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to update solution. Please try again.' },
      { status: 500 }
    );
  }
}
