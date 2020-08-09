import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../shared/models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-account-settings',
  templateUrl: 'social-account-settings.component.html',
  styleUrls: ['social-account-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialAccountSettingsComponent {
  constructor(private router: Router) {}


  private authorizationPath =
    'https://api.instagram.com/oauth/authorize' +
    '?client_id=578272973077520' +
    '&redirect_uri=' + 'https://localhost:4200/settings' +
    '&scope=user_profile,user_media' +
    '&response_type=code';

  openInstagramAuthWindow() {
    this.router.navigate(['/']).then(() => {window.location.href = this.authorizationPath; });
  }
}
