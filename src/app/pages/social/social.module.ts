import { NgModule } from '@angular/core';
import { SocialComponent } from './social.component';
import { SharedModule } from '../../../settings/shared/shared.module'
import { RouterModule } from '@angular/router'
import { socialRouting } from './social.routing'

@NgModule({
  declarations: [
    SocialComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(socialRouting)
  ]
})
export class SocialModule { }
