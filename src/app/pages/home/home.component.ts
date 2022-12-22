import { Component } from '@angular/core'
import { AuthService } from '../../../settings/core/auth/auth.service'
import { UserService } from '../../../settings/core/user/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any
  constructor(private authService: AuthService,
    private userService: UserService) {}


  $loggedIn () {
    return this.authService.isLoggedIn()
  }
}
