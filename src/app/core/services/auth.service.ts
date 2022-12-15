import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient, private router: Router
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  signUp(body) {
    return this.http.post(this.BASE_URL, body);
  }

  signIn(body) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  }

  isAuthenticated() {
    return this.token !== null;
  }

  saveUserInfo(res) {
    localStorage.setItem('username', res['username']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
    localStorage.setItem('userId', res['_id']);
  }
}
