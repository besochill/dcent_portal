import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../settings/core/user/user.service";
import {User} from "../../../settings/core/user/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMe().subscribe((user: User) => {
      this.user = user;
    });
  }
}

