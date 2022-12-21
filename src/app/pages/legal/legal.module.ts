import { NgModule } from '@angular/core';
import { LegalComponent } from './legal.component';
import { SharedModule } from '../../../settings/shared/shared.module'
import { RouterModule } from '@angular/router'
import { legalRouting } from './legal.routing'

@NgModule({
  declarations: [
    LegalComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(legalRouting)
  ]
})
export class LegalModule { }
