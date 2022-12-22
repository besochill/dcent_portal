import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { IconModule } from './icon/icon.module'
import { AuthModule } from './auth/auth.module'
import {UserService} from "./user/user.service";

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    IconModule,
    AuthModule,
  ],
  exports: [
    IconModule,
    AuthModule,
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [UserService]
    }
  }
}
