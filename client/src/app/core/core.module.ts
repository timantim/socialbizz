import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core.component';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DashboardModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
