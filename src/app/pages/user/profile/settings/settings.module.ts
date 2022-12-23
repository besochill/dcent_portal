import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SharedModule } from "../../../../../settings/shared/shared.module";
import { RouterModule } from "@angular/router";
import { settingsRouting } from "./settings.routing";
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    SettingsComponent,
    PersonalSettingsComponent,
    ProfileSettingsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(settingsRouting)
  ]
})
export class SettingsModule { }
