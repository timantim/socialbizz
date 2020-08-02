import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core.component';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { SmartHeaderComponent } from './smart-header/smart-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SmartHeaderComponent, HeaderComponent, FooterComponent, SidebarComponent, CoreComponent],
  imports: [CommonModule, CoreRoutingModule, DashboardModule, RouterModule, SharedModule],
})
export class CoreModule {}
