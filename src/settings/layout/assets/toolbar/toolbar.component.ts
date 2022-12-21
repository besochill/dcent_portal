import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private authService: AuthService) { }

  $loggedIn () {
    return this.authService.isLoggedIn()
  }

  $logout () {
    this.authService.logout()
  }
}
