import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import {SharedModule} from "../../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ]
})
export class ProfileModule { }
