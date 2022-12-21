import { NgModule } from '@angular/core';
import { MarketComponent } from './market.component';
import { SharedModule } from '../../../settings/shared/shared.module'
import { RouterModule } from '@angular/router'
import { marketRouting } from './market.routing'

@NgModule({
  declarations: [
    MarketComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(marketRouting)
  ]
})
export class MarketModule { }
