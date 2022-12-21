import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService,
    private authService: AuthService) { }

  async getUsers() {
    return this.httpService.get(`${this.httpService.apiUrl}/user`)
  }

}
