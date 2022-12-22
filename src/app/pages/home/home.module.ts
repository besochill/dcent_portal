import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../settings/shared/shared.module'
import { RouterModule } from '@angular/router'
import { homeRouting } from './home.routing'
import {MatRippleModule} from "@angular/material/core";
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
  ],
    imports: [
        SharedModule,
        RouterModule.forChild(homeRouting),
        MatRippleModule,
    ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
