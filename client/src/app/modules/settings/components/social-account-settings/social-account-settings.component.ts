import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../shared/models/auth.model';

@Component({
  selector: 'app-social-account-settings',
  templateUrl: 'social-account-settings.component.html',
  styleUrls: ['social-account-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialAccountSettingsComponent {
  private authorizationPath =
    'https://api.instagram.com/oauth/authorize\n' +
    '?client_id=578272973077520\n' +
    '&redirect_uri=https://localhost:4200/\n\n' +
    '&scope=user_profile,user_media\n' +
    '&response_type=code';

  openInstagramAuthWindow() {
    window.open(this.authorizationPath);
  }
}
