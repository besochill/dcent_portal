import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRouting } from './app-routing';
import { CoreModule } from '../settings/core/core.module'
import { ThemeModule } from '../theme/theme.module'
import { LayoutModule } from '../settings/layout/layout.module'
import { SidenavService } from "../settings/layout/assets/sidebar/sidebar.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouting),
    CoreModule.forRoot(),
    ThemeModule,
    LayoutModule,
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
