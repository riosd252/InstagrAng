import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  user!: AuthData | null;

  constructor(private authSrv: AuthService, private postSrv: PostsService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_user) => {
      this.user = _user;
    });
  }

  createPost(imgUrl: string, desc: string) {
    const newPost: Post = {
      userId: this.user!.user.id,
      name: this.user!.user.name,
      surname: this.user!.user.surname,
      profilePictureUrl: this.user!.user.profileImageUrl,
      imageUrl: imgUrl,
      body: desc,
    };
    this.postSrv.newPost(newPost).subscribe();
  }
}
