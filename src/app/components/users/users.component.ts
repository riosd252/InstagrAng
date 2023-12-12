import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user!: AuthData | null;

  constructor(private authSrv: AuthService, private httpClient: HttpClient) {}

  ngOnInit(): void {}
}

// export class UserComponent implements OnInit {
//   userId = 1;
//   user: any;
//   posts: any[] = []

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.dataService.getUser(this.userId).subscribe((user) =>{
//       this.user = user
//     })

//     this.dataService.getPostsByUser(this.userId).subscribe((posts) => {
//       this.posts = posts
//     })
//   }

// }
