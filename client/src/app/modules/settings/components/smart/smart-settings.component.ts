import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../../state';
import {User} from '../../../../shared/models/auth.model';
import {Observable} from 'rxjs';
import {selectUser} from '../../../auth/state/auth.reducer';
import {LogoutUser} from '../../../auth/state/auth.actions';

@Component({
  selector: 'app-smart-settings',
  template: `
    <app-user-settings [user]="user$ | async" (logout)="logout()"></app-user-settings>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartSettingsComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser());
  }

  logout(): void {
    this.store.dispatch(new LogoutUser());
  }
}
