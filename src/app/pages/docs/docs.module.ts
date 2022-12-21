import { NgModule } from '@angular/core';
import { DocsComponent } from './docs.component';
import { SharedModule } from '../../../settings/shared/shared.module'
import { RouterModule } from '@angular/router'
import { docsRouting } from './docs.routing'

@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(docsRouting)
  ]
})
export class DocsModule { }
