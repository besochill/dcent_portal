import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'
import { UserService } from './user.service';
import { UserComponent } from './user.component'

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    UserComponent
  ],
  exports: [],
  providers: [UserService]
})
export class UserModule { }
