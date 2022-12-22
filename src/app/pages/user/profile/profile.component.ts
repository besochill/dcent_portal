import { Component } from '@angular/core';
import {UserService} from "../../../../settings/core/user/user.service";
import {AuthService} from "../../../../settings/core/auth/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private userService: UserService,
              private authService: AuthService,) { }

  ngOnInit() {}
}
