import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: AuthData | null;
  posts: Post[] = [];

  constructor(private authSrv: AuthService, private postSrv: PostsService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_user) => {
      this.user = _user;

      this.postSrv.getPosts().subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    });
  }

  edit(form: NgForm, postId: number) {
    const post: Post = form.value;
    this.postSrv.editPost(post, postId).subscribe();
    location.reload();
  }
}
