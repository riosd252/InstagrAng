import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: AuthData | null;
  posts: Post[] = [];
  comments: Comment[] = [];
  isCollapsed = true;

  constructor(private authSrv: AuthService, private postSrv: PostsService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_user) => {
      this.user = _user;
    });

    this.postSrv.getPosts().subscribe((posts: Post[]) => {
      posts.reverse();
      this.posts = posts;
    });

    this.postSrv.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  edit(form: NgForm, postId: number) {
    const post: Post = form.value;
    this.postSrv.editPost(post, postId).subscribe((resp) => {
      if (resp) {
        location.reload();
      }
    });
  }

  newComment(comment: string, postId: number) {
    const newComment: Comment = {
      userId: this.user!.user.id,
      name: this.user!.user.name,
      surname: this.user!.user.surname,
      profilePictureUrl: this.user!.user.profileImageUrl,
      postId: postId,
      body: comment,
    };
    console.log(newComment);

    this.postSrv.postComment(newComment).subscribe((resp) => {
      if (resp) {
        location.reload();
      }
    });
  }
}
