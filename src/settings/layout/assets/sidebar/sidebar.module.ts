import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../../../shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ]
})
export class SidebarModule { }
