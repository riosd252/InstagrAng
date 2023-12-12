import { Comment } from './comment';

export interface Post {
  userId: number;
  title: string;
  body: string;
  comments: Comment[] | null;
}
