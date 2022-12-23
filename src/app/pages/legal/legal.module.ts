import { NgModule } from '@angular/core';
import { LegalComponent } from './legal.component';
import { SharedModule } from '../../../settings/shared/shared.module'
import { RouterModule } from '@angular/router'
import { legalRouting } from './legal.routing'
import { DataComponent } from "./data/data.component";
import { DmcaComponent } from "./dmca/dmca.component";
import { GdprComponent } from "./gdpr/gdpr.component";
import { MembershipComponent } from "./membership/membership.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { TermsComponent } from "./terms/terms.component";

@NgModule({
  declarations: [
    LegalComponent,
    DataComponent,
    DmcaComponent,
    GdprComponent,
    MembershipComponent,
    PrivacyComponent,
    TermsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(legalRouting)
  ]
})
export class LegalModule { }
