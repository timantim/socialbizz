import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './pages/settings-page.component';
import {SmartSettingsComponent} from './components/smart/smart-settings.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [SettingsPageComponent, SmartSettingsComponent, UserSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
