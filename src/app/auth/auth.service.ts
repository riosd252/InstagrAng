import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  apiURL = environment.apiUrl;
  private authSubj = new BehaviorSubject<null | AuthData>(null);
  user$ = this.authSubj.asObservable();
  user_!: AuthData;

  constructor(private http: HttpClient, private router: Router) {}

  logIn(data: { email: string; password: string }) {
    return this.http.post<AuthData>(`${this.apiURL}`, data).pipe(
      tap((logged) => {
        this.authSubj.next(logged);
        this.user_ = logged;
        localStorage.setItem('user', JSON.stringify(logged));
        this.router.navigate(['/home']);
      })
    );
  }

  restore() {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/']);
      return;
    }
    const userData: AuthData = JSON.parse(user);
    if (this.jwtHelper.isTokenExpired(userData.accessToken)) {
      this.router.navigate(['/']);
      return;
    }
    this.authSubj.next(userData);
  }

  signUp(user: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) {
    return this.http.post(`${this.apiURL}/signup`, user).pipe(
      tap(() => {
        this.router.navigate(['/']);
      })
    );
  }

  logOut() {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
