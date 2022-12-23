import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  panels: any[] = [];
  selectedPanel: string = 'profile';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit() {
    this.panels = [
      {
        id         : 'profile',
        icon       : 'mat_solid:person_pin',
        title      : 'Profile Information',
        description: 'Avatar, cover, bio, location, etc.',
      },
      {
        id         : 'personal',
        icon       : 'mat_solid:lock',
        title      : 'Personal Information',
        description: 'First name, last name, email, etc.',
      },
      {
        id         : 'billing',
        icon       : 'mat_solid:credit_card',
        title      : 'Billing',
        description: 'Manage your subscription plan, payment method and billing information'
      },
      {
        id         : 'notifications',
        icon       : 'mat_solid:notifications_active',
        title      : 'Notifications',
        description: 'Manage when you\'ll be notified on which channels'
      },
      {
        id         : 'creator',
        icon       : 'mat_solid:live_tv',
        title      : 'Creator',
        description: 'Are you ready to go live?'
      },
      {
        id         : 'vendor',
        icon       : 'mat_solid:shopping_cart',
        title      : 'Vendor',
        description: 'Let\s shop until you drop'
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
