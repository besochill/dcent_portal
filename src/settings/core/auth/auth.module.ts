import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { AuthService } from './auth.service'

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [],
  exports: [],
  providers: [AuthService]
})
export class AuthModule { }
