import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../modules/dashboard/dashboard-page/dashboard-page.component';
import { CoreComponent } from './core.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

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
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
