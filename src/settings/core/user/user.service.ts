import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { AuthService } from '../auth/auth.service'
import {User} from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User;
  constructor(private httpService: HttpService,
    private authService: AuthService) { }

  getMe() {
    return this.httpService.get(`${this.httpService.apiUrl}/users/me`);
  }
}
