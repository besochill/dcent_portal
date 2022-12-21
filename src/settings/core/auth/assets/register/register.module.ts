import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../../../../shared/shared.module'
import { RouterModule } from '@angular/router'
import { registerRoute } from './register.routing'

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(registerRoute)
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
