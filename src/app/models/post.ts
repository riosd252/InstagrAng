import { Comment } from './comment';

export interface Post {
  userId: number;
  imageUrl: string;
  title: string;
  body: string;
  comments: Comment[] | null;
}
