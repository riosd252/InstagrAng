import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  newPost(post: Post) {
    return this.http.post<Post>(`${this.apiUrl}/posts`, post);
  }

  editPost(post: Post, postId: number) {
    return this.http.put<Post>(`${this.apiUrl}/posts/${postId}`, post);
  }
}
