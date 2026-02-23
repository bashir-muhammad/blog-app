import { CommentForm } from './comment-form';
import { CommentList } from './comment-list';

interface Comment {
  _id: string;
  name: string;
  comment: string;
  _createdAt: string;
}

interface CommentsSectionProps {
  postId: string;
  comments: Comment[];
}

export function CommentsSection({ postId, comments }: CommentsSectionProps) {
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-8">Comments</h2>
      
      {/* Display existing comments */}
      <div className="mb-12">
        <CommentList comments={comments} />
      </div>

      {/* Comment submission form */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
        <CommentForm postId={postId} />
      </div>
    </section>
  );
}
