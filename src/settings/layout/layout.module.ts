import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module'
import { ToolbarModule } from './assets/toolbar/toolbar.module'
import { SidebarModule } from './assets/sidebar/sidebar.module'


const layoutAssets = [
  ToolbarModule,
  SidebarModule,
];
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    ...layoutAssets,
  ],
  exports: [
    LayoutComponent,
    ...layoutAssets
  ],
})
export class LayoutModule { }
