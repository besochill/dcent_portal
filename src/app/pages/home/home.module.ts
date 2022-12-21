import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../settings/shared/shared.module'
import { RouterModule } from '@angular/router'
import { homeRouting } from './home.routing'

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRouting),
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
