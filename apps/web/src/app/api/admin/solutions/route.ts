import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

interface TechnicalDetail {
  title: string;
  content: string;
}

interface CreateSolutionRequest {
  user: {
    email: string;
    name: string;
    avatarUrl?: string;
    countryId: string;
  };
  company: {
    name: string;
    description: string;
    logoUrl?: string;
    website?: string;
    countryId: string;
  };
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
    companyId?: string;
    tags?: string[];
  };
  review: {
    rating: number;
    comment: string;
    attachments?: string[];
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateSolutionRequest = await request.json();
    
    // Validate required fields
    if (!body.user.email || !body.user.name || !body.company.name || !body.company.description || !body.solution.title || !body.review.comment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.user.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
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

    // Start transaction to create user, company, solution, and review
    const result = await db.$transaction(async (tx) => {
      // Check if user already exists, if not create them
      let user = await tx.user.findUnique({
        where: { email: body.user.email }
      });

      if (!user) {
        // Create new user with default role
        user = await tx.user.create({
          data: {
            email: body.user.email,
            name: body.user.name,
            avatarUrl: body.user.avatarUrl,
            countryId: body.user.countryId,
            roles: {
              connect: [{ id: 'role-user' }] // Default user role
            }
          }
        });
      }

      // Create company
      const company = await tx.company.create({
        data: {
          name: body.company.name,
          description: body.company.description,
          logoUrl: body.company.logoUrl,
          website: body.company.website,
          countryId: body.company.countryId,
          ownerId: user.id,
        }
      });

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
          customerId: user.id,
          companyId: company.id,
          tags: {
            connect: (body.solution.tags || []).map((tagId: string) => ({ id: tagId }))
          }
        }
      });

      // Create review
      const review = await tx.review.create({
        data: {
          rating: body.review.rating,
          comment: body.review.comment,
          attachments: body.review.attachments || [],
          authorId: user.id,
          solutionId: solution.id,
        }
      });

      return { user, company, solution, review };
    });

    return NextResponse.json(
      { 
        message: 'Solution created successfully',
        data: {
          userId: result.user.id,
          companyId: result.company.id,
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
