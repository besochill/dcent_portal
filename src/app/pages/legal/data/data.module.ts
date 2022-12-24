import { NgModule } from '@angular/core';
import { DataComponent } from './data.component';
import { SharedModule } from "../../../../settings/shared/shared.module";

@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DataModule { }
