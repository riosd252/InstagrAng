import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: AuthData | null;
  post!: Post;
  apiUrl = environment.apiUrl;

  constructor(private authSrv: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_user) => {
      this.user = _user;
    });
  }

  postPost(form: NgForm) {
    this.post = form.value;
    this.post.userId = this.user!.user.id;
    console.log(this.post);

    this.http
      .post<[post: Post]>(
        `${this.apiUrl}/users/${this.user!.user.id}/posts`,
        this.post
      )
      .subscribe();
  }
}
