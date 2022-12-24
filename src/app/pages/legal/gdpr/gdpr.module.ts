import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdprComponent } from './gdpr.component';
import {SharedModule} from "../../../../settings/shared/shared.module";

@NgModule({
  declarations: [
    GdprComponent
  ],
  imports: [
    SharedModule
  ]
})
export class GdprModule { }
