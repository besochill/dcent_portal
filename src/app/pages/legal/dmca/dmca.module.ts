import { NgModule } from '@angular/core';
import { DmcaComponent } from './dmca.component';
import { SharedModule } from "../../../../settings/shared/shared.module";

@NgModule({
  declarations: [
    DmcaComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DmcaModule { }
