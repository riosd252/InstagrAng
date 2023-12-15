import { Comment } from './comment';
import { Like } from './like';

export interface Post {
  userId: number;
  name: string;
  surname: string;
  profilePictureUrl: string;
  imageUrl: string;
  body: string;
  likes: Like[];
  comments: Comment[];
  id?: number;
}
