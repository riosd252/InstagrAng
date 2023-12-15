import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';
import { PostsService } from 'src/app/services/posts.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  user!: AuthData | null;
  postImageUrl: string = '';
  previewImage: string = '';
  postDesc: string = '';

  constructor(
    private authSrv: AuthService,
    private postSrv: PostsService,
    private http: HttpClient,
    private route: Router
  ) {}

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
      likes: [],
      comments: [],
    };
    this.postSrv
      .newPost(newPost)
      .subscribe((resp) => this.route.navigate(['/home']));
  }

  updatePreviewImage() {
    this.http
      .get(this.postImageUrl, { responseType: 'blob' })
      .subscribe((response) => {
        if (response instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => {
            this.previewImage = reader.result as string;
          };
          reader.readAsDataURL(response);
        }
      });
  }
}
