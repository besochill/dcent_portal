import { Route } from '@angular/router';
import { LayoutComponent } from '../settings/layout/layout.component'
import { AuthGuard } from "../settings/core/auth/guards/auth.guard";

export const appRouting: Route[] = [
  // { path: 'login', redirectTo: '', pathMatch: 'full' },
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
      { path: 'login', loadChildren: () => import('../settings/core/auth/assets/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('../settings/core/auth/assets/register/register.module').then(m => m.RegisterModule) },
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: 'profile', loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule) },
    ],
  }
];

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}