import { Route } from '@angular/router';
import { LayoutComponent } from '../settings/layout/layout.component'

export const appRouting: Route[] = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'docs', loadChildren: () => import('./pages/docs/docs.module').then(m => m.DocsModule) },
      { path: 'legal', loadChildren: () => import('./pages/legal/legal.module').then(m => m.LegalModule) },
      { path: 'market', loadChildren: () => import('./pages/market/market.module').then(m => m.MarketModule) },
      { path: 'social', loadChildren: () => import('./pages/social/social.module').then(m => m.SocialModule) },
    ]
  },
  {
    path: '',
    // component: LayoutComponent,
    children: [
      // { path: 'login', loadChildren: () => import('../settings/core/auth/assets/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('../settings/core/auth/assets/register/register.module').then(m => m.RegisterModule) },
    ]
  }
];
