import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { RouterModule } from '@angular/router'
import { HttpService } from './http.service'

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule,
  ],
  providers: [HttpService],
  exports: [],
})
export class HttpModule { }
