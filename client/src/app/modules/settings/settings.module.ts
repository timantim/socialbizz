import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './pages/settings-page.component';
import { SmartSettingsComponent } from './components/smart/smart-settings.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SharedModule } from '../../shared/shared.module';
import { PersonalAccountSettingsComponent } from './components/personal-account-settings/personal-account-settings.component';
import { SocialAccountSettingsComponent } from './components/social-account-settings/social-account-settings.component';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './state/settings.effects';

@NgModule({
  declarations: [
    SettingsPageComponent,
    SmartSettingsComponent,
    UserSettingsComponent,
    PersonalAccountSettingsComponent,
    SocialAccountSettingsComponent,
  ],
  imports: [CommonModule, SettingsRoutingModule, SharedModule, EffectsModule.forFeature([SettingsEffects])],
})
export class SettingsModule {}
