import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '../../../shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ]
})
export class ToolbarModule { }
