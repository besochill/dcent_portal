import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService) {
  }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.logout();
    return false;
  }

  canLoad(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.logout();
    return false;
  }
}
