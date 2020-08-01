import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {State} from '../../../../state';
import {Store} from '@ngrx/store';
import {UserLogin} from '../../state/auth.actions';
import {UserLoginInput} from '../../../../shared/models/auth.model';

@Component({
  selector: 'app-smart-login',
  template: `
      <app-login-form [form]="form" (registerEvent)="registerEvent.emit()"
                      (loginEvent)="onLogin()"></app-login-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartLoginComponent implements OnInit {
  form: FormGroup;
  @Output() registerEvent = new EventEmitter<void>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin(): void {
    this.store.dispatch(new UserLogin(this.form.value as UserLoginInput));
  }
}
