import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {userRouting} from "./user.routing";
import {ProfileModule} from "./profile/profile.module";

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(userRouting),
    ProfileModule,
  ]
})
export class UserModule { }
