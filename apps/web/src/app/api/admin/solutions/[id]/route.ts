import { NextRequest, NextResponse } from 'next/server';
import db from '@justdiego/db';

interface TechnicalDetail {
  title: string;
  content: string;
}

interface UpdateSolutionRequest {
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
        thumbnailUrl: solution.thumbnailUrl || '',
        demoUrl: solution.demoUrl || '',
        problemDescription: solution.problemDescription,
        solutionDescription: solution.solutionDescription,
        technicalDetails: Array.isArray(solution.technicalDetails) 
        // @ts-expect-error - Type assertion needed for dynamic data
          ? solution.technicalDetails as TechnicalDetail[]
          : [],
        attachments: Array.isArray(solution.attachments) 
          ? solution.attachments as string[]
          : [],
        challenges: Array.isArray(solution.challenges) 
          ? solution.challenges as string[]
          : [],
        outcomes: Array.isArray(solution.outcomes) 
          ? solution.outcomes as string[]
          : [],
        completedAt: solution.completedAt ? solution.completedAt.toISOString().split('T')[0] : '',
        isForSale: solution.isForSale,
        companyId: solution.companyId,
        tags: solution.tags || [],
      },
      review: {
        rating: solution.review?.rating || 5,
        comment: solution.review?.comment || '',
        attachments: Array.isArray(solution.review?.attachments) 
          ? solution.review.attachments as string[]
          : [],
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
    const body: UpdateSolutionRequest = await request.json();
    
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

    // Start transaction to update everything
    const result = await db.$transaction(async (tx) => {
      // Update user
      const user = await tx.user.update({
        where: { id: existingSolution.customerId },
        data: {
          email: body.user.email,
          name: body.user.name,
          avatarUrl: body.user.avatarUrl,
          countryId: body.user.countryId,
        }
      });

      // Update company
      let company;
      if (existingSolution.companyId) {
        company = await tx.company.update({
          where: { id: existingSolution.companyId },
          data: {
            name: body.company.name,
            description: body.company.description,
            logoUrl: body.company.logoUrl,
            website: body.company.website,
            countryId: body.company.countryId,
          }
        });
      } else {
        // Create new company if it doesn't exist
        company = await tx.company.create({
          data: {
            name: body.company.name,
            description: body.company.description,
            logoUrl: body.company.logoUrl,
            website: body.company.website,
            countryId: body.company.countryId,
            ownerId: user.id,
          }
        });
      }

      // Update solution
      const solution = await tx.solution.update({
        where: { id: solutionId },
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
          companyId: company.id,
          // Update tags - disconnect all and connect new ones
          tags: {
            set: [], // Clear existing connections
            connect: (body.solution.tags || []).map(tagId => ({ id: tagId }))
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
        }
      });

      return { user, company, solution, review };
    });

    return NextResponse.json(
      { 
        message: 'Solution updated successfully',
        data: {
          userId: result.user.id,
          companyId: result.company.id,
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
