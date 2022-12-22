import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  constructor(private httpService: HttpService,
    private router: Router) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.httpService.post(`${this.httpService.apiUrl}/auth/login`, credentials);
  }

  register(credentials: { username: string, firstname: string, lastname: string, email: string,  password: string }): Observable<any> {
    return this.httpService.post(`${this.httpService.apiUrl}/auth/register`, credentials);
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true
    }
    return this.isAuthenticated
  }

  logout() {
    localStorage.removeItem('token')
    this.isAuthenticated = false
    this.router.navigate(['/login'])
  }

  getToken () {
    return localStorage.getItem('token')
  }
}
