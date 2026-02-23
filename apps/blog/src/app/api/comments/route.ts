import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/client';

// Input validation helper
function validateCommentInput(data: unknown): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (typeof data !== 'object' || data === null) {
    return { isValid: false, errors: ['Invalid request data'] };
  }

  const { name, email, comment, postId } = data as Record<string, unknown>;

  // Validate name
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Name is required');
  } else if (name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Validate email (optional but must be valid if provided)
  if (email && typeof email === 'string') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
  }

  // Validate comment
  if (!comment || typeof comment !== 'string' || comment.trim().length === 0) {
    errors.push('Comment is required');
  } else if (comment.length < 2) {
    errors.push('Comment must be at least 2 characters');
  } else if (comment.length > 5000) {
    errors.push('Comment must be less than 5000 characters');
  }

  // Validate postId
  if (!postId || typeof postId !== 'string' || postId.trim().length === 0) {
    errors.push('Post ID is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = validateCommentInput(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      );
    }

    const { name, email, comment, postId } = body;

    // Verify the post exists
    const postExists = await client.fetch(
      `*[_type == "post" && _id == $postId][0]{ _id }`,
      { postId }
    );

    if (!postExists) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Create the comment document in Sanity
    const newComment = await client.create({
      _type: 'comments',
      name: name.trim(),
      email: email?.trim() || undefined,
      comment: comment.trim(),
      post: {
        _type: 'reference',
        _ref: postId,
      },
      approved: false, // Comments require approval
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Comment submitted successfully and is awaiting approval',
        commentId: newComment._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit comment. Please try again later.' },
      { status: 500 }
    );
  }
}
