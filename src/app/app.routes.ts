import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/main-page/main-page.module').then(m => m.MainPageModule),
  },
  {
    path: 'drilldown/:symbol',
    loadChildren: () => import('./components/drilldown-page/drilldown-page.module').then(m => m.DrilldownPageModule),
  },
];
