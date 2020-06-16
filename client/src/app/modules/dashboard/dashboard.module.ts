import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
