import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

interface TechnicalDetail {
  title: string;
  content: string;
}

interface CreateSolutionRequest {
  solution: {
    title: string;
    slug: string;
    shortDescription: string;
    longDescription: string;
    description?: string;
    thumbnailUrl?: string;
    demoUrl?: string;
    problemDescription: string;
    solutionDescription: string;
    technicalDetails?: TechnicalDetail[];
    attachments?: string[];
    challenges?: string[];
    outcomes?: string[];
    completedAt?: string;
    isForSale: boolean;
    customerId: string;
    companyId?: string;
    technologies?: string[];
    tags?: string[];
  };
  review: {
    rating: number;
    comment: string;
    attachments?: string[];
    authorId: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateSolutionRequest = await request.json();
    
    // Validate required fields
    if (!body.solution.title || !body.solution.customerId || !body.review.comment || !body.review.authorId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingSolution = await db.solution.findUnique({
      where: { slug: body.solution.slug }
    });

    if (existingSolution) {
      return NextResponse.json(
        { error: 'Solution with this slug already exists' },
        { status: 400 }
      );
    }

    // Verify that customer exists
    const customer = await db.user.findUnique({
      where: { id: body.solution.customerId }
    });

    if (!customer) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 400 }
      );
    }

    // Verify that review author exists
    const reviewer = await db.user.findUnique({
      where: { id: body.review.authorId }
    });

    if (!reviewer) {
      return NextResponse.json(
        { error: 'Review author not found' },
        { status: 400 }
      );
    }

    // If company is specified, verify it exists
    if (body.solution.companyId) {
      const company = await db.company.findUnique({
        where: { id: body.solution.companyId }
      });

      if (!company) {
        return NextResponse.json(
          { error: 'Company not found' },
          { status: 400 }
        );
      }
    }

    // Start transaction to create solution and review
    const result = await db.$transaction(async (tx) => {
      // Create solution
      const solution = await tx.solution.create({
        data: {
          title: body.solution.title,
          slug: body.solution.slug,
          shortDescription: body.solution.shortDescription,
          longDescription: body.solution.longDescription,
          description: body.solution.description,
          thumbnailUrl: body.solution.thumbnailUrl,
          demoUrl: body.solution.demoUrl,
          problemDescription: body.solution.problemDescription,
          solutionDescription: body.solution.solutionDescription,
          technicalDetails: JSON.parse(JSON.stringify(body.solution.technicalDetails || [])),
          attachments: body.solution.attachments || [],
          challenges: body.solution.challenges || [],
          outcomes: body.solution.outcomes || [],
          completedAt: body.solution.completedAt ? new Date(body.solution.completedAt) : null,
          isForSale: body.solution.isForSale,
          customerId: body.solution.customerId,
          companyId: body.solution.companyId || null,
          tags: {
            connect: (body.solution.tags || []).map((tagId: string) => ({ id: tagId }))
          },
          technologies: {
            connect: (body.solution.technologies || []).map((techId: string) => ({ id: techId }))
          }
        }
      });

      // Create review
      const review = await tx.review.create({
        data: {
          rating: body.review.rating,
          comment: body.review.comment,
          attachments: body.review.attachments || [],
          authorId: body.review.authorId,
          solutionId: solution.id,
        }
      });

      return { solution, review };
    });

    return NextResponse.json(
      { 
        message: 'Solution created successfully',
        data: {
          solutionId: result.solution.id,
          reviewId: result.review.id,
          slug: result.solution.slug
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Create solution error:', error);
    
    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json(
          { error: 'A solution with this slug already exists' },
          { status: 400 }
        );
      }
      
      if (error.message.includes('Foreign key constraint')) {
        return NextResponse.json(
          { error: 'Invalid customer ID, company ID, tag ID, or technology ID' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to create solution. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    // Get recent solutions for admin overview
    const solutions = await db.solution.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: true,
        company: true,
        review: true,
        tags: true,
        technologies: true,
      }
    });

    return NextResponse.json({ solutions });
  } catch (error) {
    console.error('Get solutions error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch solutions' },
      { status: 500 }
    );
  }
}
