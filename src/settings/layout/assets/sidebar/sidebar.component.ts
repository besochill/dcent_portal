import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SidenavService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) {	}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
