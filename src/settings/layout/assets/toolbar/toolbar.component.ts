import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service'
import {BreakpointObserver} from "@angular/cdk/layout";
import {OverlayContainer} from "@angular/cdk/overlay";
import {UserService} from "../../../core/user/user.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  sidenav: any;
  toggleControl = new FormControl(false);

  constructor(public authService: AuthService,
              private observer: BreakpointObserver,
              private overlay: OverlayContainer,
              private usersService: UserService,
              private router: Router) { }

  $loggedIn () {
    return this.authService.isLoggedIn()
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'push';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  $logout () {
    this.authService.logout()
  }

  sidebarHandler() {
    this.sidenav.toggle();
  }
}
