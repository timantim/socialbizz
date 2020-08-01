import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {LoginGuard} from './shared/guards/login.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './core/core.module#CoreModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: './modules/auth/auth.module#AuthModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'not-found', component: PageNotFoundComponent
  },
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
