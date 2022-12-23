import {Route} from "@angular/router";
import {ProfileComponent} from "./profile.component";

export const profileRouting: Route[] = [
  { path: '',
    component: ProfileComponent,
  },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
];
