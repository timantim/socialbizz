import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../modules/dashboard/dashboard-page/dashboard-page.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../modules/dashboard/dashboard.module#DashboardModule',
        component: DashboardPageComponent
      },
      {
        path: 'library',
        loadChildren: '../modules/library/library.module#LibraryModule'
      },
      {
        path: 'calendar',
        loadChildren: '../modules/calendar/calendar.module#CalendarModule'
      },
      {
        path: 'analytics',
        loadChildren: '../modules/analytics/analytics.module#AnalyticsModule'
      },
      {
        path: 'settings',
        loadChildren: '../modules/settings/settings.module#SettingsModule'
      }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
