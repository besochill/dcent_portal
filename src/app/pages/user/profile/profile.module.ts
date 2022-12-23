import { NgModule } from '@angular/core';
import {SharedModule} from "../../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {profileRouting} from "./profile.route";
import {ProfileComponent} from "./profile.component";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(profileRouting)
  ]
})
export class ProfileModule { }
