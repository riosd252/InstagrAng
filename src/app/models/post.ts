import { Comment } from './comment';

export interface Post {
  userId: number;
  name: string;
  surname: string;
  profilePictureUrl: string;
  imageUrl: string;
  body: string;
  likes: number;
  id?: number;
}
