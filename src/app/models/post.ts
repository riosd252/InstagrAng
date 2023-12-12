import { Comment } from './comment';

export interface Post {
  userId: number;
  picture: string;
  body: string;
  comments: Comment[] | null;
}
