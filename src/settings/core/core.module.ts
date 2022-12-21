import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { IconModule } from './icon/icon.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    IconModule,
    AuthModule,
    UserModule,
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: []
    }
  }
}
