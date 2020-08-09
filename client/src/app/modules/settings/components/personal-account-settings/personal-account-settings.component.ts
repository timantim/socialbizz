import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../shared/models/auth.model';

@Component({
  selector: 'app-personal-account-settings',
  templateUrl: 'personal-account-settings.component.html',
  styleUrls: ['personal-account-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalAccountSettingsComponent {
  @Input() user: User;
  @Output() logout = new EventEmitter<void>();
}
