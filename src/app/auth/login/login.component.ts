import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authSrv.restore();
  }

  logIn(form: NgForm) {
    try {
      this.authSrv.logIn(form.value).subscribe();
    } catch (error) {
      alert('Could not complete request. Please try again.');
      this.router.navigate(['/']);
    }
  }
}
