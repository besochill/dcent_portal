import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../../../shared/shared.module'
import { RouterModule } from '@angular/router'
import { loginRoute } from './login.routing'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(loginRoute)
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
