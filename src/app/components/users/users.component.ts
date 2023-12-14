import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user!: User;
  userPosts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private userSrv: UsersService,
    private postSrv: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = +param['id'];
      this.userSrv.getUser(id).subscribe((resp) => {
        this.user = resp;
        this.postSrv.getPosts().subscribe((resp) => {
          const allPosts = resp;
          allPosts.forEach((post) => {
            if (post.userId === this.user.id) {
              this.userPosts.unshift(post);
            }
          });
        });
      });
    });
  }
}
