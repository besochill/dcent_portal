import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Subject} from "rxjs";

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  panels: any[] = [];
  selectedPanel: string = 'terms';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit() {
    this.panels = [
      {
        id         : 'terms',
        icon       : 'heroicons_outline:scale',
        title      : 'Terms & Conditions',
        description: 'Only a guide to protect everyone.',
      },
      {
        id         : 'privacy',
        icon       : 'mat_outline:privacy_tip',
        title      : 'Privacy Policy',
        description: 'We help to protect your privacy.',
      },
      {
        id         : 'membership',
        icon       : 'mat_outline:card_membership',
        title      : 'Membership Policy',
        description: 'What we expect from you'
      },
      {
        id         : 'data',
        icon       : 'heroicons_outline:database',
        title      : 'Data Policy',
        description: 'How we handle your data.'
      },
      {
        id         : 'gdpr',
        icon       : 'mat_outline:phonelink_lock',
        title      : 'GDPR',
        description: 'How we handle your data under GDPR.'
      },
      {
        id         : 'dmca',
        icon       : 'mat_outline:copyright',
        title      : 'DMCA',
        description: 'How we handle your data under DMCA.'
      },
    ];
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  goToPanel(panel: string): void
  {
    this.selectedPanel = panel;

    // Close the drawer on 'over' mode
    if ( this.drawerMode === 'over' )
    {
      this.drawer.close();
    }
  }

  getPanelInfo(id: string): any {
    return this.panels.find(panel => panel.id === id);
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
