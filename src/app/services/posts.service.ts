import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Like } from '../models/like';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl = environment.apiUrl;
  mockUrl = environment.mockUrl;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.mockUrl}/posts`);
  }

  newPost(post: Post) {
    return this.http.post<Post>(`${this.mockUrl}/posts`, post);
  }

  editPost(post: Post, postId: number) {
    return this.http.put<Post>(`${this.mockUrl}/posts/${postId}`, post);
  }

  getComments() {
    return this.http.get<Comment[]>(`${this.mockUrl}/comments`);
  }

  postComment(comment: Comment) {
    return this.http.post<Comment>(`${this.mockUrl}/comments`, comment);
  }

  postLike(post: Post) {
    return this.http.put<Post>(`${this.mockUrl}/posts/${post.id}`, post);
  }
}
